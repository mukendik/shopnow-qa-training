const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Connexion PostgreSQL
const pool = new Pool({
  user: 'shopnow',
  host: 'postgres',       // nom du service docker-compose
  database: 'shopnow_db',
  password: 'shopnowpassword',
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('Backend ShopNow fonctionne !');
});

// Route produits
app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Route utilisateurs
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(3000, () => console.log('Backend running on port 3000'));