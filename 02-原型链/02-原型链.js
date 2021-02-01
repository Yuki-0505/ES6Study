function Person(name, age) {
  this.name = name
  this.age = age
  this.show = function () {
    console.log(this.name, this.age)
  }
}

/**
 * 原型对象
 * 实例对象在构造函数中找不到想要的方法时，就会沿着原型链在 __proto__ 中去找
 * __proto__ 是 prototype 对象的引用
 * constructor 属性在 prototype 对象中
 * 原型链中this指向的是调用的实例
 */
Person.prototype.sum = function (a, b) {
  return a + b
}
console.log(new Person().sum === new Person().sum)
// > true
console.log(new Person().__proto__ === Person.prototype)
// > true

console.log(new Person())
// 直接给原型对象赋值时，需要指定constructor
Person.prototype = {
  constructor: Person,
  sub: function (a, b) {
    return a - b
  }
}
console.log(new Person('stan', 16))
