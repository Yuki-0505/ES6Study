// * 表示 >=0
let rg1 = /^a*$/
console.log(rg1.test('aaa'))
// > true
console.log(rg1.test(''))
// > true

// + 表示 >=1
let rg2 = /^a+$/
console.log(rg2.test('aaa'))
// > true
console.log(rg2.test('a'))
// > true
console.log(rg2.test(''))
// > false

// ? 表示 0 或 1
let rg3 = /^a?$/
console.log(rg3.test('aaa'))
// > false
console.log(rg3.test('a'))
// > true
console.log(rg3.test(''))
// > true

// == 3
let rg4 = /^a{3}$/
console.log(rg4.test('aaa'))
// > true
console.log(rg4.test('a'))
// > false

// 大括号中逗号后面不要有空格
// >= 3
let rg5 = /^a{3,}$/
console.log(rg5.test('aaa'))
// > true
console.log(rg5.test('a'))
// > false
console.log(rg5.test('aaaaa'))
// > true

// 大括号中逗号后面不要有空格
// >= 3 && <= 5
let rg6 = /^a{3,5}$/
console.log(rg6.test('aaa'))
// > true
console.log(rg6.test('a'))
// > false
console.log(rg6.test('aaaaa'))
// > true

let rg7 = /^abc{3}$/
console.log(rg7.test('abccc'))
// > true

let rg8 = /^(abc){3}$/
console.log(rg8.test('abcabcabc'))
// > true
