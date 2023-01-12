"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
/*pool.promise().query('select * from login_usu')
    .then( ( [result] ) => {
        console.log(result);
    });*/
class Dao {
    constructor() {
        this.login = {
            logarUsu: (user, senha) => {
                var sql = 'SELECT * FROM login_usu WHERE usuario = ? AND senha = ?';
                var valores = [user, senha];
                return config_1.pool.promise().query(sql, valores);
            },
            existUsu: (user) => {
                var sql = 'SELECT * FROM login_usu WHERE usuario = ?';
                var valores = [user];
                return config_1.pool.promise().query(sql, valores);
            },
            cadastrarUsu: function (user, senha, nascimento) {
                var sql = 'INSERT INTO login_usu(usuario, senha, nascimento, status) VALUES (?,?,?,?)';
                var status = "1";
                var valores = [user, senha, nascimento, status];
                return config_1.pool.promise().execute(sql, valores);
            }
        };
    }
}
exports.default = Dao;
