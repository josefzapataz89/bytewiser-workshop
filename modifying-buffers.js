'use strict'

const through = require('through2')

const tr = through((buffer) => {
    for(let i=0; i < buffer.length; i++) {

        if (buffer[i] === 46) {
            buffer.write('!', i)
        }

    }

    console.log(buffer)
})

process.stdin.pipe(tr)