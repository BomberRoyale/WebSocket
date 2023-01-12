"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
var db;
const config = {
    host: 'sql727.main-hosting.eu',
    port: "3306",
    user: 'u310558138_bomberroyale',
    password: '20300516JJl@',
    connectionLimit: 5,
    database: "u310558138_bomberroyalepl"
};
class Database_model3 {
    connect() {
        //create mysql connection pool
        db = mysql.createPool(config /*|| process.env.DATABASE_URL*/);
        db.on('connection', function (connection) {
            console.log('DB Connection established');
            connection.on('error', function (err) {
                console.error(new Date(), 'MySQL error', err.code);
            });
            connection.on('close', function (err) {
                console.error(new Date(), 'MySQL close', err);
            });
            return connection;
        });
    }
    ;
    loadUser(user, senha, callback) {
        db.query('SELECT * FROM login_usu WHERE usuario = ? AND senha = ?', [user, senha], function (err, rows) {
            if (err) {
                console.error(err);
            }
            callback(err, rows);
        });
    }
    ;
    cadastrarUsuario(user, senha, nascimento, callback) {
        db.query('SELECT * FROM login_usu WHERE usuario = ?', [user], function (err, rows) {
            if (err) {
                console.error(err);
            }
            if (rows.length > 0) {
                callback(err, rows);
            }
            else if (rows.length == 0) {
                var status = "1";
                db.query('INSERT INTO login_usu(usuario, senha, nascimento, status) VALUES (?,?,?,?)', [user, senha, nascimento, status], function (err, rows) {
                    if (err) {
                        console.error(err);
                    }
                    callback(err, rows);
                });
            }
        });
    }
}
exports.default = Database_model3;
;
