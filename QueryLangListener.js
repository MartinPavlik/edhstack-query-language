// Generated from QueryLang.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by QueryLangParser.
function QueryLangListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

QueryLangListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
QueryLangListener.prototype.constructor = QueryLangListener;

// Enter a parse tree produced by QueryLangParser#wholeQuery.
QueryLangListener.prototype.enterWholeQuery = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#wholeQuery.
QueryLangListener.prototype.exitWholeQuery = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#query.
QueryLangListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#query.
QueryLangListener.prototype.exitQuery = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#cmcQuery.
QueryLangListener.prototype.enterCmcQuery = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#cmcQuery.
QueryLangListener.prototype.exitCmcQuery = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#nameQuery.
QueryLangListener.prototype.enterNameQuery = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#nameQuery.
QueryLangListener.prototype.exitNameQuery = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#powerQuery.
QueryLangListener.prototype.enterPowerQuery = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#powerQuery.
QueryLangListener.prototype.exitPowerQuery = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#toughnessQuery.
QueryLangListener.prototype.enterToughnessQuery = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#toughnessQuery.
QueryLangListener.prototype.exitToughnessQuery = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#commanderIdentityQuery.
QueryLangListener.prototype.enterCommanderIdentityQuery = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#commanderIdentityQuery.
QueryLangListener.prototype.exitCommanderIdentityQuery = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#colorQuery.
QueryLangListener.prototype.enterColorQuery = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#colorQuery.
QueryLangListener.prototype.exitColorQuery = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#setQuery.
QueryLangListener.prototype.enterSetQuery = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#setQuery.
QueryLangListener.prototype.exitSetQuery = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#textQuery.
QueryLangListener.prototype.enterTextQuery = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#textQuery.
QueryLangListener.prototype.exitTextQuery = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#operatorComparison.
QueryLangListener.prototype.enterOperatorComparison = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#operatorComparison.
QueryLangListener.prototype.exitOperatorComparison = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#operatorEquality.
QueryLangListener.prototype.enterOperatorEquality = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#operatorEquality.
QueryLangListener.prototype.exitOperatorEquality = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#operatorOrder.
QueryLangListener.prototype.enterOperatorOrder = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#operatorOrder.
QueryLangListener.prototype.exitOperatorOrder = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#operatorEq.
QueryLangListener.prototype.enterOperatorEq = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#operatorEq.
QueryLangListener.prototype.exitOperatorEq = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#operatorLt.
QueryLangListener.prototype.enterOperatorLt = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#operatorLt.
QueryLangListener.prototype.exitOperatorLt = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#operatorLte.
QueryLangListener.prototype.enterOperatorLte = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#operatorLte.
QueryLangListener.prototype.exitOperatorLte = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#operatorGt.
QueryLangListener.prototype.enterOperatorGt = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#operatorGt.
QueryLangListener.prototype.exitOperatorGt = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#operatorGte.
QueryLangListener.prototype.enterOperatorGte = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#operatorGte.
QueryLangListener.prototype.exitOperatorGte = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#operatorNeq.
QueryLangListener.prototype.enterOperatorNeq = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#operatorNeq.
QueryLangListener.prototype.exitOperatorNeq = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#numberValue.
QueryLangListener.prototype.enterNumberValue = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#numberValue.
QueryLangListener.prototype.exitNumberValue = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#colorValue.
QueryLangListener.prototype.enterColorValue = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#colorValue.
QueryLangListener.prototype.exitColorValue = function(ctx) {
};


// Enter a parse tree produced by QueryLangParser#value.
QueryLangListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by QueryLangParser#value.
QueryLangListener.prototype.exitValue = function(ctx) {
};



exports.QueryLangListener = QueryLangListener;