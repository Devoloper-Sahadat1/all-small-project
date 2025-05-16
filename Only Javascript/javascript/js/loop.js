const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
 let  text = ''

for (const x in person) {
    text+= person[x];
}
//console.log(text)
const cars = ["BMW", "Volvo", "Mini"];
let text2=''
 for (const x of cars) {
   text2 += x + "<br>";
}
console.log(text2)
 document.write(text2)
