/**
 * 所有函数都是Function的实例
 * 函数也是对象
 */

// 命名函数
function fn() {}

// 匿名函数
let fn1 = function () {
  // 在浏览器中this默认执行 window
  console.log(this)
}

// new Function()
let fn2 = new Function('a', 'b', 'console.log(a + b)')

fn1()
fn2(1, 3)

console.log(fn instanceof Function)
console.log(fn1 instanceof Function)
