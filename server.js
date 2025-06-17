require('dotenv').config(); // <- najpierw ładujemy .env!
const { Pool } = require('pg'); // <- dopiero potem korzystamy z env

const express = require('express');
const cors = require('cors');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const reservationRoutes = require('./routes/reservationRoutes');
app.use('/api/reservations', reservationRoutes);

app.get('/', (req, res) => res.send('Serwer działa!'));

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
