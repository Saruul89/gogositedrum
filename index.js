// //eyreg bolon even toonuudiin niilber-iig ol.        const array1 = [2, -3, 5, 6, -8, 10];
const array1 = [2, -3, 5, 6, -8, 10]; // even toog olood eyreg toog olood niilberiig ni olno gdg 3n uildel hiiij boloh. even toog olohin tuld %2=0 bolowch haana ni ogohig bodoj oloh gui. @positive toog +too gj bichihin tuld 0< positive gj ogood. garsan hariug ni nemmeer bgaa blowch bichiglel??????
let sumniilber = 0;
for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 0 && array1[i] % 2 == 0) {
    // ene mor bol nohtsol ymaa. nohtsoltei l bwl if geed nohtsol oo bichhneeeeee. ene udaa 2 nohtsol bsn uchraas && yma
    sumniilber = sumniilber + array1[i]; //[i] bgaaa shaltgaan ni array dotor 1 1 eer ywagdah ystoi uchraas
  }
}
console.log(sumniilber);

// //2dah ih toog ol ....
// const array2 = [1, 100, 10, 1000];
// let maxNum = 0; // 2dah tom toog ni olohiin tuld ehnii tom toog olj bn
// let seconlargest = 0;
// for (i = 0; i < array2.length; i++) {
//   //1. ymrtaich ehleeh 0 ees array-iin niit urt buyu lenght ee olood teriigee shalgahiin tuld ++ hiiinee
//   if (array2[i] > maxNum) {
//     //hamgiin ihiigee olohiin tuld jishuulj bn. array2[i]-d ehnii nohtsoliig ogood 1>0 bolod, maxNum ni 1 bolod, daragin loopru orood 100>1 bolod maxNum ni 100 bolno ene met ywsaar 1000 deer zogsono
//     maxNum = array2[i];
//     for (let j = 0; j < array2.length; j++) {
//       if (maxNum > array2[j] && seconlargest < array2[j]) {
//         //end odoo nohtsol ni nemegdeed maxNum-aas baga bs 2dah hamgiin ih toog olohin tuld seconLargestaas baga bh ystoi gj ogno
//         seconlargest = array2[j]; //nohtsoloo bichcheed biylewel yaah we gh uchraas seconLargest-iig array2-toigoo adiltgaj ogno.
//       }
//     }
//   }
// }
// console.log(`secondLargestNum`, seconlargest);
// console.log(`largestNumber`, maxNum);

// niilberiin dundajiig ol
// const array3 = [10, 20, 30, 40, 50]; //1. ehleed niilberiig olood 2. daraa ni 5t huwaay
// let sumNum = 0;
// for (let i = 0; i < array3.length; i++) {
//   sumNum += array3[i];
// }
// let average = sumNum / array3.length; //2. array-iinhaa length-d huwaa ognoo
// console.log(`averageSum`, average);
// console.log(`sumNum`, sumNum);

// //find max and min
// const array = [1, 3, 5, 22, 89, 46, 17, 48]; //1. max utga 0, min utga 0 gj ognoo
// let maxUtga = 0;
// let minUtga = array[0]; //randomoor ali neg utgiig ni hamgiin baga gj awch uzej bn. herwee =0 bhin bol shalgah shaardlagagu hamgiin baga geed oilgochihno
// for (let i = 0; i < array.length; i++) {
//   //2. nohtsol hed bgaa we? ... hamgiin ih bolon hamgiin baga geed 2 utga bgaa
//   // debugger;
//   if (maxUtga < array[i]) {
//     //nohtsol 1 hamgiin ih utgiig olood
//     maxUtga = array[i]; //maxUtga gdg zuild savelene
//   }
//   if (minUtga > array[i]) {
//     //nohtsol 2 hamgiin baga utgiig olood
//     minUtga = array[i]; //minUtga gdg zuild savelene
//   }
// }
// console.log(`max = ${maxUtga}, min = ${minUtga}`);

// //1ees ogson too hurtleh niilberiig oloh
// let sum = 0;
// let number = 3;
// for (let i = 1; i <= number; i++) {
//   // i ni 0-ees ehelsen ch ehleegui ch ylgaagui. niilber uchraas 0+1+2+3+4+5 bolon 1+2+3+4+5 ylgaagui
//   sum += i;
// }
// console.log(`sum = ${sum}`);

//ogogdson toonii heden zereg ni 1000aas ih bn we? jishee ni 2iin 10n zereg ni 1000aas ih bn // 1000aas deeesh tooniii zergiiig olno uuu.
let num = 2; //2oor ogohgui bl 1iin ymr ch zereg 1000aas dawahgu blhoor
let sum1 = 1;
for (let i = 0; i < Infinity; i++) {
  //deeshee heden zereg gdgiig medehgui bga bolohooor infinity hiijn
  sum1 = num ** i; //num-iin i zereg ni sum1 garna shuu
  if (sum1 > 1000) {
    //herweee niilber buyu sum1 ni 1000aas ih bolchihwol yu hewleh we?s
    console.log(`${num}-iin ${i} zereg ni 1000aas ih bnaa: ${sum1}`);
    break;
  }
}

//negtgene uu
// const array3 = [1, 2, 3];
// const array2 = [4, 5, 6];

//array dah suuliin element-iig hasah bolon neg element nemeh
const array2 = [10, 20, 30, 40, 50]; //output ni [10,20,30,40,30]
