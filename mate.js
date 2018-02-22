const AssertionError = require('assert').AssertionError;
const chalk = require('chalk')

let passed = 0
let failed = 0

const describe = (textDescription, cb) => {
  cb()
  console.log('Tests passed: ' + chalk.green(passed) + ' Tests failed: ' + chalk.red(failed))
}

const it = (textDescription ,cb) => {

  try {
    cb()
    console.log(chalk.green('✔'), textDescription + '\n')
    passed++
  } catch(err){
    console.log(chalk.red('✗'), textDescription + '\n')
    console.log(chalk.inverse(`Assertion Error: ${err.message}\n`))
    failed++
  }

}

module.exports = {
  describe,
  it
}
