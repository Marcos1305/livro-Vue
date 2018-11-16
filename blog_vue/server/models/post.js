const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const postSchema = new Scheme({
  title: 'String',
  author: 'String',
  body: 'String',
  text: 'String',
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  data: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
