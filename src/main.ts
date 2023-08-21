import './style.css'

const userName = window.prompt('What is your name?')
console.log(`Hello ${userName}, welcome to the website!`)

let number1 = window.prompt(`Give me a random number`)
let number2 = window.prompt('Give me another random number')

const firstOperand = Number(number1)
const secondOperand = Number(number2)

//const firstOperand = Number(window.prompt(`Give me a random number`))
//const secondOperand = Number(window.prompt('Give me another random number'))

const sum = firstOperand + secondOperand
const difference = firstOperand - secondOperand
const product = firstOperand * secondOperand
const quotient = firstOperand / secondOperand
const remainder = firstOperand % secondOperand

console.log(`If you add ${firstOperand} and ${secondOperand}, you get ${sum}. 
If you subtract ${firstOperand} by ${secondOperand}, you get ${difference}. 
If you multiply ${firstOperand} by ${secondOperand}, you get ${product}. 
If you divide ${firstOperand} by ${secondOperand}, you get ${quotient}. 
If you divide ${firstOperand} by ${secondOperand}, the remainder is ${remainder}.`)

let numberOfCupsOfCoffee = 2

let fullName = 'Jeremy Badger'

console.log(
  fullName + ' drinks ' + numberOfCupsOfCoffee + ' cups of coffee a day.'
)

const aboutMe = {
  name: fullName,
  luckyNumber: 171,
  favoriteMovies: ['SlaughterHouse 5', 'The Hunchback of Notre Dame'],
}

const numbers = [
  17505, 19912, 25569, 22546, 40221, 29155, 24782, 33754, 22179, 48020, 12586,
  35327, 46353, 14548, 44130, 25959, 19459, 19977, 27754, 11742, 43351, 15696,
  36935, 42665, 20458, 29613, 41387, 47230, 23119, 29821, 19032, 28997, 31343,
  31014, 11503, 36763, 34312, 33515, 21345, 14468, 33555, 27776, 16274, 15433,
  48931, 12544, 36188, 15674, 41627, 17592, 42242, 48119, 16200, 49177, 40710,
  10373, 17193, 23761, 44948, 34388, 45180, 42838, 45272, 35552, 44542, 47451,
  24574, 48621, 15908, 31030, 39998, 43825, 48166, 28324, 34512, 38150, 33038,
  48510, 16006, 43581, 19436, 34945, 20901, 18439, 10857, 29684, 36705, 39304,
  36935, 31990, 12223, 15752, 16890, 32734, 45006, 43448, 31135, 27495, 40838,
  48443,
]

let smallest = numbers[0]
let largest = numbers[0]
let arraySum = 0
let sumOfOdds = 0
let countOfEven = 0

for (var number of numbers) {
  if (number < smallest) {
    smallest = number
  }
  if (number > largest) {
    largest = number
  }
  if (number % 2 == 1) {
    sumOfOdds += number
  }
  if (number % 2 == 0) {
    countOfEven += 1
  }
  arraySum += number
}
let average = arraySum / numbers.length
console.log(numbers.length)

const stats = {
  smallest: smallest,
  largest: largest,
  sum: arraySum,
  average: average,
  oddSum: sumOfOdds,
  evenCount: countOfEven,
}

console.log(`In your array, the smallest number is ${stats.smallest}, the largest number is ${stats.largest}.
The sum of all the numbers in the array is ${arraySum} and the average number in the array is ${average}. 
The sum of the odd numbers in the array is ${stats.oddSum} and the count of the even numbers is ${stats.evenCount}`)

console.log(`My name is ${aboutMe.name}`)
