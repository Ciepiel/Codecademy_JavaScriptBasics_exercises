// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


//Luhn algorithm
/*Starting from the farthest digit to the right, iterate to left
every second digit is doubled (the check digit is not doubled)
if the number is greater than 9 after doubling, sum it
sum up all the digits in the credit card number
if the sum modulo 10 is 0, then the number is valid, otherwise, it’s invalid*/


//function iterating through an array
function validateCred(numArr) {
    /*variable which will hold the sum of digits from an array
    after calculations*/
    let total = 0;
    /*loop to iterate through an array's digits FROM RIGHT TO LEFT
    thanks to i--*/
    for (let i = numArr.length - 1; i >= 0; i--) {
        //variable storing certain elements to check conditions
      let currValue = numArr[i]
      /*by modulo we check which digit in the array is the element
      we want to double every second element
      total number of digits is even, so we want to double digits
      from the positions for which modulo is 1*/
      if ((numArr.length - 1 - i) % 2 === 1) {
          //if the condition is satisfied, we double the digit
        currValue *= 2;
        //if the doubled digit is >9, we remove 9 (or sum the digits in number)
        if (currValue > 9) {
          currValue -= 9;
        }
      }
      /*after iterating and doubling the certain digits
      we sum the digits*/
      total += currValue;
    }
    //function results with checking if modulo of the given sum is 0
    return total % 10 === 0;
  }

// Test functions:
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false


//fucntion with a parameter of nested array of credit card numbers
/*the role is to check through the nested array which numbers are invalid
and return another nested array with invalid card numbers */
function findInvalidCards(cards) {
    //empty array to store arrays of invalid numbers
    const invalid = [];
    //iterating through each element of cards array (through each array)
    for (let i = 0; i < cards.length; i++) {
        //variable storing particular array of cc number
      let currCred = cards[i];
      //using validate function
      /*if it's false (invalid), nested array with cc number is added
      to invalid array */
      if (!validateCred(currCred)) {
        invalid.push(currCred);
      }
    }
    //function prints an array of nested arrays with invalid cc numbers
    return invalid;
  }

  // Test function
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers

console.log(findInvalidCards(batch)); // Test what the mystery numbers are

/*function with parameter of an array with nested arrays
of invalid cc numbers, to return a company name */
function idInvalidCardCompanies(invalidBatch) {
    //variable storing names of companies which released invalid cards
    const companies = [];
    //iterating through array of nested arrays with invalid numbers
  for (let i = 0; i < invalidBatch.length; i++) {
      //veryfying index 0 (1st digit) of each card (array within array)
    switch (invalidBatch[i][0]) {
        //1st digit is 3
      case 3:
        if (companies.indexOf('Amex') === -1) {
          companies.push('Amex');
        }
        //stops iterating if finds Amex to prevent adding it more than once
        break
        //1st digit is 4
      case 4:
        if (companies.indexOf('Visa') === -1) {
          companies.push('Visa');
        }
        break
        //1st digit is 5
      case 5:
        if (companies.indexOf('Mastercard') === -1) {
          companies.push('Mastercard');
        }
        break
        //1st digit is 6
      case 6:
        if (companies.indexOf('Discover') === -1) {
          companies.push('Discover');
        }
        break
        //unknown digit- other company
      default:
        console.log('Company not found');
    }
  }
  //returns an array of companies which released invalid cards
  return companies;
}

console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards






