#!/usr/bin/env node
import readlineSync from 'readline-sync';
const greeting = () => {
    const name = readlineSync.question(' May I have your name?');
    console.log(`Hello,${name}!`);
    return name;
};

export default greeting;
const parity = (number) => number % 2 === 0;
const game = () => {
    const name = greeting();
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        for (let i = 0; i < 3; i ++) {
            const number = Math.floor(Math.random() * 100) + 1;
            console.log(`Question: ${number}`);
            const answer = readlineSync.question('Your answer: ');
            const correct = parity(number) ? 'yes' : 'no';
                if (answer !== correct) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    
    console.log('Correct!');
  }
  
  console.log(`Congratulations, ${name}!`);
};
game();