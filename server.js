//Prerequisites for students:
//npm init
//npm install express --save
const express = require('express');
const app = express();

//Example route (walk through with students before the main project):
//Query params: name, surname
//Returns simple greeting to person of name and surname
app.get('/name', function(req, res){
  const name = req.query.name;
  const surname = req.query.surname;
  res.send("Hi there " + name + " " + surname);
})

//Importing sneaker "database"
let sneakerdata = require('./sneakerdata.json');

//Sneaker API Route:
//Query params: brand, budget
//Returns shoes of the queried brand and within the queried budget
app.get('/sneakers', function(req, res){
  const brand = req.query.brand;
  const budget = req.query.budget;
  let results = [];
  for(let shoe of sneakerdata[brand]){
    if(shoe.price <= budget){
      results.push(shoe);
    }
  }
  res.send(results);
});

app.listen(4000, () => console.log('Server is listening on port # 4000'));
