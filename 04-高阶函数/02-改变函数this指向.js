function fn(a, b) {
  console.log(this, a + b)
}

let obj = {
  name: 'miss'
}
// call
fn.call(obj, 1, 2)

// apply
fn.apply(obj, [1, 2])
Math.max.apply(Math, [1, 2, 33, 45, 3, 1])

// bind 不会调用函数
let fn1 = fn.bind(obj, 1, 2)
fn1()

let fn2 = fn.bind(obj)
fn2(1, 2)
