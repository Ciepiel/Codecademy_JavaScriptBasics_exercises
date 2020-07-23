// 1 ----------------------------------------------------------------
//function which takes in array as an arg
//and returns a new array with reverse order of elements
function reverseArray(array) {
    //empty array to store elements in reversal
    let newArray = []
    //iterating through an array to retrieve the elements
    //from the end to the beginning
    for (let i = array.length-1; i >= 0; i--)
    //appendng elements to the new array
    newArray.push(array[i])
    return newArray
  };
  
 
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  console.log(reverseArray(sentence)) 


// 2 ----------------------------------------------------------------
//function which takes an array as an arg and iterates
//through each string within this array
function greetAliens(array) {
    //loop to iterate through an array
    for (let i = 0; i < array.length; i++)
    //string to print with each of the strings 
    console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`)
  };
   
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  greetAliens(aliens);
  

// 3 ----------------------------------------------------------------
//function which takes an array as an arg
//and returns a new array with each element prepended
//with 'baby'
function convertToBaby(array) {
    //new array to store the results
    let babyArray = []
    //looping through an array to retrieve each element
    for (let i = 0; i < array.length; i++)
    //appending to the new array 'baby [element]
    babyArray.push(`baby ${array[i]}`)
    return babyArray
  };
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  console.log(convertToBaby(animals)) 
  

// 4 ----------------------------------------------------------------
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      //new array to store results
      let results = [];
      // The 'outer' for loop to iterate through an array
      for (let i = 0; i < arr.length; i++) {
            //assigning array's element to number var
            number = arr[i];

            // The 'inner' while loop to perform check
            // new var j to be pushed in results array
            let j = 1;
            //as long as j will be lower than i, it will
            //be multplied by 2
            while (j < number) {
                  j = j * 2;
            }
            //when the while loop gets to false
            //j extends the i- j is pushed to results
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 

// 5 ----------------------------------------------------------------
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// function that takes in an array and loops through
//its elements and calls politelyDecline for each of them
const declineEverything = arr => {
  arr.forEach(politelyDecline)
}
/*
// As a function declaration:
function declineEverything(arr) {
      arr.forEach(politelyDecline)
}
*/

// function that takes in an array and toops through
//its elements and accepts each of them
// Using an anonymous function and string interpolation:
const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
}
/*
// Using a named function and string concatenation:
const grudginglyAccept = veg => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}
const acceptEverything = arr => {
      arr.forEach(grudginglyAccept)
}

// Using a loop:
const acceptEverything = arr => {
 for(let i = 0; i<arr.length; i++){
    console.log(`Ok, I guess I will eat some ${arr[i]}.`)
 }
}
*/

// 6 ----------------------------------------------------------------
const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num

//function that takes in an array and returns an array
//with squares for each elemen from original array
const squareNums = arr => arr.map(toSquare) 

/*
// Using an anonymous function:
const squareNums = arr => arr.map(e => e * e)

// As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare)
}
*/

// 7 ----------------------------------------------------------------
//function that takes in an array and returns a new one
//new array contains all the elements from argument array
//but with capitalized letters and exclamation points
const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

/*
// As a function declaration AND using a loop:
function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}
*/
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

console.log(shoutGreetings(greetings))

// 8 ----------------------------------------------------------------
//function that takes in an array and returns an array
//sorted in descending order
const sortYears = arr => arr.sort((x, y) => y - x);

/*
// As a function declaration AND using a named function:
function sortYears(arr) {
      const checkYears = (year1, year2) => year2 - year1
      return arr.sort(checkYears)
}
*/

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))

// 9 ----------------------------------------------------------------
//function that takes in 2 arrays and returns an array
//with common elements from both arrays
const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

// 10 ---------------------------------------------------------------

//function that takes in an array of food objects
//checks if ALL of them are plant-based
//and return boolean
const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

/*
// Alternate solution:
// Using a function declaration, loop, and helper function:
function isTheDinnerVegan(arr) {
      const isVegan = (food) => {
            if (food.source === 'plant') {
                  return true;
            }
            return false;
      }
      for(let i = 0; i<arr.length; i++){
            if (!isVegan(arr[i])){
                  return false 
            }
      }
      return true
}
*/

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))

// 11 ---------------------------------------------------------------
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// function which takes 2 arguments (objects)
//compares them and puts in asc order
const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeet

///function that takes in an array and sorts it using
//above function which puts object ascending
const sortSpeciesByTeeth = array => array.sort(compareTeeth);

console.log(sortSpeciesByTeeth(speciesArray))
/*
// Should print [ { speciesName: 'human', numTeeth: 32 },
  { speciesName: 'dog', numTeeth: 42 },
  { speciesName: 'shark', numTeeth: 50 },
  { speciesName: 'alligator', numTeeth: 80 } ]

*/

// 12 ---------------------------------------------------------------
// function returning an index of a given string
//from the array
const findMyKeys = array => array.indexOf('keys');

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))

  
// 13 ---------------------------------------------------------------
// function that has 3 parameters
const dogFactory = (name, breed, weight) => {
    //return an object
      return {
          _name: name,
          _breed: breed,
          _weight: weight,
          //getters and setters
          get name() {
              return this._name;
          },
          set name(newName) {
              this._name = newName;
          },
          get breed() {
              return this._breed;
          },
          set breed(newBreed) {
              this._breed = newBreed;
          },
          get weight() {
              return this._weight;
          },
          set weight(newWeight) {
              this._weight = newWeight;
          },
          //methods which return given values
          bark() {
              return 'ruff! ruff!'
          },
          eatTooManyTreats() {
              this._weight++
          }
      }
  }
  