const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'contraleanpass',
    database: 'node20_mysql'
});

module.exports = connection