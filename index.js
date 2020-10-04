const antlr4 = require('antlr4');
const QueryLangLexer = require('./QueryLangLexer').QueryLangLexer;
const QueryLangParser = require('./QueryLangParser').QueryLangParser;
const QueryLangListener = require('./QueryLangListener').QueryLangListener;
const QueryLangVisitor = require('./QueryLangVisitor').QueryLangVisitor;

// class for gathering errors and posting them to ACE editor
var AnnotatingErrorListener = function (annotations) {
  antlr4.error.ErrorListener.call(this);
  this.annotations = annotations;
  return this;
};

AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;

AnnotatingErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
  console.log('error:', line, column, msg)

  this.annotations.push({
    row: line - 1,
    column: column,
    text: msg,
    type: "error"
  });
};

const PrintQueryListener = function () {
  QueryLangListener.call(this); // inherit default listener
  return this;
};

// continue inheriting default listener
PrintQueryListener.prototype = Object.create(QueryLangListener.prototype);
PrintQueryListener.prototype.constructor = PrintQueryListener;

// override default listener behavior
PrintQueryListener.prototype.enterNameQuery = function (ctx) {
  console.log("name query:", ctx.getText());
};
PrintQueryListener.prototype.enterCmcQuery = function (ctx) {
  console.log("cmc query:", ctx.getText());
};
PrintQueryListener.prototype.enterCommanderIdentityQuery = function (ctx) {
  console.log("cmd identity query:", ctx.getText());
};
PrintQueryListener.prototype.enterColorQuery = function (ctx) {
  console.log("color query:", ctx.getText());
};
PrintQueryListener.prototype.enterSetQuery = function (ctx) {
  console.log("set query:", ctx.getText());
};
PrintQueryListener.prototype.enterPowerQuery = function (ctx) {
  console.log("pow query:", ctx.getText());
};
PrintQueryListener.prototype.enterToughnessQuery = function (ctx) {
  console.log("tou query:", ctx.getText());
};
PrintQueryListener.prototype.enterTextQuery = function (ctx) {
  console.log("text query:", ctx.getText());
};
// PrintQueryListener.prototype.enterNumberValue = (ctx) => {
//   console.log("value: number:", ctx.getText())
// }
// PrintQueryListener.prototype.enterValue = (ctx) => {
//   console.log("value: any:", ctx.getText())
// }


// const input = 'color = red cmc < 3 draw discard exile set = "Theros beyound"';
// const input = 'power color color < rg color draw discard cmc < 3 cmd < rg set = "return of kamigawa" name=izzet power > 3 tou != 2';

const input = 'color < rg'

// const input = "cmc=2 NAME:\"Martin picus kreten\" N:\"Izzetx\""
const chars = new antlr4.InputStream(input);
// console.log('chars:', chars);
const lexer = new QueryLangLexer(chars);
// console.log('lexer::', lexer)
// console.log('lexer:', lexer);
const tokens = new antlr4.CommonTokenStream(lexer);
// console.log('tokens:', tokens);
const parser = new QueryLangParser(tokens);
// console.log('parser:', parser);
parser.buildParseTrees = true;
parser.removeErrorListeners();
var annotations = [];
var listener = new AnnotatingErrorListener(annotations)
parser.addErrorListener(listener);
const tree = parser.wholeQuery();


console.log('---------');
console.log('input:', input)
console.log('---------');

// var printer = new PrintQueryListener();
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);

const visitor = new QueryLangVisitor();

visitor.visitWholeQuery(tree);