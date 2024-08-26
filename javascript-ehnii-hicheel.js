// Declare a variable named 'carName', assign the value 'Volvo' to it.
// carName гэсэн хувьсагч зарлаад Volvo гэсэн утга онооно уу .
let carName = "Volvo";
console.log(carName);
// Declare a variable named 'name' , assign it your name.
// name гэсэн хувьсагч зарлаад өөрийнхөө нэрийг онооно уу .
let name = "Saruul";
console.log(name);
// Declare a variable 'futureJob' without assigning a value.
// futureJob гэсэн хувьсагчийг утга оноохгүйгээр зарлана уу .
let futureJob = "";
console.log(futureJob);
// Declare a variable 'age', assign it your age.
// 'age' гэсэн хувьсагч зарлаад өөрийн насыг онооно уу .
let age = "27";
console.log(age);
// Declare a variable 'PI' and assign it the value 3.14.
// PI гэсэн тогтмол утга зарлаад 3.14 гэсэн утга онооно уу .
const Pi = 3.14;
console.log(Pi);
// Display the sum of 5 + 10, using two variables: x and y.
// x ба y гэсэн хоёр хувьсагчийг ашиглан 5 + 10-ын нийлбэрийг харуулна уу .
let x = 5;
let y = 10;
console.log(x + y);
let u = 5;
u = u + 20;
console.log(u);

// Declare three variables for each let , const.
// for example : const motherName = 'Chimgee' ; let presidentName = 'Khurelsukh'
// let , const тус бүрт нь 3 хувьсагч зарлана уу .
let fatherName = "Ganbat";
let momName = "Surendolgor";
console.log(fatherName + " " + momName);
// Declare a variable 'city' and assign it a city name, then reassign it to another city.
// city гэсэн хувьсагч зарлаад хотын нэр онооно уу , дараа нь ахин өөр хотын нэр онооно уу .
let city = "Ulaanbaatar";
city = "Tokyo";
console.log(city);
// Declare variables 'firstName' and 'lastName', then concatenate them into a variable 'fullName'.
// firstName , lastName гэсэн хувьсагчууд зарлаад , дараа нь нэгтгэн fullName гэсэн хувьсагчид онооно уу .
let firstName = "Munkhsaruul";
let lastName = "Ganbat";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Declare a variable 'isStudent' and assign it a boolean value.
// isStudent гэсэн хувьсагч зарлаад boolean утга онооно уу .
let isStudent = 5 > 6;
console.log(isStudent);
// Declare a variable 'isRaining' and assign it a boolean value.
// isRaining гэсэн хувьсагч зарлаад boolean утга онооно уу .
let isRaining = 5 > 4;
console.log(isRaining);
// Declare a string value.
// String утга зарлана уу .
let StringUtga = "String";
console.log(StringUtga);
// Declare a number value.
// Number утга зарлана уу .
let NumberUtga = 567890;
console.log(NumberUtga);
// Declare an undefined value.
// Undefined утга зарлана уу .
let hi = "Undefined";

// Declare a null value.
// Null утга зарлана уу .
let nullUtga = "Null";

// Declare a boolean value.
// Boolean утга зарлана уу .
let num1 = 5;
let num2 = 9;
let test = num1 > num2;
console.log(test);

