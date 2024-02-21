const db = require('mysql2');

const connection = db.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'library'
})

module.exports = connection;