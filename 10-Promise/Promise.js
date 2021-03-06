class Promise {
  /* 构造函数 */
  constructor(executor) {
    // 添加属性
    this.PromiseState = 'pending'
    this.PromiseResult = null
    this.callbacks = []
    // 保存this
    const self = this
    /* 实例方法 */
    // resolve
    async function resolve(data) {
      // 判断状态
      if (self.PromiseState !== 'pending') return
      // 设置状态
      self.PromiseState = 'fulfilled'
      // 设置结果值
      self.PromiseResult = data
      // 执行回调函数
      await data
      self.callbacks.forEach(item => {
        item.onResolved()
      })
    }
    // reject
    async function reject(data) {
      // 判断状态
      if (self.PromiseState !== 'pending') return
      // 设置状态
      self.PromiseState = 'rejected'
      // 设置结果值
      self.PromiseResult = data
      // 执行回调函数
      await data
      self.callbacks.forEach(item => {
        item.onRejected()
      })
    }
    // 抛出异常时，将状态设置为rejected
    try {
      // 同步调用
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }

  }
  /* 原型方法 */
  // then
  then(onResolved, onRejected) {
    const self = this
    if (typeof onResolved !== 'function') {
      onResolved = value => value
    }
    if (typeof onRejected !== 'function') {
      onRejected = reason => {
        throw reason
      }
    }
    return new Promise((resolve, reject) => {
      async function callback(type) {
        try {
          await self.PromiseResult
          let result = type(self.PromiseResult)
          if (result instanceof Promise) {
            result.then(v => resolve(v), r => reject(r))
          } else {
            resolve(result)
          }
        } catch (e) {
          reject(e)
        }
      }
      if (this.PromiseState === 'fulfilled') {
        callback(onResolved)
      }
      if (this.PromiseState === 'rejected') {
        callback(onRejected)
      }
      if (this.PromiseState === 'pending') {
        // 保存回调函数
        this.callbacks.push({
          onResolved: () => {
            callback(onResolved)
          },
          onRejected: () => {
            callback(onRejected)
          }
        })
      }
    })
  }
  // catch
  catch (onRejected) {
    return this.then(undefined, onRejected)
  }
  /* 静态方法 */
  // resolve
  static resolve(value) {
    // 返回Promise对象
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(v => resolve(v), r => reject(r))
      } else {
        resolve(value)
      }
    })
  }
  // reject
  static reject(reason) {
    // 返回Promise对象
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
  // all
  static all(promises) {
    return new Promise((resolve, reject) => {
      let results = []
      let count = 0
      for (let index in promises) {
        promises[index].then(v => {
          results[index] = v
          count++
          if (count === promises.length) {
            resolve(results)
          }
        }, r => reject(r))
      }
    })
  }
  // race
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let promise of promises) {
        promise.then(v => resolve(v), r => reject(r))
      }
    })
  }
}
