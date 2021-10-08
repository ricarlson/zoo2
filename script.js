//Instantiating a new object
let lemons = {
    quantity : 5,
    color : 'yellow'
}

let limes = {
    quantity : 9,
    color: 'green'
}

//testing/ensuring variables
console.log(typeof lemons, typeof limes);
console.log(typeof lemons.quantity, typeof lemons.color);
console.log(typeof limes.quantity, typeof limes.color);

/*
Equality Operator
*/
if (lemons.quantity == 5) {
    console.log('Lemons = 5');
}
else {
    console.log('Lemons = ' + lemons.quantity);
}

/*
Unary Operator
*/
console.log(lemons.quantity++);

/*
Conditional Operator
*/
const foo = limes > 8 ? true : false;
console.log(foo);


//Array and properties
let vehicles = [
    Toyota = {
        price: 6000,
        color: 'yellow',
        creationDate: 2007
    },
    Pontiac = {
        price: 8000,
        color: 'blue',
        creationDate: 2012
    },
    Chevy = {
        price: 2500.5,
        color: 'green',
        creationDate: 2003
    }
];
console.log(vehicles);

//from method
const vehicles2 = Array.from(vehicles);
vehicles2[3] = 'Ford';
console.log(vehicles2);

//sort by price (method)
const sortByPrice = vehicles.sort(function (a, b) {
    return a.price - b.price;
  });
  console.log(sortByPrice);

  // shift method
  vehicles.shift();
  console.log(vehicles);

//Built in object- date
  const now = new Date().getFullYear();
  const vehicleAge = vehicles.reduce((total, vehicle) => {
    return total + (now - vehicle.creationDate);
}, 0);
console.log('vehicleAge: ', vehicleAge);

//Built in object (math)
console.log('Rounded price of chevy:', Math.round(Chevy.price));

//object and Constructor
function Vehicle(price, color, creationDate) {
        this.vehiclePrice = price;
        this.vehicleColor = color;
        this.creationDate = creationDate;

};

const subaru = new Vehicle(7000, 'green', 2009);

const miniCooper = new Vehicle(4000, 'black', 2004);


//input fields
const compField = document.getElementById("company");
const cityField = document.getElementById("city");
const firstField = document.getElementById("first");
const lastField = document.getElementById("last");
const stateField = document.getElementById("state")
const zipField = document.getElementById("zip");
const phoneField = document.getElementById("email");
const commentField = document.getElementById("comments");

//form
const form = document.getElementById("businessInfo");
const error = document.getElementById("error");


form.addEventListener("submit", (e) => {
    let zipField = document.getElementById("zip");
    checkInputs();
});

//function that checks form input values
function checkInputs(){
   if (zipField.length < 5){
    preventDefault();
   }
   else{
    
   }

    if (phoneField.value < 10 ) {
        setErrorFor(phoneField, 'phone number must be at least 10 digits')
        preventDefault();
    }
    else{

    }

}