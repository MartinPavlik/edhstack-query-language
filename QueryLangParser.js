// Generated from QueryLang.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var QueryLangListener = require('./QueryLangListener').QueryLangListener;
var QueryLangVisitor = require('./QueryLangVisitor').QueryLangVisitor;

var grammarFileName = "QueryLang.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001a\u0088\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0003\u0002\u0003\u0002\u0006\u00021\n\u0002\r\u0002\u000e\u00022\u0003",
    "\u0002\u0007\u00026\n\u0002\f\u0002\u000e\u00029\u000b\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003C\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000bf\n\u000b\u0003\f\u0003\f",
    "\u0005\fj\n\f\u0003\r\u0003\r\u0005\rn\n\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000et\n\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0002\u0002\u0018",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(*,\u0002\u0003\u0004\u0002\u0003\n\u001a\u001a\u0002\u0080",
    "\u0002.\u0003\u0002\u0002\u0002\u0004B\u0003\u0002\u0002\u0002\u0006",
    "D\u0003\u0002\u0002\u0002\bH\u0003\u0002\u0002\u0002\nL\u0003\u0002",
    "\u0002\u0002\fP\u0003\u0002\u0002\u0002\u000eT\u0003\u0002\u0002\u0002",
    "\u0010X\u0003\u0002\u0002\u0002\u0012\\\u0003\u0002\u0002\u0002\u0014",
    "e\u0003\u0002\u0002\u0002\u0016i\u0003\u0002\u0002\u0002\u0018m\u0003",
    "\u0002\u0002\u0002\u001as\u0003\u0002\u0002\u0002\u001cu\u0003\u0002",
    "\u0002\u0002\u001ew\u0003\u0002\u0002\u0002 y\u0003\u0002\u0002\u0002",
    "\"{\u0003\u0002\u0002\u0002$}\u0003\u0002\u0002\u0002&\u007f\u0003\u0002",
    "\u0002\u0002(\u0081\u0003\u0002\u0002\u0002*\u0083\u0003\u0002\u0002",
    "\u0002,\u0085\u0003\u0002\u0002\u0002.7\u0005\u0004\u0003\u0002/1\u0007",
    "\u0018\u0002\u00020/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "20\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000234\u0003\u0002\u0002",
    "\u000246\u0005\u0002\u0002\u000250\u0003\u0002\u0002\u000269\u0003\u0002",
    "\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u00028\u0003",
    "\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:C\u0005\b\u0005\u0002",
    ";C\u0005\u0012\n\u0002<C\u0005\u0006\u0004\u0002=C\u0005\u0010\t\u0002",
    ">C\u0005\u000e\b\u0002?C\u0005\n\u0006\u0002@C\u0005\f\u0007\u0002A",
    "C\u0005\u0014\u000b\u0002B:\u0003\u0002\u0002\u0002B;\u0003\u0002\u0002",
    "\u0002B<\u0003\u0002\u0002\u0002B=\u0003\u0002\u0002\u0002B>\u0003\u0002",
    "\u0002\u0002B?\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BA\u0003",
    "\u0002\u0002\u0002C\u0005\u0003\u0002\u0002\u0002DE\u0007\b\u0002\u0002",
    "EF\u0005\u0016\f\u0002FG\u0005(\u0015\u0002G\u0007\u0003\u0002\u0002",
    "\u0002HI\u0007\u0007\u0002\u0002IJ\u0005\u0018\r\u0002JK\u0005,\u0017",
    "\u0002K\t\u0003\u0002\u0002\u0002LM\u0007\u0003\u0002\u0002MN\u0005",
    "\u0016\f\u0002NO\u0005(\u0015\u0002O\u000b\u0003\u0002\u0002\u0002P",
    "Q\u0007\u0004\u0002\u0002QR\u0005\u0016\f\u0002RS\u0005(\u0015\u0002",
    "S\r\u0003\u0002\u0002\u0002TU\u0007\n\u0002\u0002UV\u0005\u0016\f\u0002",
    "VW\u0005*\u0016\u0002W\u000f\u0003\u0002\u0002\u0002XY\u0007\u0005\u0002",
    "\u0002YZ\u0005\u0016\f\u0002Z[\u0005*\u0016\u0002[\u0011\u0003\u0002",
    "\u0002\u0002\\]\u0007\u0006\u0002\u0002]^\u0005\u0018\r\u0002^_\u0005",
    ",\u0017\u0002_\u0013\u0003\u0002\u0002\u0002`a\u0007\t\u0002\u0002a",
    "b\u0005\u0018\r\u0002bc\u0005,\u0017\u0002cf\u0003\u0002\u0002\u0002",
    "df\u0005,\u0017\u0002e`\u0003\u0002\u0002\u0002ed\u0003\u0002\u0002",
    "\u0002f\u0015\u0003\u0002\u0002\u0002gj\u0005\u0018\r\u0002hj\u0005",
    "\u001a\u000e\u0002ig\u0003\u0002\u0002\u0002ih\u0003\u0002\u0002\u0002",
    "j\u0017\u0003\u0002\u0002\u0002kn\u0005\u001c\u000f\u0002ln\u0005&\u0014",
    "\u0002mk\u0003\u0002\u0002\u0002ml\u0003\u0002\u0002\u0002n\u0019\u0003",
    "\u0002\u0002\u0002ot\u0005\"\u0012\u0002pt\u0005$\u0013\u0002qt\u0005",
    "\u001e\u0010\u0002rt\u0005 \u0011\u0002so\u0003\u0002\u0002\u0002sp",
    "\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002sr\u0003\u0002\u0002",
    "\u0002t\u001b\u0003\u0002\u0002\u0002uv\u0007\u0012\u0002\u0002v\u001d",
    "\u0003\u0002\u0002\u0002wx\u0007\u0013\u0002\u0002x\u001f\u0003\u0002",
    "\u0002\u0002yz\u0007\u0014\u0002\u0002z!\u0003\u0002\u0002\u0002{|\u0007",
    "\u0015\u0002\u0002|#\u0003\u0002\u0002\u0002}~\u0007\u0016\u0002\u0002",
    "~%\u0003\u0002\u0002\u0002\u007f\u0080\u0007\u0017\u0002\u0002\u0080",
    "\'\u0003\u0002\u0002\u0002\u0081\u0082\u0007\u000b\u0002\u0002\u0082",
    ")\u0003\u0002\u0002\u0002\u0083\u0084\u0007\u0011\u0002\u0002\u0084",
    "+\u0003\u0002\u0002\u0002\u0085\u0086\t\u0002\u0002\u0002\u0086-\u0003",
    "\u0002\u0002\u0002\t27Beims"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "POWER_KEYWORD", "TOUGHNESS_KEYWORD", "COLOR_KEYWORD", 
                      "SET_KEYWORD", "NAME_KEYWORD", "CMC_KEYWORD", "TEXT_KEYWORD", 
                      "COMMANDER_IDENTITY_KEYWORD", "NUMBER_VALUE", "RED", 
                      "GREEN", "BLUE", "WHITE", "BLACK", "COLOR_VALUE", 
                      "OPERATOR_EQ", "OPERATOR_LT", "OPERATOR_LTE", "OPERATOR_GT", 
                      "OPERATOR_GTE", "OPERATOR_NEQ", "WS", "NEWLINE", "VALUE" ];

