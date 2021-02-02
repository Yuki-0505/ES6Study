/**
 * 数组解构
 */
let [a, b, c] = [1, 2, 3]
console.log(a, b, c)

let [d, e, f] = [1, 2]
console.log(d, e, f)
// > 1 2 undefined

/**
 * 对象解构
 */
let person = {
  name: 'miss',
  age: '18',
  gender: 0
}

let {
  name,
  age,
  gender
} = person
console.log(name, age, gender)

let {
  name: myName,
  age: myAge,
  gender: myGender
} = person
console.log(myName, myAge, myGender)
