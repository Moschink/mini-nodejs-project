const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your number: ", (number) => {
    if(isNaN(number)){
    console.log("Enter a valid Number")
    }
        else if(number % 2 === 0){
            console.log("You entered: " + (number) + " which is EVEN");
        }
        else{
        console.log("You entered: " + (number) + " which is ODD");  
    }
  rl.close();
});