var ruleNames =  [ "wholeQuery", "query", "cmcQuery", "nameQuery", "powerQuery", 
                   "toughnessQuery", "commanderIdentityQuery", "colorQuery", 
                   "setQuery", "textQuery", "operatorComparison", "operatorEquality", 
                   "operatorOrder", "operatorEq", "operatorLt", "operatorLte", 
                   "operatorGt", "operatorGte", "operatorNeq", "numberValue", 
                   "colorValue", "value" ];

function QueryLangParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

QueryLangParser.prototype = Object.create(antlr4.Parser.prototype);
QueryLangParser.prototype.constructor = QueryLangParser;

Object.defineProperty(QueryLangParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

QueryLangParser.EOF = antlr4.Token.EOF;
QueryLangParser.POWER_KEYWORD = 1;
QueryLangParser.TOUGHNESS_KEYWORD = 2;
QueryLangParser.COLOR_KEYWORD = 3;
QueryLangParser.SET_KEYWORD = 4;
QueryLangParser.NAME_KEYWORD = 5;
QueryLangParser.CMC_KEYWORD = 6;
QueryLangParser.TEXT_KEYWORD = 7;
QueryLangParser.COMMANDER_IDENTITY_KEYWORD = 8;
QueryLangParser.NUMBER_VALUE = 9;
QueryLangParser.RED = 10;
QueryLangParser.GREEN = 11;
QueryLangParser.BLUE = 12;
QueryLangParser.WHITE = 13;
QueryLangParser.BLACK = 14;
QueryLangParser.COLOR_VALUE = 15;
QueryLangParser.OPERATOR_EQ = 16;
QueryLangParser.OPERATOR_LT = 17;
QueryLangParser.OPERATOR_LTE = 18;
QueryLangParser.OPERATOR_GT = 19;
QueryLangParser.OPERATOR_GTE = 20;
QueryLangParser.OPERATOR_NEQ = 21;
QueryLangParser.WS = 22;
QueryLangParser.NEWLINE = 23;
QueryLangParser.VALUE = 24;

QueryLangParser.RULE_wholeQuery = 0;
QueryLangParser.RULE_query = 1;
QueryLangParser.RULE_cmcQuery = 2;
QueryLangParser.RULE_nameQuery = 3;
QueryLangParser.RULE_powerQuery = 4;
QueryLangParser.RULE_toughnessQuery = 5;
QueryLangParser.RULE_commanderIdentityQuery = 6;
QueryLangParser.RULE_colorQuery = 7;
QueryLangParser.RULE_setQuery = 8;
QueryLangParser.RULE_textQuery = 9;
QueryLangParser.RULE_operatorComparison = 10;
QueryLangParser.RULE_operatorEquality = 11;
QueryLangParser.RULE_operatorOrder = 12;
QueryLangParser.RULE_operatorEq = 13;
QueryLangParser.RULE_operatorLt = 14;
QueryLangParser.RULE_operatorLte = 15;
QueryLangParser.RULE_operatorGt = 16;
QueryLangParser.RULE_operatorGte = 17;
QueryLangParser.RULE_operatorNeq = 18;
QueryLangParser.RULE_numberValue = 19;
QueryLangParser.RULE_colorValue = 20;
QueryLangParser.RULE_value = 21;

function WholeQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_wholeQuery;
    return this;
}

WholeQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WholeQueryContext.prototype.constructor = WholeQueryContext;

WholeQueryContext.prototype.query = function() {
    return this.getTypedRuleContext(QueryContext,0);
};

WholeQueryContext.prototype.wholeQuery = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WholeQueryContext);
    } else {
        return this.getTypedRuleContext(WholeQueryContext,i);
    }
};

WholeQueryContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QueryLangParser.WS);
    } else {
        return this.getToken(QueryLangParser.WS, i);
    }
};


WholeQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterWholeQuery(this);
	}
};

WholeQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitWholeQuery(this);
	}
};

WholeQueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitWholeQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.WholeQueryContext = WholeQueryContext;

QueryLangParser.prototype.wholeQuery = function() {

    var localctx = new WholeQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, QueryLangParser.RULE_wholeQuery);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.query();
        this.state = 53;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 46; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 45;
                    this.match(QueryLangParser.WS);
                    this.state = 48; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===QueryLangParser.WS);
                this.state = 50;
                this.wholeQuery(); 
            }
            this.state = 55;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_query;
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.nameQuery = function() {
    return this.getTypedRuleContext(NameQueryContext,0);
};

QueryContext.prototype.setQuery = function() {
    return this.getTypedRuleContext(SetQueryContext,0);
};

QueryContext.prototype.cmcQuery = function() {
    return this.getTypedRuleContext(CmcQueryContext,0);
};

QueryContext.prototype.colorQuery = function() {
    return this.getTypedRuleContext(ColorQueryContext,0);
};

QueryContext.prototype.commanderIdentityQuery = function() {
    return this.getTypedRuleContext(CommanderIdentityQueryContext,0);
};

