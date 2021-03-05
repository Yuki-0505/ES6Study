class myPromise {
  // business: 具体业务函数
  constructor(business) {
    this.business = business
  }

  then(callback1, callback2) {
    // 默认需要返回一个myPromise对象
    let instance = null
    // 需要对business为空的情况进行处理
    instance = this.business && this.business(callback1, callback2)
    return instance? instance: new myPromise()
  }
}
/**
 * 同步等待，保证顺序执行
 * 保证当前then()函数执行完才执行下一个then
 */
async function myBusiness(message) {
  return await new myPromise(function (resolve, reject) {
    setTimeout(function () {
      const flag = Math.floor(Math.random() * 2)
      if (flag) {
        return resolve && resolve(message + ' success.')
      } else {
        return reject && reject(message + ' error.')
      }
    }, 1000)
  })
}

myBusiness('aaa')
  .then(function (data) {
    console.log(data)
    return myBusiness('bbb')
  }, function (err) {
    console.log(err)
  })
  .then(function (data) {
    console.log(data)
    return myBusiness('ccc')
  })
  .then(function (data) {
    console.log(data)
  })
