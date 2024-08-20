const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Welcome to Holberton School, what is your name? ', (answer) => {
  console.log(`Your name is: ${answer}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
