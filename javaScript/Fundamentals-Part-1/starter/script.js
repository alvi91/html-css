/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log("23");

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let Jonas_Matilda = "JM";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Proggramer";
let Job2 = "Teacher";

console.log(myFirstJob);*/

/*let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//console.log(typeof true);
console.log(typeof javaScriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javaScriptIsFun = "Yes";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
*/

/*let age = 30;
age = 31;
const birthyYear = 1991;
birthyear = 1990;*/

//Math Operators
/*const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2020;
console.log(ageJonas, ageSara);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2
console.log(ageSara * 2, ageSara / 2 ** 3);

const firstName = "Jonas";
const lastName = "Schemedtmann";
console.log(firstName + " " + lastName);*/

//Assignment operator
/*let x = 10 + 5;
x += 10; //x =x+10=25
x *= 4; // x =x*4=100
x++; // x= x+1=101
x--; // x=x-1
x--;
console.log(x);*/

//Comparison operators
/*console.log(ageJonas > ageSara);
console.log(ageSara >= 18);
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSara) / 2;
console.log(ageJonas, ageSara, averageAge);*/
/*const marksMass = 78;
const marksHeight = 1.69;
const marksBMI = marksMass / marksHeight ** 2;
const jhonsMass = 92;
const jhonsHeight = 1.95;
const jhonsBMI = jhonsMass / (jhonsHeight * jhonsHeight);
const marksHigherBMI = marksBMI > jhonsBMI;

console.log(marksBMI, jhonsBMI, marksHigherBMI);*/

/*const marksMass = 95;
const marksHeight = 1.88;
const marksBMI = marksMass / marksHeight ** 2;
const jhonsMass = 85;
const jhonsHeight = 1.76;
const jhonsBMI = jhonsMass / (jhonsHeight * jhonsHeight);
const marksHigherBMI = marksBMI > jhonsBMI;

console.log(marksBMI, jhonsBMI, marksHigherBMI);*/

/*const firstName = "Zadid";
const job = "code learner";
const birthYear = 1991;
const year = 2037;

const Zadid =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(Zadid);

const zadidNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(zadidNew);
console.log(`just a regular string...`);
console.log(`just
 a regular
string...`);*/
/*const age = 17;
if (age >= 18) {
  console.log("Sarah can start driving 🚗");
} else {
  const yearsleft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearsleft} yaers 😂`);
}
const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);*/
/*const marksMass = 95;
const marksHeight = 1.88;
const marksBMI = marksMass / marksHeight ** 2;
const jhonsMass = 85;
const jhonsHeight = 1.76;
const jhonsBMI = jhonsMass / (jhonsHeight * jhonsHeight);
console.log(marksBMI, jhonsBMI);
if (marksBMI > jhonsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is heigher than Jhon's (${jhonsBMI}) `);
} else {
  console.log(`Jhon's BMI (${jhonsBMI}) is heigher than Mark's (${marksBMI}) `);
}*/
// Type conversion
/*const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Zadid"));
console.log(typeof NaN);
console.log(String(23), 23);
// Type coercion
console.log("I am" + 23 + "years world");
console.log("23" - "10" - 3);
console.log("23" / "2");
let n = "1" + 1;
n = n - 1;
console.log(n);*/
// 5 falsy value is js = 0,"",undefined,null,NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(" "));

const money = 100;
if (money) {
  console.log("don't spend it at all ;)");
} else {
  console.log("you should get a job");
}

let height = 8;
if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("height is UNDEFINED!");
}*/

/*const age = "18";
if (age === 18) console.log("You just become an adult :D (strict)");
if (age == 18) console.log("You just become an adult :D (loose)");*/
/*const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
  console.log("Cool! 23 is an amzing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}
if (favourite !== 23) console.log("Why not 23!");*/
const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
const shouldDrive = hasDriversLicense && hasGoodVision;
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);
if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}
