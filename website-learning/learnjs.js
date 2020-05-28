// console.log("howdy");
// console.error("this is an error");
// console.warn("this is a warnign");

//var is a global variable
//let and const are block-scoped
//let can dbe updated but not redeclared
//const cant be either

// let score = 5;
// score = 10;
// console.log(score);


//TYPES

//string,number,boolean,null,symbol
//semicolons arent mandatory
// quotes can be single or double

// const name = "james";  
// //numbers are impicitly floats, there are no ints
// const age = 20;
// const rating=4.5;
// const isCool = true;
// const x = null; //says object, but not really
// const y = undefined;
// let z; //undefinded
// console.log(typeof z);

// console.log(Math.sin(3.5));
// const circ = 2*Math.PI*3;
// console.log(circ);
// //convert string to int
// console.log(parseInt('123'))
// //infiinity
// console.log(1/0);

// const name = "james";  
// const age = 20;
// console.log(name + " " + age);
// //template string
// //backticks
// console.log(`My name is ${name} and im ${age}`);

// const s = "howdy global people"
// console.log(s.length);
// // console.log(s.toUpperCase());
// console.log(s.substring(0,5));
// console.log(s.substring(0,5).toUpperCase());
//split into array with each char an entry
// console.log(s.split(''));

// const s = "technology, computers, STEM, code";
// console.log(s.split(', '));


//ARRAYS

// //can mix types, dont need to set length length
// const fruits = ["apples", "oranges", "pears", 10, true];
// console.log(fruits[1]);
// //can still do this even though const
// fruits[3] = "grapes";
// console.log(fruits[3]);
// // //cant do this becasue const: fruits=[];
// fruits.push("mangoes"); //add to back
// fruits.unshift("strawbs"); //add to front
// //fruits.pop();  //gets rid of first
// console.log(fruits);
// console.log(Array.isArray(fruits)); //true
// console.log(Array.isArray('hello')); //false
// console.log(fruits.indexOf('oranges'));


//OBJECTS

// //declare like this
// //const person = {};
// const person = {
//     firstName: "James",
//     lastName: "Doe",
//     age: 20,
//     hobbies: ['things', 'oherthings', 'eating'],
//     address: {
//         street: "Main",
//         city: "NYC",
//         state: "NY",
//     }
// }
// console.log(person);
// // console.log(person.firstName, person.lastName);
// // console.log(person.hobbies[1]);
// // //destructuring - pull things out, into variables
// const {firstName, lastName, address: {city}} = person;
// console.log(firstName + " " + city);
// //add atribute
// person.email = "me@gmail.com";
// console.log(person);

// //array of objects
// const todos = [
//     {
//         id: 1,
//         text: "take out trash",
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: "meeting",
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: "appt",
//         isCompleted: false
//     }
// ]
// console.log(todos);
// console.log(todos[1].text); //meeting
// //convert to JSON
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


//LOOPS

// //FOR LOOP
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// //WHILE LOOP
// let i = 0;
// while(i < 10) {
//     console.log(`while loop: ${i}`);
//     i++;
// }
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }
// for(let todo of todos) {
//     console.log(todo.text);
// }
// //ARRAY METHODS
// //FOR EACH
//prints each text
// // 'todo' is the var for each item
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });
// //MAP
// //returns an array of the texts
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText);
// //FILTER
// //returns the elements that match filter criteria
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted == true;
// });
// console.log(todoCompleted);
// //return array of the texts of completed items
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted == true;
// }).map(function(todo) {
//     return todo.text;
// })
// console.log(todoCompleted);

// //function arguments
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

//CONDITIONALS

// const x = '10';
// //triple equal checks for data type as well
// if(x === 10) {
//     console.log('x is 10');
// } else if (x > 10) {
//     console.log('x is > than 10')
// } else {
//     console.log('x is less than 10')
// }

// //ternary/conditional operaotr
// const x = 8;
// const color = x > 10 ? 'red' : 'blue'; //true->red, false->blue
// console.log(color);
// //switch used to select a block based on condition
// switch(color) {
//     case 'red':
//         console.log("color is red");
//         break;
//     case "blue":
//         console.log("color is blue");
//         break;
//     default:
//         console.log("color is entiher red nor blue")
// }

