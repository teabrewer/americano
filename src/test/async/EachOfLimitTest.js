const eachOfLimit = require('async/eachOfLimit')
// const eachOfSeries = require('async/eachOfSeries')

module.exports = {
    run () {
        return new Promise((resolve, reject) => {
            let ls = sampleData()
            eachOfLimit(ls, 3, (value, i, next) => {
                console.log(`${i} => `, value.id)
                next()
            }, err => {
                if(err) reject(err)
                else resolve()
            })
        })
    }
}

function sampleData () {
    const results = []

    for (let i=0; i<100; i++) {
        results.push(randomData())
    }

    return results    
}

function randomData () {
    return {
        id: Math.floor(Math.random() * 100)
    }
}


