"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const socket2_1 = __importDefault(require("./core/socket2"));
//import d_m3 from "./Models/database_model3";
const dao_1 = __importDefault(require("./Models/dao"));
//const database_model2 = require("./Models/database_model2");
const http = require('http');
class Login {
    VeirificandoLogin(event, usuario, senha, socket) {
        var data;
        if (event == "verificaLogin") {
            dao.login.logarUsu(usuario, senha)
                .then(([result]) => {
                //console.log(result);
                var texto = JSON.parse(JSON.stringify(result));
                if (texto.length > 0) {
                    var a = texto[0]["status"];
                    data = {
                        ev: "Confirmado",
                        valor: a,
                        situacao: true
                    };
                    console.log(`${data.ev} - ${data.valor} usuário `);
                }
                else {
                    a = 0;
                    data = {
                        ev: "Negado",
                        valor: a,
                        situacao: false
                    };
                    console.log("Não cadastrado");
                }
                socket.emit("LOGIN", data); // resposta coletada enviando o resultado da pesquisa.  
            }).catch(err => {
                console.log(err);
                data = {
                    ev: "Error",
                    valor: -1,
                    situacao: false
                };
                socket.emit("LOGIN", data); // resposta coletada enviando o resultado da pesquisa. 
            });
            /*database_model3.loadUser(usuario, senha, (err: any, rows: any) => {
                if (rows.length > 0) {
                    console.log("Existe esse Usuário");
                    var a = rows.length;
                    data = {
                        ev: "Confirma",
                        valor: a,
                        situacao: true
                    };
                    console.log("esse foi o resultado=" + data.ev + " " + data.valor);

                } else {
                    a = 0;
                    data = {
                        ev: "Nega",
                        valor: a,
                        situacao: false
                    };
                }
                socket.emit("LOGIN", data); // resposta coletada enviando o resultado da pesquisa.
            });*/
        }
    }
}
class CadastroUsuario {
    Cadastrando(event, usuario, senha, nascimento, socket) {
        var data;
        if (event == "cadastrarUsuario") {
            dao.login.existUsu(usuario)
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
                                situacao: 0
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
const dao = new dao_1.default();
const login = new Login();
const cadastrarUsuario = new CadastroUsuario();
var porta = process.env.PORT || 3000;
var portaa = http.createServer().listen(porta);
const server = new ws_1.WebSocket.Server({ port: portaa }, () => {
    console.log(`O webSocket está conectado pela porta ${portaa}.`);
});
//const database_model3 = new d_m3();
//database_model2.connect();
//database_model3.connect();
server.on("connection", ws => {
    const socket = new socket2_1.default(ws, { open: true });
    console.log("connectado: " + socket.id);
    socket.on("LOGIN", (event, callback) => {
        login.VeirificandoLogin(event.ev, event.usuario, event.senha, socket);
    });
    socket.on("CADASTRO_USUARIO", (event) => {
        cadastrarUsuario.Cadastrando(event.ev, event.usuario, event.senha, event.nascimento, socket);
    });
    socket.on("disconnect", event => {
        console.log("Desconectado");
    });
});
