/**
 * \d [0-9]
 * \D [^0-9]
 * \w [A-Za-z0-9_]
 * \W [^A-Za-z0-9_]
 * \s [\t\r\n\v\f]
 * \S [^\t\r\n\v\f]
 */

//  | 表示或
//  座机号码验证
// let rg = /^\d{3}-\d{8}$|^\d{4}-\d{7}$/
let rg = /^\d{3}((\d-)|(-\d))\d{7}$/
console.log(rg.test('123-12345678'))
console.log(rg.test('1234-1234567'))

// 手机号验证
let rg2 = /^1[34578]\d{9}$/
console.log(rg2.test('15688211350'))
console.log(rg2.test('18674478535'))

// QQ号验证
let rg3 = /^[1-9]\d{4,}$/
console.log(rg3.test('2970164681'))
