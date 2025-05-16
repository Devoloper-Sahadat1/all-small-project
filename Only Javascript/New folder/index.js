const express = require("express");
const app = express();
const port = 3000;

/*starting point*/

let hell = "hello";
console.log(hell);
const date = new Date();
console.log(date);
console.log(Date.toString)

/* endding point*/

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
