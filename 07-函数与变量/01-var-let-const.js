/**
 * var 作用域为所在函数
 * 存在变量提升
 */

/**
 * let 作用域为块级，即大括号中
 * let 没有变量提升，只能先声明后使用
 * let 暂时性死区
 */

// 暂时性死区，会报错
var tmp = 123
if(true) {
  // 该tmp为块级
  tmp = 'jack'
  // tmp与块级进行了绑定，使用tmp时默认会先在块级作用域中查找
  let tmp
}

/**
 * const 常量具有块级作用域
 * const 声明常量时必须赋初值
 * 赋值后不能修改值(内存地址)，数据结构内部值可修改
 */

const obj = {
  name: 'miss'
}
obj.name = 'jack'
