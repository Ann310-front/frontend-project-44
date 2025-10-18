#!/usr/bin/env node
import readlineSync from 'readline-sync'
import greeting from '../src/cli.js'

const calculateGCD = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const gcdGame = () => {
    const name = greeting();
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i++) {
        const number1 = Math.floor(Math.random() * 100) + 1;
        const number2 = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = calculateGCD(number1, number2).toString();

        console.log(`Question: ${number1} ${number2}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        
        console.log('Correct!');
    }
    
    console.log(`Congratulations, ${name}!`);
};

gcdGame();