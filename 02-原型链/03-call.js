/**
 * call方法可以修改调用者this指向
 */
let that

function fn(a, b) {
  console.log(a + b)
  that = this
}

let obj = {
  name: 'miss'
}

fn.call(obj, 1, 2)
console.log(that)

/**
 * call实现继承
 */
function Father(name, age) {
  this.name = name
  this.age = age
}
Father.prototype.show = function () {
  console.log(this.name, this.age)
}

function Son(name, age) {
  // 利用call继承
  Father.call(this, name, age)
}
// 将原型指向Father实例，利用实例中的__proto__属性继承父类用原型对象添加的方法
Son.prototype = new Father()
// new Father()实例中没有构造方法constructor
Son.prototype.constructor = Son

Son.prototype.sum = function (a, b) {
  console.log(a + b)
}

let son = new Son('miss', 18)
son.show()
son.sum(1, 2)
