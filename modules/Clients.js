//Dependencies declaration
const mysql = require('mysql2');
require('dotenv/config');

// Mysql Connection
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Function that returns all clients
function Clients(token) {
    return new Promise(resolve => {
        con.connect(function(err) {
            if (err) {
                resolve({ error: true, result: [] })
            } else {
                con.query(`SELECT * FROM security.users WHERE AuthToken = '${token}';`, function(err, result, fields) {
                    if (err) {
                        resolve({ error: true, result: [] })
                    } else {
                        if (result.length > 0) {
                            con.query(`SELECT * FROM security.clients;`, function(err, result, fields) {
                                resolve({ error: false, result: result })
                            })
                        } else {
                            resolve({ error: true, result: [] })
                        }
                    }
                });
            }
        });
    });
};

module.exports = Clients;