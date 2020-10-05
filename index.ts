import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { QueryLangVisitor } from './QueryLangVisitor';
import { QueryLangParser, WholeQueryContext, TextQueryContext, OperatorEqualityContext, ValueContext, CommanderIdentityQueryContext, OperatorComparisonContext, OperatorOrderContext, ColorValueContext, NameQueryContext, PowerQueryContext, NumberValueContext, ToughnessQueryContext, CmcQueryContext, SetQueryContext, TypeQueryContext } from './QueryLangParser';
import { QueryLangLexer } from './QueryLangLexer';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { RuleNode } from 'antlr4ts/tree/RuleNode';

export const TEXT_QUERY_ID = 'text-query';
// export const COLOR_QUERY_ID = 'color-query';
export const NAME_QUERY_ID = 'name-query';
export const CONVERTED_MANACOST_QUERY_ID = 'converted-manacost-query';
export const COMMANDER_IDENTITY_QUERY_ID = 'commander-identity-query';
export const POWER_QUERY_ID = 'power-query';
export const TOUGHNESS_QUERY_ID = 'toughness-query';
export const SET_QUERY_ID = 'set-query';
export const TYPE_QUERY_ID = 'type-query';
export const TEXT_VALUE_ID = 'text-value';
export const COLOR_VALUE_ID = 'color-value';
export const NUMBER_VALUE_ID = 'number-value';

export const COLOR_GREEN = 'G';
export const COLOR_BLUE = 'U';
export const COLOR_RED = 'R';
export const COLOR_WHITE = 'W';
export const COLOR_BLACK = 'B';

export const ALL_COLORS = [
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_RED,
  COLOR_WHITE,
]

export type TextValue = {
  type: typeof TEXT_VALUE_ID,
  value: string,
  isExact: boolean,
}

export type Colors = (typeof COLOR_GREEN
  | typeof COLOR_RED
  | typeof COLOR_WHITE
  | typeof COLOR_BLACK
  | typeof COLOR_BLUE)[]

export type ColorValue = {
  type: typeof COLOR_VALUE_ID,
  value: Colors
}

export type NumberValue = {
  type: typeof NUMBER_VALUE_ID,
  value: number,
}

export const OPERATOR_EQ = 'EQ';
export const OPERATOR_NEQ = 'NEQ';
export const OPERATOR_LT = 'LT';
export const OPERATOR_LTE = 'LTE';
export const OPERATOR_GT = 'GT';
export const OPERATOR_GTE = 'GTE';

export type EqualityOperator = typeof OPERATOR_EQ | typeof OPERATOR_NEQ;
export type OrderOperator = typeof OPERATOR_GT
  | typeof OPERATOR_GTE
  | typeof OPERATOR_LT
  | typeof OPERATOR_LTE;

export type ComparisonOperator = EqualityOperator | OrderOperator;

type AstNode<Type, Value = void, Operator = void> = {
  type: Type,
  value: Value,
  operator: Operator
}

export type TextQuery = AstNode<typeof TEXT_QUERY_ID, TextValue, EqualityOperator>;
export type CommanderIdentityQuery = AstNode<typeof COMMANDER_IDENTITY_QUERY_ID, ColorValue, ComparisonOperator>;
export type NameQuery = AstNode<typeof NAME_QUERY_ID, TextValue, EqualityOperator>;
export type PowerQuery = AstNode<typeof POWER_QUERY_ID, NumberValue, ComparisonOperator>;
export type ToughnessQuery = AstNode<typeof TOUGHNESS_QUERY_ID, NumberValue, ComparisonOperator>;
export type ConvertedManaCostQuery = AstNode<typeof CONVERTED_MANACOST_QUERY_ID, NumberValue, ComparisonOperator>;
export type SetQuery = AstNode<typeof SET_QUERY_ID, TextValue, EqualityOperator>;
export type TypeQuery = AstNode<typeof TYPE_QUERY_ID, TextValue, EqualityOperator>;

export type ResultAstNodes = (
  TextQuery
  | TypeQuery
  | CommanderIdentityQuery
  | NameQuery
  | PowerQuery
  | ToughnessQuery
  | ConvertedManaCostQuery
  | SetQuery
)[]

// Helper functions that dont return AstNodes

const visitOperatorEquality = (ctx: OperatorEqualityContext): EqualityOperator => {
  if (ctx.operatorEq()) {
    return OPERATOR_EQ;
  }
  if (ctx.operatorNeq()) {
    return OPERATOR_NEQ;
  }
  throw new Error('unmatched equality operator:' + ctx.text);
}

const visitOperatorOrder = (ctx: OperatorOrderContext): OrderOperator => {
  if (ctx.operatorGt()) {
    return OPERATOR_GT;
  }
  if (ctx.operatorGte()) {
    return OPERATOR_GTE;
  }
  if (ctx.operatorLt()) {
    return OPERATOR_LT;
  }
  if (ctx.operatorLte()) {
    return OPERATOR_LTE;
  }
  throw new Error('unmatched order operator:' + ctx.text);
}

const visitOperatorComparison = (ctx: OperatorComparisonContext): ComparisonOperator => {
  const operatorEqualityContext = ctx.operatorEquality();
  if (operatorEqualityContext) {
    return visitOperatorEquality(operatorEqualityContext);
  }

  const operatorOrderContext = ctx.operatorOrder();

  if (operatorOrderContext) {
    return visitOperatorOrder(operatorOrderContext)
  }

  throw new Error('unmatched operator:' + ctx.text);
}

