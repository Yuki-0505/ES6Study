/**
 * Set数据结构
 * 元素不重复
 */
let arr = [1, 2, 2, 4, 3, 4]

let s1 = new Set(arr)
console.log(s1.size, s1)

// 数组去重
let arr2 = [...new Set(arr)]
console.log(arr2)

// add() 返回值为Set自身引用
let s2 = s1.add(8).add(9).add(28)
console.log(s2 === s1, s1)

// delete()
let flag = s1.delete(28)
console.log(flag, s1)

// has()
console.log(s1.has(3))
// > true

// clear()
s1.clear()
console.log(s1)
