// Generated from QueryLang.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var QueryLangListener = require('./QueryLangListener').QueryLangListener;
var grammarFileName = "QueryLang.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0016l\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0003",
    "\u0002\u0006\u0002)\n\u0002\r\u0002\u000e\u0002*\u0003\u0002\u0007\u0002",
    ".\n\u0002\f\u0002\u000e\u00021\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u00037\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007J\n\u0007\u0003\b\u0003\b",
    "\u0005\bN\n\b\u0003\t\u0003\t\u0005\tR\n\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\nX\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0002\u0002\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$\u0002\u0002\u0002d\u0002",
    "&\u0003\u0002\u0002\u0002\u00046\u0003\u0002\u0002\u0002\u00068\u0003",
    "\u0002\u0002\u0002\b<\u0003\u0002\u0002\u0002\n@\u0003\u0002\u0002\u0002",
    "\fI\u0003\u0002\u0002\u0002\u000eM\u0003\u0002\u0002\u0002\u0010Q\u0003",
    "\u0002\u0002\u0002\u0012W\u0003\u0002\u0002\u0002\u0014Y\u0003\u0002",
    "\u0002\u0002\u0016[\u0003\u0002\u0002\u0002\u0018]\u0003\u0002\u0002",
    "\u0002\u001a_\u0003\u0002\u0002\u0002\u001ca\u0003\u0002\u0002\u0002",
    "\u001ec\u0003\u0002\u0002\u0002 e\u0003\u0002\u0002\u0002\"g\u0003\u0002",
    "\u0002\u0002$i\u0003\u0002\u0002\u0002&/\u0005\u0004\u0003\u0002\')",
    "\u0007\u0014\u0002\u0002(\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002",
    "\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+,\u0003\u0002",
    "\u0002\u0002,.\u0005\u0002\u0002\u0002-(\u0003\u0002\u0002\u0002.1\u0003",
    "\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u0002",
    "0\u0003\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000227\u0005\b",
    "\u0005\u000237\u0005\u0006\u0004\u000247\u0005\n\u0006\u000257\u0005",
    "\f\u0007\u000262\u0003\u0002\u0002\u000263\u0003\u0002\u0002\u00026",
    "4\u0003\u0002\u0002\u000265\u0003\u0002\u0002\u00027\u0005\u0003\u0002",
    "\u0002\u000289\u0007\u0004\u0002\u00029:\u0005\u000e\b\u0002:;\u0005",
    " \u0011\u0002;\u0007\u0003\u0002\u0002\u0002<=\u0007\u0003\u0002\u0002",
    "=>\u0005\u0010\t\u0002>?\u0005$\u0013\u0002?\t\u0003\u0002\u0002\u0002",
    "@A\u0007\u0006\u0002\u0002AB\u0005\u000e\b\u0002BC\u0005\"\u0012\u0002",
    "C\u000b\u0003\u0002\u0002\u0002DE\u0007\u0005\u0002\u0002EF\u0005\u0010",
    "\t\u0002FG\u0005$\u0013\u0002GJ\u0003\u0002\u0002\u0002HJ\u0005$\u0013",
    "\u0002ID\u0003\u0002\u0002\u0002IH\u0003\u0002\u0002\u0002J\r\u0003",
    "\u0002\u0002\u0002KN\u0005\u0014\u000b\u0002LN\u0005\u0012\n\u0002M",
    "K\u0003\u0002\u0002\u0002ML\u0003\u0002\u0002\u0002N\u000f\u0003\u0002",
    "\u0002\u0002OR\u0005\u0014\u000b\u0002PR\u0005\u001e\u0010\u0002QO\u0003",
    "\u0002\u0002\u0002QP\u0003\u0002\u0002\u0002R\u0011\u0003\u0002\u0002",
    "\u0002SX\u0005\u001a\u000e\u0002TX\u0005\u001c\u000f\u0002UX\u0005\u0016",
    "\f\u0002VX\u0005\u0018\r\u0002WS\u0003\u0002\u0002\u0002WT\u0003\u0002",
    "\u0002\u0002WU\u0003\u0002\u0002\u0002WV\u0003\u0002\u0002\u0002X\u0013",
    "\u0003\u0002\u0002\u0002YZ\u0007\u000e\u0002\u0002Z\u0015\u0003\u0002",
    "\u0002\u0002[\\\u0007\u000f\u0002\u0002\\\u0017\u0003\u0002\u0002\u0002",
    "]^\u0007\u0010\u0002\u0002^\u0019\u0003\u0002\u0002\u0002_`\u0007\u0011",
    "\u0002\u0002`\u001b\u0003\u0002\u0002\u0002ab\u0007\u0012\u0002\u0002",
    "b\u001d\u0003\u0002\u0002\u0002cd\u0007\u0013\u0002\u0002d\u001f\u0003",
    "\u0002\u0002\u0002ef\u0007\u0007\u0002\u0002f!\u0003\u0002\u0002\u0002",
    "gh\u0007\r\u0002\u0002h#\u0003\u0002\u0002\u0002ij\u0007\u0016\u0002",
    "\u0002j%\u0003\u0002\u0002\u0002\t*/6IMQW"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "NAME_KEYWORD", "CMC_KEYWORD", "TEXT_KEYWORD", 
                      "COMMANDER_IDENTITY_KEYWORD", "NUMBER_VALUE", "RED", 
                      "GREEN", "BLUE", "WHITE", "BLACK", "COLOR_VALUE", 
                      "OPERATOR_EQ", "OPERATOR_LT", "OPERATOR_LTE", "OPERATOR_GT", 
                      "OPERATOR_GTE", "OPERATOR_NEQ", "WS", "NEWLINE", "VALUE" ];