QueryContext.prototype.powerQuery = function() {
    return this.getTypedRuleContext(PowerQueryContext,0);
};

QueryContext.prototype.toughnessQuery = function() {
    return this.getTypedRuleContext(ToughnessQueryContext,0);
};

QueryContext.prototype.textQuery = function() {
    return this.getTypedRuleContext(TextQueryContext,0);
};

QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitQuery(this);
	}
};

QueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.QueryContext = QueryContext;

QueryLangParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, QueryLangParser.RULE_query);
    try {
        this.state = 64;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 56;
            this.nameQuery();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 57;
            this.setQuery();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 58;
            this.cmcQuery();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 59;
            this.colorQuery();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 60;
            this.commanderIdentityQuery();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 61;
            this.powerQuery();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 62;
            this.toughnessQuery();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 63;
            this.textQuery();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CmcQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_cmcQuery;
    return this;
}

CmcQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CmcQueryContext.prototype.constructor = CmcQueryContext;

CmcQueryContext.prototype.CMC_KEYWORD = function() {
    return this.getToken(QueryLangParser.CMC_KEYWORD, 0);
};

CmcQueryContext.prototype.operatorComparison = function() {
    return this.getTypedRuleContext(OperatorComparisonContext,0);
};

CmcQueryContext.prototype.numberValue = function() {
    return this.getTypedRuleContext(NumberValueContext,0);
};

CmcQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterCmcQuery(this);
	}
};

CmcQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitCmcQuery(this);
	}
};

CmcQueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitCmcQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.CmcQueryContext = CmcQueryContext;

QueryLangParser.prototype.cmcQuery = function() {

    var localctx = new CmcQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, QueryLangParser.RULE_cmcQuery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(QueryLangParser.CMC_KEYWORD);
        this.state = 67;
        this.operatorComparison();
        this.state = 68;
        this.numberValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_nameQuery;
    return this;
}

NameQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameQueryContext.prototype.constructor = NameQueryContext;

NameQueryContext.prototype.NAME_KEYWORD = function() {
    return this.getToken(QueryLangParser.NAME_KEYWORD, 0);
};

NameQueryContext.prototype.operatorEquality = function() {
    return this.getTypedRuleContext(OperatorEqualityContext,0);
};

NameQueryContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

NameQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterNameQuery(this);
	}
};

NameQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitNameQuery(this);
	}
};

NameQueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitNameQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.NameQueryContext = NameQueryContext;

QueryLangParser.prototype.nameQuery = function() {

    var localctx = new NameQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, QueryLangParser.RULE_nameQuery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(QueryLangParser.NAME_KEYWORD);
        this.state = 71;
        this.operatorEquality();
        this.state = 72;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PowerQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_powerQuery;
    return this;
}

PowerQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowerQueryContext.prototype.constructor = PowerQueryContext;

PowerQueryContext.prototype.POWER_KEYWORD = function() {
    return this.getToken(QueryLangParser.POWER_KEYWORD, 0);
};

PowerQueryContext.prototype.operatorComparison = function() {
    return this.getTypedRuleContext(OperatorComparisonContext,0);
};

PowerQueryContext.prototype.numberValue = function() {
    return this.getTypedRuleContext(NumberValueContext,0);
};

PowerQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterPowerQuery(this);
	}
};

PowerQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitPowerQuery(this);
	}
};

PowerQueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitPowerQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.PowerQueryContext = PowerQueryContext;

QueryLangParser.prototype.powerQuery = function() {

    var localctx = new PowerQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, QueryLangParser.RULE_powerQuery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(QueryLangParser.POWER_KEYWORD);
        this.state = 75;
        this.operatorComparison();
        this.state = 76;
        this.numberValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ToughnessQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_toughnessQuery;
    return this;
}

ToughnessQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ToughnessQueryContext.prototype.constructor = ToughnessQueryContext;

ToughnessQueryContext.prototype.TOUGHNESS_KEYWORD = function() {
    return this.getToken(QueryLangParser.TOUGHNESS_KEYWORD, 0);
};

ToughnessQueryContext.prototype.operatorComparison = function() {
    return this.getTypedRuleContext(OperatorComparisonContext,0);
};

