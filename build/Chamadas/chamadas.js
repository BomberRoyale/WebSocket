"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dao_1 = __importDefault(require("./../Models/dao"));
const dao = new dao_1.default();
class Chamadas {
    constructor() {
        this.login = {
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
                            ev: "erro",
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
        };
        this.cadastroUsu = {
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
                                    ev: "erro",
                                    situacao: -1
                                };
                                socket.emit("CADASTRO_USUARIO", data); // resposta coletada enviando o resultado da pesquisa.
                            });
                        }
                    }).catch(err => {
                        console.log("Erro ao checar se existe um usuário com mesmo nome");
                        data = {
                            ev: "erro",
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
        };
        this.verifTabBDExiEBuscaDados = {
            VerificaTabelaBD(event, usuario, socket) {
                var data;
                if (event == "xp_usu") {
                    console.log("passei.");
                    var quantabelas = 0;
                    //         //tabela dadosDeJogo_usu
                    //         dao.identificadordeUsu.existUsu(usuario, "dadosDeJogo_usu")
                    //         .then(([result]) => {
                    //             var texto = JSON.parse(JSON.stringify(result));
                    //             console.log(texto);
                    //             quantabelas++;
                    //             if(texto == ""){
                    //                 console.log("cadastra dadosDeJogo_usu");
                    //                 dao.dadosDeJogoUsu.criarLinha(usuario).then(() =>{
                    //                     console.log('fim cadastro em dadosDeJogo_usu. ' + quantabelas);
                    //                     this.TerminadoCriarLinhas(quantabelas, socket);
                    //                 }).catch(err => {
                    //                     console.log("Erro ao criar linha dadosDeJogo_usu " + err)
                    //                     data = {
                    //                         ev: "erro",
                    //                         situacao: -1
                    //                     };
                    //                     socket.emit("VERIFICA_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
                    //                 });
                    //             }else{
                    //                 this.TerminadoCriarLinhas(quantabelas, socket);
                    //             }
                    //         }).catch(err => {
                    //             console.log("Erro ao checar se existe um usuário com mesmo nome dadosDeJogo_usu " + err)
                    //             data = {
                    //                 ev: "erro",
                    //                 situacao: -1
                    //             };
                    //             socket.emit("VERIFICA_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
                    //         });
                    //         //tabela missoesDiaria_usu
                    //         dao.identificadordeUsu.existUsu(usuario, "missoesDiaria_usu")
                    //         .then(([result]) => {
                    //             var texto = JSON.parse(JSON.stringify(result));
                    //             console.log(texto);
                    //             quantabelas++;
                    //             if(texto == ""){
                    //                 console.log("cadastra missoesDiaria_usu");
                    //                 dao.missoesDiariaUsu.criarLinha(usuario).then(() =>{
                    //                     console.log('fim cadastro em missoesDiaria_usu. ' + quantabelas);
                    //                     this.TerminadoCriarLinhas(quantabelas, socket);
                    //                 }).catch(err => {
                    //                     console.log("Erro ao criar linha missoesDiaria_usu " + err)
                    //                     data = {
                    //                         ev: "erro",
                    //                         situacao: -1
                    //                     };
                    //                     socket.emit("VERIFICA_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
                    //                 });
                    //             }else{
                    //                 this.TerminadoCriarLinhas(quantabelas, socket);
                    //             }
                    //         }).catch(err => {
                    //             console.log("Erro ao checar se existe um usuário com mesmo nome missoesDiaria_usu " + err)
                    //             data = {
                    //                 ev: "erro",
                    //                 situacao: -1
                    //             };
                    //             socket.emit("VERIFICA_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
                    //         });
                }
            },
            TabelaXpUsu(usuario, socket) {
                var data;
                console.log("passei.");
                dao.identificadordeUsu.existUsu(usuario, "xp_usu")
                    .then(([result]) => {
                    var texto = JSON.parse(JSON.stringify(result));
                    console.log(texto[0]);
                    if (texto == "") {
                        console.log("cadastra xp_usu");
                        dao.xpUso.criarLinha(usuario).then(() => {
                            console.log('fim cadastro em xp_usu.');
                            data = {
                                ev: "confirmado",
                                usuario: usuario,
                                xp_Total: 0,
                                xp_DoNivel: 0,
                                nivel: 0
                            };
                            socket.emit("XP_USU_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
                        }).catch(err => {
                            console.log("Erro ao criar linha xp_usu " + err);
                            data = {
                                ev: "erro",
                                situacao: -1
                            };
                            socket.emit("VERIFICA_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
                        });
                    }
                    else {
                        texto[0]["ev"] = "confirmado";
                        socket.emit("XP_USU_TABELA_BD", texto[0]); // resposta coletada enviando o resultado da pesquisa.
                    }
                }).catch(err => {
                    console.log("Erro ao checar se existe um usuário com mesmo nome xp_usu " + err);
                    data = {
                        ev: "erro",
                        situacao: -1
                    };
                    socket.emit("VERIFICA_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
                });
            },
            TabelaEnergiaMUsu(usuario, socket) {
                var data;
                dao.identificadordeUsu.existUsu(usuario, "energiaM_usu")
                    .then(([result]) => {
                    var texto = JSON.parse(JSON.stringify(result));
                    console.log(texto);
                    if (texto == "") {
                        console.log("cadastra energiaM_usu");
                        dao.energiaMUsu.criarLinha(usuario).then(() => {
                            console.log('fim cadastro em energiaM_usu.');
                            data = {
                                ev: "confirmado",
                                usuario: usuario,
                                quant_EM: 0,
                                horario: 0,
                                data_base: 0
                            };
                            socket.emit("XP_USU_TABELA_BD", data);
                        }).catch(err => {
                            console.log("Erro ao criar linha energiaM_usu " + err);
                            data = {
                                ev: "erro",
                                situacao: -1
                            };
                            socket.emit("VERIFICA_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
                        });
                    }
                    else {
                        texto[0]["ev"] = "confirmado";
                        socket.emit("ENERGIAM_USU_TABELA_BD", texto[0]);
                    }
                }).catch(err => {
                    console.log("Erro ao checar se existe um usuário com mesmo nome energiaM_usu " + err);
                    data = {
                        ev: "erro",
                        situacao: -1
                    };
                    socket.emit("VERIFICA_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
                });
            },
            TabelaMoedasUsu(usuario, socket) {
                var data;
                dao.identificadordeUsu.existUsu(usuario, "moedas_usu")
                    .then(([result]) => {
                    var texto = JSON.parse(JSON.stringify(result));
                    console.log(texto);
                    if (texto == "") {
                        console.log("cadastra moedas_usu");
                        dao.moedasUsu.criarLinha(usuario).then(() => {
                            console.log('fim cadastro em moedas_usu.');
                            // data = {
                            //     ev: "confirmado",
                            //     usuario: usuario,
                            //     quant_EM: 0,
                            //     horario: 0,
                            //     data_base: 0
                            // };
                            // socket.emit("MOEDAS_USU_TABELA_BD", data);
                        }).catch(err => {
                            console.log("Erro ao criar linha moedas_usu " + err);
                            data = {
                                ev: "erro",
                                situacao: -1
                            };
                            socket.emit("VERIFICA_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
                        });
                    }
                    else {
                        texto[0]["ev"] = "confirmado";
                        //socket.emit("MOEDAS_USU_TABELA_BD", texto[0]);
                    }
                }).catch(err => {
                    console.log("Erro ao checar se existe um usuário com mesmo nome moedas_usu " + err);
                    data = {
                        ev: "erro",
                        situacao: -1
                    };
                    socket.emit("VERIFICA_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
                });
            }
            // TerminadoCriarLinhas(quant: number, socket: Socket2) {
            //     if (quant == 6) {
            //         var data = {
            //             ev: "confirmado",
            //             situacao: 1
            //         };
            //         socket.emit("VERIFICA_TABELA_BD", data); // resposta coletada enviando o resultado da pesquisa.
            //     }
            // }
        };
    }
}
exports.default = Chamadas;
