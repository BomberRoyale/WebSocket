"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
/*pool.promise().query('select * from login_usu')
    .then( ( [result] ) => {
        console.log(result);
    });*/
class Dao {
    constructor() {
        this.buscaGenerico = {
            existUsu: (user, tabela) => {
                var sql = `SELECT * FROM ${tabela} WHERE usuario = ?`;
                var valores = [user];
                return config_1.pool.promise().query(sql, valores);
            },
        };
        this.UpdateGenerico = {
            atualizaTabUsu: (data) => {
                var valores = data.valores.split(",");
                var sql = `UPDATE ${data.tabela} SET ${data.comandos} WHERE usuario = ?`;
                valores.push(data.usuario); // [data.missao1, data.missao2, data.missao3, data.missao4, data.missao5, data.data_base, data.usuario];
                return config_1.pool.promise().query(sql, valores);
            },
            atualizaTabUsuAux: (usuario, valor, tabela, comandos) => {
                var valores = valor.split(",");
                var sql = `UPDATE ${tabela} SET ${comandos} WHERE usuario = ?`;
                valores.push(usuario);
                return config_1.pool.promise().query(sql, valores);
            }
        };
        this.login = {
            logarUsu: (user, senha) => {
                var sql = 'SELECT * FROM login_usu WHERE usuario = ? AND senha = ?';
                var valores = [user, senha];
                return config_1.pool.promise().query(sql, valores);
            },
            cadastrarUsu: function (user, senha, nascimento) {
                var sql = 'INSERT INTO login_usu(usuario, senha, nascimento, status) VALUES (?,?,?,?)';
                var status = "1";
                var valores = [user, senha, nascimento, status];
                return config_1.pool.promise().execute(sql, valores);
            }
        };
        this.xpUso = {
            criarLinha: (user) => {
                var sql = 'INSERT INTO xp_usu(usuario, xp_Total, xp_DoNivel, nivel) VALUES (?,?,?,?)';
                var valores = [user, "0", "0", "0"];
                return config_1.pool.promise().execute(sql, valores);
            }
        };
        this.energiaMUsu = {
            criarLinha: (user) => {
                var sql = 'INSERT INTO energiaM_usu(usuario, quant_EM, horario, data_base) VALUES (?,?,?,?)';
                var valores = [user, "0", "0", "0"];
                return config_1.pool.promise().execute(sql, valores);
            }
        };
        this.moedasUsu = {
            criarLinha: (user) => {
                var sql = 'INSERT INTO moedas_usu(usuario, pepitas, chaves) VALUES (?,?,?)';
                var valores = [user, "0", "0"];
                return config_1.pool.promise().execute(sql, valores);
            }
        };
        this.dadosDeJogoUsu = {
            criarLinha: (user) => {
                var sql = 'INSERT INTO dadosDeJogo_usu(usuario, vitorias, derrotas, partidas, eliminarOponente, danoOponente, caixasEstouradas, bombasClassS, chaveMPartida, estrelasP, bombasClassP, forcaBombaP, peDeVentoP) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
                var valores = [user, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
                return config_1.pool.promise().execute(sql, valores);
            }
        };
        this.missoesDiariaUsu = {
            criarLinha: (user) => {
                var sql = 'INSERT INTO missoesDiaria_usu(usuario, missao1, missao2, missao3, missao4, missao5, data_base) VALUES (?,?,?,?,?,?,?)';
                var valores = [user, "0", "0", "0", "0", "0", "-1"];
                return config_1.pool.promise().execute(sql, valores);
            },
            BuscaDataBase: (user) => {
                var sql = 'SELECT data_base FROM missoesDiaria_usu WHERE usuario = ?';
                var valores = [user];
                return config_1.pool.promise().query(sql, valores);
            },
            UpdateMissesDiariasUsu: (data) => {
                var sql = 'UPDATE missoesDiaria_usu SET missao1 = ?, missao2 = ?, missao3 = ?, missao4 = ?, missao5 = ?, data_base = ? WHERE usuario = ?';
                var valores = [data.missao1, data.missao2, data.missao3, data.missao4, data.missao5, data.data_base, data.usuario];
                return config_1.pool.promise().query(sql, valores);
            }
        };
        this.missoesDiariaTab = {
            BuscaMissoesDiariaTab: () => {
                var sql = 'SELECT * FROM missoesDiaria_tab';
                return config_1.pool.promise().query(sql);
            }
        };
    }
}
exports.default = Dao;
