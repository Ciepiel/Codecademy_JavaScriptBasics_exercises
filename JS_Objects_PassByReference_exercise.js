let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

//function which sets object's property
let greenEnergy = object => {
    object['Fuel Type'] = 'avocado oil'
};


//function which reassigns object's property
let remotelyDisable = object => {
  object.disabled = true
};

//calling the function with spaceship as an obj
greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);
//spaceship's property fuel type changed and added
//new property 'disabled'