// function addNums(num1=1, num2=1) {
//     return num1 + num2;
// }
// console.log(addNums());  //uses default values
// //this does saem thing as above
// //can be useful for forEaches and this keyword
// const addNums = (num1=1, num2=1) => {
//     return num1 + num2;
// }
// //return keyword isnt need when in 1 line
// const addNums = (num1=1, num2=1) => num1 + num2;
// console.log(addNums(5,4)); 



// //OOP

// //--gross--
// //this is gross, uses classes as described below
// //constructor function, should start w capital
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     // this.getBirthYear = function() {
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function() {
//     //     // return this.firstName + " " + this.lastName;
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }
// //prototype objects can replace the functions within the constructor
// //prototypes act as template objectes for inheritance (methods/properties)
// //useful beacuse u can add methods to exisitng objects at runtime
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }
// //--gross--

// //instantiate object
// const person1 = new Person("James", "Smiith", "3-24-1980");
// const person2 = new Person("Mary", "Jane", "6-13-1970");

// console.log(person1);
// console.log(person2.dob);
// console.log(person2.dob.getFullYear());
// console.log(person2.getBirthYear());
// console.log(person2.getFullName());


// //CLASSES

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }



// //Queries
// //-- CODE that works with the html file learnjs --
// //console.log(window);

// //Single element
// const form = document.getElementById('my-form')
// console.log(form);
// //container's a class, need the . at the beginning
// console.log(document.querySelector(".container"));
// //will only select the first h1 (single element)
// console.log(document.querySelector("h1"));

// //Multiple element
// //gives a nodelist, v similar to array
// console.log(document.querySelectorAll(".item"));
// //gives an HTMl collection, cant uses array methods, the above is better
// console.log(document.getElementsByClassName("item")); //dont use .
// const items = document.querySelectorAll(".item");
// //lists each of the items
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();   //rmeove last list elemtn
// ul.firstElementChild.textContent = "hello"; //give value to first element
// ul.children[1].innerText = "Brad";
// //add smthn within the class
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";
// console.log(ul);

// //button (btn class)
// const btn = document.querySelector('.btn');
// //STYLE
// //done here instead of CSS so it can be dynamic
// btn.style.background = "red"; 


// const btn = document.querySelector('.btn');
// //when clicked, do smthn
// //btn.addEventListener("click", someFunc());
// btn.addEventListener("click", (e) => {
//     //could replace click with "mouseover" to change when the mouse goes over it, could replaec with "mouseout"
//     e.preventDefault(); //default was to flash display
//     console.log('button was clicked');
//     console.log(e); //see details
//     console.log(e.target); //gets the exact button
//     // use # because its an id
//     //chanegs the form's color when buttn's clicked
//     document.querySelector("#my-form").style.background = "#ccc";
//     //would change the body tag, adding it to the class 'bg-dark'
//     //this wont work cause u need that class to be defined in a CSS file
//     // document.querySelector("body").classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML =       "<h1>Hello</h1>";
// });


// //FINAL FORM

// const myForm = document.querySelector("#my-form"); //id
// const nameInput = document.querySelector("#name"); //label
// const emailInput = document.querySelector("#email"); //label
// const msg = document.querySelector(".msg"); //class
// const userList = document.querySelector("#users"); //id

// myForm.addEventListener("submit", onSubmit);
// function onSubmit(e) {
//     e.preventDefault();
//     //gets name
//     // console.log(nameInput.value); //w.out .value, gets the element 
//     if (nameInput.value === "" || emailInput.value === "") {
//         // msg.classList.add("error"); //doesn work rn, needs CSS "error"
//         msg.innerHTML = "Please enter all fields";
//         setTimeout(() => msg.remove(), 3000);   //3000ms=3sece
//     } else {
//         //create a list with the inputs
//         const li = document.createElement("li");
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
//         userList.appendChild(li);
//         //clear fields
//         nameInput.value = "";
//         emailInput.value = "";

//     }

// }