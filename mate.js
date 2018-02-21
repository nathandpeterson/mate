const AssertionError = require('assert').AssertionError;
const chalk = require('chalk')

function mate() {
  let failed = 0
  let passed = 0

  return {
    describe(description, cb) {
      console.log(`\n${description}`)
      cb()
      console.log(chalk.green(`${passed} passing`))
      console.log(chalk.red(`${failed} failing`))
    },
    it(description, cb) {
      try {
        cb()
        console.log(`${chalk.green('✓')} ${description}\n`)
        passed++
      } catch (e) {
        console.log(`${chalk.red('✗')} ${description}`)
        console.log(`  Assertion Error: ${e.message}\n`)
        failed++
      }
    }
  }
}

const {describe, it} = mate()

module.exports = {
  describe,
  it
}
