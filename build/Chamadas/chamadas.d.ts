import Socket2 from "./../core/socket2";
export default class Chamadas {
    login: {
        VeirificandoLogin(event: string, usuario: string, senha: string, socket: Socket2): void;
    };
    cadastroUsu: {
        Cadastrando(event: string, usuario: string, senha: string, nascimento: string, socket: Socket2): void;
    };
    verifTabBDExiEBuscaDados: {
        VerificaTabelaBD(event: string, usuario: string, socket: Socket2): void;
        TabelaXpUsu(usuario: string, socket: Socket2): void;
        TabelaEnergiaMUsu(usuario: string, socket: Socket2): void;
        TabelaMoedasUsu(usuario: string, socket: Socket2): void;
    };
}
