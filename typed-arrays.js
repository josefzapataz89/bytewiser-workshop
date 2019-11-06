'use strict'

const through = require('through')

process.stdin
    .pipe(through(function(buff) {
        let u8buff = new Uint8Array(buff)

        this.queue(JSON.stringify(u8buff))
        this.queue('\n')
    }))
    .pipe(process.stdout)