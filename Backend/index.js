const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const venueRoutes = require('./routes/venueRoutes');
const port = 3000

const db = require('./config/database');

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the JkpgCity API' });
})

app.use('/api/venues', venueRoutes); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})