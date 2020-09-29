grammar QueryLang;

options {
	language = JavaScript;
}

/*
 * Parser Rules
 */
wholeQuery: query (WS+ wholeQuery)*;
query:
	nameQuery
	| cmcQuery
	| commanderIdentityQuery
	| textQuery;
cmcQuery: CMC_KEYWORD operatorComparison numberValue;
nameQuery: NAME_KEYWORD operatorEquality value;
commanderIdentityQuery:
	COMMANDER_IDENTITY_KEYWORD operatorComparison colorValue;
textQuery: (TEXT_KEYWORD operatorEquality value) | value;

operatorComparison: operatorEq | operatorOrder;
operatorEquality: operatorEq | operatorNeq;
operatorOrder:
	operatorGt
	| operatorGte
	| operatorLt
	| operatorLte;

// Just so I can use listener for these rules
operatorEq: OPERATOR_EQ;
operatorLt: OPERATOR_LT;
operatorLte: OPERATOR_LTE;
operatorGt: OPERATOR_GT;
operatorGte: OPERATOR_GTE;
operatorNeq: OPERATOR_NEQ;
numberValue: NUMBER_VALUE;
colorValue: COLOR_VALUE;
value: VALUE;

/*
 * Lexer Rules
 */
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
RED: R | R E D;
GREEN: G | G R E E N;
BLUE: U | B L U E;
WHITE: W | W H I T E;
BLACK: B | B L A C K;
COLOR_VALUE: (RED | GREEN | BLUE | WHITE | BLACK)+;
OPERATOR_EQ: WS* '=' WS* | WS* ':' WS* | (WS+ E Q WS+);
OPERATOR_LT: WS* '<' WS* | (WS+ L T WS+);
OPERATOR_LTE: WS* '<=' WS* | (WS+ L T E WS+);
OPERATOR_GT: WS* '>' WS* | (WS+ G T WS+);
OPERATOR_GTE: WS* '>=' WS* | (WS+ G T E WS+);
OPERATOR_NEQ: WS* '!=' | WS* '!:' | (WS+ N E Q WS+);
WS: (' ' | '\t')+;
NEWLINE: ('\r'? '\n' | '\r')+;
VALUE: VAL | QUOTE VAL_SPACE QUOTE;

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
