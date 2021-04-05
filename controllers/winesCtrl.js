const connection = require('../db');

const winesCtrl = {
    getWines: (req, res) => {

        const sql = 'SELECT * FROM wines';

        connection.query(sql, (error, results) => {
            if (error) throw error;

            if(results.length > 0){
                res.json(results);
            } else {
                res.send('Not result');
            }
        })

    },
    createWine: (req, res) => {

        const sql = 'INSERT INTO wines SET ?';

        const newWines = {
            name: req.body.name,
            price: req.body.price,
        }

        connection.query(sql, newWines, error => {
            if(error) throw error;

            res.send('Wine Created')
        })

    }
}

module.exports = winesCtrl