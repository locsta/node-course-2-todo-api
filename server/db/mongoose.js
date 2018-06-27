var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //sur heroku
// mongoose.connect('mongodb://localhost:27017/TodoApp') //en local
module.exports = {
  mongoose
};

//'mongodb://locsta:qwerty123@ds117935.mlab.com:17935/nodejs-todo'


//process.env.MONGODB_URI pour connect avec le add-on mLab d'heroku
