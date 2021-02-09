const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts')

router.get('/', postsCtrl.getPosts);
router.post('/', postsCtrl.createPost);
router.patch('/:id', postsCtrl.updatePost);
router.delete('/:id', postsCtrl.deletePost);
router.patch('/:id/likePost', postsCtrl.likePost);

module.exports = router;