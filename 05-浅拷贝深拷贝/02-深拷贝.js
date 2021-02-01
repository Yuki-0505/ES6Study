let obj = {
  name: 'miss',
  next: {
    name: 'jack'
  },
  arr: [1, 2, 3, 4],
  sum: function (a, b) {
    return a + b
  }
}

let obj2 = {}

function deepCopy(newObj, oldObj) {
  for (let key in oldObj) {
    if (oldObj[key] instanceof Array) {
      newObj[key] = []
      deepCopy(newObj[key], oldObj[key])
    } else if (oldObj[key] instanceof Function) {
      newObj[key] = oldObj[key]
    } else if (oldObj[key] instanceof Object) {
      newObj[key] = {}
      deepCopy(newObj[key], oldObj[key])
    } else {
      newObj[key] = oldObj[key]
    }
  }
}

deepCopy(obj2, obj)

obj.arr[2] = 10
console.log(obj)
console.log(obj2)
