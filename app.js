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
const Clients = require('./modules/Clients');
const Operators = require('./modules/Operators');

app.get('/', function(req, res) {
    res.send('Server On');
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

//ROUTE LIST CLIENTS ****************************************************
app.get('/Client/:auth_token', function(req, res) {
    const auth_token = req.params['auth_token'];

    async function getClients() {
        res.json(await Clients(auth_token));
    };
    getClients(auth_token);
});

//ROUTE LIST Operators **************************************************
app.get('/Operator/:auth_token', function(req, res) {
    const auth_token = req.params['auth_token'];

    async function getOperators() {
        res.json(await Operators(auth_token));
    };
    getOperators(auth_token);
});

app.listen(port, () => {
    console.log(`Server online http://localhost:${port}`);
});