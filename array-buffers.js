'use strict'

const num = process.argv[2]

// create array with 1 position
let arr32 = new Uint32Array(1)
arr32[0] = num

let arr16 = new Uint16Array(arr32.buffer)

console.log(JSON.stringify(arr16));



