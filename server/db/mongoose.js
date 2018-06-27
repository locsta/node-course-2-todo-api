var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://locsta:qwerty123@ds117935.mlab.com:17935/nodejs-todo');

module.exports = {
  mongoose
};

//process.env.MONGODB_URI pour connect avec le add-on mLab d'heroku
