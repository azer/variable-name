var variableName = require("./");

it('generates a legal variable name from string', function(){
  expect(variableName('azer koçulu')).to.equal('azerKoculu');
  expect(variableName('hello world ÂÇİĞÖŞÜÑ bar!')).to.equal('helloWorldAcigosunBar');
});
