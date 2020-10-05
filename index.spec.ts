import { expect } from 'chai';
import { generateAst, COMMANDER_IDENTITY_QUERY_ID } from './index';

describe('generation of AST', () => {
  const input = "cmd < red";

  const operatorMap = {
    '>=': 'GTE',
    '>': 'GT',
    '=': 'EQ',
    '!=': 'NEQ',
    '<=': 'LTE',
    '<': 'LT',
    'GTE': 'GTE',
    'GT': 'GT',
    'LT': 'LT',
    'LTE': 'LTE',
    'EQ': 'EQ',
    'NEQ': 'NEQ',
    'EQUALS': 'EQ',
    'TO EQUAL': 'EQ',
    'TO EQUALS': 'EQ',
    'TO NOT EQUAL': 'NEQ',
    'NOT EQUALS': 'NEQ',
  }

  Object.entries(operatorMap).forEach(([operator, expected]) => {
    it('handles operator: ' + operator, () => {
      const query = `cmd ${operator} r`;

      const astNode = generateAst(query)[0];

      expect(astNode.type).to.equal(COMMANDER_IDENTITY_QUERY_ID);
      expect(astNode.operator).to.equal(expected, 'failed for: ' + query)
      expect(astNode.value.value).to.deep.equal(['R'], 'failed for: ' + query)
    })
  })

  it('should work for single color query (full color name)', () => {
    const input = "cmd < red";

    const expected = [
      {
        type: 'commander-identity-query',
        value: { type: 'color-value', value: ['R'] },
        operator: 'LT'
      },
    ]

    expect(generateAst(input)).to.deep.equal(expected);
  })
  it('should work for single color query', () => {
    const input = "cmd < r";

    const expected = [
      {
        type: 'commander-identity-query',
        value: { type: 'color-value', value: ['R'] },
        operator: 'LT'
      },
    ]

    expect(generateAst(input)).to.deep.equal(expected);
  })
  it('should work for multiple color query', () => {
    const input = "cmd < rg";

    const expected = [
      {
        type: 'commander-identity-query',
        value: { type: 'color-value', value: ['R', 'G'] },
        operator: 'LT'
      },
    ]
    expect(generateAst(input)).to.deep.equal(expected);
  })
  it('should handle "escaped" values correctly', () => {
    const input = 'name = "Arguel\'s Blood Fast // Temple of Aclazotz"';

    const expected = [
      {
        type: 'name-query',
        value:
        {
          type: 'text-value',
          isExact: true,
          value: 'Arguel\'s Blood Fast // Temple of Aclazotz'
        },
        operator: 'EQ'
      },
    ]

    expect(generateAst(input)).to.deep.equal(expected);
  })
  it('should work for complex queries', () => {
    const input = "t:creature set = znr cmc > 3 pow > 1 tou < 10 cmd < r name = \"Niv-Mizzet, the Firemind\" draw discard";
    const expected = [
      {
        type: 'type-query',
        value: { type: 'text-value', isExact: false, value: 'creature' },
        operator: 'EQ'
      },
      {
        type: 'set-query',
        value: { type: 'text-value', isExact: false, value: 'znr' },
        operator: 'EQ'
      },
      {
        type: 'converted-manacost-query',
        value: { type: 'number-value', value: 3 },
        operator: 'GT'
      },
      {
        type: 'power-query',
        value: { type: 'number-value', value: 1 },
        operator: 'GT'
      },
      {
        type: 'toughness-query',
        value: { type: 'number-value', value: 10 },
        operator: 'LT'
      },
      {
        type: 'commander-identity-query',
        value: { type: 'color-value', value: ['R'] },
        operator: 'LT'
      },
      {
        type: 'name-query',
        value:
        {
          type: 'text-value',
          isExact: true,
          value: 'Niv-Mizzet, the Firemind'
        },
        operator: 'EQ'
      },
      {
        type: 'text-query',
        value: { type: 'text-value', isExact: false, value: 'draw' },
        operator: 'EQ'
      },
      {
        type: 'text-query',
        value: { type: 'text-value', isExact: false, value: 'discard' },
        operator: 'EQ'
      }
    ]

    expect(generateAst(input)).to.deep.equal(expected);
  })
})