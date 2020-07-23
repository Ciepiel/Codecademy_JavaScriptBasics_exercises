const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

//for loop iterating through rapper array
//and adding each element from the array
for (let i = 0; i < rapperArray.length; i++){
  //logging current element from the array
  console.log(rapperArray[i]);
  //if the current element is Notorious B.I.G.
  //the loop will break
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");




