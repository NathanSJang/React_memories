const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts')

router.get('/', postsCtrl.getPosts);

module.exports = router;