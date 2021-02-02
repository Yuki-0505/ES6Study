
/**
 * 箭头函数不绑定this关键字，指向的是函数定义位置的上下文this
 */

const obj = {
  name: 'miss',
  fn: function () {
    console.log(this)
    return () => {
      console.log(this)
    }
  }
}
const fun = obj.fn()
fun()


const sum = (a, b) => a + b

console.log(sum(1, 3))

