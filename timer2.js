const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  // timeout = Number(key.name)

  if (key === 'b' ) {
    console.log('BEEP!');
    process.stdout.write('\x07');
  } 

  if(Number(key) <= 9 && Number(key) >= 1 ) {
          setTimeout(() => {
            process.stdout.write('\x07');
          }, key * 1000)
          console.log(`setting timer for  ${key}  seconds...`);
  }

  if(key === '\u0003') {
    console.log('EXITING...');
    process.exit()
  }
})



//------Using ReadLine--------------------
// const readline = require('readline');
// readline.emitKeypressEvents(stdin);


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Type 1 to 9 to set timer? ', (input) => {
  
//   if(Number(input) <= 9 && Number(input) >= 1 ) {
//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, input * 1000)
//     console.log(`setting timer for  ${input}  seconds...`);
//   } 
//   if(input === 'b' ) {
//     process.stdout.write('\x07');
//     console.log('beep');
//   }
//   if(input === '\u0003') {
//     process.exit();
//   }
//   rl.close();
// });

