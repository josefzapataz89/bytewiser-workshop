'use strict'

let args = process.argv.slice(2)
let buffer = Buffer.from(args)
console.log(buffer.toString('hex'))
