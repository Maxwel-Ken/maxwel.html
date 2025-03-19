
// Syntax

// Variables



// const---- Means its constany value am no reassigmnent again


// const p = 20;
// const q = 50;


// const sum = p + q;

// console.log(sum);



//let------ reassign again 

// let x = 4;
// let y = 5;

// x = 10;
// x=100;

// let z = x + y;

// console.log(z)

// DATA TYPES
// Numbers
//String
//Boolean
//NULL
//OBJECTS => Arrays
//UNDEFINED

//Number
// 1234567890

 //Strings
// "Mocha" => string

// const name1 = 'Philip'
// const age = 20;
// const isStudent = true;  

//concantination 

// const details = name1 + " " + age + " " + " " + isStudent;
// console.log(details)

// const student = `${name1} ${age} ${isStudent}`
// console.log(student)

// console.log(name1);
// console.log(age);
// console.log(isStudent);

  //Boolean
//True
//False





//SIMPLE CALC
//OPERANDS
//+
//-
// module  /
//*
//<
//>
//>=
//<=


//==   
//===  
// !=
// !==

// let num1 = 10;
// let num2 = 6;

// let sum = num1 + num2;
// console.log(sum) // 16

// let difference = num1 - num2;
// console.log(difference) //4

// let product = num1 * num2;
// console.log(product) //60

// let quoatient = num1 / num2;
// console.log(quoatient) //


// // Recap of contantination 

// const userName = 'Maxwell'
// let age = 20;
// const isStudent = true;

// const greetings = `Hello, ${userName}, you are ${age} Years old. You a student at Moi Uni.`

// console.log(greetings)


//Conditions // conditionals rendering JS

// const age = 26; //Persons

// if (age < 17) {
//   console.log('Get out of here!!')
// }
// else{
//   console.log('Watch Pon')
// }

// const isStudent = false;   // Maxwell

// if (isStudent) {
//   console.log('Go to class!!')
// }
// else{
//   console.log('Go party!')
// }

//Lecturer conditions 
// const passMark = 30; //PHILIP MARKS

// if (passMark >= 60) {
//   console.log('Passed! Congrats')
// }
// else if (passMark == 50) {
//   console.log('You tried')
// }
// else{
//   console.log('Opps, Failed!')
// }


//Take away QUIZ

// Write a conditional of allowing people to your party where they should meet the condition of attaining 18years and above. Console the results where below 15 years will be chased away while above 16,17 years will be welcomed. Also do consider those aged 17 and 16 should be allowed in the party but should not take any alcohol. 

// const age = 16;

// if (age <= 15) {
//   console.log('Go back home!')
// }
// else if (age == 16 && 17 ) {
//   console.log('Welcome to the party, but be carefull')
// }
// else if (age == 16 && 17) {
//   console.log('Welcome but do not drink alcohol')
// }
// else{
//   console.log('Welcome All')
// }


// Ternary operator

// condition ?expressiontrue : expressionfalse;
// let age = 18;
//usage of if and else
// if (age >= 18) {
//   console.log('You can vote')
// }
// else{
//   console.log('You cannot vote')
// }

// usage of terniary operator
// let message = age >= 18 ? 'You can vote' : 'You cannot vote'
// console.log(message)

//Example 2

// let havePassport = true;

// const message = havePassport ? 'You can go outside Kenya' : 'You cannot travel'

// console.log(message);

//Password checker segment

function checkPasswordLength() {
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (password.length < 6) {
    console.log('Password should be greater than 6 chracters')
    message.textContent = 'Password should be greater than 6 chracters';
    message.style.color="red";

  }
  else{
    message.textContent = 'Valid Password'
    message.style.color= "green"
  }
}

// loops
// for(initialization :condition :inrement/decrement)
for (let i = 1; 1<= s; 1 + 1){
  console.log(i)
}

// OBJECTS{}
let objectName = {
  property1: value1,
  property2: value2,
}
let student = {
  name: 'Maxwel',
  age: 20,
  isTall: true,
}
greet: function() {
  return `hello, my name is ${this.name} and I am ${this.age}years old..`
}
greet1: function() {
  return `hi, ${student.name} you are turning ${student.age} tomorrow`
}
console.log(student.name)
console.log(student.age)
console.log(student.isTall)
console.log(greet())
console.log(greet1())

// NESTED OBJECTS
let dreamCar = {
  model: 'Nissan',
  make: 'GTR',
  Year: 2022,
  specs: {
    horsepower: '500Hp',
    Torque: '4200Nm',
    engine: 2
  },
  color:  'blue',
  state: function() {
    return `I will buy a ${this.model} later this year and it must be a ${this.Year} with a good Torque
    of about ${this.specs.Torque}`
  }
}
console.log(dreamCar.model)
console.log(dreamCar.color)
console.log(state())
console.log(dreamCar.specs.horsepower)








































