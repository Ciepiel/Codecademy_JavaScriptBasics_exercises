let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

//alienship object containing methods retreat and takeOff
//which log retreatMessge var and the string
let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();
alienShip.takeOff();