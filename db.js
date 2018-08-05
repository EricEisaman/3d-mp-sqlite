var fs = require('fs');
var dbFile = './.data/sqlite.db';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);
var config = require('./config');
const uuidv4 = require('uuid/v4');

if(!exists){
  db.serialize(function() { 
    db.run("CREATE TABLE if not exists Users (id TEXT ,name TEXT, pw TEXT, isPlaying INTEGER)"); 
    db.run("INSERT INTO Users VALUES (?,?,?,?)",[uuidv4(),"admin",process.env.ADMIN_KEY,0],err=>{});
  }); 
}
db.serialize(function() { 
  db.each("SELECT * FROM Users", function(err, row) {
        console.log(`User id: ${row.id}   name: ${row.name}  pw: ${row.pw} isPlaying: ${row.isPlaying}`);
  });
});    
module.exports = db;   
   