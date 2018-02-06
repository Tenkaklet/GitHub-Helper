const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');

const inquirer = require('./lib/inquirer');

const run = async () => {
  const credentials = await inquirer.askGitHubCredentials();
  console.log(credentials);
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