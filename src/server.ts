//import WebSocket from "ws";
const WebSocket = require('ws');

const socketPort = 3000;

const server = new WebSocket.Server({port: socketPort}, () => {
  console.log(`Passei aqui dentro, pela porta ${socketPort}.`);
});

server.on('connection', ws =>{
  console.log('conectado');

ws.on("message", bytes => {
  const message = bytes.toString();
  console.log(message.toString());
  if(message == "Ola SERVER"){
    ws.send("Ola Cliente");
  }
});

  ws.on('close', ev => {
    console.log('desconectado');
  });
});
