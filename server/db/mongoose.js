var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://locsta:qwerty123@ds117935.mlab.com:17935/nodejs-todo' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};

//process.env.MONGODB_URI || 
