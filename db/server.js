const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'canterasoft',
  database: 'signup',
})

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.email,
    req.body.password,
  ]

  dbConnection.query(sql, [values], (err, data) => {
    if (err) {
      return res.json('Error')
    }
    return res.json(data)
  });
})

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";

  dbConnection.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json('Error')
    }
    if (data.length > 0) {
      return res.json('success')
    } else {
      return res.json('faile')
    }
  });
})


/* app.post('/login', (req, res) => {

  dbConnection.query("SELECT COUNT(*) AS total FROM login WHERE `email` = ? AND `password` = ?", [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error del servidor');
    }
    if (data.length > 0) {
      const total = data[0].total;
      const contraseñaExiste = total > 0;
      res.send({ contraseñaExiste });
      return res.json('success')

    } else {
      return res.json('faile')
    }
  });
}) */

app.listen(8081, () => {
  console.log('corriendo en el puerto 8081')
})

