const antlr4 = require('antlr4');
const QueryLangLexer = require('./QueryLangLexer').QueryLangLexer;
const QueryLangParser = require('./QueryLangParser').QueryLangParser;
const QueryLangListener = require('./QueryLangListener').QueryLangListener;


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
PrintQueryListener.prototype.enterTextQuery = function (ctx) {
  console.log("text query:", ctx.getText());
};
PrintQueryListener.prototype.enterNumberValue = (ctx) => {
  console.log("value: number:", ctx.getText())
}
PrintQueryListener.prototype.enterValue = (ctx) => {
  console.log("value: any:", ctx.getText())
}


const input = 'cmc < 3 draw discard exile';
// const input = "cmc=2 NAME:\"Martin picus kreten\" N:\"Izzetx\""
const chars = new antlr4.InputStream(input);
// console.log('chars:', chars);
const lexer = new QueryLangLexer(chars);
// console.log('lexer:', lexer);
const tokens = new antlr4.CommonTokenStream(lexer);
// console.log('tokens:', tokens);
const parser = new QueryLangParser(tokens);
// console.log('parser:', parser);
parser.buildParseTrees = true;
const tree = parser.wholeQuery();

console.log('---------');


var printer = new PrintQueryListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);