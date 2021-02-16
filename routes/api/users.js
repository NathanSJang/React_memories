const express = require('express');
const router = express.Router();
const userCtrl = require('../../controllers/api/users')

router.post('/signin', userCtrl.singin)
router.post('/signin', userCtrl.singup)

module.exports = router;