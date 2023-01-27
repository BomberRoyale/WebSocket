import Socket2 from "./../core/socket2";
export default class Chamadas {
    login: {
        VeirificandoLogin(event: string, usuario: string, senha: string, socket: Socket2): void;
    };
    cadastroUsu: {
        Cadastrando(event: string, usuario: string, senha: string, nascimento: string, socket: Socket2): void;
    };
    verifTabBDExiEBuscaDados: {
        ResErroGener(mensagemLog: string, err: any, evento: string, numeroErro: number, codigo: string, socket: Socket2): void;
        TabelaXpUsu(usuario: string, socket: Socket2): void;
        TabelaEnergiaMUsu(usuario: string, socket: Socket2): void;
        TabelaMoedasUsu(usuario: string, socket: Socket2): void;
        TabelaDadosDeJogoUsu(usuario: string, socket: Socket2): void;
        TabelaMissoesDiariaUsu(usuario: string, socket: Socket2): void;
        DataBaseMDiarias(dados: any, socket: Socket2): void;
    };
    buscaDadosTabelas: {
        MissoesDiariasTab(dados: any, socket: Socket2): void;
    };
    atualizaTab: {
        AtuaGenericoUsu(dados: any, socket: Socket2): void;
        AtuaMissoesDiariasUsu(dados: any, socket: Socket2): void;
    };
}
