grammar QueryLang;

options {
	language = JavaScript;
}

/*
 * Parser Rules
 */
wholeQuery: query (WS+ wholeQuery)* EOF;
query:
	nameQuery
	| typeQuery
	| setQuery
	| cmcQuery
	| colorQuery
	| commanderIdentityQuery
	| powerQuery
	| toughnessQuery
	| textQuery;
typeQuery: TYPE_KEYWORD operatorEquality value;
cmcQuery: CMC_KEYWORD operatorComparison numberValue;
nameQuery: NAME_KEYWORD operatorEquality value;
powerQuery: POWER_KEYWORD operatorComparison numberValue;
toughnessQuery:
	TOUGHNESS_KEYWORD operatorComparison numberValue;
commanderIdentityQuery:
	COMMANDER_IDENTITY_KEYWORD operatorComparison colorValue;
colorQuery: COLOR_KEYWORD operatorComparison colorValue;
setQuery: SET_KEYWORD operatorEquality value;
textQuery: (TEXT_KEYWORD operatorEquality value) | value;

operatorComparison: operatorEquality | operatorOrder;
operatorEquality: operatorEq | operatorNeq;
operatorOrder:
	operatorGt
	| operatorGte
	| operatorLt
	| operatorLte;

operatorEq: OPERATOR_EQ;
operatorLt: OPERATOR_LT;
operatorLte: OPERATOR_LTE;
operatorGt: OPERATOR_GT;
operatorGte: OPERATOR_GTE;
operatorNeq: OPERATOR_NEQ;

numberValue: NUMBER_VALUE;

/*
 There are some issues with lexer when color value is token COLOR_VALUE or (BLACK | RED | GREEN |
 BLUE | WHITE)+;
 
 Having 'value' here works for now, but let's fix it later.
 */
colorValue: value;

/*
 Imagine query 'color color < rg' where 'color < rg' should be matched as color query 'color' should
 be matched as text query
 
 because it does not match color query rule (there is no operator afterwards)
 
 ANTL4's Lexer converts everything to tokens, so it saves string 'color' as COLOR_KEYWORD and not as
 VALUE.
 
 So without having the COLOR_KEYWORD here, it would never match string 'color' as value but only as
 a "keyword" in the color query.
 
 Note: the order of the parser rules is extremly important for this trick.
 */
value:
	VALUE
	| QUOTED_VALUE
	| TYPE_KEYWORD
	| COLOR_KEYWORD
	| SET_KEYWORD
	| NAME_KEYWORD
	| CMC_KEYWORD
	| TEXT_KEYWORD
	| POWER_KEYWORD
	| TOUGHNESS_KEYWORD
	| COMMANDER_IDENTITY_KEYWORD;

/*
 * Lexer Rules
 */
TYPE_KEYWORD: T Y P E | T;
POWER_KEYWORD: P O W E R | P O W;
TOUGHNESS_KEYWORD: T O U G H N E S S | T O U;
COLOR_KEYWORD: C O L O R | C O L O U R | C;
SET_KEYWORD: S E T | S;
NAME_KEYWORD: N A M E | N;
CMC_KEYWORD:
	C M C
	| (C O N V E R T E D M A N A C O S T)
	| (C O N V E R T E D WS M A N A C O S T);
TEXT_KEYWORD: T E X T | O | T;
COMMANDER_IDENTITY_KEYWORD:
	C M D
	| C O M M A N D E R
	| C O M M A N D E R WS? I D E N T I T Y;
NUMBER_VALUE: NUMBER+;
/*
 // RED: R E D | R; RED: R; // GREEN: G R E E N | G; GREEN: G; // BLUE: B L U E | U; BLUE: U; //
 WHITE: W H I T E | W; WHITE: W; // BLACK: B L A C K | B; BLACK: B; COLOR_VALUE: (BLACK | RED |
 GREEN | BLUE | WHITE)+;
 */
OPERATOR_EQ:
	WS* '=' WS*
	| WS* ':' WS*
	| (WS+ E Q WS+)
	| (WS+ E Q U A L WS+)
	| (WS+ E Q U A L S WS+)
	| (WS+ T O WS E Q U A L WS+)
	| (WS+ T O WS E Q U A L S WS+);
OPERATOR_LT: WS* '<' WS* | (WS+ L T WS+);
OPERATOR_LTE: WS* '<=' WS* | (WS+ L T E WS+);
OPERATOR_GT: WS* '>' WS* | (WS+ G T WS+);
OPERATOR_GTE: WS* '>=' WS* | (WS+ G T E WS+);
OPERATOR_NEQ:
	WS* '!=' WS*
	| WS* '!:' WS*
	| (WS+ N E Q WS+)
	| (WS+ N O T WS E Q U A L WS+)
	| (WS+ N O T WS E Q U A L S WS+)
	| (WS+ T O WS N O T WS E Q U A L WS+);
WS: (' ' | '\t')+;
NEWLINE: ('\r'? '\n' | '\r')+;
VALUE: VAL;
QUOTED_VALUE: QUOTE VAL_SPACE QUOTE;

fragment A: [aA];
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];
fragment NUMBER: [0-9];
fragment VAL: [a-zA-Z0-9]+;
fragment VAL_SPACE: [a-zA-Z0-9\-_, ]+;
fragment QUOTE: ['"];
