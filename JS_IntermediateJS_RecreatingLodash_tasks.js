const _ = {
    //method 'clamp' takes 3 parameters
    //purpose is to return either a number if it fits
    //between lower and upper or one of the low/up, 
    //depending if number is below or over that range
    clamp(number, lower, upper) {
      //var which selects bigger- number or lower
      let lowerClampedValue = Math.max(number, lower);
      //var which selectr lowe- lowerClamped or upper
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
  
    //method 'inRange' takes 3 parmeters
    //verifies if a given number fits within a range
    //between start and end points
    inRange(number, start, end) {
      //if end is undefined it's set to start and start
      //is set to be 0
      if (end === undefined) {
        end = start
        start = 0
      }
      //if start is greater than end, these values swap
      if (start > end) {
        let tempEnd = end
        end = start
        start = tempEnd
      }
      //check if the number fits in the range
      let isInRange = start <= number && number < end
      return isInRange 
    },
  
    //method 'words' splits string into array of its words
    //here we use only 1 parameter and using .split()
    //method we split the string based on spaces
    words(string) {
      let words = string.split(' ')
      return words
    },
  
    //method 'pad' takes 2 arguments (originally 3)
    //string, num of characters(length) and string to pad
    //original string is bing padded by the other string
    //until it reaches a given length
    pad(string, length) {
      //here we use only 2 arguments and space as a pad
      //if string is already longer than targeted length
      //it will return the string
      if (length <= string.length) {
        return string
      }
      //value of start padding
      let padStart = Math.floor((length - string.length) / 2)
      //value of end padding
      let padEnd = (length - (string.length + padStart))
      //creating a string with added padding
      let paddedString = ' '.repeat(padStart) + string +' '.repeat(padEnd)
      return paddedString
    },
  
  //method 'has' takes 2 arg: an object and a key
  //checks if an object contains a key; returns a boolean
  has(object, key) {
    //variable to assign object at key to check its value
    let hasValue = object[key];
    //checking if value at key is undefined
    if (hasValue != undefined) {
       return true;
      } return false;
    },
  
  //method 'invert' takes an object and iterates through it
  //it swaps keys and values, eliminating duplicates
  invert(object) {
    //creating empty object for inverted keys
    let invertedObject = {};
    //iterating through every key in original object
    for (let key in object) {
      //assigning value at a current key to the var
      const originalValue = object[key];
      //assigning the value to be the current key
      invertedObject = {originalValue : key}
      }
      return invertedObject;
    },
  
  //method 'findKey' takes an object and predicate function
  //iterates through each key / value pair in the provided 
  //object and calls the predicate function with the value
  //returns the first key that has a value that returns a 
  //truthy value from the predicate function
  findKey(object, predicate) {
    //iterating through each key in object
    for (let key in object) {
      //vriable storing the value at the current key
      let value = object[key];
      //variable to store result of calling predicate with 
      //value
      let predicateReturnValue = predicate(value);
      //check if predictReturnValue is truthy
      if (predicateReturnValue) {
        //if yes, return the current key
        return key;
      };
    };
    undefined
    return undefined;
  },
  
  //method 'drop' takes 2 arg- array and num of elements
  //to be dropped; returns NEW sliced array
  drop(array, n) {
    //verifying if n has been set
    if (n === undefined) {
      //if above is true (n is undefined), set n to 1
      n = 1
    };
    //new variable with an array of the length of 
    //the sliced original one
    let droppedArray = array.slice(n, array.length)
    return droppedArray
  },
  
  //method 'dropWhile' takes 2 arg- an array an predicate
  //function(curr element, curr element index, array)
  //it creates a copy of the array dropping the elements
  //from the beginnng until predicate function false result
  dropWhile(array, predicate) {
    //defining a callback func to be passed to .findIndex()
    const cb = (element, index) => {
      //cb func returns negated value of predicate
      //we are looking to drop elements until predicate is false
      return !predicate(element, index, array);
    }
    //variable with value equal to call of findIndex on 
    //array; findIndex argument- anonymous callback func
    //findIndex looks for the first truthy value, so in cb func
    //we make every true false and vice versa to get right value
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  
  //method 'chunk' takes in an array an a size (num of elements
  //per chunk)
  //it breaks up the array into arrays (chunks) of the given size
  //returns an array containing splitted chunks
  chunk(array, size) {
    //check if the size is defined; if not =1
    if (size === undefined) {
      size = 1;
    }
    let arrayChunks = [];
    //iterating through an array and incrementing by size each
    //each turn of the loop
    for (let i = 0; i < array.length; i += size){
      //var equals to the chunk of the array from current loop 
      //index to current loop index plus size
      //basically, creates a chunk of a given size
      let arrayChunk = array.slice(i, i+size)
      //adding single chunk to an array of chunks
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
    }
  };
  
    
  // Do not write or modify code below this line.
  module.exports = _; 