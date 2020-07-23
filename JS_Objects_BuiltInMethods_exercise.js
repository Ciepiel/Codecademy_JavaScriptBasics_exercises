const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// grabs property names (keys) and saves them in an array
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// grabs both keys and values and saves them in an array
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// grabs properties from one object and assigns to the other object
//containing other properties; .assign(target, sources)
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);