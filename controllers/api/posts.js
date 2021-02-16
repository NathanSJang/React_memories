const PostMessage = require('../../models/post');
const mongoose = require('mongoose')

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
}

async function getPosts (req, res) {
  try {
    const postMessage = await PostMessage.find();

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

async function createPost(req, res) {
  const post = req.body;
  const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() });
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    req.status(404).json({ message: error.message });
  }
};

async function updatePost(req, res) {
  const { id: _id } = req.params;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ message: error.message });
  };
  
  const updatePost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id}, { new: true });
  req.json(updatePost);
};

async function deletePost(req, res) {
  const { id: _id } = req.params;
  
  if(!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send('No post with that id');
  }
  const post = await PostMessage.findByIdAndRemove(_id);
  console.log('DELETE!');
  res.json({ message: 'Post Deleted Successfully' });
};

async function likePost(req, res) {
  const { id: _id } = req.params;
  // checking user
  // req.body passing through auth middleware so it has req.userId probs
  if(!req.userId) return res.json({ message: 'Unauthenticated' })
  
  if(!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send('No post with that id');
  }
  
  const post = await PostMessage.findById(_id);
  const index = post.likes.findIndex((id) => id === String(req.userId));
  if(index === -1) {
    // liked a post
    post.likes.push(req.userId);
  } else {
    // dislike a post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

  res.json(updatedPost)
}