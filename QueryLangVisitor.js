// Generated from QueryLang.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by QueryLangParser.

function QueryLangVisitor() {
  antlr4.tree.ParseTreeVisitor.call(this);
  return this;
}

QueryLangVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
QueryLangVisitor.prototype.constructor = QueryLangVisitor;

// Visit a parse tree produced by QueryLangParser#wholeQuery.
QueryLangVisitor.prototype.visitWholeQuery = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#query.
QueryLangVisitor.prototype.visitQuery = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#cmcQuery.
QueryLangVisitor.prototype.visitCmcQuery = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#nameQuery.
QueryLangVisitor.prototype.visitNameQuery = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#powerQuery.
QueryLangVisitor.prototype.visitPowerQuery = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#toughnessQuery.
QueryLangVisitor.prototype.visitToughnessQuery = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#commanderIdentityQuery.
QueryLangVisitor.prototype.visitCommanderIdentityQuery = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#colorQuery.
QueryLangVisitor.prototype.visitColorQuery = function (ctx) {
  console.log('operatorComparison:', ctx.COLOR_KEYWORD().getText())
  console.log('operatorComparison:', ctx.operatorComparison().getText())
  console.log('colorValue', ctx.colorValue().getText())
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#setQuery.
QueryLangVisitor.prototype.visitSetQuery = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#textQuery.
QueryLangVisitor.prototype.visitTextQuery = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#operatorComparison.
QueryLangVisitor.prototype.visitOperatorComparison = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#operatorEquality.
QueryLangVisitor.prototype.visitOperatorEquality = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#operatorOrder.
QueryLangVisitor.prototype.visitOperatorOrder = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#operatorEq.
QueryLangVisitor.prototype.visitOperatorEq = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#operatorLt.
QueryLangVisitor.prototype.visitOperatorLt = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#operatorLte.
QueryLangVisitor.prototype.visitOperatorLte = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#operatorGt.
QueryLangVisitor.prototype.visitOperatorGt = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#operatorGte.
QueryLangVisitor.prototype.visitOperatorGte = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#operatorNeq.
QueryLangVisitor.prototype.visitOperatorNeq = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#numberValue.
QueryLangVisitor.prototype.visitNumberValue = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#colorValue.
QueryLangVisitor.prototype.visitColorValue = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QueryLangParser#value.
QueryLangVisitor.prototype.visitValue = function (ctx) {
  const quotedValue = ctx.QUOTED_VALUE();
  if (quotedValue) {
    return quotedValue.substr(1, quotedValue.length);
  }
  return ctx.getText();
};

QueryLangVisitor.prototype.visitNumberValue = function (ctx) {
  return parseInt(ctx.getText(), 10);
};

QueryLangVisitor.prototype.visitTerminal = function (ctx) {
  console.log('visiting terminal:', ctx.getText());
  return ctx.getText();
}

QueryLangVisitor.prototype.visitChildren = function (ctx) {
  console.log('visiting children:', ctx.getText());
  let code = '';

  for (let i = 0; i < ctx.getChildCount(); i++) {
    code += this.visit(ctx.getChild(i));
  }

  return code.trim();
}



exports.QueryLangVisitor = QueryLangVisitor;