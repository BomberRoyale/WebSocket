import { WebSocket } from "ws";
import Socket2 from "./core/socket2";
import Chamadas from "./Chamadas/chamadas";

//import d_m3 from "./Models/database_model3";
//const database_model2 = require("./Models/database_model2");

const http = require('http');

// Classe onde estaram as funções determinadas esperando serem chamadas pelo servidor.
const chamadas = new Chamadas();

// comandos para conexão do servidor.
var porta = process.env.PORT || 3000;
var portaa = http.createServer().listen(porta);
const server = new WebSocket.Server({ port: portaa }, () => {
    console.log(`O webSocket está conectado pela porta ${portaa}.`);
});

/*const database_model3 = new d_m3();
database_model2.connect();
database_model3.connect();*/

// Comandos para serem ouvidos pelo cliente.
server.on("connection", ws => {
    const socket = new Socket2(ws, { open: true });

    console.log("connectado: " + socket.id);

    //login e cadastro.
    socket.on("LOGIN", (event, callback) => {
        chamadas.login.VeirificandoLogin(event.ev, event.usuario, event.senha, socket);
    })

    socket.on("CADASTRO_USUARIO", (event) => {
        chamadas.cadastroUsu.Cadastrando(event.ev, event.usuario, event.senha, event.nascimento, socket);
    });

    //inicando player criando linhas nas tabelas e buscando dados
    socket.on("VERIFICA_TABELA_BD", (event) => {
        if (event.ev == "xp_usu") {
            chamadas.verifTabBDExiEBuscaDados.TabelaXpUsu(event.usuario, socket);
        }
        if (event.ev == "energiaM_usu") {
            chamadas.verifTabBDExiEBuscaDados.TabelaEnergiaMUsu(event.usuario, socket);
        }
        if (event.ev == "moedas_usu") {
            chamadas.verifTabBDExiEBuscaDados.TabelaMoedasUsu(event.usuario, socket);
        }
        if (event.ev == "dadosDeJogo_usu") {
            chamadas.verifTabBDExiEBuscaDados.TabelaDadosDeJogoUsu(event.usuario, socket);
        }
        if (event.ev == "missoesDiaria_tab") {
            chamadas.buscaDadosTabelas.MissoesDiariasTab(event, socket);
        }
        if (event.ev == "updateMissoesDiariaUsu") {
            chamadas.atualizaTab.AtuaMissoesDiariasUsu(event, socket);
        }

        //missoesDiaria_usu
        if (event.ev == "missoesDiaria_usu") {
            chamadas.verifTabBDExiEBuscaDados.TabelaMissoesDiariaUsu(event.usuario, socket);
        } else if (event.ev == "data_base") {
            chamadas.verifTabBDExiEBuscaDados.DataBaseMDiarias(event, socket);
        }

    });

    //Atualizando Tabelas
    socket.on("ATUALIZA_TABELAS", (event) => {
        if (event.ev == "energiaM_usu") {
            chamadas.atualizaTab.AtuaGenericoUsu(event, socket);
        }
        if (event.ev == "missoesDiaria_usu") {
            chamadas.atualizaTab.AtuaGenericoUsu(event, socket);
        }
        if (event.ev == "moedas_usu") {
            chamadas.atualizaTab.AtuaGenericoUsu(event, socket);
        }
        if(event.ev == "SalvaXpOnlineFimJogo"){
            chamadas.atualizaTab.AtuaGenericoUsu(event, socket);
        }
        if(event.ev == "AtualizaNivelOnline"){
            chamadas.atualizaTab.AtuaUpNivel(event, socket);
        }
    });

    socket.on("disconnect", event => {
        console.log("Desconectado");
    });

});

