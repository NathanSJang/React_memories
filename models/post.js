const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  message: String,
  Creator: String,
  tagg: [String],
  selectedFile: Stringg,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAtt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage