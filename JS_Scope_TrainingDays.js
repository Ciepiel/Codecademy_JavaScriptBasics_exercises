// The scope of `random` is too loose 

//selects an event at random
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
//returns number of training days based on the event
const getTrainingDays = event => {
  let days = Math.floor(Math.random() * 151);
  if (event === 'Marathon') {
  } else if (event === 'Triathlon') {
  } else if (event === 'Pentathlon') {
  }

  return days;
};

// The scope of `name` is too tight 
// prints athlete's name and event
const name = 'Pat';

const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

//prints athlete's name and number of days
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
