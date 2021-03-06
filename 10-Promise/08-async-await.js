const fs = require('fs')
const util = require('util')

const mineTimeout = util.promisify((data, callback) => {
  setTimeout(() => {
    let err = Math.round(Math.random() * 4)
    err = err === 0 ? 'error.' : undefined
    callback(err, 'mine:' + data)
  }, Math.round(Math.random() * 1000))
})

async function main() {
  try {
    let data1 = await mineTimeout(111)
    let data2 = await mineTimeout(222)
    let data3 = await mineTimeout(333)
    console.log(data1, data2, data3)
  } catch (e) {
    console.log(e)
  }
}

main()
