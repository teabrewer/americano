const eachOfLimitTest = require('./src/test/async/EachOfLimitTest')

main()

async function main () {
    console.time(arguments.callee.name)
    try {
        await eachOfLimitTest.run()
    } catch (err) {
        console.error('## >>', err)
    }
    console.timeEnd(arguments.callee.name)
    process.exit()
}