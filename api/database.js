const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5');

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    //cannot open database
    console.error(err.message);
    throw err
  } else {
    console.log('connected to the SQLite database.')
    db.run(`CREATE TABLE user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name text,
      email text UNIQUE,
      password text,
      CONSTRAINT email_unique UNIQUE (email)
    )`,
    (err) => {
      if (err) {
        //table already created
      } else {
        //Table just created, creating rows now
        let insert = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)'
        db.run(insert, ["admin", "elias@baez.us", md5("bubbleJug123")])
        db.run(insert, ["user", "ebaez618@gmail.com", md5("bubbleJug123")])
        }
      
    });
  }
});

module.exports = db;