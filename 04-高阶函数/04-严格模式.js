/**
 * 严格模式
 * 变量需要先声明再使用
 * 不可以使用delete删除已经声明的变量
 * 严格模式下全局作用域中的this指向undefined
 * 构造函数的this指向实例对象
 * 定时器中的this指向window
 */

// 为脚本开启严格模式
'use strict'

// let num = 10
// delete num

function fn() {
  console.log(this)
}
// 严格模式下全局作用域中的this指向undefined
fn()

setTimeout(function() {
  console.log(this)
})

;(function () {
  // 为函数开启严格模式
  'use strict'

})()

