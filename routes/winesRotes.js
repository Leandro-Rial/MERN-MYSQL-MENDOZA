const router = require('express').Router();
const winesCtrl = require('../controllers/winesCtrl');

router.get('/get', winesCtrl.getWines);

router.post('/create', winesCtrl.createWine);

module.exports = router