var ruleNames =  [ "wholeQuery", "query", "cmcQuery", "nameQuery", "commanderIdentityQuery", 
                   "textQuery", "operatorComparison", "operatorEquality", 
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
QueryLangParser.NAME_KEYWORD = 1;
QueryLangParser.CMC_KEYWORD = 2;
QueryLangParser.TEXT_KEYWORD = 3;
QueryLangParser.COMMANDER_IDENTITY_KEYWORD = 4;
QueryLangParser.NUMBER_VALUE = 5;
QueryLangParser.RED = 6;
QueryLangParser.GREEN = 7;
QueryLangParser.BLUE = 8;
QueryLangParser.WHITE = 9;
QueryLangParser.BLACK = 10;
QueryLangParser.COLOR_VALUE = 11;
QueryLangParser.OPERATOR_EQ = 12;
QueryLangParser.OPERATOR_LT = 13;
QueryLangParser.OPERATOR_LTE = 14;
QueryLangParser.OPERATOR_GT = 15;
QueryLangParser.OPERATOR_GTE = 16;
QueryLangParser.OPERATOR_NEQ = 17;
QueryLangParser.WS = 18;
QueryLangParser.NEWLINE = 19;
QueryLangParser.VALUE = 20;

QueryLangParser.RULE_wholeQuery = 0;
QueryLangParser.RULE_query = 1;
QueryLangParser.RULE_cmcQuery = 2;
QueryLangParser.RULE_nameQuery = 3;
QueryLangParser.RULE_commanderIdentityQuery = 4;
QueryLangParser.RULE_textQuery = 5;
QueryLangParser.RULE_operatorComparison = 6;
QueryLangParser.RULE_operatorEquality = 7;
QueryLangParser.RULE_operatorOrder = 8;
QueryLangParser.RULE_operatorEq = 9;
QueryLangParser.RULE_operatorLt = 10;
QueryLangParser.RULE_operatorLte = 11;
QueryLangParser.RULE_operatorGt = 12;
QueryLangParser.RULE_operatorGte = 13;
QueryLangParser.RULE_operatorNeq = 14;
QueryLangParser.RULE_numberValue = 15;
QueryLangParser.RULE_colorValue = 16;
QueryLangParser.RULE_value = 17;

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




QueryLangParser.WholeQueryContext = WholeQueryContext;

QueryLangParser.prototype.wholeQuery = function() {

    var localctx = new WholeQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, QueryLangParser.RULE_wholeQuery);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.query();
        this.state = 45;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 38; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 37;
                    this.match(QueryLangParser.WS);
                    this.state = 40; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===QueryLangParser.WS);
                this.state = 42;
                this.wholeQuery(); 
            }
            this.state = 47;
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

QueryContext.prototype.cmcQuery = function() {
    return this.getTypedRuleContext(CmcQueryContext,0);
};