// 1. 4 нь 3-аас их үү ?
{
  let x = 4 > 3;
  console.log(x);
}
// 2. 3 нь 4-өөс их үү ?
{
  let x = 3 > 4;
  console.log(x);
}
// 3. 4 нь 3-аас их буюу тэнцүү юу ?
{
  let x = 4 >= 3;
  console.log(x);
}
// 4. 3 нь 4-өөс их буюу тэнцүү юу ?
{
  let x = 3 >= 4;
  console.log(x);
}
// 5. 4 нь 4-тэй тэнцүү юу ?
{
  let x = 4 == 4;
  console.log(x);
}
// 6. 4 нь 4-тэй яг тэнцүү юу ?
{
  let x = 4;
  let y = 4;
  console.log(x == y);
}
// 7. 4 нь 4-тэй тэнцүү биш нь үнэн үү ?
{
  let x = 4 != 4;
  console.log(x);
}
// 8. 4 нь "4"-тэй тэнцүү биш нь үнэн үү ?
{
  let x = 4 >= 4;
  console.log(x);
}
// 9. 4 нь "4"-тэй яг тэнцүү юу ?
console.log(4 === 4);
// 10. 4 нь "4"-тэй тэнцүү юу ?
// 11. 4 нь 3-аас их болон 10 нь 12-оос бага нь үнэн үү ?
{
  let x = 4 > 3;
  let y = 10 < 12;
  console.log(x, y);
}
// 12. 4 нь 3-аас их болон 10 нь 12-оос их нь үнэн үү ?
{
  let x = 4 > 3;
  let y = 10 > 12;
  console.log(x, y);
}
// 13. 4 нь 3-аас их эсвэл 10 нь 12-оос бага нь үнэн үү ?
{
  //   let x = 4 > 3;
  //   let y = 10 > 12;
  //   console.log(x, y);
}
// 14. 4 нь 3-аас их эсвэл 10 нь 12-оос их нь үнэн үү ?
// 15. 4 нь 3-аас бага эсвэл 10 нь 12-оос их нь үнэн үү ?
// 16. let five = !(4 > 3) ямар хариу буцаах вэ ?
{
  let five = !(4 > 3);
  console.log(five);
}
// 17. let six = !(4 < 3) ямар хариу буцаах вэ ?
// 18. let seven = !(4 > 3 && 10 < 12) ямар хариу буцаах вэ ?
// 19. let eight = !(4 > 3 && 10 > 12) ямар хариу буцаах вэ ?
// 20. let nine = !(4 === "4") ямар хариу буцаах вэ ?
// 21. 936-г 12д хуваагаад гарсан хариуг 9д хуваахад гарах үлдэгдлийг хэвлэнэ үү .
// easy
// 1.Check if given number is positive, negative, or zero .
// Өгөгдсөн тоо эерэг бол "positive" , сөрөг бол "negative" , 0 бол "zero" гэж хэвлэнэ үү . console.log("the number is positive")

// 2.Check age for driving.
// Өгөгдсөн насыг шалгаад 18-аас дээш бол "You are old enough to drive", 18-аас доош бол 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү .
const age99 = 16;
const standartAge = 18;
if (age99 >= 18) {
  console.log("You are old enough to drive");
} else if (age99 < 18) {
  let zoruu = standartAge - age;
  console.log(`You are left with ${zoruu} years to drive`);
}
// age1 = 1;
// age1;
// if (age1 >= 18) {
//   console.log("You are old enough to drive");
// } else age1 < 18;
// console.log(`You are left with + ${18 - age1} + years to drive`);
// 3.Check if the given number is odd or even .
// Өгөгдсөн тоог шалгаад тэгш тоо бол "even" , сондгой тоо бол "odd" гэж хэвлэнэ үү .
const too = 0;
if (too % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}
// 4.Check if a given number is divisible by 5 .
// Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.
const too1 = 33;
if (too1 % 5 == 0) {
  console.log(`divisible`);
} else {
  console.log(`not divisible`);
}

// 5.Check if a given number is within the range of 1 to 100 .
// Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .
const too2 = 76;
if (1 <= too2) {
  if (too2 < 100) {
    console.log(`include`);
  } else {
    console.log(`exclude`);
  }
} else {
  console.log(`sorog too bn`);
}

// 6.Check if a password is strong (strong password is at least 8 characters long) .
// Нууц үгийг хүчтэй үгүйг шалгаад хүчтэй бол "strong", сул бол "weak" гэж хэвлэнэ үү. Багадаа 8 тэмдэгт агуулвал хүчтэй гэж тооцно .
const password = "pasgh";
if (password.length >= 8) {
  console.log(`strong`);
} else {
  console.log(`weak`);
}

// medium
// 7.Categorize age group (children, youth, adults, seniors) .
// Өгөгдсөн нас нь 14-өөс доош бол "Children", 14-24 бол "Youth", 24-64 бол "Adults", 64-өөс дээш бол "Seniors" гэж хэвлэнэ үү .
const age9 = 27;
if (age9 <= 14) {
  console.log("children");
} else if (age9 > 14 && age9 <= 24) {
  console.log(`youth`);
} else if (age9 > 24 && age9 <= 64) {
  console.log(`adults`);
} else {
  console.log(`Seniors`);
}

