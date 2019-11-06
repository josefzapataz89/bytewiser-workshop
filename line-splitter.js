'use strict'

const fs = require('fs')

const filePath = process.argv[2]

fs.readFile(filePath, (err, data) => {
    let breakLinesIdx = []

    // get all breakLines
    for (let idx = 0; idx < data.length; idx++ ) {
        if (data[idx] === 10)
            breakLinesIdx.push(idx)        
    }

    // console.log(breakLinesIdx)
    breakLinesIdx.unshift(-1)
    // console.log(breakLinesIdx)

    for (let i = 0, j = 1; i < breakLinesIdx.length; i++, j++) {
        // console.log(breakLinesIdx[i] + 1, [breakLinesIdx[j]])
        console.log(data.slice((breakLinesIdx[i] + 1), breakLinesIdx[j]))
    }

})