const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5');

const DBSOURCE = "db.sqlite";

let db2 = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    //cannot open database
    console.error(err.message);
    throw err
  } else {
    console.log('connected to the SQLite database.')
    db2.run(`CREATE TABLE + baezus (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      role text,
      email text,
      about text,
      sociallinks text,
    )`,
    (err) => {
      if (err) {
        //table already created
      } else {
        //Table just created, creating rows now
        let insert = 'INSERT INTO baezus (role, email, about, sociallinks) VALUES (?,?,?,?)'
        db2.run(insert, ["coding", "elias@baez.us", "A software engineer & poet creating full stack applications that are deceptively complex, smoothly functional, and purpose-driven.", "//www.github.com/user"])
        db2.run(insert, ["poetry", "ebaez618@gmail.com", "I have poems currently out in Mantis, The Bitchin Kitsch, and The Daily Drunk.","//www.nocontactmag.com/miss-bay-the-parasite"])
        db2.run(insert, ["journo", "elias@gayletter.com", "I have interviewed a bunch of artists","//gayletter.com/jericho-brown"])
        }
      
    });
  }
});

module.exports = db2;