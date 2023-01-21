import { pool } from "./config";

/*pool.promise().query('select * from login_usu')
    .then( ( [result] ) => {
        console.log(result);
    });*/


export default class Dao {

    identificadordeUsu= {
        existUsu: (user: string, tabela: string) => {
            var sql = `SELECT * FROM ${tabela} WHERE usuario = ?`;
            var valores = [user];
            return pool.promise().query(sql, valores);
        },
    };

    login = {
        logarUsu: (user: string, senha: string) => {
            var sql = 'SELECT * FROM login_usu WHERE usuario = ? AND senha = ?';
            var valores = [user, senha];
            return pool.promise().query(sql, valores);
        },        

        cadastrarUsu: function (user: string, senha: string, nascimento: string) {
            var sql = 'INSERT INTO login_usu(usuario, senha, nascimento, status) VALUES (?,?,?,?)';
            var status: String = "1";
            var valores = [user, senha, nascimento, status];
            return pool.promise().execute(sql, valores);
        }
    };

    xpUso = {
        criarLinha: (user: string) =>{
            var sql = 'INSERT INTO xp_usu(usuario, xp_Total, xp_DoNivel, nivel) VALUES (?,?,?,?)';
            var valores = [user, "0", "0", "0"];
            return pool.promise().execute(sql, valores);
        }
    };

    energiaMUsu = {
        criarLinha: (user: string) =>{
            var sql = 'INSERT INTO energiaM_usu(usuario, quant_EM, horario, data_base) VALUES (?,?,?,?)';
            var valores = [user, "0", "0", "0"];
            return pool.promise().execute(sql, valores);
        }
    };

    moedasUsu = {
        criarLinha: (user: string) =>{
            var sql = 'INSERT INTO moedas_usu(usuario, pepitas, chaves) VALUES (?,?,?)';
            var valores = [user, "0", "0"];
            return pool.promise().execute(sql, valores);
        }
    };

    dadosDeJogoUsu = {
        criarLinha: (user: string) =>{
            var sql = 'INSERT INTO dadosDeJogo_usu(usuario, vitorias, derrotas, partidas, eliminarOponente, danoOponente, caixas, bombasClassS, chavesP, estrelasP, bombasClassP, forcaBombaP, peDeVentoP) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
            var valores = [user, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
            return pool.promise().execute(sql, valores);
        }
    };

    missoesDiariaUsu = {
        criarLinha: (user: string) =>{
            var sql = 'INSERT INTO missoesDiaria_usu(usuario, missao1, missao2, missao3, missao4, missao5, data_base) VALUES (?,?,?,?,?,?,?)';
            var valores = [user, "0", "0", "0", "0", "0", "-1"];
            return pool.promise().execute(sql, valores);
        }
    };
}