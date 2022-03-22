const mysql = require('./database/dbMysql');

const queryRaces = mysql.query('SELECT * FROM RACES', function(err, res) {
    if (err) throw err;

    console.log(res);
});