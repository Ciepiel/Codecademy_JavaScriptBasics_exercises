//.forEach() arrow function
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

//.map arrow function
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

//.filter arrow function
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

//forEach function expression
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function(fruit) {
  console.log("I want to eat a " + fruit);
});


//map function expression
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(function(animal) {
  return animal[0];
});

console.log(secretMessage.join(''));


//map concise body arrow function
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(bigNum =>
bigNum / 100);
console.log(smallNumbers);

//filter arrow function
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
});
console.log(smallNumbers)

//filter arrow function
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(favword => {
  return favword.length > 7;
});
console.log(longFavoriteWords)

//findIndex arrow function
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
//1
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal)
//2
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});
console.log(startsWithS)

//reduce method
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

//reduce method with 2nd argument
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117

//reduce method with 2nd argument
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);


//.some, .filter, .every
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
}));
//returns true as there are some elements shorter
//than 6 characters in words array

//new array with words longer than 5 characters
const interestingWords = words.filter(word => {
  return word.length > 5;
});
console.log(interestingWords);

console.log(interestingWords.every((word) => {
  return word.length > 5;
 } ));
//returns true as every word has more than 5 characters


//short exercises
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

cities.forEach(city => console.log('Have you visited ' + city + '?'));


const longCities = cities.filter(city => city.length > 7);

const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word)

// returns a new array
const smallerNums = nums.map(num => num - 5);

// returns a boolean value
nums.some(num => num < 0);
