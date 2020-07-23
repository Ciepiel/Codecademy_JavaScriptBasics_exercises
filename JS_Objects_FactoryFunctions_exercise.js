//creating a factory function with 2 parameters
//it returns an object with properties and the method
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
    }
  }
};

//calling a function within a variable
const tinCan = robotFactory('P-500', true);
//calling .beep() (method) on tinCan
tinCan.beep();
//it logs what's assigned to the method inside function