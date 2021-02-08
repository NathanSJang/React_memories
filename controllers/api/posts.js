const PostMessage = require('../../models/post');

module.exports = {
  getPosts,
}

async function getPosts (req, res) {
  try {
    const postMessage = await PostMessage.find();

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}