const express = require("express");
const { validNum } = require("./utils");

const app = express();

app.get("/api/random", (req, res) => {
  try {


    const{start, end}=req.query

    if(!validNum(start)  || !validNum(end)){
        throw new Error('Please Provide Valid Numeric Number')
    }

    let randNum=Math.floor(Math.random()*(end-start)+start) 
    
    res.json({
      msg: "Random Number is here",
      randomNumber: randNum,
    });
  } catch (err) {
    res.status(400).json(err.message);
  }
});





app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
