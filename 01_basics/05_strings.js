const name = "Rakesh"
const repoCount = 20

//  console.log(name + repoCount + "value");   // dont write like this

console.log(`Hello my name is  ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rakesh-tc-com');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 5) // we cannot give negative values to sub string
console.log(newString); 

const anotherString = gameName.slice(-7, 4); // we can give negative values to the slice
console.log(anotherString);

const newStringOne = "   Rakesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://Rakesh.com/Rakesh%20Tanveer"

console.log(url.replace('%20', '-'))

console.log(url.includes('Mical'))

console.log(gameName.split('-'));
