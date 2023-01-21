"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dao_1 = __importDefault(require("./../Models/dao"));
const dao = new dao_1.default();
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
exports.default = Login;
