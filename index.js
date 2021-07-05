#!/usr/bin/env node
const program = require('commander')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')
const chalk = require('chalk')
const clipboardy = require('clipboardy')

program.version('1.0.0').description('First Version')
program
.option('-l,--length <length>','Password Length','8')
.option('-save ','Save Password','false')
.option('-nn,--no-numbers ','No Numbers','true')
.option('-ns,--no-symbols ','No Symbols','true')
.parse()

const {length,save,numbers,symbols}=program.opts()

const generatedPassword = createPassword(length,numbers,symbols)

if(save){
    savePassword(generatedPassword)
}

clipboardy.writeSync(generatedPassword)

console.log(chalk.blue('Password is :')+chalk.bold(generatedPassword))
console.log(chalk.yellow('Password Copied'))