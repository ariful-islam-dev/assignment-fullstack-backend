
const fs = require('fs')
const path = require('path');
const dbPath = path.resolve('db', 'db.json')


const writeFile = (data)=>{
    fs.writeFileSync(dbPath, JSON.stringify(data));
};

const readFile = ()=>{
   const data = fs.readFileSync(dbPath);
   return JSON.parse(data)
}

module.exports  = {
    writeFile,
    readFile
}