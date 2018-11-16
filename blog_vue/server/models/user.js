const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const userSchema = new Scheme({
  name: 'String',
  login: 'String',
  password: 'String',
});

module.exports = mongoose.model('User', userSchema);
