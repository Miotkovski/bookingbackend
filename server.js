// server.js
const { Pool } = require('pg');
require('dotenv').config();          // 1. Wczytanie .env
const express = require('express');  
const cors = require('cors');

const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Middleware
app.use(cors());
app.use(express.json());

// 3. Trasy
app.use('/api/reservations', reservationRoutes);
app.get('/', (req, res) => res.send('Serwer działa!'));

// 4. Start serwera
app.listen(PORT, () => {
  console.log(`🚀 Serwer działa na porcie ${PORT}`);
});
