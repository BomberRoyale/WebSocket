import { WebSocket } from "ws";
import Socket2 from "./core/socket2";

const database_model2 = require("./Models/database_model2");

class Login {
        
    VeirificandoLogin(event: string, usuario: string, senha: string, socket: Socket2) {
        var data:any;

        if (event == "verificaLogin") {

            database_model2.loadUser(usuario, senha, (err: any, rows: any) => {
                if (rows.length > 0) {
                    console.log("Existe esse Usuário");
                    var a = rows.length;
                    data = {
                        ev: "Confirma",
                        valor: a,
                        situacao: true
                    };
                    console.log("esse foi o resultado="+ data.ev + " " + data.valor);
                    socket.emit("LOGIN", data);
                    
                } else {
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

const server = new WebSocket.Server({ port: parseInt(porta.toString()) }, () => {
    console.log(`O webSocket está conectado pela porta ${porta}.`);
});

database_model2.connect();

server.on("connection", ws => {
    const socket = new Socket2(ws, { open: true });

    console.log("connectado: " + socket.id);

    socket.on("LOGIN", (event, callback) => {
        var result = login.VeirificandoLogin(event.ev, event.usuario, event.senha, socket);
    })

    socket.on("disconnect", event => {
        console.log("Desconectado");
    });

});