ToughnessQueryContext.prototype.numberValue = function() {
    return this.getTypedRuleContext(NumberValueContext,0);
};

ToughnessQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterToughnessQuery(this);
	}
};

ToughnessQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitToughnessQuery(this);
	}
};

ToughnessQueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitToughnessQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.ToughnessQueryContext = ToughnessQueryContext;

QueryLangParser.prototype.toughnessQuery = function() {

    var localctx = new ToughnessQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, QueryLangParser.RULE_toughnessQuery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(QueryLangParser.TOUGHNESS_KEYWORD);
        this.state = 79;
        this.operatorComparison();
        this.state = 80;
        this.numberValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommanderIdentityQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_commanderIdentityQuery;
    return this;
}

CommanderIdentityQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommanderIdentityQueryContext.prototype.constructor = CommanderIdentityQueryContext;

CommanderIdentityQueryContext.prototype.COMMANDER_IDENTITY_KEYWORD = function() {
    return this.getToken(QueryLangParser.COMMANDER_IDENTITY_KEYWORD, 0);
};

CommanderIdentityQueryContext.prototype.operatorComparison = function() {
    return this.getTypedRuleContext(OperatorComparisonContext,0);
};

CommanderIdentityQueryContext.prototype.colorValue = function() {
    return this.getTypedRuleContext(ColorValueContext,0);
};

CommanderIdentityQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterCommanderIdentityQuery(this);
	}
};

CommanderIdentityQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitCommanderIdentityQuery(this);
	}
};

CommanderIdentityQueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitCommanderIdentityQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.CommanderIdentityQueryContext = CommanderIdentityQueryContext;

QueryLangParser.prototype.commanderIdentityQuery = function() {

    var localctx = new CommanderIdentityQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, QueryLangParser.RULE_commanderIdentityQuery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(QueryLangParser.COMMANDER_IDENTITY_KEYWORD);
        this.state = 83;
        this.operatorComparison();
        this.state = 84;
        this.colorValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColorQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_colorQuery;
    return this;
}

ColorQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorQueryContext.prototype.constructor = ColorQueryContext;

ColorQueryContext.prototype.COLOR_KEYWORD = function() {
    return this.getToken(QueryLangParser.COLOR_KEYWORD, 0);
};

ColorQueryContext.prototype.operatorComparison = function() {
    return this.getTypedRuleContext(OperatorComparisonContext,0);
};

ColorQueryContext.prototype.colorValue = function() {
    return this.getTypedRuleContext(ColorValueContext,0);
};

ColorQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterColorQuery(this);
	}
};

ColorQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitColorQuery(this);
	}
};

ColorQueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitColorQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.ColorQueryContext = ColorQueryContext;

QueryLangParser.prototype.colorQuery = function() {

    var localctx = new ColorQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, QueryLangParser.RULE_colorQuery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(QueryLangParser.COLOR_KEYWORD);
        this.state = 87;
        this.operatorComparison();
        this.state = 88;
        this.colorValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_setQuery;
    return this;
}

SetQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetQueryContext.prototype.constructor = SetQueryContext;

SetQueryContext.prototype.SET_KEYWORD = function() {
    return this.getToken(QueryLangParser.SET_KEYWORD, 0);
};

SetQueryContext.prototype.operatorEquality = function() {
    return this.getTypedRuleContext(OperatorEqualityContext,0);
};

SetQueryContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

SetQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterSetQuery(this);
	}
};

SetQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitSetQuery(this);
	}
};

SetQueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitSetQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.SetQueryContext = SetQueryContext;

QueryLangParser.prototype.setQuery = function() {

    var localctx = new SetQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, QueryLangParser.RULE_setQuery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(QueryLangParser.SET_KEYWORD);
        this.state = 91;
        this.operatorEquality();
        this.state = 92;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TextQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_textQuery;
    return this;
}

TextQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextQueryContext.prototype.constructor = TextQueryContext;

TextQueryContext.prototype.TEXT_KEYWORD = function() {
    return this.getToken(QueryLangParser.TEXT_KEYWORD, 0);
};

