'use strict'

const through = require('through')
var buffer

process.stdin
    .pipe(through(function (buff) {
        if(Buffer.isBuffer(buffer)) {
            buffer = Buffer.concat([buffer, buff]) 
        }
        else {
            buffer = buff
        }
    }, function () {
        console.log(buffer)
    }))