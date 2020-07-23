let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//removes the last string
secretMessage.pop();
console.log(secretMessage.length);
//adding strings to the end of an array
secretMessage.push('to', 'Program');
//replacing the string with index 7 with string 'right'
secretMessage[7] = 'right';
//removes 1st string
secretMessage.shift();
//adds string to the beginning of an array
secretMessage.unshift('Porgramming');
//removes particular strings and replaces them with
//a given string
//splice(startInd, numOfInd, newString)
secretMessage.splice(6, 5, 'know,');
//printing and array as a sentence
console.log(secretMessage.join());
