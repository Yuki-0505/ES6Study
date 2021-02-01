/**
 * 构造函数创建对象
 * 对象中的函数方法不共享
 * 存在浪费内存的问题
 * 一般情况下，公共属性定义在构造函数中，公共方法定义到原型对象中
 */
function Person(name, age) {
  this.name = name
  this.age = age
  this.show = function () {
    console.log(this.name, this.age)
  }
}

let p1 = new Person('miss', 18)
p1.show()

/**
 * 静态成员
 */
p1.gender = 0
console.log(p1.gender)
// 静态成员不能通过实例对象访问
console.log(Person.gender)
// > undefined

/**
 * 构造函数中的函数不共享
 */
let p2 = new Person('jack', 20)
console.log(p1.show === p2.show)
// > false
