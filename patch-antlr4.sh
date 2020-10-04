echo "Patching antlr4 npm package...";
# git clone git@github.com:antlr/antlr4.git .tmp;
# cd .tmp/runtime/JavaScript;
# npm i;
# npm run build;
# cd ../../..;
# rm -rf node_modules/antlr4;
# mkdir -p node_modules/antlr4;
# mv .tmp/runtime/JavaScript/src/antlr4/* node_modules/antlr4;
# rm -rf .tmp;
cp patchedAntlr4Utils.js node_modules/antlr4/Utils.js;
echo "Patched latest antlr4 npm package...";
echo "REMOVE THIS WHEN 4.9.0 (or newer) IS RELEASED!"
