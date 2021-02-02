/**
 * 扩展运算符可以将数组或对象转为逗号分隔的 参数序列
 */

let arr = [1, 2, 3]
console.log(...arr)

// 合并数组
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
console.log(arr3)

// 添加元素，而不是整个数组对象
arr1.push(...arr2)
console.log(arr1)

// 将伪数组转为真正的数组，伪数组不能使用真正数组的方法
// let divs = document.getElementsByTagName('div')
// let divArr = [...divs]
let arrayLike = {
  '0': 1,
  '1': 2,
  '2': 3,
  'length': 3
}
let arr4 = Array.from(arrayLike, item => item * 2)
console.log(arr4)

// find()
let target = [{
  id: 1,
  name: 'miss'
}, {
  id: 2,
  name: 'jack'
}].find(item => item.id === 2)
console.log(target)

// findIndex()
let fi = [{
  id: 1,
  name: 'miss'
}, {
  id: 2,
  name: 'jack'
}, {
  id: 3,
  name: 'john'
}].findIndex(item => item.id >= 2)
console.log(fi)

// includes
console.log([1,2,3,4].includes(3))
// > true
