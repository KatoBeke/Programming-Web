import Vue from 'vue'
import App from './App.vue'
import {Chart} from 'chart.js'
import Chartkick from 'vue-chartkick'
Vue.use(Chartkick.use(Chart));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



//ES5 Declaratie variabelen
/*var firstname = "Collin";
var name = "Van der Vorst";
console.log(firstname + " " + name)

for(var i = 0; i < 10; i++) 
{
  console.log(i);
}

console.log(i);

//ES6 Const vs Let
//constante --> kan nooit aangepast worden
//let --> kan je wel aanpassen
let voornaam = "Collin";
voornaam = "Krollin";
console.log(voornaam);

for(let index = 0; index < 10; index++)
{
  console.log(index);
}

if(true)
{
  var variable1 = true;
}

console.log(variable1);*/

//ES5 Concatenation
/*var firstname = "Collin";
var lastname = "Van der Vorst";
console.log(firstname + " " + lastname);

//ES6 Concatenation
let voornaam = "Collin";
let familienaam = "Van der Vorst";
let fullname = `${voornaam} The Big One ${familienaam}`;
console.log(fullname);*/

//ES5 object
/*var person = {
  firstname: "Collin",
  name: "Van der Vorst",
  sayFullname: function() {
    console.log(this.firstname + " " + this.name);
  }
}

console.log(person.firstname);
console.log(person.name);
person.sayFullname();

//ES6 object
let persoon = {
  firstname: "Collin",
  name: "Van der Vorst",
  sayFullname() {
    console.log(`${this.firstname} ${this.name}`);
  }
};

console.log(persoon.firstname);
console.log(persoon.name);
person.sayFullname();*/

//ES5 this
/*var person = {
  firstname: "Collin",
  name: "Van der Vorst",
  sayFullname: function() {
    console.log(this.firstname + " " + this.name);
  }
};

console.log(person.firstname); //Collin
console.log(person.name); //Van der Vorst
person.sayFullname(); //Collin Van der Vorst

var getFullname = person.sayFullname;
getFullname();

//ES6 this
let person = {
  firstname: "Collin",
  name: "Van der Vorst",
  sayFullname: function() {
    console.log(this.firstname + " " + this.name);
  }
};

console.log(person.firstname); //Collin
console.log(person.name); //Van der Vorst
person.sayFullname(); //Collin Van der Vorst

let getFullname = person.sayFullname.bind(person);
getFullname();*/

//ES5
/*var person = {
  firstname: "Collin",
  name: "Van der Vorst",
  sayFullnameAfter10second() {
    var self = this;
    setTimeout(() =>{
      console.log(this.firstname + " " + this.name);
    }, 1000);
  }
};

person.sayFullnameAfter10second();

//ES6
const persoon = {
  firstname: "Collin",
  name: "Van der Vorst",
  sayFullnameAfter10second() {
    setTimeout(() =>{
      console.log(this.firstname + " " + this.name);
    }, 1000);
  }
};

persoon.sayFullnameAfter10second();*/

//ES5 functies
/*var square = function(number) {
  return number * number;
};

console.log(square(5))

//ES6 functies
// if multiple 
const squareES6 = (number1 , number2) => {
  return number1 * number2;
};

console.log(squareES6(5,5));

// if 1 parameter you could remove the ()
const square2ES6 = number => {
  return number * number;
};

console.log(square2ES6(5));

// if no parameters
const squareOf5 = () => {
  return 5 * 5;
};

console.log(squareOf5(5));

// If only 1 line 
const square3ES6 = number => number * number;
console.log(square3ES6(5));*/

//ES5 mapping
/*var colors = ["red", "green", "blue"];
var newColors = [];

for (var i = 0; i < colors.length; i++) {
  newColors.push((i+1) + "." + colors[i]);
}

console.log(newColors);

//ES6 mappping
//Manier 1
const kleuren = ["red", "green", "blue"];
const nieuweKleuren = kleuren.map(function(color,index) {
  return `${index+1}. ${color}`
})

console.log(nieuweKleuren);

//Manier 2
const kleuren2 = ["red", "green", "blue"];
const nieuweKleuren2 = kleuren2.map((color,index) => {return `${index+1}. ${color}`})

console.log(nieuweKleuren2);*/

//ES5 object destructurering
/*var person = {
  firstname: "Collin",
  familyname: "Van der Vorst"
};

var firstname = person.firstname;
var familyname = person.familyname;
console.log(firstname + " " + familyname);

//ES6 object destructurering
const persoon = {
  firstname: "Collin",
  familienaam: "Van der Vorst"
};

const {firstname: voornaam, familienaam} = persoon;
console.log(voornaam,familienaam);

const colors = ["red", "green", "blue"];
const [FirstColor, SecondColor] = colors;
console.log(FirstColor,SecondColor);*/

//ES5 spreadoperator
/*var users1 = ["collin", "jan", "tom"];
var users2 = ["jef", "john", "lisa"];

var users = users1.concat(users2);
console.log(users);

//ES6 spreadoperator
let person = {
  firstname: "Collin",
  familyname: "Van der Vorst"
}

let personNew = {
  ...person,
  age: 30
};

console.log(personNew);*/

//ES5 classes
/*var user1 = {
  firstname: "Collin",
  lastname: "Van der Vorst",
  getFullname: function() {
    console.log(this.firstname + " " + this.lastname);
  }
}

var user2 = {
  firstname: "Brad",
  lastname: "Pitt",
  getFullname: function() {
    console.log(this.firstname + " " + this.lastname);
  }
}

user1.getFullname();
user2.getFullname();

//ES6 class
import {User,Teacher} from "./js/classes/User";

let gebruiker1 = new User("Collin","Van der Vorst");
let gebruiker2 = new User("Brad","Pit");

gebruiker1.getFullname();
gebruiker2.getFullname();

let teacher1 = new Teacher("Collin","Van der Vorst","Bachelor");
teacher1.getFullname();
teacher1.teach();*/