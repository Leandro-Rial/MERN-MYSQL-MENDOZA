const connection = require('../db');

const contactCtrl = {
    getContacts: (req, res) => {

        const sql = 'SELECT * FROM contact';

        connection.query(sql, (error, results) => {
            if(error) throw error;

            if(results.length > 0){
                res.json(results);
            } else {
                res.send('Not result');
            }
        })

    },
    sendMessage: (req, res) => {
        const sql = 'INSERT INTO contact SET ?';

        const newContact = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        }

        connection.query(sql, newContact, (error) => {
            if(error) throw error;

            res.send('Send')
        })
    }
}

module.exports = contactCtrl