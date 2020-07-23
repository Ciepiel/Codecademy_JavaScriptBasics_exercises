const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
//empty variable to store a string representing 'flipped'
//card from cards array
let currentCard;
//while loop checking if flipped card isn't 'spade'
while (currentCard !== 'spade') {
  //'flipping' the cards
  //Math random gives a number 0-3 (number of indices in
  //the cards array)
  currentCard = cards[Math.floor(Math.random()*4)];
  console.log(currentCard)
}