const visitValue = (ctx: ValueContext): TextValue => {
  const exactValue = ctx.QUOTED_VALUE()
  if (exactValue) {
    return {
      type: TEXT_VALUE_ID,
      isExact: true,
      // omit quotes at the beginning and end
      value: ctx.text.substr(1, ctx.text.length),
    }
  }

  return {
    type: TEXT_VALUE_ID,
    isExact: false,
    value: ctx.text,
  }
}

const visitNumberValue = (ctx: NumberValueContext): NumberValue => {
  const value = parseInt(ctx.NUMBER_VALUE().text, 10);
  return {
    type: NUMBER_VALUE_ID,
    value,
  }
}

const visitColorValue = (ctx: ColorValueContext): ColorValue => {
  // TODO - refactor this
  const value = ctx.text
    .toUpperCase()
    .replace('GREEN', 'G')
    .replace('RED', 'R')
    .replace('BLACK', 'B')
    .replace('BLUE', 'U')
    .replace('WHITE', 'W')
    .split('') as Colors;
  return {
    type: COLOR_VALUE_ID,
    value,
  }
}

class Visitor extends AbstractParseTreeVisitor<ResultAstNodes> implements QueryLangVisitor<ResultAstNodes>{
  visitChildren(node: RuleNode): ResultAstNodes {
    const n = node.childCount;
    let result: ResultAstNodes = []
    for (let i = 0; i < n; i++) {
      const child = node.getChild(i);
      const childResult = child.accept(this);
      result = result.concat(Array.isArray(childResult) ? childResult : [childResult])
    }
    return result;
  }

  defaultResult() {
    return []
  }

  visitTextQuery(ctx: TextQueryContext): TextQuery[] {
    const operatorEqualityContext = ctx.operatorEquality();

    // value always needs to be defined, check grammar
    const value = visitValue(ctx.value() as ValueContext);

    if (!operatorEqualityContext) {
      return [{
        type: TEXT_QUERY_ID,
        value,
        operator: OPERATOR_EQ,
      }]
    }

    const operator = visitOperatorEquality(operatorEqualityContext);

    return [{
      type: TEXT_QUERY_ID,
      value,
      operator,
    }]
  }

  visitSetQuery(ctx: SetQueryContext): SetQuery[] {
    const operator = visitOperatorEquality(ctx.operatorEquality());
    const value = visitValue(ctx.value());
    return [{
      type: SET_QUERY_ID,
      value,
      operator,
    }]
  }

  visitCommanderIdentityQuery(ctx: CommanderIdentityQueryContext): CommanderIdentityQuery[] {
    const operator = visitOperatorComparison(ctx.operatorComparison());
    const value = visitColorValue(ctx.colorValue());
    return [{
      type: COMMANDER_IDENTITY_QUERY_ID,
      value,
      operator,
    }]
  }

  visitNameQuery(ctx: NameQueryContext): NameQuery[] {
    const operator = visitOperatorEquality(ctx.operatorEquality());
    const value = visitValue(ctx.value());

    return [{
      type: NAME_QUERY_ID,
      value,
      operator,
    }]
  }

  visitTypeQuery(ctx: TypeQueryContext): TypeQuery[] {
    const operator = visitOperatorEquality(ctx.operatorEquality());
    const value = visitValue(ctx.value());

    return [{
      type: TYPE_QUERY_ID,
      value,
      operator,
    }]
  }

  visitPowerQuery(ctx: PowerQueryContext): PowerQuery[] {
    const operator = visitOperatorComparison(ctx.operatorComparison());
    const value = visitNumberValue(ctx.numberValue());

    return [{
      type: POWER_QUERY_ID,
      value,
      operator,
    }]
  }

  visitToughnessQuery(ctx: ToughnessQueryContext): ToughnessQuery[] {
    const operator = visitOperatorComparison(ctx.operatorComparison());
    const value = visitNumberValue(ctx.numberValue());

    return [{
      type: TOUGHNESS_QUERY_ID,
      value,
      operator,
    }]
  }

  visitCmcQuery(ctx: CmcQueryContext): ConvertedManaCostQuery[] {
    const operator = visitOperatorComparison(ctx.operatorComparison());
    const value = visitNumberValue(ctx.numberValue());

    return [{
      type: CONVERTED_MANACOST_QUERY_ID,
      value,
      operator,
    }]
  }

  visitWholeQuery(ctx: WholeQueryContext) {
    return this.visitChildren(ctx);
  }
}


export const generateAst = (input: string) => {
  const inputStream = new ANTLRInputStream(input);
  const lexer = new QueryLangLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);

  /*
  let i = 1;
  let current;
  while (true) {
    // look ahead
    current = tokenStream.LA(i)
    // const token = tokenStream.LT(i)
    console.log('tokens:', current, QueryLangParser.VOCABULARY.getSymbolicName(current))
    i++;
    // -1 => EOF
    if (current == -1) {
      break;
    }
  }
  */
  const parser = new QueryLangParser(tokenStream);
  const visitor = new Visitor();
  const tree = parser.wholeQuery();

  return tree.accept(visitor);
}
