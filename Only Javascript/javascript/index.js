// //console.log("hello sahadat")
// let y = 10;
// //console.log(x)
// y = 5;
// //console.log(x)
// var x = 10;
// // console.log(x);
// const date = new Date()
// const z = date.toString();
//  console.log(date)
 
// const country = "Bangladesh";
// console.log(country.slice(6));
// const newcountry = country.toLowerCase();
// // console.log(newcountry)
// const nc = country.repeat(3)
// console.log(nc)
 

// const love = " i love bangladesh"
// console.log(love.replace("i", "sahadat"));
// const love = " i love bangladesh"
// console.log(love.replaceAll("I", "sahadat"));
// let x = 345.2458;
// let y = x.toString();
// //console.log(y.split(""));

// console.log(x.toExponential(3))
// console.log(x.toExponential(2))
// console.log(x.toExponential(0))
// let x = "5.56";
// const y = parseFloat(x)
// const z = parseInt(x)
// console.log(y)
// console.log(z)
// console.log(typeof(y))

// const cars = '"saba","volo","BMW" ';

// const arrys = new Array(cars);

// const arrys = ["saab", "volo", "BMW"];
// // console.log(arrys[-2]);
// const arr = arrys.toString();
// console.log(arr.indexOf("volo"));
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.join(" $");
// // console.log(typeof(fruit));
// const test = fruits.shift();
// const test2 = fruits.unshift('hello');
// console.log(test2);
// // console.log(fruits.length)

// console.log(hell.unshift("tollo"));
// delete hell[2];
// console.log(hell);
// //console.log(deHell);
// // node index.js
// console.log(hell.slice(2,3))
// const hell = ["hello", "gello", "cello", ["tole", 'mole'], ['jole', 'gole'], ['bole']]
// const test = hell.flat(Infinity);
// console.log(test)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort())
// console.log(fruits.reverse())
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.toSorted())
// points.sort(function (a, b) {
//     return b-a
// })
// console.log(points);
// let myfang=fac
// points.map(myf)
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };
// person.fullname= function () {
//   return this.firstName + " " + this.lastName + " his age is : " + this.age
// }
// person.firstName = "johnn"
// delete person.age;
// delete person["eyeColor"]

// person.name = function ('sahadat','hossen') {
//   return this.firstName + " " + this.lastName;
// };


// console.log(Object.values(person));
// console.log(Object.entries(person))
// console.log(person.fullname())
// console.dir(person)


// const add = Object.defineProperty(person, "firstName", { value: "2008" });
// person.firstName="hello"
// console.log(person)

// console.log(Object.keys(person));
// console.log(Object.values(person));

// console.log(Object.entries(person));
// console.log(person.fromEntries());node index.js
// Object.preventExtensions(person);
// Object.isSealed(person)
// delete person.firstName
// person.email="sjdflskj@gmail.com"
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
//Object.freeze(person)
// delete person age;
person.firstName = "alami";
// Object.defineProperties(person,"firstName",{value:'alamin'})
Object.defineProperty(person, "year", { value: "2008" });


console.log(person)
Object.isf