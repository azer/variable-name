var variableName = require("./");
var test = require("prova");

test('generates a legal variable name from string', function (t) {
  t.plan(4);
  t.equal(variableName('azer koçulu'), 'azerKoculu');
  t.equal(variableName('hello world ÂÇİĞÖŞÜÑ bar!'), 'helloWorldAcigosunBar');
  t.equal(variableName("azer's new stickers"), 'azersNewStickers');
  t.equal(variableName("it's `\"allright\"`"), 'itsAllright');
});
