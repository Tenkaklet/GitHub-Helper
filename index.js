const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const github = require('./lib/github');
const inquirer = require('./lib/inquirer');

const run = async () => {
  let token = github.getStoredGithubToken();
  if(!token) {
    await github.getStoredGithubToken();
    token = await github.registerNewToken();
  }
  console.log(token); 
}

clear();

console.log(
  chalk.yellow(
    figlet.textSync('GitHub Helper', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a Git Repository'));
  process.exit();
}


run();