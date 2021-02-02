const sum = (...args) => {
  return args.reduce((p, n) => p + n, 0)
}
console.log(sum(1, 2, 3, 4, 5))

let [a, ...b] = [1, 2, 3]
console.log(a, b)
