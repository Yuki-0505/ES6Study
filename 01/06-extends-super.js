class Father {
  constructor(name) {
    this.name = name
  }
  show() {
    console.log(this.name)
  }
}

class Son extends Father {
  constructor(name, age) {
    // super需要放在最前面
    super(name)
    this.age = age
  }
}

const son = new Son('miss', 18)
son.show()
console.log(son.age)
