#!/usr/bin/env node
import readlineSync from 'readline-sync'
import greeting from '../src/cli.js'

const isPrime = (n) => {
  if (n < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const game = () => {
  const name = greeting()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * 100) + 1
    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ')
    const correct = isPrime(number) ? 'yes' : 'no'
    if (answer !== correct) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
game()
