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
	public static readonly SET_KEYWORD = 5;
	public static readonly NAME_KEYWORD = 6;
	public static readonly CMC_KEYWORD = 7;
	public static readonly TEXT_KEYWORD = 8;
	public static readonly COMMANDER_IDENTITY_KEYWORD = 9;
	public static readonly NUMBER_VALUE = 10;
	public static readonly RED = 11;
	public static readonly GREEN = 12;
	public static readonly BLUE = 13;
	public static readonly WHITE = 14;
	public static readonly BLACK = 15;
	public static readonly COLOR_VALUE = 16;
	public static readonly OPERATOR_EQ = 17;
	public static readonly OPERATOR_LT = 18;
	public static readonly OPERATOR_LTE = 19;
	public static readonly OPERATOR_GT = 20;
	public static readonly OPERATOR_GTE = 21;
	public static readonly OPERATOR_NEQ = 22;
	public static readonly WS = 23;
	public static readonly NEWLINE = 24;
	public static readonly VALUE = 25;
	public static readonly QUOTED_VALUE = 26;
	public static readonly RULE_wholeQuery = 0;
	public static readonly RULE_query = 1;
	public static readonly RULE_typeQuery = 2;
	public static readonly RULE_cmcQuery = 3;
	public static readonly RULE_nameQuery = 4;
	public static readonly RULE_powerQuery = 5;
	public static readonly RULE_toughnessQuery = 6;
	public static readonly RULE_commanderIdentityQuery = 7;
	public static readonly RULE_colorQuery = 8;
	public static readonly RULE_setQuery = 9;
	public static readonly RULE_textQuery = 10;
	public static readonly RULE_operatorComparison = 11;
	public static readonly RULE_operatorEquality = 12;
	public static readonly RULE_operatorOrder = 13;
	public static readonly RULE_operatorEq = 14;
	public static readonly RULE_operatorLt = 15;
	public static readonly RULE_operatorLte = 16;
	public static readonly RULE_operatorGt = 17;
	public static readonly RULE_operatorGte = 18;
	public static readonly RULE_operatorNeq = 19;
	public static readonly RULE_numberValue = 20;
	public static readonly RULE_colorValue = 21;
	public static readonly RULE_value = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"wholeQuery", "query", "typeQuery", "cmcQuery", "nameQuery", "powerQuery", 
		"toughnessQuery", "commanderIdentityQuery", "colorQuery", "setQuery", 
		"textQuery", "operatorComparison", "operatorEquality", "operatorOrder", 
		"operatorEq", "operatorLt", "operatorLte", "operatorGt", "operatorGte", 
		"operatorNeq", "numberValue", "colorValue", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TYPE_KEYWORD", "POWER_KEYWORD", "TOUGHNESS_KEYWORD", "COLOR_KEYWORD", 
		"SET_KEYWORD", "NAME_KEYWORD", "CMC_KEYWORD", "TEXT_KEYWORD", "COMMANDER_IDENTITY_KEYWORD", 
		"NUMBER_VALUE", "RED", "GREEN", "BLUE", "WHITE", "BLACK", "COLOR_VALUE", 
		"OPERATOR_EQ", "OPERATOR_LT", "OPERATOR_LTE", "OPERATOR_GT", "OPERATOR_GTE", 
		"OPERATOR_NEQ", "WS", "NEWLINE", "VALUE", "QUOTED_VALUE",
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.query();
			this.state = 55;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 48;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 47;
						this.match(QueryLangParser.WS);
						}
						}
						this.state = 50;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === QueryLangParser.WS);
					this.state = 52;
					this.wholeQuery();
					}
					}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, QueryLangParser.RULE_query);
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 58;
				this.nameQuery();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 59;
				this.typeQuery();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 60;
				this.setQuery();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 61;
				this.cmcQuery();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 62;
				this.colorQuery();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 63;
				this.commanderIdentityQuery();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 64;
				this.powerQuery();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 65;
				this.toughnessQuery();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 66;
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
			this.state = 69;
			this.match(QueryLangParser.TYPE_KEYWORD);
			this.state = 70;
			this.operatorEquality();
			this.state = 71;
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
			this.state = 73;
			this.match(QueryLangParser.CMC_KEYWORD);
			this.state = 74;
			this.operatorComparison();
			this.state = 75;
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
			this.state = 77;
			this.match(QueryLangParser.NAME_KEYWORD);
			this.state = 78;
			this.operatorEquality();
			this.state = 79;
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
			this.state = 81;
			this.match(QueryLangParser.POWER_KEYWORD);
			this.state = 82;
			this.operatorComparison();
			this.state = 83;
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
			this.state = 85;
			this.match(QueryLangParser.TOUGHNESS_KEYWORD);
			this.state = 86;
			this.operatorComparison();
			this.state = 87;
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
			this.state = 89;
			this.match(QueryLangParser.COMMANDER_IDENTITY_KEYWORD);
			this.state = 90;
			this.operatorComparison();
			this.state = 91;
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
			this.state = 93;
			this.match(QueryLangParser.COLOR_KEYWORD);
			this.state = 94;
			this.operatorComparison();
			this.state = 95;
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
	public setQuery(): SetQueryContext {
		let _localctx: SetQueryContext = new SetQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, QueryLangParser.RULE_setQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(QueryLangParser.SET_KEYWORD);
			this.state = 98;
			this.operatorEquality();
			this.state = 99;
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
		this.enterRule(_localctx, 20, QueryLangParser.RULE_textQuery);
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 101;
				this.match(QueryLangParser.TEXT_KEYWORD);
				this.state = 102;
				this.operatorEquality();
				this.state = 103;
				this.value();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 105;
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
		this.enterRule(_localctx, 22, QueryLangParser.RULE_operatorComparison);
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QueryLangParser.OPERATOR_EQ:
			case QueryLangParser.OPERATOR_NEQ:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this.operatorEquality();
				}
				break;
			case QueryLangParser.OPERATOR_LT:
			case QueryLangParser.OPERATOR_LTE:
			case QueryLangParser.OPERATOR_GT:
			case QueryLangParser.OPERATOR_GTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
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
		this.enterRule(_localctx, 24, QueryLangParser.RULE_operatorEquality);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QueryLangParser.OPERATOR_EQ:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.operatorEq();
				}
				break;
			case QueryLangParser.OPERATOR_NEQ:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
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
		this.enterRule(_localctx, 26, QueryLangParser.RULE_operatorOrder);
		try {
			this.state = 120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QueryLangParser.OPERATOR_GT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.operatorGt();
				}
				break;
			case QueryLangParser.OPERATOR_GTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this.operatorGte();
				}
				break;
			case QueryLangParser.OPERATOR_LT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 118;
				this.operatorLt();
				}
				break;
			case QueryLangParser.OPERATOR_LTE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 119;
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
		this.enterRule(_localctx, 28, QueryLangParser.RULE_operatorEq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
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
		this.enterRule(_localctx, 30, QueryLangParser.RULE_operatorLt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
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
		this.enterRule(_localctx, 32, QueryLangParser.RULE_operatorLte);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
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
		this.enterRule(_localctx, 34, QueryLangParser.RULE_operatorGt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
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
		this.enterRule(_localctx, 36, QueryLangParser.RULE_operatorGte);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
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
		this.enterRule(_localctx, 38, QueryLangParser.RULE_operatorNeq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
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
		this.enterRule(_localctx, 40, QueryLangParser.RULE_numberValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
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
		this.enterRule(_localctx, 42, QueryLangParser.RULE_colorValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(QueryLangParser.COLOR_VALUE);
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
		this.enterRule(_localctx, 44, QueryLangParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QueryLangParser.TYPE_KEYWORD) | (1 << QueryLangParser.POWER_KEYWORD) | (1 << QueryLangParser.TOUGHNESS_KEYWORD) | (1 << QueryLangParser.COLOR_KEYWORD) | (1 << QueryLangParser.SET_KEYWORD) | (1 << QueryLangParser.NAME_KEYWORD) | (1 << QueryLangParser.CMC_KEYWORD) | (1 << QueryLangParser.TEXT_KEYWORD) | (1 << QueryLangParser.COMMANDER_IDENTITY_KEYWORD) | (1 << QueryLangParser.VALUE) | (1 << QueryLangParser.QUOTED_VALUE))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\x8F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x03\x02\x06\x023\n\x02\r\x02\x0E\x024\x03\x02\x07\x02" +
		"8\n\x02\f\x02\x0E\x02;\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03F\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\fm\n\f\x03\r\x03\r\x05\rq\n\r\x03\x0E\x03\x0E\x05\x0E" +
		"u\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F{\n\x0F\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x02\x02" +
		"\x02\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x02\x02\x03\x04\x02\x03\v\x1B\x1C\x02\x87\x020\x03" +
		"\x02\x02\x02\x04E\x03\x02\x02\x02\x06G\x03\x02\x02\x02\bK\x03\x02\x02" +
		"\x02\nO\x03\x02\x02\x02\fS\x03\x02\x02\x02\x0EW\x03\x02\x02\x02\x10[\x03" +
		"\x02\x02\x02\x12_\x03\x02\x02\x02\x14c\x03\x02\x02\x02\x16l\x03\x02\x02" +
		"\x02\x18p\x03\x02\x02\x02\x1At\x03\x02\x02\x02\x1Cz\x03\x02\x02\x02\x1E" +
		"|\x03\x02\x02\x02 ~\x03\x02\x02\x02\"\x80\x03\x02\x02\x02$\x82\x03\x02" +
		"\x02\x02&\x84\x03\x02\x02\x02(\x86\x03\x02\x02\x02*\x88\x03\x02\x02\x02" +
		",\x8A\x03\x02\x02\x02.\x8C\x03\x02\x02\x0209\x05\x04\x03\x0213\x07\x19" +
		"\x02\x0221\x03\x02\x02\x0234\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02" +
		"\x02\x0256\x03\x02\x02\x0268\x05\x02\x02\x0272\x03\x02\x02\x028;\x03\x02" +
		"\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:\x03\x03\x02\x02\x02;9\x03" +
		"\x02\x02\x02<F\x05\n\x06\x02=F\x05\x06\x04\x02>F\x05\x14\v\x02?F\x05\b" +
		"\x05\x02@F\x05\x12\n\x02AF\x05\x10\t\x02BF\x05\f\x07\x02CF\x05\x0E\b\x02" +
		"DF\x05\x16\f\x02E<\x03\x02\x02\x02E=\x03\x02\x02\x02E>\x03\x02\x02\x02" +
		"E?\x03\x02\x02\x02E@\x03\x02\x02\x02EA\x03\x02\x02\x02EB\x03\x02\x02\x02" +
		"EC\x03\x02\x02\x02ED\x03\x02\x02\x02F\x05\x03\x02\x02\x02GH\x07\x03\x02" +
		"\x02HI\x05\x1A\x0E\x02IJ\x05.\x18\x02J\x07\x03\x02\x02\x02KL\x07\t\x02" +
		"\x02LM\x05\x18\r\x02MN\x05*\x16\x02N\t\x03\x02\x02\x02OP\x07\b\x02\x02" +
		"PQ\x05\x1A\x0E\x02QR\x05.\x18\x02R\v\x03\x02\x02\x02ST\x07\x04\x02\x02" +
		"TU\x05\x18\r\x02UV\x05*\x16\x02V\r\x03\x02\x02\x02WX\x07\x05\x02\x02X" +
		"Y\x05\x18\r\x02YZ\x05*\x16\x02Z\x0F\x03\x02\x02\x02[\\\x07\v\x02\x02\\" +
		"]\x05\x18\r\x02]^\x05,\x17\x02^\x11\x03\x02\x02\x02_`\x07\x06\x02\x02" +
		"`a\x05\x18\r\x02ab\x05,\x17\x02b\x13\x03\x02\x02\x02cd\x07\x07\x02\x02" +
		"de\x05\x1A\x0E\x02ef\x05.\x18\x02f\x15\x03\x02\x02\x02gh\x07\n\x02\x02" +
		"hi\x05\x1A\x0E\x02ij\x05.\x18\x02jm\x03\x02\x02\x02km\x05.\x18\x02lg\x03" +
		"\x02\x02\x02lk\x03\x02\x02\x02m\x17\x03\x02\x02\x02nq\x05\x1A\x0E\x02" +
		"oq\x05\x1C\x0F\x02pn\x03\x02\x02\x02po\x03\x02\x02\x02q\x19\x03\x02\x02" +
		"\x02ru\x05\x1E\x10\x02su\x05(\x15\x02tr\x03\x02\x02\x02ts\x03\x02\x02" +
		"\x02u\x1B\x03\x02\x02\x02v{\x05$\x13\x02w{\x05&\x14\x02x{\x05 \x11\x02" +
		"y{\x05\"\x12\x02zv\x03\x02\x02\x02zw\x03\x02\x02\x02zx\x03\x02\x02\x02" +
		"zy\x03\x02\x02\x02{\x1D\x03\x02\x02\x02|}\x07\x13\x02\x02}\x1F\x03\x02" +
		"\x02\x02~\x7F\x07\x14\x02\x02\x7F!\x03\x02\x02\x02\x80\x81\x07\x15\x02" +
		"\x02\x81#\x03\x02\x02\x02\x82\x83\x07\x16\x02\x02\x83%\x03\x02\x02\x02" +
		"\x84\x85\x07\x17\x02\x02\x85\'\x03\x02\x02\x02\x86\x87\x07\x18\x02\x02" +
		"\x87)\x03\x02\x02\x02\x88\x89\x07\f\x02\x02\x89+\x03\x02\x02\x02\x8A\x8B" +
		"\x07\x12\x02\x02\x8B-\x03\x02\x02\x02\x8C\x8D\t\x02\x02\x02\x8D/\x03\x02" +
		"\x02\x02\t49Elptz";
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
	public COLOR_VALUE(): TerminalNode { return this.getToken(QueryLangParser.COLOR_VALUE, 0); }
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


