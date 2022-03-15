let timeout = process.argv.slice(2)
for(let i = 0; i < timeout.length; i++){
  setTimeout(() => {
    if(timeout[i] < 0){
      return
    } else{
      process.stdout.write('\x07' + timeout[i] + ', ');
    }}, timeout[i] * 1000)
}
