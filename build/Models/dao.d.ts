export default class Dao {
    buscaGenerico: {
        existUsu: (user: string, tabela: string) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
    };
    UpdateGenerico: {
        atualizaTabUsu: (data: any) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
        atualizaTabUsuAux: (usuario: any, valor: any, tabela: any, comandos: any) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
    };
    login: {
        logarUsu: (user: string, senha: string) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
        cadastrarUsu: (user: string, senha: string, nascimento: string) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
    };
    xpUso: {
        criarLinha: (user: string) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
    };
    energiaMUsu: {
        criarLinha: (user: string) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
    };
    moedasUsu: {
        criarLinha: (user: string) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
    };
    dadosDeJogoUsu: {
        criarLinha: (user: string) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
    };
    missoesDiariaUsu: {
        criarLinha: (user: string) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
        BuscaDataBase: (user: string) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
        UpdateMissesDiariasUsu: (data: any) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
    };
    missoesDiariaTab: {
        BuscaMissoesDiariaTab: () => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
    };
}
