const mongoose = require('mongoose')


const mongoURL = 'mongodb://localhost:27017/shopping'


mongoose.connect(mongoURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection;


db.on('connected', () => {
    console.log("Connected to MongoDB server")
});
db.on('error', (err) => {
    console.log("Error while connecting", err);
});