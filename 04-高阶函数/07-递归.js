function fn(n) {
  if(n === 0) {
    return 1
  }
  return n * fn(n - 1)
}

console.log(fn(0))
console.log(fn(4))
