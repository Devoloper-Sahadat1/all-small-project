// // console.log("ready for run")
//const num = parseFloat(prompt("Please Enter your Number:"));

// if (typeof num === "number" && num <= 100) {
//        //console.log(`can't you enter above 100`);

//   if (num <= 32) {
//     console.log("your fail.Try next time ");
//   } else if (num >= 33) {
//     console.log("your pass the exam.");
//     if (num <= 39) {
//       console.log("You have got :D");
//     } else if (num <= 49) {
//       console.log("your result is C");
//     } else if (num <= 59) {
//       console.log("your result is B");
//     } else if (num <= 69) {
//       console.log("your result is A-");
//     } else if (num <= 79) {
//       console.log("your result is A");
//     } else if (num <= 100) {
//       console.log("your result is A+");
//     } else{
//       console.log(`can't you enter above 100`)
//     }
//    // console.log(`can't you enter above 100`);

//   } else {
//     console.log("Enter a valide number");

//   }
// } else {
//   document.write("Its NaN,please give me a valid number");
// };


// let value = 2;

// if (typeof value === "string") {
//   console.log("It's a string!");
// } else if (typeof value === "number") {
//   console.log("It's a number!");
// } else if (Array.isArray(value)) {
//   console.log("It's an array!");
// } else if (value === null) {
//   console.log("It's null!");
// } else {
//   console.log("Type is unknown.");
// }


//const getData = parseFloat(prompt('please enter a feet number'));
// const getData1 = prompt('enter somthing')
// const getData =parseFloat(getData1)


// if (typeof getData === 'number') {
//   if (getData = 1) {
//     // const x = 1*12?
//     document.write(getData * 12)
//     console.log(12 * getData);
//   } else {
//     console.log('sdjflkf')
//   }
// } else {
//   document.write('plase enter a valid number')
// }
const getData1 = prompt("Enter something");
const getData = parseFloat(getData1);

// if (!isNaN(getData)) {
//   // Check if getData is a valid number
//   if (getData === 1) {
//     // Use strict equality for comparison
//     document.write(getData * 12);
//     console.log(12 * getData);
//   } else {
//     console.log("Input is a number but not equal to 1");
//   }
// } else {
//   document.write("Please enter a valid number");
// }

  if ( typeof getData === "number") {
    document.write(`${getData} feet = ${getData * 12} cm`);
    // console.log(12 * getData);
  } else {
    console.log("Input is a number but not equal to 1");
  }
