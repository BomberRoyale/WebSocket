"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dao_1 = __importDefault(require("./../Models/dao"));
const dao = new dao_1.default();
class CadastroUsuario {
    Cadastrando(event, usuario, senha, nascimento, socket) {
        var data;
        if (event == "cadastrarUsuario") {
            dao.identificadordeUsu.existUsu(usuario, "login_usu")
                .then(([result]) => {
                var texto = JSON.parse(JSON.stringify(result));
                if (texto.length > 0) {
                    console.log(`${texto[0]["status"]} já cadastrado`);
                    var a = 0;
                    data = {
                        ev: "Recusa",
                        situacao: a
                    };
                    socket.emit("CADASTRO_USUARIO", data); // resposta coletada enviando o resultado da pesquisa.
                }
                else {
                    dao.login.cadastrarUsu(usuario, senha, nascimento)
                        .then(([result]) => {
                        // console.log(result)// aqui em encontro o "affectedRows" que é linhas afetadas.
                        texto = JSON.parse(JSON.stringify(result));
                        if (texto["affectedRows"] == 1) {
                            console.log("Usuário cadastrado");
                            data = {
                                ev: "Confirma",
                                situacao: 1
                            };
                        }
                        else {
                            console.log("Não cadastrado");
                            data = {
                                ev: "Recusa",
                                situacao: -1
                            };
                        }
                        socket.emit("CADASTRO_USUARIO", data); // resposta coletada enviando o resultado da pesquisa.
                    }).catch(err => {
                        console.log("Erro ao cadastrar novo usuário");
                        data = {
                            ev: "Erro 2",
                            situacao: -1
                        };
                        socket.emit("CADASTRO_USUARIO", data); // resposta coletada enviando o resultado da pesquisa.
                    });
                }
            }).catch(err => {
                console.log("Erro ao checar se existe um usuário com mesmo nome");
                data = {
                    ev: "Erro",
                    situacao: -1
                };
                socket.emit("CADASTRO_USUARIO", data); // resposta coletada enviando o resultado da pesquisa.
            });
            /*database_model3.cadastrarUsuario(usuario, senha, nascimento, (err: any, rows: any) => {
                if (rows.length > 0) {
                    console.log("Usuário já cadastrado");
                    var a = 0;
                    data = {
                        ev: "Recusa",
                        situacao: a
                    };
                    console.log(rows + "o que tem aqui dentro");
                } else {
                    a = 1;
                    console.log("Usuário cadastrado");
                    data = {
                        ev: "Confirma",
                        situacao: a
                    };
                }
                socket.emit("CADASTRO_USUARIO", data); // resposta coletada enviando o resultado da pesquisa.
            });*/
        }
    }
}
exports.default = CadastroUsuario;
