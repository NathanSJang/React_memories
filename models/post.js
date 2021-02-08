const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  message: String,
  Creator: String,
  tagg: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAtt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('PostMessage', postSchema);