// 8.Check triangle validity .
// Өгөгдсөн гурвалжны гурван талыг зөв эсэхийг шалгана уу .
// Жишээ нь:
//      a=5 b=6 c=7 / is valid
//      a=4 b=8 c=19 / is invalid
const num7 = 23;
const num8 = 14;
const num9 = 10;
if (num7 + num8 > num9 && num7 + num9 > num8 && num8 + num9 > num7) {
  console.log(`is valid`);
} else {
  console.log(`is invalid`);
}
// 9.Find the largest of two number .
// 2 тооноос ихийг нь олж хэвлэнэ үү .
const num10 = 24;
const num20 = 32;
if (num10 > num20) {
  console.log(num10);
} else {
  console.log(num20);
}

// 10.Check if a given character is a vowel or a consonant .
// Өгөгдсөн үсгийг шалгаад эгшиг бол "vowel" , гийгүүлэгч бол "consonant" гэж хэвлэнэ үү .
//prompt(`1shirheg useg oruulna`);
const useg = `u`;
if (useg == `a` || useg == `e` || useg == `i` || useg == `u` || useg == `o`) {
  console.log(`vowel`);
} else {
  console.log(`consonant`);
}

// 11.Check if year is an Olympic year.
// Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү .
const Year = 1924;
if (Year % 4 == 0) {
  console.log(`true`);
} else {
  console.log(`false`);
}

// 12.Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай.
// Өгөгдсөн өдөр ажлын өдөр бол "work day" , амралтын өдөр бол "weekend" гэж хэвлэнэ үү .
// for example :
//      day = Thursday / work day
//      day = Saturday / weekend
const day = `sunday`;
if (
  day == `monday` ||
  day == `tuesday` ||
  day == `wednesday` ||
  day == `thursday` ||
  day == `friday`
) {
  console.log(`work day`);
} else if (day == `saturday` || day == `sunday`) {
  console.log(`weekend`);
} else {
  console.log(`not able word`);
}

// 13.Check if the given number is a prime number or not .
// Өгөгдсөн тоог анхны тоо мөн бишийг шалгана уу . (1 болон өөртөө хуваагддаг тоог анхны тоо гэнэ)
// example :
// number = 2 // true
// number = 15 // false
const num3 = 89;
if (num3 % 2 == 0 || num3 % 3 == 0) {
  console.log(`false`);
} else {
  console.log(`true`);
}

// 14.Өгөгдсөн сурагчийн дүнг A , B , C , D , F бүлэгт ангилж хэвлэнэ үү .
//    80-100, A
//    70-89, B
//    60-69, C
//    50-59, D
//    0-49, F
// prompt(`dungee oruulna uu`);
const dun = 95;
if (dun >= 80 && dun <= 100) {
  console.log(`A`);
} else if (dun >= 70 && dun <= 89) {
  console.log(`B`);
} else if (dun >= 60 && dun <= 79) {
  console.log(`C`);
} else if (dun >= 50 && dun <= 69) {
  console.log(`D`);
} else if (dun >= 0 && dun <= 49) {
  console.log(`F`);
}

//hard
// 15.Check if the season is Autumn, Winter, Spring or Summer.
// Өгөгдсөн сарыг шалгаад тохирох улирлыг хэвлэнэ үү .
// for example : month = November / Autumn
const season = `june`;
if (season == `january` || season == `february` || season == `december`) {
  console.log(`winter`);
} else if (season == `march` || season == `april` || season == `may`) {
  console.log(`spring`);
} else if (season == `june` || season == `july` || season == `august`) {
  console.log(`summer`);
} else if (
  season == `octuber` ||
  season == `november` ||
  season == `september`
) {
  console.log(`autumn`);
} else {
  console.log(`Not season`);
}

// 16.Яг одоогийн цагийг шалган өглөө бол "Good morning", өдөр бол "Good afternoon", орой бол "Good evening" гэж хэвлэнэ үү .
const time = 20;
if (time >= 1 && time < 12) {
  console.log(`Good morning`);
} else if (time >= 12 && time < 18) {
  console.log(`Good afternoon`);
} else if (time >= 18 && time <= 24) {
  console.log(`Good evening`);
}

// 17.Цаг агаар температур , "sunny" эсвэл "rainy" гэж өгөгдөх ба бороотой бол "Don't forget your umbrella!" , нартай бол температур нь 30-аас их бол  , 20-30 градус бол "" , 20-оос бага бол  гэж хэвлэнэ үү .
// for example : weather = "sunny" temperature = 25 / It's a warm day.
const weather = `sunny`;
const temperature = 10;
if (weather == `rainy`) {
  console.log("Don't forget your umbrella!");
} else if (weather == `sunny`) {
  if (temperature >= 30) {
    console.log("It's a hot day!");
  } else if (temperature >= 20 && temperature <= 30) {
    console.log(`It's a warm day`);
  } else if (temperature < 20) {
    console.log("It's a bit cool today");
  }
}

