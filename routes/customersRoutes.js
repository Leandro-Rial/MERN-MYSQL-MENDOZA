const routes = require('express').Router();
const customersCtrl = require('../controllers/customersCtrl');

routes.get('/customers', customersCtrl.getPosts);

routes.post('/add', customersCtrl.createPost);

routes.get('/customers/:id', customersCtrl.getPostId);

routes.put('/update/:id', customersCtrl.updatePost);

routes.delete('/delete/:id', customersCtrl.deletePost);

module.exports = routes