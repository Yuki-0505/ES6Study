/**
 * 通过闭包可以访问函数内部的值
 */
function fn() {
  let name = 'miss'
  return function() {
    return name
  }
}

let fun = fn()

console.log(fun())
