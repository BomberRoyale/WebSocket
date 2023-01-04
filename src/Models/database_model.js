function database_model() {
  this.version = '0.0.1';
    var db = null;
    var mysql = require('mysql');
       var config = {
      host: '127.0.0.1',
      user : 'root',
      password : '',
      database : "nome_BD"
    }
    var config2 = {
      host: '185.213.81.154',
      user : 'u310558138_bomberroyale',
      password : '20300516JJl@',
      database : "u310558138_bomberroyalepl",
      port : "3306"
    }

    this.connect = function (callback) {

      db = mysql.createConnection(/*config2 ||*/ process.env.DATABASE2_URL);
      db.connect(function (err) {
        if (err) {
          console.error('Erro na conexão mysql: ' + err);
          return;
        }
        console.log('Conectado com BD');

        // callback(err);// return

      });
    };

    this.loadUser = function (user, callback){
      db.query('SELECT * FROM login_usu WHERE usuario = ?', [user], function (err, rows){

        if(err){console.error(err);}

        callback(err, rows);
      });
    };

}
module.exports = new database_model;
