import { pool } from "./config";

/*pool.promise().query('select * from login_usu')
    .then( ( [result] ) => {
        console.log(result);
    });*/


export default class Dao {

    login = {
        logarUsu: (user: string, senha: string) => {
            var sql = 'SELECT * FROM login_usu WHERE usuario = ? AND senha = ?';
            var valores = [user, senha];
            return pool.promise().query(sql, valores);
        },

        existUsu: (user: string) => {
            var sql = 'SELECT * FROM login_usu WHERE usuario = ?';
            var valores = [user];
            return pool.promise().query(sql, valores);
        },

        cadastrarUsu: function (user: string, senha: string, nascimento: string) {
            var sql = 'INSERT INTO login_usu(usuario, senha, nascimento, status) VALUES (?,?,?,?)';
            var status: String = "1";
            var valores = [user, senha, nascimento, status];
            return pool.promise().execute(sql, valores);
        }
    };
}