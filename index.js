const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPassword = require('./func/createPassword')
const savePassword = require('./func/savePassword')

program.version('1.0.0').description('Crypton Generator')

program
  .option('-s, --save', 'save password to passwords.txt')
  .option('-l, --length <number>', 'length of password', '8')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

  const { save, length, numbers, symbols } = program.opts()

// Generate password
const generatedPassword = createPassword(length, numbers, symbols)

// Save and write to file
if (save) {
  savePassword(generatedPassword)
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output generated password
log(chalk.green('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.blue('Password copied to clipboard'))