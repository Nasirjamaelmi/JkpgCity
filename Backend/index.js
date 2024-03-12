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

const users = [
  { username: 'Yuji', passwordHash: '$2a$10$4hUbJwKztFuUAXG67VryQuC5FCFciQ4eHdRlTX38Qvs7LJYwTzZbS' }, // Hashed "itadori"
  // Add more users as needed
];

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find user by username in the simulated database
 if (username === 'Yuji' && password === 'itadori') {
    res.cookie('token', 'my-secret-token', { httpOnly: true });
    res.send('Login success');
  } else {
    res.status(401).send('Login failed');
  }

 
});

app.use('/api/venues', venueRoutes); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})