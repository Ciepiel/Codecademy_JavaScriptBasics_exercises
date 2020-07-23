//variable containing text to translate
let input = "I want to become a developer."
//array containing vowels (without 'y')
const vowels = ['a', 'e', 'i', 'o', 'u']
//variable with an empty array to store vowels from input
let resultArray = []
//loop to iterate through each letter of the input
for (let i = 0; i < input.length; i++) {
  //logging the iterator numbered position
  //it counts the number of characters in input string
  //console.log('i is '+ i);

  //nested for loop
  for (let j = 0; j < vowels.length; j++) {
    //logging the iterator to check
    //prints 0-4 repeatedly for each i from input
    //console.log('j is ' + j);
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j])
    }
  }
  //whales double their e and their u
  //after the inner loop, inside the outer loop
  //we chack the input for e and u
  //if it appears we add additional e and u 
  //to our result array
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
}
//.join() method will make a continuous string
//- it removes the commas, with '' argument
//makes it not separated
console.log(resultArray.join('').toUpperCase());