QueryContext.prototype.commanderIdentityQuery = function() {
    return this.getTypedRuleContext(CommanderIdentityQueryContext,0);
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




QueryLangParser.QueryContext = QueryContext;

QueryLangParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, QueryLangParser.RULE_query);
    try {
        this.state = 52;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case QueryLangParser.NAME_KEYWORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.nameQuery();
            break;
        case QueryLangParser.CMC_KEYWORD:
            this.enterOuterAlt(localctx, 2);
            this.state = 49;
            this.cmcQuery();
            break;
        case QueryLangParser.COMMANDER_IDENTITY_KEYWORD:
            this.enterOuterAlt(localctx, 3);
            this.state = 50;
            this.commanderIdentityQuery();
            break;
        case QueryLangParser.TEXT_KEYWORD:
        case QueryLangParser.VALUE:
            this.enterOuterAlt(localctx, 4);
            this.state = 51;
            this.textQuery();
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




QueryLangParser.CmcQueryContext = CmcQueryContext;

QueryLangParser.prototype.cmcQuery = function() {

    var localctx = new CmcQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, QueryLangParser.RULE_cmcQuery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(QueryLangParser.CMC_KEYWORD);
        this.state = 55;
        this.operatorComparison();
        this.state = 56;
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




QueryLangParser.NameQueryContext = NameQueryContext;

QueryLangParser.prototype.nameQuery = function() {

    var localctx = new NameQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, QueryLangParser.RULE_nameQuery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.match(QueryLangParser.NAME_KEYWORD);
        this.state = 59;
        this.operatorEquality();
        this.state = 60;
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




QueryLangParser.CommanderIdentityQueryContext = CommanderIdentityQueryContext;

QueryLangParser.prototype.commanderIdentityQuery = function() {

    var localctx = new CommanderIdentityQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, QueryLangParser.RULE_commanderIdentityQuery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(QueryLangParser.COMMANDER_IDENTITY_KEYWORD);
        this.state = 63;
        this.operatorComparison();
        this.state = 64;
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




QueryLangParser.TextQueryContext = TextQueryContext;

QueryLangParser.prototype.textQuery = function() {

    var localctx = new TextQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, QueryLangParser.RULE_textQuery);
    try {
        this.state = 71;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case QueryLangParser.TEXT_KEYWORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 66;
            this.match(QueryLangParser.TEXT_KEYWORD);
            this.state = 67;
            this.operatorEquality();
            this.state = 68;
            this.value();
            break;
        case QueryLangParser.VALUE:
            this.enterOuterAlt(localctx, 2);
            this.state = 70;
            this.value();
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

OperatorComparisonContext.prototype.operatorEq = function() {
    return this.getTypedRuleContext(OperatorEqContext,0);
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




QueryLangParser.OperatorComparisonContext = OperatorComparisonContext;

QueryLangParser.prototype.operatorComparison = function() {

    var localctx = new OperatorComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, QueryLangParser.RULE_operatorComparison);
    try {
        this.state = 75;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case QueryLangParser.OPERATOR_EQ:
            this.enterOuterAlt(localctx, 1);
            this.state = 73;
            this.operatorEq();
            break;
        case QueryLangParser.OPERATOR_LT:
        case QueryLangParser.OPERATOR_LTE:
        case QueryLangParser.OPERATOR_GT:
        case QueryLangParser.OPERATOR_GTE:
            this.enterOuterAlt(localctx, 2);
            this.state = 74;
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




QueryLangParser.OperatorEqualityContext = OperatorEqualityContext;

QueryLangParser.prototype.operatorEquality = function() {

    var localctx = new OperatorEqualityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, QueryLangParser.RULE_operatorEquality);
    try {
        this.state = 79;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case QueryLangParser.OPERATOR_EQ:
            this.enterOuterAlt(localctx, 1);
            this.state = 77;
            this.operatorEq();
            break;
        case QueryLangParser.OPERATOR_NEQ:
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
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




QueryLangParser.OperatorOrderContext = OperatorOrderContext;

QueryLangParser.prototype.operatorOrder = function() {

    var localctx = new OperatorOrderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, QueryLangParser.RULE_operatorOrder);
    try {
        this.state = 85;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case QueryLangParser.OPERATOR_GT:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.operatorGt();
            break;
        case QueryLangParser.OPERATOR_GTE:
            this.enterOuterAlt(localctx, 2);
            this.state = 82;
            this.operatorGte();
            break;
        case QueryLangParser.OPERATOR_LT:
            this.enterOuterAlt(localctx, 3);
            this.state = 83;
            this.operatorLt();
            break;
        case QueryLangParser.OPERATOR_LTE:
            this.enterOuterAlt(localctx, 4);
            this.state = 84;
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




QueryLangParser.OperatorEqContext = OperatorEqContext;

QueryLangParser.prototype.operatorEq = function() {

    var localctx = new OperatorEqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, QueryLangParser.RULE_operatorEq);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
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




QueryLangParser.OperatorLtContext = OperatorLtContext;

QueryLangParser.prototype.operatorLt = function() {

    var localctx = new OperatorLtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, QueryLangParser.RULE_operatorLt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
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




QueryLangParser.OperatorLteContext = OperatorLteContext;

QueryLangParser.prototype.operatorLte = function() {

    var localctx = new OperatorLteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, QueryLangParser.RULE_operatorLte);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
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




QueryLangParser.OperatorGtContext = OperatorGtContext;

QueryLangParser.prototype.operatorGt = function() {

    var localctx = new OperatorGtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, QueryLangParser.RULE_operatorGt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
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




QueryLangParser.OperatorGteContext = OperatorGteContext;

QueryLangParser.prototype.operatorGte = function() {

    var localctx = new OperatorGteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, QueryLangParser.RULE_operatorGte);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
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




QueryLangParser.OperatorNeqContext = OperatorNeqContext;

QueryLangParser.prototype.operatorNeq = function() {

    var localctx = new OperatorNeqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, QueryLangParser.RULE_operatorNeq);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
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




QueryLangParser.NumberValueContext = NumberValueContext;

QueryLangParser.prototype.numberValue = function() {

    var localctx = new NumberValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, QueryLangParser.RULE_numberValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
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




QueryLangParser.ColorValueContext = ColorValueContext;

QueryLangParser.prototype.colorValue = function() {

    var localctx = new ColorValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, QueryLangParser.RULE_colorValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
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




QueryLangParser.ValueContext = ValueContext;

QueryLangParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, QueryLangParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(QueryLangParser.VALUE);
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
