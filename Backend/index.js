const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000

const db = require('./database');

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our API' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})