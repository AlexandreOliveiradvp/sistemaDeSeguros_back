//Dependencies declaration
const mysql = require('mysql2');
require('dotenv/config');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

// Mysql Connection
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Function that get token auth user
function Auth(username,password){
    return new Promise(resolve => {
        con.connect(function(err) {
            if (err){
                resolve ({error: true, token: null})
            }else{
                con.query(`SELECT * FROM security.users WHERE username = '${username}';`, function (err, result, fields) {
                    if (err){
                        resolve({error: true, token: null})
                    }else{
                        if(result.length > 0){

                            var password_DB = result[0].Password
                            var id_DB = result[0].Id
                            
                            bcrypt.compare(password, password_DB, function(err, result) {
                                if(result == true){
                                    const token = jwt.sign({ id_DB }, "security2022key", {
                                        expiresIn: 300 // expires in 5 min
                                    });
    
                                    var sql = `UPDATE security.users SET AuthToken='${token}' WHERE Id=${id_DB};`;
                                    con.query(sql, function (err, result) {
                                        if (err){
                                            resolve({ error: true, token: null });
                                        }else{
                                            resolve({ error: false, token: token});
                                        }
                                    })
                                }else{
                                    resolve({ error: true, token: null });
                                }
                            });

                        }else{
                            resolve({error: true, result: []})
                        }
                    }
                });
            }
        });
    });
};

module.exports = Auth;