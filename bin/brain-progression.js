#!/usr/bin/env node
import readlineSync from 'readline-sync'
import greeting from '../src/cli.js'

const generateProgression = (start, step, length) => {
const progression = [];
for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
}
return progression;
};

const arithmeticProgression = () => {
    const name = greeting();
    console.log('What number is missing in the progression?');

    for (let i = 0; i < 3; i++) {
        const start = Math.floor(Math.random() * 50) + 1;
        const step = Math.floor(Math.random() * 10) + 1;
        const length = 10;
        const progression = generateProgression(start, step, length);
        const hiddenIndex = Math.floor(Math.random() * length);
        const correctAnswer = progression[hiddenIndex].toString();
         const progressionWithHidden = [...progression];
         progressionWithHidden[hiddenIndex] = '..';
         const question = progressionWithHidden.join(' ');
        console.log(`Question: ${question}`);
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
arithmeticProgression();
