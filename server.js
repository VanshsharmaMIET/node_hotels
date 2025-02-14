// console.log("server file is created")
// function callback(){
//     console.log("vansh sharma");
//     console.log(3+4);
// }

// const add=function(a,b,callback){
//     var res=a+b;
//     console.log(res);
//     callback();
// }


// add(1,3,function(){
//     console.log("name is vansh");
// });


// var fs=require("fs");
// var os=require("os");

// var user =os.userInfo();
// console.log(user); 
// console.log(user.username);

// fs.appendFile("greeting.txt","Hi"+user.username+"!\n",()=>{
//     console.log("file is created");
// })

// const notes = require("./notes.js");
// console.log("server is started");

// console.log(notes.age);
// notes.a();
// //console.log(res);


// var result=notes.addnumber(notes.age+5,5);
// console.log(result);

// var _=require("lodash");

// var array=["vansh","sharma","vansh","van",2,2,3,1,2];
// var filter=_.uniq(array);
// console.log(filter);

// conerting json to object
// const jsonString = '{"name":"John", "age":30, "city":"New York"}';
// const obj = JSON.parse(jsonString);
// console.log(obj.name);

// const jsonArray = '["Ford", "BMW", "Audi", "Fiat"]';
// const myArr = JSON.parse(jsonArray);
// console.log(myArr[0]);

// // converting object to json
// const obj1 = { name: "John", age: 30, city: "New York" };
// const jsonString1 = JSON.stringify(obj1);
// console.log(jsonString1);



// creating a server most important
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/', function (req, res) {
  res.send("Welcome to my hotel");
})



//import the router file
const personRoutes = require('./routes/personRoutes');
// use the router file
app.use('/person', personRoutes);


//import the router file
const menuItemsRoutes = require('./routes/menuItemsRoutes');
// use the router file
app.use('/menuItems', menuItemsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});