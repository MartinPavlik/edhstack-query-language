// Jak napsat Visitor v JS -> https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f

// Ohledne toho mismatched input erroru.. https://stackoverflow.com/questions/29777778/antlr-4-5-mismatched-input-x-expecting-x
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
  console.log("name query:", ctx.getText(), 'tokens:', ctx.getTokens());
};
PrintQueryListener.prototype.enterCmcQuery = function (ctx) {
  console.log("cmc query:", ctx.getText(), 'tokens:', ctx.getTokens());
};
PrintQueryListener.prototype.enterCommanderIdentityQuery = function (ctx) {
  console.log("cmd identity query:", ctx.getText(), 'tokens:', ctx.getTokens());
};
PrintQueryListener.prototype.enterTextQuery = function (ctx) {
  console.log("text query:", ctx.getText(), 'tokens:', ctx.getTokens());
};
PrintQueryListener.prototype.enterNumberValue = (ctx) => {
  console.log("Enter: number:", ctx.getText())
}
PrintQueryListener.prototype.enterValue = (ctx) => {
  console.log("Enter: value:", ctx.getText())
}
PrintQueryListener.prototype.enterOperatorEq = (ctx) => {
  console.log("Enter: operator:", ctx.getText())
}


const input = 'cmc < 3 draw discard exile';
// const input = "cmc=2 NAME:\"Martin picus kreten\" N:\"Izzetx\""
const chars = new antlr4.InputStream(input);
console.log('chars:', chars);
const lexer = new QueryLangLexer(chars);
console.log('lexer:', lexer);
const tokens = new antlr4.CommonTokenStream(lexer);
console.log('tokens:', tokens);
const parser = new QueryLangParser(tokens);
console.log('parser:', parser);
parser.buildParseTrees = true;
const tree = parser.wholeQuery();

console.log('---------::');

/*
class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    console.log('ctx::', ctx.toStringTree())

    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}

console.log(tree.accept(new Visitor()));

*/

var printer = new PrintQueryListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);