const dbPass = require('../config/dbPass.json');

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '192.168.1.192',
    user: 'root',
    password: dbPass.pass,
    database: 'RobotBet'
});

module.exports = connection;