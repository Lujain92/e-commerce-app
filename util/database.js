const mysql = require('mysql2');

pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'password'

})

module.exports=pool.promise();