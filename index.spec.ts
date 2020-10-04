import { expect } from 'chai';
import { generateAst } from './index';

describe('generation of AST', () => {
  it('should work', () => {
    const input = "t:creature set = znr cmc > 3 pow > 1 tou < 10 cmd < rgu name = \"Niv-Mizzet, the Firemind\" draw discard";
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
        value: { type: 'color-value', value: ['R', 'G', 'U'] },
        operator: 'LT'
      },
      {
        type: 'name-query',
        value:
        {
          type: 'text-value',
          isExact: true,
          value: 'Niv-Mizzet, the Firemind"'
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