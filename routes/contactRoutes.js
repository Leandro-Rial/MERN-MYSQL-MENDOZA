const router = require('express').Router();
const contactCtrl = require('../controllers/contactCtrl');

router.get('/', contactCtrl.getContacts);

router.post('/send', contactCtrl.sendMessage);

module.exports = router