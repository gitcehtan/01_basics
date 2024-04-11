const score = 440
 
const balance = new Number(100);
// console.log(balance);
// console.log(score);

// console.log(balance.toString().length); // 100
// console.log(balance.toFixed(2));

const otherNumber = 11123.898767;

// console.log(otherNumber.toPrecision(4));
// console.log(typeof otherNumber.toPrecision(4));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++ Maths ++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(5.7));

// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));

// console.log(Math.min(30,65,35,16,97,67,10,41,47));

// console.log((Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);