// Generated from QueryLang.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { WholeQueryContext } from "./QueryLangParser";
import { QueryContext } from "./QueryLangParser";
import { TypeQueryContext } from "./QueryLangParser";
import { SimilarityQueryContext } from "./QueryLangParser";
import { CmcQueryContext } from "./QueryLangParser";
import { NameQueryContext } from "./QueryLangParser";
import { PowerQueryContext } from "./QueryLangParser";
import { ToughnessQueryContext } from "./QueryLangParser";
import { CommanderIdentityQueryContext } from "./QueryLangParser";
import { ColorQueryContext } from "./QueryLangParser";
import { SetNameQueryContext } from "./QueryLangParser";
import { SetQueryContext } from "./QueryLangParser";
import { TextQueryContext } from "./QueryLangParser";
import { OperatorComparisonContext } from "./QueryLangParser";
import { OperatorEqualityContext } from "./QueryLangParser";
import { OperatorOrderContext } from "./QueryLangParser";
import { OperatorEqContext } from "./QueryLangParser";
import { OperatorLtContext } from "./QueryLangParser";
import { OperatorLteContext } from "./QueryLangParser";
import { OperatorGtContext } from "./QueryLangParser";
import { OperatorGteContext } from "./QueryLangParser";
import { OperatorNeqContext } from "./QueryLangParser";
import { NumberValueContext } from "./QueryLangParser";
import { ColorValueContext } from "./QueryLangParser";
import { ValueContext } from "./QueryLangParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `QueryLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface QueryLangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `QueryLangParser.wholeQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWholeQuery?: (ctx: WholeQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.typeQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeQuery?: (ctx: TypeQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.similarityQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimilarityQuery?: (ctx: SimilarityQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.cmcQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmcQuery?: (ctx: CmcQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.nameQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameQuery?: (ctx: NameQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.powerQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerQuery?: (ctx: PowerQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.toughnessQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToughnessQuery?: (ctx: ToughnessQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.commanderIdentityQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommanderIdentityQuery?: (ctx: CommanderIdentityQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.colorQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColorQuery?: (ctx: ColorQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.setNameQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetNameQuery?: (ctx: SetNameQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.setQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuery?: (ctx: SetQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.textQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextQuery?: (ctx: TextQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.operatorComparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorComparison?: (ctx: OperatorComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.operatorEquality`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorEquality?: (ctx: OperatorEqualityContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.operatorOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorOrder?: (ctx: OperatorOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.operatorEq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorEq?: (ctx: OperatorEqContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.operatorLt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorLt?: (ctx: OperatorLtContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.operatorLte`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorLte?: (ctx: OperatorLteContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.operatorGt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorGt?: (ctx: OperatorGtContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.operatorGte`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorGte?: (ctx: OperatorGteContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.operatorNeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorNeq?: (ctx: OperatorNeqContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.numberValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberValue?: (ctx: NumberValueContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.colorValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColorValue?: (ctx: ColorValueContext) => Result;

	/**
	 * Visit a parse tree produced by `QueryLangParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

