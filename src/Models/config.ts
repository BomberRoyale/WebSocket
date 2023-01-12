import mysql2 from "mysql2";

export const pool = mysql2.createPool({
    host: 'sql727.main-hosting.eu',
    user: 'u310558138_bomberroyale',
    password: '20300516JJl@',
    database: 'u310558138_bomberroyalepl',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});