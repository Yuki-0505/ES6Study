/**
 * 边界符
 */
let rg = /^abc$/
console.log(rg.test('abc'))
// > true
console.log(rg.test('abcabc'))
// > false
