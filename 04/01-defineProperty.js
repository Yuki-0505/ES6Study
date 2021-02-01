let obj = {
  id: 3,
  name: 'miss'
}

// 添加
Object.defineProperty(obj, 'age', {
  value: 18,
  // 默认为false
  enumerable: true
})
console.log(obj)
Object.defineProperty(obj, 'id', {
  // 不可修改
  writeable: false
})
obj.id = 2
Object.defineProperty(obj, 'name', {
  // 不可被枚举、遍历，默认false
  enumerable: false
})
Object.defineProperty(obj, 'id', {
  // 不可被删除，默认false
  // 设置为false后不可以再修改第三个参数的特性
  configurable: false
})
delete obj.id
console.log(obj)
