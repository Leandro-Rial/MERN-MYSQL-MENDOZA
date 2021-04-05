const connection = require('../db');

const postCtrl = {
    getPosts: (req, res) => {

        const sql = 'SELECT * FROM customers';

        connection.query(sql, (error, results) => {
            if (error) throw error;

            if(results.length > 0){
                res.json(results);
            } else {
                res.send('Not result');
            }
        })
    },
    createPost: (req, res) => {
        
        const sql = 'INSERT INTO customers SET ?';

        const newCustomer = {
            name: req.body.name,
            city: req.body.city
        }

        connection.query(sql, newCustomer, error => {
            if (error) throw error;

            res.send('Customer created!')
        })

    },
    getPostId: (req, res) => {
        
        const {id} = req.params;

        const sql = `SELECT * FROM customers WHERE id = ${id}`;

        connection.query(sql, (error, result) => {
            if (error) throw error;

            if(result.length > 0){
                res.json(result);
            } else {
                res.send('Not result');
            }
        })

    },
    updatePost: (req, res) => {
        
        const {id} = req.params;

        const {name, city} = req.body;

        const sql = `UPDATE customers SET name = '${name}', city = '${city}' WHERE id = ${id}`;
        
        connection.query(sql, error => {
            if (error) throw error;

            res.send('Customer Updated!')
        })

    },
    deletePost: (req, res) => {

        const {id} = req.params;

        const sql = `DELETE FROM customers WHERE id = ${id}`;

        connection.query(sql, error => {
            if (error) throw error;

            res.send('Customer Deleted')
        })

    },
}

module.exports = postCtrl;