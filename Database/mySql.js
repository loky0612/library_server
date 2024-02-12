const mysql = require('mysql2');
const connnection = mysql.createConnection({
    host : 'localhost',
    database : 'myproject',
    password : '1234',
    user : 'root'
})

module.exports = connnection;