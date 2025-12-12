#!/usr/bin/env node
import readlineSync from 'readline-sync'
import greeting from '../src/cli.js'

const calculator = () => {
  const name = greeting()
  console.log('What is the result of the expression?')

  for (let i = 0; i < 3; i++) {
    const number1 = Math.floor(Math.random() * 100) + 1 // NOSONAR
    const number2 = Math.floor(Math.random() * 100) + 1 // NOSONAR
    const operators = ['+', '-', '*']
    const operator = operators[Math.floor(Math.random() * operators.length)]
    let correctAnswer
    let question

    switch (operator) {
      case '+':
        correctAnswer = number1 + number2
        question = `${number1} + ${number2}`
        break
      case '-':
        correctAnswer = number1 - number2
        question = `${number1} - ${number2}`
        break
      case '*':
        correctAnswer = number1 * number2
        question = `${number1} * ${number2}`
        break
    }

    console.log(`Question: ${question}`)
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10)
    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

calculator()
