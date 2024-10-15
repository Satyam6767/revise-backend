const express = require('express')
const app = express();
const db = require('./db');
const Clothe = require('./Models/Clothe')
const User = require('./Models/User')


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = 3000;


app.get('/', (req, res) => {
    res.send("hello world")
})

app.post('/clothe', async (req, res) => {
    try {

        const data = req.body;
        const newClothe = new Clothe(data);
        const response = await newClothe.save();
        console.log("Data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});



app.post('/users', async (req, res) => {
    try {

        const data = req.body;
        const newUser = new User(data);
        const response = await newUser.save();
        console.log("Data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});




app.get('/clothe', async (req, res) => {
    try {
        
            const response = await Clothe.find({});
            console.log("response fetched")
            res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})


app.get('/users', async (req, res) => {
    try {
        
            const response = await User.find({});
            console.log("response fetched")
            res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})



app.listen(PORT, () => {
    console.log(`your server is running at ${PORT}`)
})