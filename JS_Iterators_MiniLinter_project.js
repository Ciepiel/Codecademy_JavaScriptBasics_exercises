let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//splitting the story into individual words- string array
//.split('')-into letters, .split(' ')-into words
const storyWords = story.split(' ');
//console.log(storyWords)
console.log(storyWords.length)

//filter out unnecessary words
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));
//control log
console.log(betterWords.length)

//counting sentences- either . or !
let sentences = 0
storyWords.forEach(word => {
  //[word.length-1] is the index for the last character 
  //of the word
  if (word[word.length-1] === '.' ||
  word[word.length-1] === '!') {
    sentences+=1;
  }
});
console.log(sentences);

//count of the overused words
const overused = storyWords.filter(word => overusedWords.includes(word));
//control log
console.log(overused.length)

//word count, sentence count, overused count in 1 func
const wordCount = storyWords.length;
const overusedCount = overused.length;
const logInfo = (param1, param2, param3) => {
  console.log('Word count: ' + param1);
  console.log('Sentence count: ' + param2);
  console.log('Overused words count: ' + param3);
};
//call the function to log info
logInfo(wordCount, sentences, overusedCount)

//logging betterWords a single string
//console.log(betterWords.join(' '));

//most common word
function mostCommon(storyWords) {
  var keyCounts = {};
  var topCount = 0;
  var topKey = {};
  storyWords.forEach(function(word, val) {
    keyCounts[word] = keyCounts[word] + 1 || 1;
    if (keyCounts[word] > topCount) {
      topKey = word;
      topCount = keyCounts[word];
    }
  });

  return topKey;
}
console.log('Word appearing the greatest number of time is: ' + mostCommon(storyWords));

