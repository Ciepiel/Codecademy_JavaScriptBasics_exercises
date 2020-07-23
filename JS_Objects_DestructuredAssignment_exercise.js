const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

//retrieving key-values with destructured assignment
const { functionality } = robot;
console.log(functionality);
//calling the methods available in robot.functionality
functionality.beep(); //prints 'Beep Bop'

