const express = require('express')
const router = express.Router();
const path = require('path')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


module.exports = io => {
    io.on('connection', function (socket) {

        console.log('User Conncetion');


        socket.on('pour', function (user) {

            console.log('******Inside get Balance******')

        });
       

    });
}
