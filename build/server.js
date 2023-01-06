"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const socket2_1 = __importDefault(require("./core/socket2"));
const database_model2 = require("./Models/database_model2");
const http = require('http');
class Login {
    VeirificandoLogin(event, usuario, senha, socket) {
        var data;
        if (event == "verificaLogin") {
            database_model2.loadUser(usuario, senha, (err, rows) => {
                if (rows.length > 0) {
                    console.log("Existe esse Usuário");
                    var a = rows.length;
                    data = {
                        ev: "Confirma",
                        valor: a,
                        situacao: true
                    };
                    console.log("esse foi o resultado=" + data.ev + " " + data.valor);
                    socket.emit("LOGIN", data);
                }
                else {
                    a = 0;
                    data = {
                        ev: "Nega",
                        valor: a,
                        situacao: false
                    };
                    socket.emit("LOGIN", data);
                }
            });
        }
    }
}
const login = new Login();
var porta = process.env.PORT || 3000;
var portaa = http.createServer().listen(porta);
const server = new ws_1.WebSocket.Server({ port: portaa }, () => {
    console.log(`O webSocket está conectado pela porta ${portaa}.`);
});
database_model2.connect();
server.on("connection", ws => {
    const socket = new socket2_1.default(ws, { open: true });
    console.log("connectado: " + socket.id);
    socket.on("LOGIN", (event, callback) => {
        var result = login.VeirificandoLogin(event.ev, event.usuario, event.senha, socket);
    });
    socket.on("disconnect", event => {
        console.log("Desconectado");
    });
});
