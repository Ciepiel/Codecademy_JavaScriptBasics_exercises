// Write your code below
//1st array containing 4 names of Bob's followers
const bobsFollowers = ['Pete', 'Al', 'El', 'Pat']
//2nd array containing 3 names of Tina's followers
const tinasFollowers = ['Ale', 'Pat', 'Pete']
//empty array to collect common followers
const mutualFollowers = []
//outer loop iterating through Bob's followers
for (let i = 0; i < bobsFollowers.length; i++) {
  //inner loop iterating through every follower of
  //Tina's followers for each of the Bob's followers
  //looking for the match
  for (let j = 0; j < tinasFollowers.length; j++) {
    //conditional- if the elements match
    if (bobsFollowers[i] === tinasFollowers[j]) {
      //matching name is appended to common array
      mutualFollowers.push(tinasFollowers[j])
    }
  }
}
console.log(mutualFollowers)
