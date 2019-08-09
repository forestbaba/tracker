const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 9000;
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const fs = require('fs');
const filepath = require('./file.txt')

app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
app.use(bodyParser.json());
app.use(logger('dev'))
app.use(cors())


const db =  "mongodb://localhost/oddwise";
mongoose.connect(db).then(() => console.log('Database is ready')).catch(
    err => console.log(err));

app.get('/', (req, res) => {
    //res.status(200).json({ erro: false, message: 'Greetings from tracker' })
    // const model = mongoose.model('Model', new mongoose.Schema({
    //     // your schema here
    // });
    // var document = new Model({
    //     //your document here
    // });
    // document.save((e) => {
    //     if (e) console.log(e);
    //     // document created in the models collection in database
    // });
    console.log('Inside GET: ', req.body)
})

app.post('/', (req, res) => {
    console.log('Inside POST')
    console.log('----------- ', req.body)
    res.status(200).json({error: false, message: req.body})
})

app.post('/t', (req, res) => {
    const dbody = JSON.stringify(req.body) + "\r\n"
    console.log(dbody)
    fs.writeFile('./file.txt', dbody, function (err) {
    // fs.writeFile('./fileToJson.json', req.body , function (err) {
        if (err) {
            return console.log(err);
        }

        res.status(200).json({ error: false, message: 'written'})
        console.log("The file was saved!");
    }); 
})


app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})