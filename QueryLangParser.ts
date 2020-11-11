// Generated from QueryLang.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { QueryLangListener } from "./QueryLangListener";
import { QueryLangVisitor } from "./QueryLangVisitor";


export class QueryLangParser extends Parser {
	public static readonly TYPE_KEYWORD = 1;
	public static readonly POWER_KEYWORD = 2;
	public static readonly TOUGHNESS_KEYWORD = 3;
	public static readonly COLOR_KEYWORD = 4;
	public static readonly SET_NAME_KEYWORD = 5;
	public static readonly SET_KEYWORD = 6;
	public static readonly NAME_KEYWORD = 7;
	public static readonly CMC_KEYWORD = 8;
	public static readonly TEXT_KEYWORD = 9;
	public static readonly COMMANDER_IDENTITY_KEYWORD = 10;
	public static readonly NUMBER_VALUE = 11;
	public static readonly OPERATOR_EQ = 12;
	public static readonly OPERATOR_LT = 13;
	public static readonly OPERATOR_LTE = 14;
	public static readonly OPERATOR_GT = 15;
	public static readonly OPERATOR_GTE = 16;
	public static readonly OPERATOR_NEQ = 17;
	public static readonly WS = 18;
	public static readonly NEWLINE = 19;
	public static readonly VALUE = 20;
	public static readonly QUOTED_VALUE = 21;
	public static readonly RULE_wholeQuery = 0;
	public static readonly RULE_query = 1;
	public static readonly RULE_typeQuery = 2;
	public static readonly RULE_cmcQuery = 3;
	public static readonly RULE_nameQuery = 4;
	public static readonly RULE_powerQuery = 5;
	public static readonly RULE_toughnessQuery = 6;
	public static readonly RULE_commanderIdentityQuery = 7;
	public static readonly RULE_colorQuery = 8;
	public static readonly RULE_setNameQuery = 9;
	public static readonly RULE_setQuery = 10;
	public static readonly RULE_textQuery = 11;
	public static readonly RULE_operatorComparison = 12;
	public static readonly RULE_operatorEquality = 13;
	public static readonly RULE_operatorOrder = 14;
	public static readonly RULE_operatorEq = 15;
	public static readonly RULE_operatorLt = 16;
	public static readonly RULE_operatorLte = 17;
	public static readonly RULE_operatorGt = 18;
	public static readonly RULE_operatorGte = 19;
	public static readonly RULE_operatorNeq = 20;
	public static readonly RULE_numberValue = 21;
	public static readonly RULE_colorValue = 22;
	public static readonly RULE_value = 23;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"wholeQuery", "query", "typeQuery", "cmcQuery", "nameQuery", "powerQuery", 
		"toughnessQuery", "commanderIdentityQuery", "colorQuery", "setNameQuery", 
		"setQuery", "textQuery", "operatorComparison", "operatorEquality", "operatorOrder", 
		"operatorEq", "operatorLt", "operatorLte", "operatorGt", "operatorGte", 
		"operatorNeq", "numberValue", "colorValue", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TYPE_KEYWORD", "POWER_KEYWORD", "TOUGHNESS_KEYWORD", "COLOR_KEYWORD", 
		"SET_NAME_KEYWORD", "SET_KEYWORD", "NAME_KEYWORD", "CMC_KEYWORD", "TEXT_KEYWORD", 
		"COMMANDER_IDENTITY_KEYWORD", "NUMBER_VALUE", "OPERATOR_EQ", "OPERATOR_LT", 
		"OPERATOR_LTE", "OPERATOR_GT", "OPERATOR_GTE", "OPERATOR_NEQ", "WS", "NEWLINE", 
		"VALUE", "QUOTED_VALUE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(QueryLangParser._LITERAL_NAMES, QueryLangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return QueryLangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "QueryLang.g4"; }

