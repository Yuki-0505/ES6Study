/**
 * 创建正则对象
 */
let regexp = new RegExp(/123/)
console.log(regexp)

let rg = /123/
console.log(rg)

console.log(rg.test(123))
// > true
console.log(rg.test('123'))
// > true
