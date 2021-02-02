/**
 * /world/g 全局匹配 global
 * /world/i 忽略大小写
 */
let str = `hello world \n World!`
console.log(str.replace(/world/gi, 'miss'))
// > `hello miss \n miss!`
