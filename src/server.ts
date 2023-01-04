//import WebSockett from "ws";
const WebSockett = require('ws');
//import database_model from "./Models/database_model";
//const database_model = require('./Models/database_model');
const database_model = require('./Models/database_model2');

const socketPort = process.env.PORT || 3000;

const server = new WebSockett.Server({port: socketPort}, () => {
  console.log(`Passei aqui dentro, pela porta ${socketPort}.`);
});

database_model.connect();

server.on('connection', ws =>{
  console.log('conectado');

  ws.on("message", bytes => {
  const message = bytes.toString();
  console.log(message.toString());
  
  if(message == "Ola SERVER"){
    var a;
    database_model.loadUser('jeferson', function(err, rows) {
      if(rows.length > 0){
        console.log("Existe esse Usuário");
        a = rows.length;
        ws.send("Ola Cliente: -" + a);
      }
    }); 
  }

  if(message == "teste2"){
    var a;
    database_model.loadUser('jefersonpkl', function(err, rows) {
      if(rows.length > 0){
        console.log("Existe esse Usuário");
        a = rows.length;
        ws.send("Nova Busca: -" + a);
      }
    });
  }

  
  });

  ws.on('close', ev => {
    console.log('desconectado');
  });
});
