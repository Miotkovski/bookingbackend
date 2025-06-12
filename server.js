const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const reservationRoutes = require('./routes/reservationRoutes');
app.use('/api/reservations',reservationRoutes);

app.get('/', (req,res) => {
    res.send('Serwer Działa!');
});

app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`)
})