/**
 * Map
 * 键值对的有序队列
 * 键和值是任意类型
 * 键不可重复
 */
const map = new Map()

map.set('name', 'miss')
map.set('age', 18)
map.set('name', 'jack')
map.set([1, 2], 'hello')

console.log(map.get('name'))
console.log(map)

// has()
console.log(map.has('name'))
// > true

// delete()
console.log(map.delete('age'))
// > true
console.log(map)

// clear()
map.clear()
console.log(map)

// 数组转Map
const m = new Map([
  ['a', 1],
  ['b', 2]
])
console.log(m)
// > Map(2) { 'a' => 1, 'b' => 2 }
