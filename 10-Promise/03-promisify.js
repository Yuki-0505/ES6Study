const util = require('util')
const fs = require('fs')
const path = require('path')

let mineReadFile = util.promisify(fs.readFile)

mineReadFile(path.join(__dirname, './01-myPromise.js')).then(data => {
  console.log(data.toString())
})
