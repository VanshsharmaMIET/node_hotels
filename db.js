const mongoose = require('mongoose');

//define the mongodb connection url
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';  //replace hotels with your database name

//set up mongoose connection
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

//get the default connection
//Mongoose maintain an default connection object representing mongodb connection
const db = mongoose.connection;

//define event listners for database connection
db.on('connected', () => {
    console.log('connected to mongodb server');
});

db.on('error', (err) => {
    console.error(' mongodb server connection error', err);
});
db.on('disconnected', () => {
    console.log('disconnected to mongodb server');
});

//export the module into server file 
module.exports=db;