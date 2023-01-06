//const { connect } = require('./database_model');


function database_model2() {

  var mysql = require('mysql');
  var db = null;
  
  // connect to the db
  var config2 = {
    host: 'sql727.main-hosting.eu',
    port: "3306",
    user: 'u310558138_bomberroyale',
    password: '20300516JJl@',
    connectionLimit: 5,
    database: "u310558138_bomberroyalepl"
  };

  var config3 = {
    host: 'sql10.freemysqlhosting.net',
    user: 'sql10588085',
    password: 'bXP99KVMwV',
    database: "sql10588085",
    port: "3306"
  };

  //For mysql single connection
  /* var db = mysql.createConnection(
          dbConnectionInfo
  );
  
   db.connect(function (err) {
      if (!err) {
          console.log("Database is connected ... nn");
      } else {
          console.log("Error connecting database ... nn");
      }
  });
  
  */
  
  this.connect = function (callback) {
    //create mysql connection pool
    db = mysql.createPool(config2 /*|| process.env.DATABASE_URL*/);

    db.on('connection', function (connection) {
      console.log('DB Connection established');

      connection.on('error', function (err) {
        console.error(new Date(), 'MySQL error', err.code);
      });
      connection.on('close', function (err) {
        console.error(new Date(), 'MySQL close', err);
      });
    });
  };

  this.loadUser = function (user, senha, callback) {
    db.query('SELECT * FROM login_usu WHERE usuario = ? AND senha = ?', [user, senha], function (err, rows) {

      if (err) { console.error(err); }

      callback(err, rows);
    });

  };

} module.exports = new database_model2;