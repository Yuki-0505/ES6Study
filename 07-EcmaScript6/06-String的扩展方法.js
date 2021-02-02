/**
 * 模板字符串可以调用变量和函数
 */
let name = `miss`
let sayHello = `Hello, ${name}`

console.log(sayHello)

const fn = () => {
  return 'Hello,'
}
let html = `${fn()} miss`
console.log(html)

/**
 * 判断字符串是否以某字符串开头或结尾
 */
let str = 'Hello EcmaScript 2015'
console.log(str.startsWith('Hello'))
// > true
console.log(str.endsWith('2015'))
// > true

/**
 * 重复字符串
 */
console.log('hi '.repeat(5))
