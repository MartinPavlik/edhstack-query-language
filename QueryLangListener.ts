// Generated from QueryLang.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { WholeQueryContext } from "./QueryLangParser";
import { QueryContext } from "./QueryLangParser";
import { NumberOfQueryContext } from "./QueryLangParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `QueryLangParser`.
 */
export interface QueryLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `QueryLangParser.wholeQuery`.
	 * @param ctx the parse tree
	 */
	enterWholeQuery?: (ctx: WholeQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.wholeQuery`.
	 * @param ctx the parse tree
	 */
	exitWholeQuery?: (ctx: WholeQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.numberOfQuery`.
	 * @param ctx the parse tree
	 */
	enterNumberOfQuery?: (ctx: NumberOfQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.numberOfQuery`.
	 * @param ctx the parse tree
	 */
	exitNumberOfQuery?: (ctx: NumberOfQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.typeQuery`.
	 * @param ctx the parse tree
	 */
	enterTypeQuery?: (ctx: TypeQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.typeQuery`.
	 * @param ctx the parse tree
	 */
	exitTypeQuery?: (ctx: TypeQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.similarityQuery`.
	 * @param ctx the parse tree
	 */
	enterSimilarityQuery?: (ctx: SimilarityQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.similarityQuery`.
	 * @param ctx the parse tree
	 */
	exitSimilarityQuery?: (ctx: SimilarityQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.cmcQuery`.
	 * @param ctx the parse tree
	 */
	enterCmcQuery?: (ctx: CmcQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.cmcQuery`.
	 * @param ctx the parse tree
	 */
	exitCmcQuery?: (ctx: CmcQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.nameQuery`.
	 * @param ctx the parse tree
	 */
	enterNameQuery?: (ctx: NameQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.nameQuery`.
	 * @param ctx the parse tree
	 */
	exitNameQuery?: (ctx: NameQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.powerQuery`.
	 * @param ctx the parse tree
	 */
	enterPowerQuery?: (ctx: PowerQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.powerQuery`.
	 * @param ctx the parse tree
	 */
	exitPowerQuery?: (ctx: PowerQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.toughnessQuery`.
	 * @param ctx the parse tree
	 */
	enterToughnessQuery?: (ctx: ToughnessQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.toughnessQuery`.
	 * @param ctx the parse tree
	 */
	exitToughnessQuery?: (ctx: ToughnessQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.commanderIdentityQuery`.
	 * @param ctx the parse tree
	 */
	enterCommanderIdentityQuery?: (ctx: CommanderIdentityQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.commanderIdentityQuery`.
	 * @param ctx the parse tree
	 */
	exitCommanderIdentityQuery?: (ctx: CommanderIdentityQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.colorQuery`.
	 * @param ctx the parse tree
	 */
	enterColorQuery?: (ctx: ColorQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.colorQuery`.
	 * @param ctx the parse tree
	 */
	exitColorQuery?: (ctx: ColorQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.setNameQuery`.
	 * @param ctx the parse tree
	 */
	enterSetNameQuery?: (ctx: SetNameQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.setNameQuery`.
	 * @param ctx the parse tree
	 */
	exitSetNameQuery?: (ctx: SetNameQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.setQuery`.
	 * @param ctx the parse tree
	 */
	enterSetQuery?: (ctx: SetQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.setQuery`.
	 * @param ctx the parse tree
	 */
	exitSetQuery?: (ctx: SetQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.textQuery`.
	 * @param ctx the parse tree
	 */
	enterTextQuery?: (ctx: TextQueryContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.textQuery`.
	 * @param ctx the parse tree
	 */
	exitTextQuery?: (ctx: TextQueryContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.operatorComparison`.
	 * @param ctx the parse tree
	 */
	enterOperatorComparison?: (ctx: OperatorComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.operatorComparison`.
	 * @param ctx the parse tree
	 */
	exitOperatorComparison?: (ctx: OperatorComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.operatorEquality`.
	 * @param ctx the parse tree
	 */
	enterOperatorEquality?: (ctx: OperatorEqualityContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.operatorEquality`.
	 * @param ctx the parse tree
	 */
	exitOperatorEquality?: (ctx: OperatorEqualityContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.operatorOrder`.
	 * @param ctx the parse tree
	 */
	enterOperatorOrder?: (ctx: OperatorOrderContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.operatorOrder`.
	 * @param ctx the parse tree
	 */
	exitOperatorOrder?: (ctx: OperatorOrderContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.operatorEq`.
	 * @param ctx the parse tree
	 */
	enterOperatorEq?: (ctx: OperatorEqContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.operatorEq`.
	 * @param ctx the parse tree
	 */
	exitOperatorEq?: (ctx: OperatorEqContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.operatorLt`.
	 * @param ctx the parse tree
	 */
	enterOperatorLt?: (ctx: OperatorLtContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.operatorLt`.
	 * @param ctx the parse tree
	 */
	exitOperatorLt?: (ctx: OperatorLtContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.operatorLte`.
	 * @param ctx the parse tree
	 */
	enterOperatorLte?: (ctx: OperatorLteContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.operatorLte`.
	 * @param ctx the parse tree
	 */
	exitOperatorLte?: (ctx: OperatorLteContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.operatorGt`.
	 * @param ctx the parse tree
	 */
	enterOperatorGt?: (ctx: OperatorGtContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.operatorGt`.
	 * @param ctx the parse tree
	 */
	exitOperatorGt?: (ctx: OperatorGtContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.operatorGte`.
	 * @param ctx the parse tree
	 */
	enterOperatorGte?: (ctx: OperatorGteContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.operatorGte`.
	 * @param ctx the parse tree
	 */
	exitOperatorGte?: (ctx: OperatorGteContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.operatorNeq`.
	 * @param ctx the parse tree
	 */
	enterOperatorNeq?: (ctx: OperatorNeqContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.operatorNeq`.
	 * @param ctx the parse tree
	 */
	exitOperatorNeq?: (ctx: OperatorNeqContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.numberValue`.
	 * @param ctx the parse tree
	 */
	enterNumberValue?: (ctx: NumberValueContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.numberValue`.
	 * @param ctx the parse tree
	 */
	exitNumberValue?: (ctx: NumberValueContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.colorValue`.
	 * @param ctx the parse tree
	 */
	enterColorValue?: (ctx: ColorValueContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.colorValue`.
	 * @param ctx the parse tree
	 */
	exitColorValue?: (ctx: ColorValueContext) => void;

	/**
	 * Enter a parse tree produced by `QueryLangParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `QueryLangParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

