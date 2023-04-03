const express = require('express');
const connection = require('./db');
const router = express.Router();

router.get('/items', (req, res) => {
  connection.query('SELECT * FROM form', (error, results, fields) => {
    if (error) {
      console.error('Error fetching items from MySQL database: ' + error.stack);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

module.exports = router;
