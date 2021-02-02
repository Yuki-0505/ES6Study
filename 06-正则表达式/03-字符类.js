let rg = /[abc]/

console.log(rg.test('andy'))
// > true
console.log(rg.test('baby'))
// > true
console.log(rg.test('color'))
// > true
console.log(rg.test('red'))
// > false

let rg2 = /^[abc]$/

console.log(rg2.test('a'))
// > true
console.log(rg2.test('b'))
// > true
console.log(rg2.test('c'))
// > true
console.log(rg2.test('aa'))
// > false
console.log(rg2.test('ad'))
// > false
console.log(rg2.test('dd'))
// > false

let rg3 = /^[a-zA-Z][0-9]$/

console.log(rg3.test('B9'))
// > true
console.log(rg3.test('a9'))
// > true

// 中括号中的 ^ 表示取反
let rg4 = /^[^a-zA-Z][0-9]$/

console.log(rg4.test('b4'))
// > false
console.log(rg4.test('44'))
// > true