function niilberOloh(too1, too2) {
  console.log(too1 + too2);
}
niilberOloh(15, 22);

// 1. Check if Zero: Write a function isZero that takes a number and returns true if the number is zero, and false otherwise.
// 1.  0 - тэй тэнцүү бол true, үгүй бол false гэж хэвэлдэг isZero гэдэг функц бичнэ үү.
function isZero(utga) {
  if (utga == 0) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }
}
isZero(0);

// 2. Square a Number: Write a function square that takes a number and returns its square.
// 2. Тооны квадрат: Тоо өгч квадратыг нь буцаадаг square гэдэг функц бичнэ үү.
function square(kavdrat) {
  console.log(kavdrat * kavdrat);
}
square(11);

// 3. Calculate the Area of a Rectangle: Write a function rectangleArea that takes the width and height of a rectangle and returns its area.
// 3. Тэгш өнцөгтийн талбайг тооцоолох: Тэгш өнцөгтийн өргөн ба өндрийг өгч талбайг нь буцаадаг rectangleArea гэдэг функц бичнэ үү.

// 4. Find the Largest Number: Write a function findLargest that takes three numbers as arguments and returns the largest number.
// 4. Хамгийн их тоог ол: Гурван тоо өгч хамгийн их тоог буцаадаг findLarge гэдэг функц бичнэ үү.
function findLarge(num1, num2, num3) {
  if (
    num1 > num2 &&
    num1 > num3 &&
    num2 > num3 &&
    num2 > num1 &&
    num3 > num1 &&
    num3 > num2
  );
}
findLarge(23, 43, 56555);
// 5. Convert Temperature: Write a function celsiusToFahrenheit that takes a temperature in Celsius and returns the temperature in Fahrenheit
// 5. Температур хөрвүүлэх: Цельсийн температур өгч Фаренгейтийн температурыг буцаадаг celsiusToFahrenheit гэдэг функц бичнэ үү.

// 6. Simple Calculator: Write a function calculator that takes three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). The function should perform the corresponding operation and return the result.
// 6. Энгийн тооны машин: Хоёр тоо болон ямар үйлдэл хийх утга ('add', 'subtract', 'multiply', 'divide') гэсэн гурван аргумент авах функц бичнэ үү. Энэ Функц нь харгалзах үйлдлийг гүйцэтгэж, үр дүнг буцаадаг байна.

//turshiltttttttttttttttttttttttttttttttttttttttttt
const person = {
  classInfo: {
    classNumber: 401,
    teacherName: [`Boloroo`, `Dashka`, `Duluu`],
    imacNumber: `1b`,
  },
  name: `Saruul`,
};
console.log(
  "teacher Name -- >",
  person.classInfo.teacherName[0],
  person.classInfo.teacherName[1],
  person.classInfo.teacherName[2]
);
console.log(`minii ner -->`, person.name);
console.log(`angiin dugaar-->`, person.classInfo.classNumber);
console.log(`imacNumber -->`, person.classInfo.imacNumber);

// Array -n 2dah elementiig hevelne uu
// const array4 = [10, 20, 30, 40, 50];
const array4 = [10, 20, 30, 40, 50];
console.log(array4[1]);

// object dotor baigaa array-g hevelne uu
// const person3 = { name: 'Alice', friends: ['Bob', 'Charlie'] };
const person3 = { name: "Alice", friends: ["Bob", "Charlie"] };
console.log(person3.friends[0]);
console.log(person3.friends[1]);
console.log(person3.friends);

// New York iig songoj hevlene uu
// const person2 = { name: 'Alice', address: { city: 'New York', zip: 10001 } };
const person2 = { name: "Alice", address: { city: "New York", zip: 10001 } };
console.log(person2.address.city);

// 2D array -s 6 toog songoj hevelne uu
const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(array2D[1][2]); //urd taliin 1 ni 0,1 geed [4,5,6]-g zaaj bn. tgeed [2] ni 4,5,6-iin dotorh 2dugaar buyu 3dugaar toog zaaj bn

const array = [`BMW`, `Toyota`, `volvo`, `benz`, `suzuki`];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // BMW ees ehleed suzuki hurtel daraallaar ni hewlene, ghedee suzuki-iin ard ug bichsen ch adilhan hewlene yaagad gewel length uchraas
}

