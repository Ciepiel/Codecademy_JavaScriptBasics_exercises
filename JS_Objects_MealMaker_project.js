const menu = {
  //courses property containing a mapping between
  //each course and dishes available to roder
  //in that course
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  //getters methods
  get appetizers () {},
  get mains () {},
  get desserts () {},
  //setters methods
  set appetizers(appIn) {},
  set mains(mainIn) {},
  set desserts(dessIn) {},
  //getter method for courses
  get courses() {
    //returns object with key/value pairs for courses
    //arrays
    return {
      appetizers: this.appetizers, //uses getter method
      mains: this.mains,
      dessers: this.desserts
    };
  },
  //method to add a new dish to the specified course
  //(Appetizers/mains/desserts)
  addDishToCourse(courseName, dishName, dishPrice) {
    //method creates an object with name and price
    //got from parameters
    const dish = {
      name: dishName,
      price: dishPrice
    };
    //pushes dish object into the approprate menu's
    //_courses object based on courseName
    //(appetizers/mains/desserts)
    this._courses[courseName].push(dish);
  },
  //function to get a random dish from a course on menu
  getRandomDishCourse(courseName) {
    //retrieves an array of the given course from course
    //object and stores it in a variable
    let dishes = this._courses[courseName];
    //generates a random index
    let randomIndex = Math.floor(Math.random() * dishes.length)
    //returns a dish from 'dishes' by using randomIndex
    return dishes[randomIndex];
  },
  //automatically generates three-course meal
  generateRandomMeal() {
    //creates proper variable depending on what was
    //called by .getRandomDishCourse
    let appetizer = this.getRandomDishCourse('appetizers')
    let main = this.getRandomDishCourse('mains')
    let dessert = this.getRandomDishCourse('desserts')
    //calculates total price of the meal
    let totalPrice = appetizer.price + main.price + dessert.price
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  }
};

//adding dishes to the course
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Fried Shrimps', 7.50);
menu.addDishToCourse('mains', 'Bitoque', 8.50);
menu.addDishToCourse('mains', 'Sardinhas', 10.00);
menu.addDishToCourse('desserts', 'Pastel de Nata', 1.50);
menu.addDishToCourse('desserts', 'Tiramisu', 3.00);

//generating a meal
let meal = menu.generateRandomMeal();
console.log(meal);


