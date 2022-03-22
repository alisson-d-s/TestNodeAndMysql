const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '192.168.1.192',
    user: 'root',
    password: '758hHuB153*',
    database: 'RobotBet'
});

module.exports = connection;