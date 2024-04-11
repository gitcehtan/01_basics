const Name ="Chetan"
const repoCount = 50;

console.log(`Hello my name is ${Name} and my repo count is ${repoCount} `);   

const gameName = new String("ChetanCB-youtube-com");

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(1,4); // 1 position to 3
console.log(newString);

const anotherString = gameName.slice(2,4);
console.log(anotherString);

const newStringOne = "    cehtan    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "hhtps:chetan.com/chetan%20bharti";
console.log(url.replace('%20','-'));

console.log(url.includes("chetan"));

console.log(gameName.split('-'));