	// @Override
	public get ruleNames(): string[] { return QueryLangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return QueryLangParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(QueryLangParser._ATN, this);
	}
	// @RuleVersion(0)
	public wholeQuery(): WholeQueryContext {
		let _localctx: WholeQueryContext = new WholeQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, QueryLangParser.RULE_wholeQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.query();
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === QueryLangParser.WS) {
				{
				{
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 49;
					this.match(QueryLangParser.WS);
					}
					}
					this.state = 52;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === QueryLangParser.WS);
				this.state = 54;
				this.wholeQuery();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 60;
			this.match(QueryLangParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, QueryLangParser.RULE_query);
		try {
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 62;
				this.nameQuery();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.typeQuery();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 64;
				this.setNameQuery();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 65;
				this.setQuery();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 66;
				this.cmcQuery();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 67;
				this.colorQuery();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 68;
				this.commanderIdentityQuery();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 69;
				this.powerQuery();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 70;
				this.toughnessQuery();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 71;
				this.textQuery();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeQuery(): TypeQueryContext {
		let _localctx: TypeQueryContext = new TypeQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, QueryLangParser.RULE_typeQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(QueryLangParser.TYPE_KEYWORD);
			this.state = 75;
			this.operatorEquality();
			this.state = 76;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmcQuery(): CmcQueryContext {
		let _localctx: CmcQueryContext = new CmcQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, QueryLangParser.RULE_cmcQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(QueryLangParser.CMC_KEYWORD);
			this.state = 79;
			this.operatorComparison();
			this.state = 80;
			this.numberValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameQuery(): NameQueryContext {
		let _localctx: NameQueryContext = new NameQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, QueryLangParser.RULE_nameQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(QueryLangParser.NAME_KEYWORD);
			this.state = 83;
			this.operatorEquality();
			this.state = 84;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public powerQuery(): PowerQueryContext {
		let _localctx: PowerQueryContext = new PowerQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, QueryLangParser.RULE_powerQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(QueryLangParser.POWER_KEYWORD);
			this.state = 87;
			this.operatorComparison();
			this.state = 88;
			this.numberValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public toughnessQuery(): ToughnessQueryContext {
		let _localctx: ToughnessQueryContext = new ToughnessQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, QueryLangParser.RULE_toughnessQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(QueryLangParser.TOUGHNESS_KEYWORD);
			this.state = 91;
			this.operatorComparison();
			this.state = 92;
			this.numberValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commanderIdentityQuery(): CommanderIdentityQueryContext {
		let _localctx: CommanderIdentityQueryContext = new CommanderIdentityQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, QueryLangParser.RULE_commanderIdentityQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(QueryLangParser.COMMANDER_IDENTITY_KEYWORD);
			this.state = 95;
			this.operatorComparison();
			this.state = 96;
			this.colorValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public colorQuery(): ColorQueryContext {
		let _localctx: ColorQueryContext = new ColorQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, QueryLangParser.RULE_colorQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(QueryLangParser.COLOR_KEYWORD);
			this.state = 99;
			this.operatorComparison();
			this.state = 100;
			this.colorValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setNameQuery(): SetNameQueryContext {
		let _localctx: SetNameQueryContext = new SetNameQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, QueryLangParser.RULE_setNameQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(QueryLangParser.SET_NAME_KEYWORD);
			this.state = 103;
			this.operatorEquality();
			this.state = 104;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setQuery(): SetQueryContext {
		let _localctx: SetQueryContext = new SetQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, QueryLangParser.RULE_setQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(QueryLangParser.SET_KEYWORD);
			this.state = 107;
			this.operatorEquality();
			this.state = 108;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public textQuery(): TextQueryContext {
		let _localctx: TextQueryContext = new TextQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, QueryLangParser.RULE_textQuery);
		try {
			this.state = 115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 110;
				this.match(QueryLangParser.TEXT_KEYWORD);
				this.state = 111;
				this.operatorEquality();
				this.state = 112;
				this.value();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorComparison(): OperatorComparisonContext {
		let _localctx: OperatorComparisonContext = new OperatorComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, QueryLangParser.RULE_operatorComparison);
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QueryLangParser.OPERATOR_EQ:
			case QueryLangParser.OPERATOR_NEQ:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 117;
				this.operatorEquality();
				}
				break;
			case QueryLangParser.OPERATOR_LT:
			case QueryLangParser.OPERATOR_LTE:
			case QueryLangParser.OPERATOR_GT:
			case QueryLangParser.OPERATOR_GTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 118;
				this.operatorOrder();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorEquality(): OperatorEqualityContext {
		let _localctx: OperatorEqualityContext = new OperatorEqualityContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, QueryLangParser.RULE_operatorEquality);
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QueryLangParser.OPERATOR_EQ:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 121;
				this.operatorEq();
				}
				break;
			case QueryLangParser.OPERATOR_NEQ:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 122;
				this.operatorNeq();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorOrder(): OperatorOrderContext {
		let _localctx: OperatorOrderContext = new OperatorOrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, QueryLangParser.RULE_operatorOrder);
		try {
			this.state = 129;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QueryLangParser.OPERATOR_GT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.operatorGt();
				}
				break;
			case QueryLangParser.OPERATOR_GTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.operatorGte();
				}
				break;
			case QueryLangParser.OPERATOR_LT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 127;
				this.operatorLt();
				}
				break;
			case QueryLangParser.OPERATOR_LTE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 128;
				this.operatorLte();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorEq(): OperatorEqContext {
		let _localctx: OperatorEqContext = new OperatorEqContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, QueryLangParser.RULE_operatorEq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(QueryLangParser.OPERATOR_EQ);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorLt(): OperatorLtContext {
		let _localctx: OperatorLtContext = new OperatorLtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, QueryLangParser.RULE_operatorLt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(QueryLangParser.OPERATOR_LT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorLte(): OperatorLteContext {
		let _localctx: OperatorLteContext = new OperatorLteContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, QueryLangParser.RULE_operatorLte);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(QueryLangParser.OPERATOR_LTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorGt(): OperatorGtContext {
		let _localctx: OperatorGtContext = new OperatorGtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, QueryLangParser.RULE_operatorGt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(QueryLangParser.OPERATOR_GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorGte(): OperatorGteContext {
		let _localctx: OperatorGteContext = new OperatorGteContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, QueryLangParser.RULE_operatorGte);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.match(QueryLangParser.OPERATOR_GTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorNeq(): OperatorNeqContext {
		let _localctx: OperatorNeqContext = new OperatorNeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, QueryLangParser.RULE_operatorNeq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(QueryLangParser.OPERATOR_NEQ);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberValue(): NumberValueContext {
		let _localctx: NumberValueContext = new NumberValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, QueryLangParser.RULE_numberValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(QueryLangParser.NUMBER_VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public colorValue(): ColorValueContext {
		let _localctx: ColorValueContext = new ColorValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, QueryLangParser.RULE_colorValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, QueryLangParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QueryLangParser.TYPE_KEYWORD) | (1 << QueryLangParser.POWER_KEYWORD) | (1 << QueryLangParser.TOUGHNESS_KEYWORD) | (1 << QueryLangParser.COLOR_KEYWORD) | (1 << QueryLangParser.SET_NAME_KEYWORD) | (1 << QueryLangParser.SET_KEYWORD) | (1 << QueryLangParser.NAME_KEYWORD) | (1 << QueryLangParser.CMC_KEYWORD) | (1 << QueryLangParser.TEXT_KEYWORD) | (1 << QueryLangParser.COMMANDER_IDENTITY_KEYWORD) | (1 << QueryLangParser.VALUE) | (1 << QueryLangParser.QUOTED_VALUE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17\x98\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x06\x025\n\x02\r\x02\x0E\x02" +
		"6\x03\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03K\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\rv\n\r\x03\x0E\x03\x0E\x05\x0Ez\n\x0E\x03\x0F\x03\x0F\x05" +
		"\x0F~\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\x84\n\x10\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x02\x02\x02\x1A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x02\x02\x03\x04\x02\x03\f\x16\x17\x02" +
		"\x90\x022\x03\x02\x02\x02\x04J\x03\x02\x02\x02\x06L\x03\x02\x02\x02\b" +
		"P\x03\x02\x02\x02\nT\x03\x02\x02\x02\fX\x03\x02\x02\x02\x0E\\\x03\x02" +
		"\x02\x02\x10`\x03\x02\x02\x02\x12d\x03\x02\x02\x02\x14h\x03\x02\x02\x02" +
		"\x16l\x03\x02\x02\x02\x18u\x03\x02\x02\x02\x1Ay\x03\x02\x02\x02\x1C}\x03" +
		"\x02\x02\x02\x1E\x83\x03\x02\x02\x02 \x85\x03\x02\x02\x02\"\x87\x03\x02" +
		"\x02\x02$\x89\x03\x02\x02\x02&\x8B\x03\x02\x02\x02(\x8D\x03\x02\x02\x02" +
		"*\x8F\x03\x02\x02\x02,\x91\x03\x02\x02\x02.\x93\x03\x02\x02\x020\x95\x03" +
		"\x02\x02\x022;\x05\x04\x03\x0235\x07\x14\x02\x0243\x03\x02\x02\x0256\x03" +
		"\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x0278\x03\x02\x02\x028:\x05" +
		"\x02\x02\x0294\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03" +
		"\x02\x02\x02<>\x03\x02\x02\x02=;\x03\x02\x02\x02>?\x07\x02\x02\x03?\x03" +
		"\x03\x02\x02\x02@K\x05\n\x06\x02AK\x05\x06\x04\x02BK\x05\x14\v\x02CK\x05" +
		"\x16\f\x02DK\x05\b\x05\x02EK\x05\x12\n\x02FK\x05\x10\t\x02GK\x05\f\x07" +
		"\x02HK\x05\x0E\b\x02IK\x05\x18\r\x02J@\x03\x02\x02\x02JA\x03\x02\x02\x02" +
		"JB\x03\x02\x02\x02JC\x03\x02\x02\x02JD\x03\x02\x02\x02JE\x03\x02\x02\x02" +
		"JF\x03\x02\x02\x02JG\x03\x02\x02\x02JH\x03\x02\x02\x02JI\x03\x02\x02\x02" +
		"K\x05\x03\x02\x02\x02LM\x07\x03\x02\x02MN\x05\x1C\x0F\x02NO\x050\x19\x02" +
		"O\x07\x03\x02\x02\x02PQ\x07\n\x02\x02QR\x05\x1A\x0E\x02RS\x05,\x17\x02" +
		"S\t\x03\x02\x02\x02TU\x07\t\x02\x02UV\x05\x1C\x0F\x02VW\x050\x19\x02W" +
		"\v\x03\x02\x02\x02XY\x07\x04\x02\x02YZ\x05\x1A\x0E\x02Z[\x05,\x17\x02" +
		"[\r\x03\x02\x02\x02\\]\x07\x05\x02\x02]^\x05\x1A\x0E\x02^_\x05,\x17\x02" +
		"_\x0F\x03\x02\x02\x02`a\x07\f\x02\x02ab\x05\x1A\x0E\x02bc\x05.\x18\x02" +
		"c\x11\x03\x02\x02\x02de\x07\x06\x02\x02ef\x05\x1A\x0E\x02fg\x05.\x18\x02" +
		"g\x13\x03\x02\x02\x02hi\x07\x07\x02\x02ij\x05\x1C\x0F\x02jk\x050\x19\x02" +
		"k\x15\x03\x02\x02\x02lm\x07\b\x02\x02mn\x05\x1C\x0F\x02no\x050\x19\x02" +
		"o\x17\x03\x02\x02\x02pq\x07\v\x02\x02qr\x05\x1C\x0F\x02rs\x050\x19\x02" +
		"sv\x03\x02\x02\x02tv\x050\x19\x02up\x03\x02\x02\x02ut\x03\x02\x02\x02" +
		"v\x19\x03\x02\x02\x02wz\x05\x1C\x0F\x02xz\x05\x1E\x10\x02yw\x03\x02\x02" +
		"\x02yx\x03\x02\x02\x02z\x1B\x03\x02\x02\x02{~\x05 \x11\x02|~\x05*\x16" +
		"\x02}{\x03\x02\x02\x02}|\x03\x02\x02\x02~\x1D\x03\x02\x02\x02\x7F\x84" +
		"\x05&\x14\x02\x80\x84\x05(\x15\x02\x81\x84\x05\"\x12\x02\x82\x84\x05$" +
		"\x13\x02\x83\x7F\x03\x02\x02\x02\x83\x80\x03\x02\x02\x02\x83\x81\x03\x02" +
		"\x02\x02\x83\x82\x03\x02\x02\x02\x84\x1F\x03\x02\x02\x02\x85\x86\x07\x0E" +
		"\x02\x02\x86!\x03\x02\x02\x02\x87\x88\x07\x0F\x02\x02\x88#\x03\x02\x02" +
		"\x02\x89\x8A\x07\x10\x02\x02\x8A%\x03\x02\x02\x02\x8B\x8C\x07\x11\x02" +
		"\x02\x8C\'\x03\x02\x02\x02\x8D\x8E\x07\x12\x02\x02\x8E)\x03\x02\x02\x02" +
		"\x8F\x90\x07\x13\x02\x02\x90+\x03\x02\x02\x02\x91\x92\x07\r\x02\x02\x92" +
		"-\x03\x02\x02\x02\x93\x94\x050\x19\x02\x94/\x03\x02\x02\x02\x95\x96\t" +
		"\x02\x02\x02\x961\x03\x02\x02\x02\t6;Juy}\x83";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!QueryLangParser.__ATN) {
			QueryLangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(QueryLangParser._serializedATN));
		}

		return QueryLangParser.__ATN;
	}

}

export class WholeQueryContext extends ParserRuleContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public EOF(): TerminalNode { return this.getToken(QueryLangParser.EOF, 0); }
	public wholeQuery(): WholeQueryContext[];
	public wholeQuery(i: number): WholeQueryContext;
	public wholeQuery(i?: number): WholeQueryContext | WholeQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WholeQueryContext);
		} else {
			return this.getRuleContext(i, WholeQueryContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QueryLangParser.WS);
		} else {
			return this.getToken(QueryLangParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_wholeQuery; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterWholeQuery) {
			listener.enterWholeQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitWholeQuery) {
			listener.exitWholeQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitWholeQuery) {
			return visitor.visitWholeQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public nameQuery(): NameQueryContext | undefined {
		return this.tryGetRuleContext(0, NameQueryContext);
	}
	public typeQuery(): TypeQueryContext | undefined {
		return this.tryGetRuleContext(0, TypeQueryContext);
	}
	public setNameQuery(): SetNameQueryContext | undefined {
		return this.tryGetRuleContext(0, SetNameQueryContext);
	}
	public setQuery(): SetQueryContext | undefined {
		return this.tryGetRuleContext(0, SetQueryContext);
	}
	public cmcQuery(): CmcQueryContext | undefined {
		return this.tryGetRuleContext(0, CmcQueryContext);
	}
	public colorQuery(): ColorQueryContext | undefined {
		return this.tryGetRuleContext(0, ColorQueryContext);
	}
	public commanderIdentityQuery(): CommanderIdentityQueryContext | undefined {
		return this.tryGetRuleContext(0, CommanderIdentityQueryContext);
	}
	public powerQuery(): PowerQueryContext | undefined {
		return this.tryGetRuleContext(0, PowerQueryContext);
	}
	public toughnessQuery(): ToughnessQueryContext | undefined {
		return this.tryGetRuleContext(0, ToughnessQueryContext);
	}
	public textQuery(): TextQueryContext | undefined {
		return this.tryGetRuleContext(0, TextQueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_query; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeQueryContext extends ParserRuleContext {
	public TYPE_KEYWORD(): TerminalNode { return this.getToken(QueryLangParser.TYPE_KEYWORD, 0); }
	public operatorEquality(): OperatorEqualityContext {
		return this.getRuleContext(0, OperatorEqualityContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_typeQuery; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterTypeQuery) {
			listener.enterTypeQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitTypeQuery) {
			listener.exitTypeQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitTypeQuery) {
			return visitor.visitTypeQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmcQueryContext extends ParserRuleContext {
	public CMC_KEYWORD(): TerminalNode { return this.getToken(QueryLangParser.CMC_KEYWORD, 0); }
	public operatorComparison(): OperatorComparisonContext {
		return this.getRuleContext(0, OperatorComparisonContext);
	}
	public numberValue(): NumberValueContext {
		return this.getRuleContext(0, NumberValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_cmcQuery; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterCmcQuery) {
			listener.enterCmcQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitCmcQuery) {
			listener.exitCmcQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitCmcQuery) {
			return visitor.visitCmcQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameQueryContext extends ParserRuleContext {
	public NAME_KEYWORD(): TerminalNode { return this.getToken(QueryLangParser.NAME_KEYWORD, 0); }
	public operatorEquality(): OperatorEqualityContext {
		return this.getRuleContext(0, OperatorEqualityContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_nameQuery; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterNameQuery) {
			listener.enterNameQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitNameQuery) {
			listener.exitNameQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitNameQuery) {
			return visitor.visitNameQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowerQueryContext extends ParserRuleContext {
	public POWER_KEYWORD(): TerminalNode { return this.getToken(QueryLangParser.POWER_KEYWORD, 0); }
	public operatorComparison(): OperatorComparisonContext {
		return this.getRuleContext(0, OperatorComparisonContext);
	}
	public numberValue(): NumberValueContext {
		return this.getRuleContext(0, NumberValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_powerQuery; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterPowerQuery) {
			listener.enterPowerQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitPowerQuery) {
			listener.exitPowerQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitPowerQuery) {
			return visitor.visitPowerQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ToughnessQueryContext extends ParserRuleContext {
	public TOUGHNESS_KEYWORD(): TerminalNode { return this.getToken(QueryLangParser.TOUGHNESS_KEYWORD, 0); }
	public operatorComparison(): OperatorComparisonContext {
		return this.getRuleContext(0, OperatorComparisonContext);
	}
	public numberValue(): NumberValueContext {
		return this.getRuleContext(0, NumberValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_toughnessQuery; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterToughnessQuery) {
			listener.enterToughnessQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitToughnessQuery) {
			listener.exitToughnessQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitToughnessQuery) {
			return visitor.visitToughnessQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommanderIdentityQueryContext extends ParserRuleContext {
	public COMMANDER_IDENTITY_KEYWORD(): TerminalNode { return this.getToken(QueryLangParser.COMMANDER_IDENTITY_KEYWORD, 0); }
	public operatorComparison(): OperatorComparisonContext {
		return this.getRuleContext(0, OperatorComparisonContext);
	}
	public colorValue(): ColorValueContext {
		return this.getRuleContext(0, ColorValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_commanderIdentityQuery; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterCommanderIdentityQuery) {
			listener.enterCommanderIdentityQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitCommanderIdentityQuery) {
			listener.exitCommanderIdentityQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitCommanderIdentityQuery) {
			return visitor.visitCommanderIdentityQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColorQueryContext extends ParserRuleContext {
	public COLOR_KEYWORD(): TerminalNode { return this.getToken(QueryLangParser.COLOR_KEYWORD, 0); }
	public operatorComparison(): OperatorComparisonContext {
		return this.getRuleContext(0, OperatorComparisonContext);
	}
	public colorValue(): ColorValueContext {
		return this.getRuleContext(0, ColorValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_colorQuery; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterColorQuery) {
			listener.enterColorQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitColorQuery) {
			listener.exitColorQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitColorQuery) {
			return visitor.visitColorQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetNameQueryContext extends ParserRuleContext {
	public SET_NAME_KEYWORD(): TerminalNode { return this.getToken(QueryLangParser.SET_NAME_KEYWORD, 0); }
	public operatorEquality(): OperatorEqualityContext {
		return this.getRuleContext(0, OperatorEqualityContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_setNameQuery; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterSetNameQuery) {
			listener.enterSetNameQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitSetNameQuery) {
			listener.exitSetNameQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitSetNameQuery) {
			return visitor.visitSetNameQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQueryContext extends ParserRuleContext {
	public SET_KEYWORD(): TerminalNode { return this.getToken(QueryLangParser.SET_KEYWORD, 0); }
	public operatorEquality(): OperatorEqualityContext {
		return this.getRuleContext(0, OperatorEqualityContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_setQuery; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterSetQuery) {
			listener.enterSetQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitSetQuery) {
			listener.exitSetQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitSetQuery) {
			return visitor.visitSetQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextQueryContext extends ParserRuleContext {
	public TEXT_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.TEXT_KEYWORD, 0); }
	public operatorEquality(): OperatorEqualityContext | undefined {
		return this.tryGetRuleContext(0, OperatorEqualityContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_textQuery; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterTextQuery) {
			listener.enterTextQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitTextQuery) {
			listener.exitTextQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitTextQuery) {
			return visitor.visitTextQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorComparisonContext extends ParserRuleContext {
	public operatorEquality(): OperatorEqualityContext | undefined {
		return this.tryGetRuleContext(0, OperatorEqualityContext);
	}
	public operatorOrder(): OperatorOrderContext | undefined {
		return this.tryGetRuleContext(0, OperatorOrderContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_operatorComparison; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterOperatorComparison) {
			listener.enterOperatorComparison(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitOperatorComparison) {
			listener.exitOperatorComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitOperatorComparison) {
			return visitor.visitOperatorComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorEqualityContext extends ParserRuleContext {
	public operatorEq(): OperatorEqContext | undefined {
		return this.tryGetRuleContext(0, OperatorEqContext);
	}
	public operatorNeq(): OperatorNeqContext | undefined {
		return this.tryGetRuleContext(0, OperatorNeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_operatorEquality; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterOperatorEquality) {
			listener.enterOperatorEquality(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitOperatorEquality) {
			listener.exitOperatorEquality(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitOperatorEquality) {
			return visitor.visitOperatorEquality(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorOrderContext extends ParserRuleContext {
	public operatorGt(): OperatorGtContext | undefined {
		return this.tryGetRuleContext(0, OperatorGtContext);
	}
	public operatorGte(): OperatorGteContext | undefined {
		return this.tryGetRuleContext(0, OperatorGteContext);
	}
	public operatorLt(): OperatorLtContext | undefined {
		return this.tryGetRuleContext(0, OperatorLtContext);
	}
	public operatorLte(): OperatorLteContext | undefined {
		return this.tryGetRuleContext(0, OperatorLteContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_operatorOrder; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterOperatorOrder) {
			listener.enterOperatorOrder(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitOperatorOrder) {
			listener.exitOperatorOrder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitOperatorOrder) {
			return visitor.visitOperatorOrder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorEqContext extends ParserRuleContext {
	public OPERATOR_EQ(): TerminalNode { return this.getToken(QueryLangParser.OPERATOR_EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_operatorEq; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterOperatorEq) {
			listener.enterOperatorEq(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitOperatorEq) {
			listener.exitOperatorEq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitOperatorEq) {
			return visitor.visitOperatorEq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorLtContext extends ParserRuleContext {
	public OPERATOR_LT(): TerminalNode { return this.getToken(QueryLangParser.OPERATOR_LT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_operatorLt; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterOperatorLt) {
			listener.enterOperatorLt(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitOperatorLt) {
			listener.exitOperatorLt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitOperatorLt) {
			return visitor.visitOperatorLt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorLteContext extends ParserRuleContext {
	public OPERATOR_LTE(): TerminalNode { return this.getToken(QueryLangParser.OPERATOR_LTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_operatorLte; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterOperatorLte) {
			listener.enterOperatorLte(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitOperatorLte) {
			listener.exitOperatorLte(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitOperatorLte) {
			return visitor.visitOperatorLte(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorGtContext extends ParserRuleContext {
	public OPERATOR_GT(): TerminalNode { return this.getToken(QueryLangParser.OPERATOR_GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_operatorGt; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterOperatorGt) {
			listener.enterOperatorGt(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitOperatorGt) {
			listener.exitOperatorGt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitOperatorGt) {
			return visitor.visitOperatorGt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorGteContext extends ParserRuleContext {
	public OPERATOR_GTE(): TerminalNode { return this.getToken(QueryLangParser.OPERATOR_GTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_operatorGte; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterOperatorGte) {
			listener.enterOperatorGte(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitOperatorGte) {
			listener.exitOperatorGte(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitOperatorGte) {
			return visitor.visitOperatorGte(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorNeqContext extends ParserRuleContext {
	public OPERATOR_NEQ(): TerminalNode { return this.getToken(QueryLangParser.OPERATOR_NEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_operatorNeq; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterOperatorNeq) {
			listener.enterOperatorNeq(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitOperatorNeq) {
			listener.exitOperatorNeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitOperatorNeq) {
			return visitor.visitOperatorNeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberValueContext extends ParserRuleContext {
	public NUMBER_VALUE(): TerminalNode { return this.getToken(QueryLangParser.NUMBER_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_numberValue; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterNumberValue) {
			listener.enterNumberValue(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitNumberValue) {
			listener.exitNumberValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitNumberValue) {
			return visitor.visitNumberValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColorValueContext extends ParserRuleContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_colorValue; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterColorValue) {
			listener.enterColorValue(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitColorValue) {
			listener.exitColorValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitColorValue) {
			return visitor.visitColorValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public VALUE(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.VALUE, 0); }
	public QUOTED_VALUE(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.QUOTED_VALUE, 0); }
	public TYPE_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.TYPE_KEYWORD, 0); }
	public COLOR_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.COLOR_KEYWORD, 0); }
	public SET_NAME_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.SET_NAME_KEYWORD, 0); }
	public SET_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.SET_KEYWORD, 0); }
	public NAME_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.NAME_KEYWORD, 0); }
	public CMC_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.CMC_KEYWORD, 0); }
	public TEXT_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.TEXT_KEYWORD, 0); }
	public POWER_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.POWER_KEYWORD, 0); }
	public TOUGHNESS_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.TOUGHNESS_KEYWORD, 0); }
	public COMMANDER_IDENTITY_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(QueryLangParser.COMMANDER_IDENTITY_KEYWORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryLangParser.RULE_value; }
	// @Override
	public enterRule(listener: QueryLangListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: QueryLangListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryLangVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


