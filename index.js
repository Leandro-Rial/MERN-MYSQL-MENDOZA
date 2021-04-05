const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const connection = require('./db');

const app = express()

// Middelware
app.use(bodyParser.json());
app.use(cors())

// MySQL
connection.connect(error => {
    if (error) throw error;
    console.log('Database Connected');
})

// Routes
app.use('/api', require('./routes/customersRoutes'));
app.use('/api', require('./routes/winesRotes'));
app.use('/contact', require('./routes/contactRoutes'));

// Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server running on PORT: ', PORT);
})