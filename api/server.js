const express = require('express');
const app = express();
const db = require('./database.js');
const md5 = require('md5');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Server Port
const HTTP_PORT = 8000;
//Start server
app.listen(HTTP_PORT, () => {
  console.log('Server running on port %PORT%'.replace("%PORT%", HTTP_PORT))
});

//root endpoint
app.get('/', (req, res, next) => {
  res.json({'message': 'OK'})
});

//other API endpoints
//create
app.post("/api/user/", (req, res, next) => {
  let errors = [];
  if (!req.body.password){ 
    errors.push("No password specified");
  }
  if (!req.body.email){
    errors.push("No email specified");
  }
  if (errors.length) {
    res.status(400).json({"error":errors.join(",")});
    return;
  }
  let data = {
    name: req.body.name,
    email: req.body.email,
    password: md5(req.body.password)
  }
  let sql = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
  let params = [data.name, data.email, data.password]
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({"error": err.message})
      return;
    }
    res.json({
      "message":"success",
      "data": data,
      "id": this.lastID
    })
  });
})
//update
app.patch("/api/user/:id", (req, res, next) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password ? md5(req.body.password) : null 
  }
  db.run(
    `UPDATE user set
      name = COALESCE(?,name),
      email = COALESCE(?,email),
      password = COALESCE(?,password)
      WHERE id = ?`,
    [data.name, data.email, data.password, req.params.id],
    function (err, result) {
      if (err) {
        res.status(400).json({"error": res.message})
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes
      })
  });
});

//read
app.get("/api/user/:id", (req, res, next) => {
  let sql = "select * from user where id = ?"
  let params = [req.params.id]
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json({
      "message":"success",
      "data":row
    })
  });
});

//index
app.get("/api/users", (req, res, next) => {
  let sql = "select * from user"
  let params = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json({
      "message":"success",
      "data":rows
    })
  });
});

//delete
app.delete("/api/user/:id", (req, res, next) => {
  db.run(
      'DELETE FROM user WHERE id = ?',
      req.params.id,
      function (err, result) {
        if (err) {
          res.status(400).json({"error": res.message})
          return;
        }
        res.json({"message":"deleted", changes: this.changes})
  })
});


//Default response for any other type request
app.use(function (req, res) {
  res.status(404);
});