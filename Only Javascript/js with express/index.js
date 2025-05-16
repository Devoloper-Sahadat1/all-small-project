
// const express = require("express");

const app = express();
const port = 4000;

const user = 242342;

//console.log(typeof user);
// 


// const users = [
//   {
//     id: 1,
//     name: "Sahadat",
//     email: "sahadat@gmail..com",
//     age: 21,
//     qualification: "hsc",
//   },
//   {
//     id: 2,
//     name: "Shohel",
//     email: "shohel@gmail.com",
//     age: 22,
//     qualification: "full stack devoloper",
//   },
//   {
//     id: 3,
//     name: "jubayer",
//     email: "juba@gmail.com",
//     age: 6,
//     qualification: "none",
//   },
//   {
//     id: 4,
//     name: "alamine",
//     email: "alamin@gmail.com",
//     age: 14,
//     qualification: "jsc",
//   },
// ];

let x = 5;
console.log(x);



app.get("/", (req, res) => {
  res.send("Data base colections");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


