let obj = {
  name: 'miss',
  next: {
    name: 'jack'
  }
}

let obj2 = {}

// for(let key in obj) {
//   obj2[key] = obj[key]
// }

Object.assign(obj2, obj)

obj.next.name = 'tom'
console.log(obj2)
