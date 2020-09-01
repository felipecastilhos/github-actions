const helloWorld = require('../soundMaker')

test('test soundMaker saying hello world', () =>{ 
    expect(helloWorld())
})