const path = require("path")

const users = require("../models/users.model");


exports.getUsers = (req, res)=>{
    res.sendFile(path.join(__dirname + "/../views/index.html"))
}

exports.saveUsers = (req, res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const salary = req.body.salary;
   
  const user = {
    name,
    age,
    salary
   
  }
  users.push(user);

  res.status(201).json({
    
    success: true,
    users,

  });
};