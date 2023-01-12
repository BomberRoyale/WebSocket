"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.pool = mysql2_1.default.createPool({
    host: 'sql727.main-hosting.eu',
    user: 'u310558138_bomberroyale',
    password: '20300516JJl@',
    database: 'u310558138_bomberroyalepl',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
