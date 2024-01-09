let score = 56
console.log(typeof score);
console.log(typeof (score));

score ="56"
console.log(typeof score);

//if an operation has to be on a number and we get string type value

let numberScore = Number(score);
console.log(typeof numberScore);

let age = "88abc";
console.log(typeof age);
console.log(age);

let numberAge = Number(age);
console.log(typeof numberAge);
console.log(numberAge);
/*returns NaN i.e. not a number but it gets converted
to a number so we also need to check the value of converted variable */

// "44" => 44
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true 
// 0 => false
// "" empty string => false
// "abc" non empty string => true

let count = 22;
let stringCount = String(count);
console.log(typeof stringCount);
console.log(stringCount);