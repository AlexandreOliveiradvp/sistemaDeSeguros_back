//Dependencies declaration
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const jwt = require('jsonwebtoken');

// Express Configuration
app.use(cors());

//Imports Modules
const Auth = require('./modules/Auth');
const Users = require('./modules/Users');

app.get('/', function(req, res) {
    res.send('Server On')
})

//ROUTE AUTH ***********************************************************
app.post('/Auth/:username/:password', function(req, res) {
    const username = req.params['username'];
    const password = req.params['password'];

    async function auth() {
        res.json(await Auth(username, password));
    };

    auth();
});

//ROUTE LIST USERS ******************************************************
app.get('/User/:auth_token', function(req, res) {
    const auth_token = req.params['auth_token'];

    async function getUsers() {
        res.json(await Users(auth_token));
    };
    getUsers(auth_token);
});

app.listen(port, () => {
    console.log(`Server online http://localhost:${port}`)
});