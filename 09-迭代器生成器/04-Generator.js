/**
 * 生成器
 */

function* add() {
  console.log('start')
  let x = yield 2
  console.log('one ' + x)
  let y = yield 3
  console.log('two ' + y)
  return x + y
}

const fn = add()
console.log(fn.next())
// > { value: '2', done: false }
console.log(fn.next(4))
// > { value: '3', done: false }
console.log(fn.next(3))
// > { value: 7, done: true }


/**
 * 异步代码顺序执行
 */
function* main() {
  let msg = yield
  console.log(msg)
}
let ite1 = main()

function* myTimeout() {
  let msg = yield setTimeout(function() {
    ite1.next()
    ite1.next('hello main')
  }, 1000)
  console.log(msg)
}
let ite2 = myTimeout()

function* fun() {
  let msg = yield setTimeout(function() {
    ite2.next()
    ite2.next('hello myTimeout')
  }, 1000)
  console.log(msg)
}

let ite3 = fun()
ite3.next()
ite3.next('hello fn')
