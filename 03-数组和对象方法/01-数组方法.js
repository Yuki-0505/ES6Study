let arr = [10, 30, 50, 40, 20]

arr.forEach(function(value, index, array) {
  // 值 下标 数组本身
  console.log(value, index, array)
})

/**
 * filter(value, index, array): Array
 */
let arr2 = arr.filter(value => value < 35)
console.log(arr2)

/**
 * some(value, index, array): boolean
 * 找到第一个满足条件的后(返回true)不再继续
 */
arr.some(value => value > 40)
let flag = arr.some(function (value) {
  if(value === 40) {
    return true
  }
  console.log(value)
})
console.log(flag)

/**
 * map(value, index, array): Array
 */
let arr3 = arr.map(value => value * 2)
console.log(arr3)

/**
 * 去除两端空格
 */
console.log('   feae feae   feaef   '.trim())