for (let sumDaraalal = 0; sumDaraalal <= 5; sumDaraalal++) {
  // daraalalsan toonuudiig gargana 0-5 hurtel
  console.log(sumDaraalal);
}

//0-ees 5 hurtleh niilberiig oloh
let sum = 0;
for (let u = 0; u <= 5; u++) {
  sum += u;
  // console.log(sum); ene burjgar haaltnii omno bichchihwel hiigdej bgaa uildluud ni neg negeeree hewlegdne
}
console.log(sum); // end bichwel zugeer niilberiig ni l hewlne

// 1. Console numbers from 1 to 10 .
// 1 -> 10 хүртэлх тоог хэвлэнэ үү .
// for example :  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
for (Negees10hurtleh = 1; Negees10hurtleh <= 10; Negees10hurtleh++) {
  console.log(Negees10hurtleh);
}

// 2. Console numbers from 10 to 1 .
// 10 -> 1 хүртэлх тоог хэвлэнэ үү
// for example :  10, 9, 8, 7, 6 ... 1
for (arwaas1hurtleh = 10; arwaas1hurtleh >= 1; arwaas1hurtleh--) {
  console.log(arwaas1hurtleh);
}

// 3. Sum of Numbers. Write a for loop that calculates the sum of numbers from 1 to 10.
// 1-10 хүртэлх тооний нийлбэрийг олно уу.
let sum1 = 0;
for (
  let negees10hurtlenNiilber = 0;
  negees10hurtlenNiilber <= 10;
  negees10hurtlenNiilber++
) {
  sum1 += negees10hurtlenNiilber;
}
console.log(sum1);

// 4. Console sum of even numbers 1 to 20 .
// 1 -> 20 хоорондох тэгш тоонуудын нийлбэрийг хэвлэнэ үү .
let sum2 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    sum2 += i;
  }
}
console.log(sum2);

// 5. Console a square of stars (*) .
// (*) Од ашиглан дөрвөлжинг хэвлэнэ үү .
// for example :
// *****
// *****
// *****
// *****
let size = 5;
for (let i = 0; i < size; i++) {
  //ene for 1ywagdah uyd doood for ni duustalaa urgeljilne
  let row = ""; // end bs hooson mor gargana gj yaaj bodoj oliidee shet
  for (let j = 0; j < size; j++) {
    row += "*"; //// ene yg ymr uchirtai * weeee end * bicheed l shuud *-iig * oor nemeh gdg tushaal awch bn gj uuu dee
  }
  break;
  console.log(row);
}

// 6;
// (*) Од ашиглан доорх дүрсийг хэвлэнэ үү .
// for example :
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let k = 1; k <= i; k++) {
    stars += "*"; //2 string zalgagdaj bgaa bolohoor console deeree ** gej nemegdneeeee bat bsn bl batbat bolnoooooo
  }
  console.log(stars);
}

// 7.Calculate given number to power .
// Өгөгдсөн тоог тухайн зэрэгт дэвшүүлнэ үү .
// input : number = 6  degree=10
// for example : 60466176
let number = 6;
let degree = 10;
let result = 1; // 0 bwl urjuuleed 0 bolchih bolohoor 1 gej zaaj ognooooo
for (let i = 0; i < degree; i++) {
  // 10 shirheg dawtaltiiiig l haruulj bgaa ym aa
  result = result * number;
}
console.log(result);
// console.log(`Result: ${Result}`);

// 8.Calculate average of numbers from 12 to 36 .
// 12 -> 36 хүртэлх тоонуудын дунджийг ол .
// for example : 24
let niilber = 0;
let count = 0;
for (let i = 12; i <= 36; i++) {
  niilber += i; //neg udaa dawtalt buyu for ywagdah uyd niilber = niilber + i gdg zuil ywagdaad door ni count ++ geed negeer ywagdaad ahiad deeshee forluugaa orood ywnaa
  count++;
}
let average = niilber / count;
console.log("The average of number from 12 to 36 is:", average);
console.log(`the count of number from 12 to 36 is:`, count);
console.log(`the niilber of number from 12 to 36 is:`, niilber);

// 9.Sum of odd and even numbers from 11 to 50 .
// 11 -> 50 хүртэлх тоонуудын тэгш болон сондгой тоонуудын нийлбэрийг ол .
// for example : sumOdd = 600, sumEven = 620
let sumOdd = 0;
let sumEven = 0;
for (let i = 11; i <= 50; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  } else {
    i % 2 == 1;
    sumOdd += i;
  }
}
console.log(`sondgoi toonii niilber = ${sumOdd}`);
console.log(`tegsh toonii niiilber = ${sumEven}`);

