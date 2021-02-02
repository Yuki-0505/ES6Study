/**
 * async返回一个Promise对象
 * 可以使用then() catch()方法
 * async是Generator的语法糖
 */
async function fn() {
  await new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('hello world');
    }, 1000)
  })
}

fn()
  .then(data => console.log(data))
  .catch(err => console.log(err))
