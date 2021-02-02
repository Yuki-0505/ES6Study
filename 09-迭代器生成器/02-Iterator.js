const items = [1, 2, 3]

// 创建迭代器
const ite = items[Symbol.iterator]()

console.log(ite)

console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
// > { value: 1, done: false }
// > { value: 2, done: false }
// > { value: 3, done: false }
// > { value: undefined, done: true }