// 10.Iterate through all numbers from 1 to 45. Print the following: For multiples of 3 print “Fizz” , For multiples of 5 print “Buzz” , For multiples of 3 and 5 print “FizzBuzz”
// 1 - 45 хүртэлх тоонуудын давталт гүйлгэж 3д хуваагдаж байвал “Fizz” , 5д хуваагдаж байвал “Buzz” , 3 болон 5д хуваагдаж байвал “FizzBuzz” гэж хэвлэнэ үү .
// for example : number = 6 // Fizz , number = 8 // empty , number = 15 // FizzBuzz
// let num = 0;
// for (let i = 1; i <= 45; i++){
//   if (i % 3 == 0) && (i % 5 == 0){
//     console.log(Fizz);
//   } else if {

//   }
// }

// 11.Check the fifth power of given number is greater than 10000 .
// Тооны таван зэрэг нь 10000-аас дээш эсэхийг шалгана уу .
// for example :
//      5 * 5 * 5 * 5 * 5 = 3125 // it is less than 10000
//      8 * 8 * 8 * 8 * 8 = 32768 // it is greater than 10000

//urjih uildel uchraaaaas zaawal result = 1 gj ognoooooo

// 12. Given an array of objects representing people with their ages, write a for loop to calculate the total age.
// Өгөгдсөн утгаас насны нийлбэрийг олно уу.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
]; // nasnii niilber gheer array deer bgaa objectuudiin dotor age-iig nemne. zondoo olon bj boloh blhoor loop hiiine
let ageSum = 0;
for (let i = 0; i < people.length; i++) {
  ageSum += people[i].age; //people-iin [i]-iin age-iig awnaa
}
console.log(`age sum = ${ageSum}`);

// 13. Find Person by Name. Given an array of objects representing people, write a for loop to find a person by name.
// Хүмүүсийг төлөөлж буй объектуудын array өгөгдсөн бол хүнийг нэрээр нь олохын тулд for давталт бичнэ үү.
const people1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];
let nameToFind = `Bob`;
let person1;
for (let i = 0; i < people1.length; i++) {
  if (people[i].name === nameToFind) {
    person1 = people1[i];
  }
}
console.log(nameToFind);
// 14. Calculate Average Price. Given an array of objects representing items, write a for loop to calculate the average price of the items.
// дундаж үнийг тооцоолно уу.
// const items = [
//     { name: 'Book', price: 15 },
//     { name: 'Pen', price: 2 },
//     { name: 'Notebook', price: 5 },
//     { name: 'Bag', price: 30 }
//   ];

//eyreg bolon even toonuudiin niilber-iig ol.        const array1 = [2, -3, 5, 6, -8, 10];
const array1 = [2, -3, 5, 6, -8, 10]; // even toog olood eyreg toog olood niilberiig ni olno gdg 3n uildel hiiij boloh. even toog olohin tuld %2=0 bolowch haana ni ogohig bodoj oloh gui. @positive toog +too gj bichihin tuld 0< positive gj ogood. garsan hariug ni nemmeer bgaa blowch bichiglel??????
// let even = 0;
// let positive = 0;
// for (let i = 0; i <= )
// console.log(array1);
let sumniilber = 0;
for (let i = 0; i < array1.length; i++) {
  if (array1[i] >= 0 && array1[i] % 2 == 0) {
    // ene mor bol nohtsol ymaa. nohtsoltei l bwl if geed nohtsol oo bichhneeeeee. ene udaa 2 nohtsol bsn uchraas && yma
    sumniilber = sumniilber + array1[i]; //[i] bgaaa shaltgaan ni array dotor 1 1 eer ywagdah ystoi uchraas
    break;
  }
}
console.log(sumniilber);

//reserved array
let arr1 = [5, 4, 3, 2, 1];
let reversedArray = []; //[] ene haaltiig ogsnoor end ymr ch bsn array orno shuu gdgiig iltgene
let index = 0; //index gdg ni deed array iin [] haalt dotor oroh ymaa beldej ogchen
for (let i = arr1.length - 1; i >= 0; i--) {
  reversedArray[index] = arr1[i];
  index++;
}
console.log(reversedArray);
