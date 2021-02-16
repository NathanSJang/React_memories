const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const auth = require('../../middleware/auth');

router.get('/', postsCtrl.getPosts);
router.post('/', auth, postsCtrl.createPost);
router.patch('/:id', auth, postsCtrl.updatePost);
router.delete('/:id', auth, postsCtrl.deletePost);
router.patch('/:id/likePost', auth, postsCtrl.likePost);

module.exports = router;