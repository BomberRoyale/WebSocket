const mysql = require('mysql');

var db: any;

const config = {
    host: 'sql727.main-hosting.eu',
    port: "3306",
    user: 'u310558138_bomberroyale',
    password: '20300516JJl@',
    connectionLimit: 5,
    database: "u310558138_bomberroyalepl"
};

export default class Database_model3 {

    connect() {
        //create mysql connection pool
        db = mysql.createPool(config /*|| process.env.DATABASE_URL*/);

        db.on('connection', function (connection: any) {
            console.log('DB Connection established');

            connection.on('error', function (err: any) {
                console.error(new Date(), 'MySQL error', err.code);
            });
            connection.on('close', function (err: any) {
                console.error(new Date(), 'MySQL close', err);
            });

            return connection;
        });
    };

    loadUser(user: string, senha: string, callback?: any) {
        db.query('SELECT * FROM login_usu WHERE usuario = ? AND senha = ?', [user, senha], function (err: any, rows: any) {

            if (err) { console.error(err); }

            callback(err, rows);
        });

    };

    cadastrarUsuario(user: string, senha: string, nascimento: string, callback?: any) {

        db.query('SELECT * FROM login_usu WHERE usuario = ?', [user], function (err: any, rows: any) {

            if (err) { console.error(err); }

            if (rows.length > 0) {
                callback(err, rows);
            } else if(rows.length == 0) {
                var status: String = "1";
                db.query('INSERT INTO login_usu(usuario, senha, nascimento, status) VALUES (?,?,?,?)', [user, senha, nascimento, status], function (err: any, rows: any) {

                    if (err) { console.error(err);}

                    callback(err, rows);
                    
                });
            }
        });


    }
};