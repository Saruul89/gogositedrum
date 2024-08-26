// //pushArray hamgiin ard element nemeh
// function pushArray(array, element) {
//   const newArray = array;
//   newArray[newArray.length] = element;
//   return newArray;
// }

// // console.log(pushArray([1, 2, 3], 6));

// //popArray hamgin ard element hasah
// function popArray(array) {
//   array.length = array.length - 1;
//   return array;
// }

// // console.log(popArray([1, 2, 3, 4]));

// //shift array hamgiin urd element hasah
// function shiftArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i + 1];
//   }
//   array.length = array.length - 1;
//   return array;
// }

// // console.log(shiftArray([2, 3, 5]));

// //unshift array hamgiin urd element nemeh
// function unshiftArray(array, element) {
//   let newArray = [];
//   newArray[0] = element;
//   for (let i = 0; i < array.length; i++) {
//     newArray[i + 1] = array[i];
//   }
//   return newArray;
// }

// // console.log(unshiftArray([2, 1, 5], 22));

// //hamgiin urd tald ni element nemeh gj bn
// // const array = [1, 2, 3, 4];
// // const element = 5;
// // let newArray = [];
// // for (let i = 0; i < array.length; i++) {
// //   newArray[i + 1] = array[i];
// // }
// // newArray[0] = element;
// // console.log(newArray);

// //const array = [2,1,4,5]; // shine array deer 3 aas ih toog printle.

// const array1 = [2, 1, 4, 1, 5, 8];
// let newArray1 = []; //shine array deer 4,5-iig hewleh uchraas nerlene
// let index = 0; //shine array deer hewlehin tuld j = 0 gj ehnii utgiig ni nerlene
// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] > 3) {
//     //array-iin i--g 3aas ih gdg nohtsol bgaa uchraas if gd nohtsoloo ogno
//     newArray1[index] = array1[i]; //shine array deer hewleh uchraas deerh i--iigaa newArray j--dee hadgalj ognoo     herweee adilhan [i] bwl array1[i] --iin 2dah utga = newarray-iin 2 dah utgatai adilhan geh uchraas
//     index++; // shine array uchraas deer for-iin haaltand bga loop orj irehgu uchraas shine loop hiij ognoo
//   }
// }
// console.log(newArray1);

// //function filter(array1)

// const array = [1, 2, 3, 4, 5];
// array.push(8);
// console.log(array);

//suuliin 3n elementiig hasna ---- pop ni neg udaadaa hamgiin ariin 1 element hasah uchraas 3n udaagiin DAWTALT hiij ogno gsn ug
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 76543, 8, 56];
let num = 3; //yuuch gsn 3n toog hasah uchraas num = 3 geed nerleed ogloo
for (let i = 0; i < num; i++) {
  //i<num bgaagin shaltgaan ni { geh uyd arr.pop() ajilnaaa} gj bgaa uchraas pop ni num hurtel l ajillana shuu gdgiig zaaj ogno
  arr.pop();
}
console.log(arr);

//const array = [1,2,3,4,5]; iim uyd 2 gj ogwol output ni [4,5,1,2,3] gsn hariu garah ystoi
const array = [1, 2, 3, 4, 5];
let num1 = 2;
for (let i = 0; i < num1; i++) {
  elementForUnshift = array.pop();
}
array.unshift(elementForUnshift);
console.log(array);