TextQueryContext.prototype.operatorEquality = function() {
    return this.getTypedRuleContext(OperatorEqualityContext,0);
};

TextQueryContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

TextQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterTextQuery(this);
	}
};

TextQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitTextQuery(this);
	}
};

TextQueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitTextQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.TextQueryContext = TextQueryContext;

QueryLangParser.prototype.textQuery = function() {

    var localctx = new TextQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, QueryLangParser.RULE_textQuery);
    try {
        this.state = 99;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 94;
            this.match(QueryLangParser.TEXT_KEYWORD);
            this.state = 95;
            this.operatorEquality();
            this.state = 96;
            this.value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 98;
            this.value();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorComparisonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_operatorComparison;
    return this;
}

OperatorComparisonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorComparisonContext.prototype.constructor = OperatorComparisonContext;

OperatorComparisonContext.prototype.operatorEquality = function() {
    return this.getTypedRuleContext(OperatorEqualityContext,0);
};

OperatorComparisonContext.prototype.operatorOrder = function() {
    return this.getTypedRuleContext(OperatorOrderContext,0);
};

OperatorComparisonContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterOperatorComparison(this);
	}
};

OperatorComparisonContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitOperatorComparison(this);
	}
};

OperatorComparisonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitOperatorComparison(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.OperatorComparisonContext = OperatorComparisonContext;

QueryLangParser.prototype.operatorComparison = function() {

    var localctx = new OperatorComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, QueryLangParser.RULE_operatorComparison);
    try {
        this.state = 103;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case QueryLangParser.OPERATOR_EQ:
        case QueryLangParser.OPERATOR_NEQ:
            this.enterOuterAlt(localctx, 1);
            this.state = 101;
            this.operatorEquality();
            break;
        case QueryLangParser.OPERATOR_LT:
        case QueryLangParser.OPERATOR_LTE:
        case QueryLangParser.OPERATOR_GT:
        case QueryLangParser.OPERATOR_GTE:
            this.enterOuterAlt(localctx, 2);
            this.state = 102;
            this.operatorOrder();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorEqualityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_operatorEquality;
    return this;
}

OperatorEqualityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorEqualityContext.prototype.constructor = OperatorEqualityContext;

OperatorEqualityContext.prototype.operatorEq = function() {
    return this.getTypedRuleContext(OperatorEqContext,0);
};

OperatorEqualityContext.prototype.operatorNeq = function() {
    return this.getTypedRuleContext(OperatorNeqContext,0);
};

OperatorEqualityContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterOperatorEquality(this);
	}
};

OperatorEqualityContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitOperatorEquality(this);
	}
};

OperatorEqualityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitOperatorEquality(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.OperatorEqualityContext = OperatorEqualityContext;

QueryLangParser.prototype.operatorEquality = function() {

    var localctx = new OperatorEqualityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, QueryLangParser.RULE_operatorEquality);
    try {
        this.state = 107;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case QueryLangParser.OPERATOR_EQ:
            this.enterOuterAlt(localctx, 1);
            this.state = 105;
            this.operatorEq();
            break;
        case QueryLangParser.OPERATOR_NEQ:
            this.enterOuterAlt(localctx, 2);
            this.state = 106;
            this.operatorNeq();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorOrderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_operatorOrder;
    return this;
}

OperatorOrderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorOrderContext.prototype.constructor = OperatorOrderContext;

OperatorOrderContext.prototype.operatorGt = function() {
    return this.getTypedRuleContext(OperatorGtContext,0);
};

OperatorOrderContext.prototype.operatorGte = function() {
    return this.getTypedRuleContext(OperatorGteContext,0);
};

OperatorOrderContext.prototype.operatorLt = function() {
    return this.getTypedRuleContext(OperatorLtContext,0);
};

OperatorOrderContext.prototype.operatorLte = function() {
    return this.getTypedRuleContext(OperatorLteContext,0);
};

OperatorOrderContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterOperatorOrder(this);
	}
};

OperatorOrderContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitOperatorOrder(this);
	}
};

OperatorOrderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitOperatorOrder(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.OperatorOrderContext = OperatorOrderContext;

QueryLangParser.prototype.operatorOrder = function() {

    var localctx = new OperatorOrderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, QueryLangParser.RULE_operatorOrder);
    try {
        this.state = 113;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case QueryLangParser.OPERATOR_GT:
            this.enterOuterAlt(localctx, 1);
            this.state = 109;
            this.operatorGt();
            break;
        case QueryLangParser.OPERATOR_GTE:
            this.enterOuterAlt(localctx, 2);
            this.state = 110;
            this.operatorGte();
            break;
        case QueryLangParser.OPERATOR_LT:
            this.enterOuterAlt(localctx, 3);
            this.state = 111;
            this.operatorLt();
            break;
        case QueryLangParser.OPERATOR_LTE:
            this.enterOuterAlt(localctx, 4);
            this.state = 112;
            this.operatorLte();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorEqContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_operatorEq;
    return this;
}

OperatorEqContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorEqContext.prototype.constructor = OperatorEqContext;

OperatorEqContext.prototype.OPERATOR_EQ = function() {
    return this.getToken(QueryLangParser.OPERATOR_EQ, 0);
};

OperatorEqContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterOperatorEq(this);
	}
};

OperatorEqContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitOperatorEq(this);
	}
};

OperatorEqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitOperatorEq(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.OperatorEqContext = OperatorEqContext;

QueryLangParser.prototype.operatorEq = function() {

    var localctx = new OperatorEqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, QueryLangParser.RULE_operatorEq);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(QueryLangParser.OPERATOR_EQ);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorLtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_operatorLt;
    return this;
}

OperatorLtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorLtContext.prototype.constructor = OperatorLtContext;

OperatorLtContext.prototype.OPERATOR_LT = function() {
    return this.getToken(QueryLangParser.OPERATOR_LT, 0);
};

OperatorLtContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterOperatorLt(this);
	}
};

OperatorLtContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitOperatorLt(this);
	}
};

OperatorLtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitOperatorLt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.OperatorLtContext = OperatorLtContext;

QueryLangParser.prototype.operatorLt = function() {

    var localctx = new OperatorLtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, QueryLangParser.RULE_operatorLt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(QueryLangParser.OPERATOR_LT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorLteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_operatorLte;
    return this;
}

OperatorLteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorLteContext.prototype.constructor = OperatorLteContext;

OperatorLteContext.prototype.OPERATOR_LTE = function() {
    return this.getToken(QueryLangParser.OPERATOR_LTE, 0);
};

OperatorLteContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterOperatorLte(this);
	}
};

OperatorLteContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitOperatorLte(this);
	}
};

OperatorLteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitOperatorLte(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.OperatorLteContext = OperatorLteContext;

QueryLangParser.prototype.operatorLte = function() {

    var localctx = new OperatorLteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, QueryLangParser.RULE_operatorLte);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(QueryLangParser.OPERATOR_LTE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorGtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_operatorGt;
    return this;
}

OperatorGtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorGtContext.prototype.constructor = OperatorGtContext;

OperatorGtContext.prototype.OPERATOR_GT = function() {
    return this.getToken(QueryLangParser.OPERATOR_GT, 0);
};

OperatorGtContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterOperatorGt(this);
	}
};

OperatorGtContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitOperatorGt(this);
	}
};

OperatorGtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitOperatorGt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.OperatorGtContext = OperatorGtContext;

QueryLangParser.prototype.operatorGt = function() {

    var localctx = new OperatorGtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, QueryLangParser.RULE_operatorGt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(QueryLangParser.OPERATOR_GT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorGteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_operatorGte;
    return this;
}

OperatorGteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorGteContext.prototype.constructor = OperatorGteContext;

OperatorGteContext.prototype.OPERATOR_GTE = function() {
    return this.getToken(QueryLangParser.OPERATOR_GTE, 0);
};

OperatorGteContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterOperatorGte(this);
	}
};

OperatorGteContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitOperatorGte(this);
	}
};

OperatorGteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitOperatorGte(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.OperatorGteContext = OperatorGteContext;

QueryLangParser.prototype.operatorGte = function() {

    var localctx = new OperatorGteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, QueryLangParser.RULE_operatorGte);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(QueryLangParser.OPERATOR_GTE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorNeqContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_operatorNeq;
    return this;
}

OperatorNeqContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorNeqContext.prototype.constructor = OperatorNeqContext;

OperatorNeqContext.prototype.OPERATOR_NEQ = function() {
    return this.getToken(QueryLangParser.OPERATOR_NEQ, 0);
};

OperatorNeqContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterOperatorNeq(this);
	}
};

OperatorNeqContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitOperatorNeq(this);
	}
};

OperatorNeqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitOperatorNeq(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.OperatorNeqContext = OperatorNeqContext;

QueryLangParser.prototype.operatorNeq = function() {

    var localctx = new OperatorNeqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, QueryLangParser.RULE_operatorNeq);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(QueryLangParser.OPERATOR_NEQ);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_numberValue;
    return this;
}

NumberValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberValueContext.prototype.constructor = NumberValueContext;

NumberValueContext.prototype.NUMBER_VALUE = function() {
    return this.getToken(QueryLangParser.NUMBER_VALUE, 0);
};

NumberValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterNumberValue(this);
	}
};

NumberValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitNumberValue(this);
	}
};

NumberValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitNumberValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.NumberValueContext = NumberValueContext;

QueryLangParser.prototype.numberValue = function() {

    var localctx = new NumberValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, QueryLangParser.RULE_numberValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(QueryLangParser.NUMBER_VALUE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColorValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_colorValue;
    return this;
}

ColorValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorValueContext.prototype.constructor = ColorValueContext;

ColorValueContext.prototype.COLOR_VALUE = function() {
    return this.getToken(QueryLangParser.COLOR_VALUE, 0);
};

ColorValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterColorValue(this);
	}
};

ColorValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitColorValue(this);
	}
};

ColorValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitColorValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.ColorValueContext = ColorValueContext;

QueryLangParser.prototype.colorValue = function() {

    var localctx = new ColorValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, QueryLangParser.RULE_colorValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(QueryLangParser.COLOR_VALUE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryLangParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.VALUE = function() {
    return this.getToken(QueryLangParser.VALUE, 0);
};

ValueContext.prototype.COLOR_KEYWORD = function() {
    return this.getToken(QueryLangParser.COLOR_KEYWORD, 0);
};

ValueContext.prototype.SET_KEYWORD = function() {
    return this.getToken(QueryLangParser.SET_KEYWORD, 0);
};

ValueContext.prototype.NAME_KEYWORD = function() {
    return this.getToken(QueryLangParser.NAME_KEYWORD, 0);
};

ValueContext.prototype.CMC_KEYWORD = function() {
    return this.getToken(QueryLangParser.CMC_KEYWORD, 0);
};

ValueContext.prototype.TEXT_KEYWORD = function() {
    return this.getToken(QueryLangParser.TEXT_KEYWORD, 0);
};

ValueContext.prototype.POWER_KEYWORD = function() {
    return this.getToken(QueryLangParser.POWER_KEYWORD, 0);
};

ValueContext.prototype.TOUGHNESS_KEYWORD = function() {
    return this.getToken(QueryLangParser.TOUGHNESS_KEYWORD, 0);
};

ValueContext.prototype.COMMANDER_IDENTITY_KEYWORD = function() {
    return this.getToken(QueryLangParser.COMMANDER_IDENTITY_KEYWORD, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryLangListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QueryLangVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QueryLangParser.ValueContext = ValueContext;

QueryLangParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, QueryLangParser.RULE_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QueryLangParser.POWER_KEYWORD) | (1 << QueryLangParser.TOUGHNESS_KEYWORD) | (1 << QueryLangParser.COLOR_KEYWORD) | (1 << QueryLangParser.SET_KEYWORD) | (1 << QueryLangParser.NAME_KEYWORD) | (1 << QueryLangParser.CMC_KEYWORD) | (1 << QueryLangParser.TEXT_KEYWORD) | (1 << QueryLangParser.COMMANDER_IDENTITY_KEYWORD) | (1 << QueryLangParser.VALUE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.QueryLangParser = QueryLangParser;
