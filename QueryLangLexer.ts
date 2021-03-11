// Generated from QueryLang.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class QueryLangLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly TYPE_KEYWORD = 2;
	public static readonly POWER_KEYWORD = 3;
	public static readonly TOUGHNESS_KEYWORD = 4;
	public static readonly COLOR_KEYWORD = 5;
	public static readonly SET_NAME_KEYWORD = 6;
	public static readonly SET_KEYWORD = 7;
	public static readonly NAME_KEYWORD = 8;
	public static readonly SIMILARITY_KEYWORD = 9;
	public static readonly CMC_KEYWORD = 10;
	public static readonly TEXT_KEYWORD = 11;
	public static readonly COMMANDER_IDENTITY_KEYWORD = 12;
	public static readonly NUMBER_VALUE = 13;
	public static readonly OPERATOR_EQ = 14;
	public static readonly OPERATOR_LT = 15;
	public static readonly OPERATOR_LTE = 16;
	public static readonly OPERATOR_GT = 17;
	public static readonly OPERATOR_GTE = 18;
	public static readonly OPERATOR_NEQ = 19;
	public static readonly WS = 20;
	public static readonly NEWLINE = 21;
	public static readonly VALUE = 22;
	public static readonly QUOTED_VALUE = 23;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "TYPE_KEYWORD", "POWER_KEYWORD", "TOUGHNESS_KEYWORD", "COLOR_KEYWORD", 
		"SET_NAME_KEYWORD", "SET_KEYWORD", "NAME_KEYWORD", "SIMILARITY_KEYWORD", 
		"CMC_KEYWORD", "TEXT_KEYWORD", "COMMANDER_IDENTITY_KEYWORD", "NUMBER_VALUE", 
		"OPERATOR_EQ", "OPERATOR_LT", "OPERATOR_LTE", "OPERATOR_GT", "OPERATOR_GTE", 
		"OPERATOR_NEQ", "WS", "NEWLINE", "VALUE", "QUOTED_VALUE", "A", "B", "C", 
		"D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
		"R", "S", "T", "U", "V", "W", "X", "Y", "Z", "NUMBER", "VAL", "VAL_SPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "TYPE_KEYWORD", "POWER_KEYWORD", "TOUGHNESS_KEYWORD", 
		"COLOR_KEYWORD", "SET_NAME_KEYWORD", "SET_KEYWORD", "NAME_KEYWORD", "SIMILARITY_KEYWORD", 
		"CMC_KEYWORD", "TEXT_KEYWORD", "COMMANDER_IDENTITY_KEYWORD", "NUMBER_VALUE", 
		"OPERATOR_EQ", "OPERATOR_LT", "OPERATOR_LTE", "OPERATOR_GT", "OPERATOR_GTE", 
		"OPERATOR_NEQ", "WS", "NEWLINE", "VALUE", "QUOTED_VALUE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(QueryLangLexer._LITERAL_NAMES, QueryLangLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return QueryLangLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(QueryLangLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "QueryLang.g4"; }

	// @Override
	public get ruleNames(): string[] { return QueryLangLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return QueryLangLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return QueryLangLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return QueryLangLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x19\u02DC\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03t\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04\x80\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\x90\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\xA0\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\xB3\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b" +
		"\xBA\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xC2\n\t\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xD0" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x05\n\xDD\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0108\n\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0111\n\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u012B\n\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0136\n\r\x03" +
		"\x0E\x06\x0E\u0139\n\x0E\r\x0E\x0E\x0E\u013A\x03\x0F\x07\x0F\u013E\n\x0F" +
		"\f\x0F\x0E\x0F\u0141\v\x0F\x03\x0F\x03\x0F\x07\x0F\u0145\n\x0F\f\x0F\x0E" +
		"\x0F\u0148\v\x0F\x03\x0F\x07\x0F\u014B\n\x0F\f\x0F\x0E\x0F\u014E\v\x0F" +
		"\x03\x0F\x03\x0F\x07\x0F\u0152\n\x0F\f\x0F\x0E\x0F\u0155\v\x0F\x03\x0F" +
		"\x06\x0F\u0158\n\x0F\r\x0F\x0E\x0F\u0159\x03\x0F\x03\x0F\x03\x0F\x06\x0F" +
		"\u015F\n\x0F\r\x0F\x0E\x0F\u0160\x03\x0F\x06\x0F\u0164\n\x0F\r\x0F\x0E" +
		"\x0F\u0165\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F\u016E" +
		"\n\x0F\r\x0F\x0E\x0F\u016F\x03\x0F\x06\x0F\u0173\n\x0F\r\x0F\x0E\x0F\u0174" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F\u017E" +
		"\n\x0F\r\x0F\x0E\x0F\u017F\x03\x0F\x06\x0F\u0183\n\x0F\r\x0F\x0E\x0F\u0184" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x06\x0F\u0190\n\x0F\r\x0F\x0E\x0F\u0191\x03\x0F\x06\x0F\u0195\n\x0F\r" +
		"\x0F\x0E\x0F\u0196\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F\u01A3\n\x0F\r\x0F\x0E\x0F\u01A4\x05" +
		"\x0F\u01A7\n\x0F\x03\x10\x07\x10\u01AA\n\x10\f\x10\x0E\x10\u01AD\v\x10" +
		"\x03\x10\x03\x10\x07\x10\u01B1\n\x10\f\x10\x0E\x10\u01B4\v\x10\x03\x10" +
		"\x06\x10\u01B7\n\x10\r\x10\x0E\x10\u01B8\x03\x10\x03\x10\x03\x10\x06\x10" +
		"\u01BE\n\x10\r\x10\x0E\x10\u01BF\x05\x10\u01C2\n\x10\x03\x11\x07\x11\u01C5" +
		"\n\x11\f\x11\x0E\x11\u01C8\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\u01CE\n\x11\f\x11\x0E\x11\u01D1\v\x11\x03\x11\x06\x11\u01D4\n\x11\r\x11" +
		"\x0E\x11\u01D5\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11\u01DC\n\x11\r\x11" +
		"\x0E\x11\u01DD\x05\x11\u01E0\n\x11\x03\x12\x07\x12\u01E3\n\x12\f\x12\x0E" +
		"\x12\u01E6\v\x12\x03\x12\x03\x12\x07\x12\u01EA\n\x12\f\x12\x0E\x12\u01ED" +
		"\v\x12\x03\x12\x06\x12\u01F0\n\x12\r\x12\x0E\x12\u01F1\x03\x12\x03\x12" +
		"\x03\x12\x06\x12\u01F7\n\x12\r\x12\x0E\x12\u01F8\x05\x12\u01FB\n\x12\x03" +
		"\x13\x07\x13\u01FE\n\x13\f\x13\x0E\x13\u0201\v\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x07\x13\u0207\n\x13\f\x13\x0E\x13\u020A\v\x13\x03\x13\x06" +
		"\x13\u020D\n\x13\r\x13\x0E\x13\u020E\x03\x13\x03\x13\x03\x13\x03\x13\x06" +
		"\x13\u0215\n\x13\r\x13\x0E\x13\u0216\x05\x13\u0219\n\x13\x03\x14\x07\x14" +
		"\u021C\n\x14\f\x14\x0E\x14\u021F\v\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x07\x14\u0225\n\x14\f\x14\x0E\x14\u0228\v\x14\x03\x14\x07\x14\u022B\n" +
		"\x14\f\x14\x0E\x14\u022E\v\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\u0234\n\x14\f\x14\x0E\x14\u0237\v\x14\x03\x14\x06\x14\u023A\n\x14\r\x14" +
		"\x0E\x14\u023B\x03\x14\x03\x14\x03\x14\x03\x14\x06\x14\u0242\n\x14\r\x14" +
		"\x0E\x14\u0243\x03\x14\x06\x14\u0247\n\x14\r\x14\x0E\x14\u0248\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x06\x14\u0255\n\x14\r\x14\x0E\x14\u0256\x03\x14\x06\x14\u025A\n\x14\r" +
		"\x14\x0E\x14\u025B\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x06\x14\u0269\n\x14\r\x14\x0E\x14" +
		"\u026A\x03\x14\x06\x14\u026E\n\x14\r\x14\x0E\x14\u026F\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x06\x14\u027F\n\x14\r\x14\x0E\x14\u0280\x05\x14\u0283" +
		"\n\x14\x03\x15\x06\x15\u0286\n\x15\r\x15\x0E\x15\u0287\x03\x16\x05\x16" +
		"\u028B\n\x16\x03\x16\x03\x16\x06\x16\u028F\n\x16\r\x16\x0E\x16\u0290\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x06\x18\u0297\n\x18\r\x18\x0E\x18\u0298\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03" +
		"!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03" +
		"(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03" +
		"/\x03/\x030\x030\x031\x031\x032\x032\x033\x033\x034\x064\u02D4\n4\r4\x0E" +
		"4\u02D5\x035\x065\u02D9\n5\r5\x0E5\u02DA\x02\x02\x026\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02" +
		"\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/" +
		"\x02\x191\x02\x023\x02\x025\x02\x027\x02\x029\x02\x02;\x02\x02=\x02\x02" +
		"?\x02\x02A\x02\x02C\x02\x02E\x02\x02G\x02\x02I\x02\x02K\x02\x02M\x02\x02" +
		"O\x02\x02Q\x02\x02S\x02\x02U\x02\x02W\x02\x02Y\x02\x02[\x02\x02]\x02\x02" +
		"_\x02\x02a\x02\x02c\x02\x02e\x02\x02g\x02\x02i\x02\x02\x03\x02!\x04\x02" +
		"\v\v\"\"\x03\x02$$\x04\x02CCcc\x04\x02DDdd\x04\x02EEee\x04\x02FFff\x04" +
		"\x02GGgg\x04\x02HHhh\x04\x02IIii\x04\x02JJjj\x04\x02KKkk\x04\x02LLll\x04" +
		"\x02MMmm\x04\x02NNnn\x04\x02OOoo\x04\x02PPpp\x04\x02QQqq\x04\x02RRrr\x04" +
		"\x02SSss\x04\x02TTtt\x04\x02UUuu\x04\x02VVvv\x04\x02WWww\x04\x02XXxx\x04" +
		"\x02YYyy\x04\x02ZZzz\x04\x02[[{{\x04\x02\\\\||\x03\x022;\x07\x02))..2" +
		";C\\c|\t\x02\"\"))./1;C\\aac|\x02\u0311\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
		"\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03" +
		"\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02" +
		"\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02" +
		"\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x03k\x03" +
		"\x02\x02\x02\x05s\x03\x02\x02\x02\x07\x7F\x03\x02\x02\x02\t\x8F\x03\x02" +
		"\x02\x02\v\x9F\x03\x02\x02\x02\r\xB2\x03\x02\x02\x02\x0F\xB9\x03\x02\x02" +
		"\x02\x11\xC1\x03\x02\x02\x02\x13\xDC\x03\x02\x02\x02\x15\u0107\x03\x02" +
		"\x02\x02\x17\u0110\x03\x02\x02\x02\x19\u0135\x03\x02\x02\x02\x1B\u0138" +
		"\x03\x02\x02\x02\x1D\u01A6\x03\x02\x02\x02\x1F\u01C1\x03\x02\x02\x02!" +
		"\u01DF\x03\x02\x02\x02#\u01FA\x03\x02\x02\x02%\u0218\x03\x02\x02\x02\'" +
		"\u0282\x03\x02\x02\x02)\u0285\x03\x02\x02\x02+\u028E\x03\x02\x02\x02-" +
		"\u0292\x03\x02\x02\x02/\u0294\x03\x02\x02\x021\u029C\x03\x02\x02\x023" +
		"\u029E\x03\x02\x02\x025\u02A0\x03\x02\x02\x027\u02A2\x03\x02\x02\x029" +
		"\u02A4\x03\x02\x02\x02;\u02A6\x03\x02\x02\x02=\u02A8\x03\x02\x02\x02?" +
		"\u02AA\x03\x02\x02\x02A\u02AC\x03\x02\x02\x02C\u02AE\x03\x02\x02\x02E" +
		"\u02B0\x03\x02\x02\x02G\u02B2\x03\x02\x02\x02I\u02B4\x03\x02\x02\x02K" +
		"\u02B6\x03\x02\x02\x02M\u02B8\x03\x02\x02\x02O\u02BA\x03\x02\x02\x02Q" +
		"\u02BC\x03\x02\x02\x02S\u02BE\x03\x02\x02\x02U\u02C0\x03\x02\x02\x02W" +
		"\u02C2\x03\x02\x02\x02Y\u02C4\x03\x02\x02\x02[\u02C6\x03\x02\x02\x02]" +
		"\u02C8\x03\x02\x02\x02_\u02CA\x03\x02\x02\x02a\u02CC\x03\x02\x02\x02c" +
		"\u02CE\x03\x02\x02\x02e\u02D0\x03\x02\x02\x02g\u02D3\x03\x02\x02\x02i" +
		"\u02D8\x03\x02\x02\x02kl\x07~\x02\x02l\x04\x03\x02\x02\x02mn\x05W,\x02" +
		"no\x05a1\x02op\x05O(\x02pq\x059\x1D\x02qt\x03\x02\x02\x02rt\x05W,\x02" +
		"sm\x03\x02\x02\x02sr\x03\x02\x02\x02t\x06\x03\x02\x02\x02uv\x05O(\x02" +
		"vw\x05M\'\x02wx\x05]/\x02xy\x059\x1D\x02yz\x05S*\x02z\x80\x03\x02\x02" +
		"\x02{|\x05O(\x02|}\x05M\'\x02}~\x05]/\x02~\x80\x03\x02\x02\x02\x7Fu\x03" +
		"\x02\x02\x02\x7F{\x03\x02\x02\x02\x80\b\x03\x02\x02\x02\x81\x82\x05W," +
		"\x02\x82\x83\x05M\'\x02\x83\x84\x05Y-\x02\x84\x85\x05=\x1F\x02\x85\x86" +
		"\x05? \x02\x86\x87\x05K&\x02\x87\x88\x059\x1D\x02\x88\x89\x05U+\x02\x89" +
		"\x8A\x05U+\x02\x8A\x90\x03\x02\x02\x02\x8B\x8C\x05W,\x02\x8C\x8D\x05M" +
		"\'\x02\x8D\x8E\x05Y-\x02\x8E\x90\x03\x02\x02\x02\x8F\x81\x03\x02\x02\x02" +
		"\x8F\x8B\x03\x02\x02\x02\x90\n\x03\x02\x02\x02\x91\x92\x055\x1B\x02\x92" +
		"\x93\x05M\'\x02\x93\x94\x05G$\x02\x94\x95\x05M\'\x02\x95\x96\x05S*\x02" +
		"\x96\xA0\x03\x02\x02\x02\x97\x98\x055\x1B\x02\x98\x99\x05M\'\x02\x99\x9A" +
		"\x05G$\x02\x9A\x9B\x05M\'\x02\x9B\x9C\x05Y-\x02\x9C\x9D\x05S*\x02\x9D" +
		"\xA0\x03\x02\x02\x02\x9E\xA0\x055\x1B\x02\x9F\x91\x03\x02\x02\x02\x9F" +
		"\x97\x03\x02\x02\x02\x9F\x9E\x03\x02\x02\x02\xA0\f\x03\x02\x02\x02\xA1" +
		"\xA2\x05U+\x02\xA2\xA3\x059\x1D\x02\xA3\xA4\x05W,\x02\xA4\xA5\x07a\x02" +
		"\x02\xA5\xA6\x05K&\x02\xA6\xA7\x051\x19\x02\xA7\xA8\x05I%\x02\xA8\xA9" +
		"\x059\x1D\x02\xA9\xB3\x03\x02\x02\x02\xAA\xAB\x05U+\x02\xAB\xAC\x059\x1D" +
		"\x02\xAC\xAD\x05W,\x02\xAD\xAE\x05K&\x02\xAE\xAF\x051\x19\x02\xAF\xB0" +
		"\x05I%\x02\xB0\xB1\x059\x1D\x02\xB1\xB3\x03\x02\x02\x02\xB2\xA1\x03\x02" +
		"\x02\x02\xB2\xAA\x03\x02\x02\x02\xB3\x0E\x03\x02\x02\x02\xB4\xB5\x05U" +
		"+\x02\xB5\xB6\x059\x1D\x02\xB6\xB7\x05W,\x02\xB7\xBA\x03\x02\x02\x02\xB8" +
		"\xBA\x05U+\x02\xB9\xB4\x03\x02\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\x10" +
		"\x03\x02\x02\x02\xBB\xBC\x05K&\x02\xBC\xBD\x051\x19\x02\xBD\xBE\x05I%" +
		"\x02\xBE\xBF\x059\x1D\x02\xBF\xC2\x03\x02\x02\x02\xC0\xC2\x05K&\x02\xC1" +
		"\xBB\x03\x02\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2\x12\x03\x02\x02\x02\xC3" +
		"\xC4\x05U+\x02\xC4\xC5\x05A!\x02\xC5\xC6\x05I%\x02\xC6\xDD\x03\x02\x02" +
		"\x02\xC7\xC8\x05U+\x02\xC8\xC9\x05A!\x02\xC9\xCA\x05I%\x02\xCA\xCB\x05" +
		"A!\x02\xCB\xCC\x05G$\x02\xCC\xCD\x051\x19\x02\xCD\xCF\x05S*\x02\xCE\xD0" +
		"\x05)\x15\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1" +
		"\x03\x02\x02\x02\xD1\xD2\x05W,\x02\xD2\xD3\x05M\'\x02\xD3\xDD\x03\x02" +
		"\x02\x02\xD4\xD5\x05U+\x02\xD5\xD6\x05A!\x02\xD6\xD7\x05I%\x02\xD7\xD8" +
		"\x05A!\x02\xD8\xD9\x05G$\x02\xD9\xDA\x051\x19\x02\xDA\xDB\x05S*\x02\xDB" +
		"\xDD\x03\x02\x02\x02\xDC\xC3\x03\x02\x02\x02\xDC\xC7\x03\x02\x02\x02\xDC" +
		"\xD4\x03\x02\x02\x02\xDD\x14\x03\x02\x02\x02\xDE\xDF\x055\x1B\x02\xDF" +
		"\xE0\x05I%\x02\xE0\xE1\x055\x1B\x02\xE1\u0108\x03\x02\x02\x02\xE2\xE3" +
		"\x055\x1B\x02\xE3\xE4\x05M\'\x02\xE4\xE5\x05K&\x02\xE5\xE6\x05[.\x02\xE6" +
		"\xE7\x059\x1D\x02\xE7\xE8\x05S*\x02\xE8\xE9\x05W,\x02\xE9\xEA\x059\x1D" +
		"\x02\xEA\xEB\x057\x1C\x02\xEB\xEC\x05I%\x02\xEC\xED\x051\x19\x02\xED\xEE" +
		"\x05K&\x02\xEE\xEF\x051\x19\x02\xEF\xF0\x055\x1B\x02\xF0\xF1\x05M\'\x02" +
		"\xF1\xF2\x05U+\x02\xF2\xF3\x05W,\x02\xF3\u0108\x03\x02\x02\x02\xF4\xF5" +
		"\x055\x1B\x02\xF5\xF6\x05M\'\x02\xF6\xF7\x05K&\x02\xF7\xF8\x05[.\x02\xF8" +
		"\xF9\x059\x1D\x02\xF9\xFA\x05S*\x02\xFA\xFB\x05W,\x02\xFB\xFC\x059\x1D" +
		"\x02\xFC\xFD\x057\x1C\x02\xFD\xFE\x05)\x15\x02\xFE\xFF\x05I%\x02\xFF\u0100" +
		"\x051\x19\x02\u0100\u0101\x05K&\x02\u0101\u0102\x051\x19\x02\u0102\u0103" +
		"\x055\x1B\x02\u0103\u0104\x05M\'\x02\u0104\u0105\x05U+\x02\u0105\u0106" +
		"\x05W,\x02\u0106\u0108\x03\x02\x02\x02\u0107\xDE\x03\x02\x02\x02\u0107" +
		"\xE2\x03\x02\x02\x02\u0107\xF4\x03\x02\x02\x02\u0108\x16\x03\x02\x02\x02" +
		"\u0109\u010A\x05W,\x02\u010A\u010B\x059\x1D\x02\u010B\u010C\x05_0\x02" +
		"\u010C\u010D\x05W,\x02\u010D\u0111\x03\x02\x02\x02\u010E\u0111\x05M\'" +
		"\x02\u010F\u0111\x05W,\x02\u0110\u0109\x03\x02\x02\x02\u0110\u010E\x03" +
		"\x02\x02\x02\u0110\u010F\x03\x02\x02\x02\u0111\x18\x03\x02\x02\x02\u0112" +
		"\u0113\x055\x1B\x02\u0113\u0114\x05I%\x02\u0114\u0115\x057\x1C\x02\u0115" +
		"\u0136\x03\x02\x02\x02\u0116\u0117\x055\x1B\x02\u0117\u0118\x05M\'\x02" +
		"\u0118\u0119\x05I%\x02\u0119\u011A\x05I%\x02\u011A\u011B\x051\x19\x02" +
		"\u011B\u011C\x05K&\x02\u011C\u011D\x057\x1C\x02\u011D\u011E\x059\x1D\x02" +
		"\u011E\u011F\x05S*\x02\u011F\u0136\x03\x02\x02\x02\u0120\u0121\x055\x1B" +
		"\x02\u0121\u0122\x05M\'\x02\u0122\u0123\x05I%\x02\u0123\u0124\x05I%\x02" +
		"\u0124\u0125\x051\x19\x02\u0125\u0126\x05K&\x02\u0126\u0127\x057\x1C\x02" +
		"\u0127\u0128\x059\x1D\x02\u0128\u012A\x05S*\x02\u0129\u012B\x05)\x15\x02" +
		"\u012A\u0129\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03" +
		"\x02\x02\x02\u012C\u012D\x05A!\x02\u012D\u012E\x057\x1C\x02\u012E\u012F" +
		"\x059\x1D\x02\u012F\u0130\x05K&\x02\u0130\u0131\x05W,\x02\u0131\u0132" +
		"\x05A!\x02\u0132\u0133\x05W,\x02\u0133\u0134\x05a1\x02\u0134\u0136\x03" +
		"\x02\x02\x02\u0135\u0112\x03\x02\x02\x02\u0135\u0116\x03\x02\x02\x02\u0135" +
		"\u0120\x03\x02\x02\x02\u0136\x1A\x03\x02\x02\x02\u0137\u0139\x05e3\x02" +
		"\u0138\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u0138\x03" +
		"\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\x1C\x03\x02\x02\x02\u013C" +
		"\u013E\x05)\x15\x02\u013D\u013C\x03\x02\x02\x02\u013E\u0141\x03\x02\x02" +
		"\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0142" +
		"\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0146\x07?\x02\x02" +
		"\u0143\u0145\x05)\x15\x02\u0144\u0143\x03\x02\x02\x02\u0145\u0148\x03" +
		"\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147" +
		"\u01A7\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0149\u014B\x05)\x15" +
		"\x02\u014A\u0149\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014A" +
		"\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014F\x03\x02\x02\x02" +
		"\u014E\u014C\x03\x02\x02\x02\u014F\u0153\x07<\x02\x02\u0150\u0152\x05" +
		")\x15\x02\u0151\u0150\x03\x02\x02\x02\u0152\u0155\x03\x02\x02\x02\u0153" +
		"\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u01A7\x03\x02" +
		"\x02\x02\u0155\u0153\x03\x02\x02\x02\u0156\u0158\x05)\x15\x02\u0157\u0156" +
		"\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02" +
		"\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x05" +
		"9\x1D\x02\u015C\u015E\x05Q)\x02\u015D\u015F\x05)\x15\x02\u015E\u015D\x03" +
		"\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0160" +
		"\u0161\x03\x02\x02\x02\u0161\u01A7\x03\x02\x02\x02\u0162\u0164\x05)\x15" +
		"\x02\u0163\u0162\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0163" +
		"\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02" +
		"\u0167\u0168\x059\x1D\x02\u0168\u0169\x05Q)\x02\u0169\u016A\x05Y-\x02" +
		"\u016A\u016B\x051\x19\x02\u016B\u016D\x05G$\x02\u016C\u016E\x05)\x15\x02" +
		"\u016D\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u016D\x03" +
		"\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u01A7\x03\x02\x02\x02\u0171" +
		"\u0173\x05)\x15\x02\u0172\u0171\x03\x02\x02\x02\u0173\u0174\x03\x02\x02" +
		"\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176" +
		"\x03\x02\x02\x02\u0176\u0177\x059\x1D\x02\u0177\u0178\x05Q)\x02\u0178" +
		"\u0179\x05Y-\x02\u0179\u017A\x051\x19\x02\u017A\u017B\x05G$\x02\u017B" +
		"\u017D\x05U+\x02\u017C\u017E\x05)\x15\x02\u017D\u017C\x03\x02\x02\x02" +
		"\u017E\u017F\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03" +
		"\x02\x02\x02\u0180\u01A7\x03\x02\x02\x02\u0181\u0183\x05)\x15\x02\u0182" +
		"\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0182\x03\x02" +
		"\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
		"\u0187\x05W,\x02\u0187\u0188\x05M\'\x02\u0188\u0189\x05)\x15\x02\u0189" +
		"\u018A\x059\x1D\x02\u018A\u018B\x05Q)\x02\u018B\u018C\x05Y-\x02\u018C" +
		"\u018D\x051\x19\x02\u018D\u018F\x05G$\x02\u018E\u0190\x05)\x15\x02\u018F" +
		"\u018E\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u018F\x03\x02" +
		"\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u01A7\x03\x02\x02\x02\u0193" +
		"\u0195\x05)\x15\x02\u0194\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02" +
		"\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198" +
		"\x03\x02\x02\x02\u0198\u0199\x05W,\x02\u0199\u019A\x05M\'\x02\u019A\u019B" +
		"\x05)\x15\x02\u019B\u019C\x059\x1D\x02\u019C\u019D\x05Q)\x02\u019D\u019E" +
		"\x05Y-\x02\u019E\u019F\x051\x19\x02\u019F\u01A0\x05G$\x02\u01A0\u01A2" +
		"\x05U+\x02\u01A1\u01A3\x05)\x15\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3" +
		"\u01A4\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A5\x03\x02" +
		"\x02\x02\u01A5\u01A7\x03\x02\x02\x02\u01A6\u013F\x03\x02\x02\x02\u01A6" +
		"\u014C\x03\x02\x02\x02\u01A6\u0157\x03\x02\x02\x02\u01A6\u0163\x03\x02" +
		"\x02\x02\u01A6\u0172\x03\x02\x02\x02\u01A6\u0182\x03\x02\x02\x02\u01A6" +
		"\u0194\x03\x02\x02\x02\u01A7\x1E\x03\x02\x02\x02\u01A8\u01AA\x05)\x15" +
		"\x02\u01A9\u01A8\x03\x02\x02\x02\u01AA\u01AD\x03\x02\x02\x02\u01AB\u01A9" +
		"\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AE\x03\x02\x02\x02" +
		"\u01AD\u01AB\x03\x02\x02\x02\u01AE\u01B2\x07>\x02\x02\u01AF\u01B1\x05" +
		")\x15\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2" +
		"\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01C2\x03\x02" +
		"\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5\u01B7\x05)\x15\x02\u01B6\u01B5" +
		"\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02" +
		"\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BB\x05" +
		"G$\x02\u01BB\u01BD\x05W,\x02\u01BC\u01BE\x05)\x15\x02\u01BD\u01BC\x03" +
		"\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF" +
		"\u01C0\x03\x02\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01AB\x03\x02" +
		"\x02\x02\u01C1\u01B6\x03\x02\x02\x02\u01C2 \x03\x02\x02\x02\u01C3\u01C5" +
		"\x05)\x15\x02\u01C4\u01C3\x03\x02\x02\x02\u01C5\u01C8\x03\x02\x02\x02" +
		"\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03" +
		"\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9\u01CA\x07>\x02\x02\u01CA" +
		"\u01CB\x07?\x02\x02\u01CB\u01CF\x03\x02\x02\x02\u01CC\u01CE\x05)\x15\x02" +
		"\u01CD\u01CC\x03\x02\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03" +
		"\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01E0\x03\x02\x02\x02\u01D1" +
		"\u01CF\x03\x02\x02\x02\u01D2\u01D4\x05)\x15\x02\u01D3\u01D2\x03\x02\x02" +
		"\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6" +
		"\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x05G$\x02\u01D8" +
		"\u01D9\x05W,\x02\u01D9\u01DB\x059\x1D\x02\u01DA\u01DC\x05)\x15\x02\u01DB" +
		"\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DB\x03\x02" +
		"\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01E0\x03\x02\x02\x02\u01DF" +
		"\u01C6\x03\x02\x02\x02\u01DF\u01D3\x03\x02\x02\x02\u01E0\"\x03\x02\x02" +
		"\x02\u01E1\u01E3\x05)\x15\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E6" +
		"\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02" +
		"\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01EB\x07" +
		"@\x02\x02\u01E8\u01EA\x05)\x15\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA";
	private static readonly _serializedATNSegment1: string =
		"\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EC\x03\x02" +
		"\x02\x02\u01EC\u01FB\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01EE" +
		"\u01F0\x05)\x15\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02" +
		"\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F3" +
		"\x03\x02\x02\x02\u01F3\u01F4\x05=\x1F\x02\u01F4\u01F6\x05W,\x02\u01F5" +
		"\u01F7\x05)\x15\x02\u01F6\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02" +
		"\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FB" +
		"\x03\x02\x02\x02\u01FA\u01E4\x03\x02\x02\x02\u01FA\u01EF\x03\x02\x02\x02" +
		"\u01FB$\x03\x02\x02\x02\u01FC\u01FE\x05)\x15\x02\u01FD\u01FC\x03\x02\x02" +
		"\x02\u01FE\u0201\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF\u0200" +
		"\x03\x02\x02\x02\u0200\u0202\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02" +
		"\u0202\u0203\x07@\x02\x02\u0203\u0204\x07?\x02\x02\u0204\u0208\x03\x02" +
		"\x02\x02\u0205\u0207\x05)\x15\x02\u0206\u0205\x03\x02\x02\x02\u0207\u020A" +
		"\x03\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02" +
		"\u0209\u0219\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020B\u020D\x05" +
		")\x15\x02\u020C\u020B\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E" +
		"\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u0210\x03\x02" +
		"\x02\x02\u0210\u0211\x05=\x1F\x02\u0211\u0212\x05W,\x02\u0212\u0214\x05" +
		"9\x1D\x02\u0213\u0215\x05)\x15\x02\u0214\u0213\x03\x02\x02\x02\u0215\u0216" +
		"\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02" +
		"\u0217\u0219\x03\x02\x02\x02\u0218\u01FF\x03\x02\x02\x02\u0218\u020C\x03" +
		"\x02\x02\x02\u0219&\x03\x02\x02\x02\u021A\u021C\x05)\x15\x02\u021B\u021A" +
		"\x03\x02\x02\x02\u021C\u021F\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02" +
		"\u021D\u021E\x03\x02\x02\x02\u021E\u0220\x03\x02\x02\x02\u021F\u021D\x03" +
		"\x02\x02\x02\u0220\u0221\x07#\x02\x02\u0221\u0222\x07?\x02\x02\u0222\u0226" +
		"\x03\x02\x02\x02\u0223\u0225\x05)\x15\x02\u0224\u0223\x03\x02\x02\x02" +
		"\u0225\u0228\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0227\x03" +
		"\x02\x02\x02\u0227\u0283\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0229" +
		"\u022B\x05)\x15\x02\u022A\u0229\x03\x02\x02\x02\u022B\u022E\x03\x02\x02" +
		"\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022F" +
		"\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022F\u0230\x07#\x02\x02" +
		"\u0230\u0231\x07<\x02\x02\u0231\u0235\x03\x02\x02\x02\u0232\u0234\x05" +
		")\x15\x02\u0233\u0232\x03\x02\x02\x02\u0234\u0237\x03\x02\x02\x02\u0235" +
		"\u0233\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0283\x03\x02" +
		"\x02\x02\u0237\u0235\x03\x02\x02\x02\u0238\u023A\x05)\x15\x02\u0239\u0238" +
		"\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02" +
		"\u023B\u023C\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x05" +
		"K&\x02\u023E\u023F\x059\x1D\x02\u023F\u0241\x05Q)\x02\u0240\u0242\x05" +
		")\x15\x02\u0241\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243" +
		"\u0241\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0283\x03\x02" +
		"\x02\x02\u0245\u0247\x05)\x15\x02\u0246\u0245\x03\x02\x02\x02\u0247\u0248" +
		"\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02" +
		"\u0249\u024A\x03\x02\x02\x02\u024A\u024B\x05K&\x02\u024B\u024C\x05M\'" +
		"\x02\u024C\u024D\x05W,\x02\u024D\u024E\x05)\x15\x02\u024E\u024F\x059\x1D" +
		"\x02\u024F\u0250\x05Q)\x02\u0250\u0251\x05Y-\x02\u0251\u0252\x051\x19" +
		"\x02\u0252\u0254\x05G$\x02\u0253\u0255\x05)\x15\x02\u0254\u0253\x03\x02" +
		"\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0254\x03\x02\x02\x02\u0256" +
		"\u0257\x03\x02\x02\x02\u0257\u0283\x03\x02\x02\x02\u0258\u025A\x05)\x15" +
		"\x02\u0259\u0258\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u0259" +
		"\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02" +
		"\u025D\u025E\x05K&\x02\u025E\u025F\x05M\'\x02\u025F\u0260\x05W,\x02\u0260" +
		"\u0261\x05)\x15\x02\u0261\u0262\x059\x1D\x02\u0262\u0263\x05Q)\x02\u0263" +
		"\u0264\x05Y-\x02\u0264\u0265\x051\x19\x02\u0265\u0266\x05G$\x02\u0266" +
		"\u0268\x05U+\x02\u0267\u0269\x05)\x15\x02\u0268\u0267\x03\x02\x02\x02" +
		"\u0269\u026A\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026A\u026B\x03" +
		"\x02\x02\x02\u026B\u0283\x03\x02\x02\x02\u026C\u026E\x05)\x15\x02\u026D" +
		"\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u026D\x03\x02" +
		"\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271" +
		"\u0272\x05W,\x02\u0272\u0273\x05M\'\x02\u0273\u0274\x05)\x15\x02\u0274" +
		"\u0275\x05K&\x02\u0275\u0276\x05M\'\x02\u0276\u0277\x05W,\x02\u0277\u0278" +
		"\x05)\x15\x02\u0278\u0279\x059\x1D\x02\u0279\u027A\x05Q)\x02\u027A\u027B" +
		"\x05Y-\x02\u027B\u027C\x051\x19\x02\u027C\u027E\x05G$\x02\u027D\u027F" +
		"\x05)\x15\x02\u027E\u027D\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02" +
		"\u0280\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0283\x03" +
		"\x02\x02\x02\u0282\u021D\x03\x02\x02\x02\u0282\u022C\x03\x02\x02\x02\u0282" +
		"\u0239\x03\x02\x02\x02\u0282\u0246\x03\x02\x02\x02\u0282\u0259\x03\x02" +
		"\x02\x02\u0282\u026D\x03\x02\x02\x02\u0283(\x03\x02\x02\x02\u0284\u0286" +
		"\t\x02\x02\x02\u0285\u0284\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02" +
		"\u0287\u0285\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288*\x03\x02" +
		"\x02\x02\u0289\u028B\x07\x0F\x02\x02\u028A\u0289\x03\x02\x02\x02\u028A" +
		"\u028B\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028F\x07\f\x02" +
		"\x02\u028D\u028F\x07\x0F\x02\x02\u028E\u028A\x03\x02\x02\x02\u028E\u028D" +
		"\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02" +
		"\u0290\u0291\x03\x02\x02\x02\u0291,\x03\x02\x02\x02\u0292\u0293\x05g4" +
		"\x02\u0293.\x03\x02\x02\x02\u0294\u0296\x07$\x02\x02\u0295\u0297\n\x03" +
		"\x02\x02\u0296\u0295\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298" +
		"\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x03\x02" +
		"\x02\x02\u029A\u029B\x07$\x02\x02\u029B0\x03\x02\x02\x02\u029C\u029D\t" +
		"\x04\x02\x02\u029D2\x03\x02\x02\x02\u029E\u029F\t\x05\x02\x02\u029F4\x03" +
		"\x02\x02\x02\u02A0\u02A1\t\x06\x02\x02\u02A16\x03\x02\x02\x02\u02A2\u02A3" +
		"\t\x07\x02\x02\u02A38\x03\x02\x02\x02\u02A4\u02A5\t\b\x02\x02\u02A5:\x03" +
		"\x02\x02\x02\u02A6\u02A7\t\t\x02\x02\u02A7<\x03\x02\x02\x02\u02A8\u02A9" +
		"\t\n\x02\x02\u02A9>\x03\x02\x02\x02\u02AA\u02AB\t\v\x02\x02\u02AB@\x03" +
		"\x02\x02\x02\u02AC\u02AD\t\f\x02\x02\u02ADB\x03\x02\x02\x02\u02AE\u02AF" +
		"\t\r\x02\x02\u02AFD\x03\x02\x02\x02\u02B0\u02B1\t\x0E\x02\x02\u02B1F\x03" +
		"\x02\x02\x02\u02B2\u02B3\t\x0F\x02\x02\u02B3H\x03\x02\x02\x02\u02B4\u02B5" +
		"\t\x10\x02\x02\u02B5J\x03\x02\x02\x02\u02B6\u02B7\t\x11\x02\x02\u02B7" +
		"L\x03\x02\x02\x02\u02B8\u02B9\t\x12\x02\x02\u02B9N\x03\x02\x02\x02\u02BA" +
		"\u02BB\t\x13\x02\x02\u02BBP\x03\x02\x02\x02\u02BC\u02BD\t\x14\x02\x02" +
		"\u02BDR\x03\x02\x02\x02\u02BE\u02BF\t\x15\x02\x02\u02BFT\x03\x02\x02\x02" +
		"\u02C0\u02C1\t\x16\x02\x02\u02C1V\x03\x02\x02\x02\u02C2\u02C3\t\x17\x02" +
		"\x02\u02C3X\x03\x02\x02\x02\u02C4\u02C5\t\x18\x02\x02\u02C5Z\x03\x02\x02" +
		"\x02\u02C6\u02C7\t\x19\x02\x02\u02C7\\\x03\x02\x02\x02\u02C8\u02C9\t\x1A" +
		"\x02\x02\u02C9^\x03\x02\x02\x02\u02CA\u02CB\t\x1B\x02\x02\u02CB`\x03\x02" +
		"\x02\x02\u02CC\u02CD\t\x1C\x02\x02\u02CDb\x03\x02\x02\x02\u02CE\u02CF" +
		"\t\x1D\x02\x02\u02CFd\x03\x02\x02\x02\u02D0\u02D1\t\x1E\x02\x02\u02D1" +
		"f\x03\x02\x02\x02\u02D2\u02D4\t\x1F\x02\x02\u02D3\u02D2\x03\x02\x02\x02" +
		"\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D6\x03" +
		"\x02\x02\x02\u02D6h\x03\x02\x02\x02\u02D7\u02D9\t \x02\x02\u02D8\u02D7" +
		"\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02D8\x03\x02\x02\x02" +
		"\u02DA\u02DB\x03\x02\x02\x02\u02DBj\x03\x02\x02\x02H\x02s\x7F\x8F\x9F" +
		"\xB2\xB9\xC1\xCF\xDC\u0107\u0110\u012A\u0135\u013A\u013F\u0146\u014C\u0153" +
		"\u0159\u0160\u0165\u016F\u0174\u017F\u0184\u0191\u0196\u01A4\u01A6\u01AB" +
		"\u01B2\u01B8\u01BF\u01C1\u01C6\u01CF\u01D5\u01DD\u01DF\u01E4\u01EB\u01F1" +
		"\u01F8\u01FA\u01FF\u0208\u020E\u0216\u0218\u021D\u0226\u022C\u0235\u023B" +
		"\u0243\u0248\u0256\u025B\u026A\u026F\u0280\u0282\u0287\u028A\u028E\u0290" +
		"\u0298\u02D5\u02DA\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			QueryLangLexer._serializedATNSegment0,
			QueryLangLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!QueryLangLexer.__ATN) {
			QueryLangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(QueryLangLexer._serializedATN));
		}

		return QueryLangLexer.__ATN;
	}

}

