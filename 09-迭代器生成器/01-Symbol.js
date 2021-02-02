/**
 * 原始数据类型Symbol
 * 表示独一无二的值
 * 最大用途是定义对象的私有变量
 */
const name = Symbol('name')
const name2 = Symbol('name')
console.log(name === name2)
// > false

let obj = {
  age: 18,
  [name]: 'miss'
}
obj[name2] = 'jack'

console.log(obj)
console.log(obj[name])

// Symbol定义对象中的变量无法遍历
for (let key in obj) {
  console.log(key)
}
console.log(Object.keys(obj))
// > [ 'age' ]

// 获取Symbol声明的属性名
let k1 = Object.getOwnPropertySymbols(obj)
console.log(k1)
// > [ Symbol(name), Symbol(name) ]
let k2 = Reflect.ownKeys(obj)
console.log(k2)
// > [ 'age', Symbol(name), Symbol(name) ]
