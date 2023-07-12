"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const promise_1 = require("mysql2/promise");
const EnvConfig_1 = __importDefault(require("./EnvConfig"));
class DataSource {
    pool;
    constructor() {
        this.pool = (0, promise_1.createPool)({
            host: EnvConfig_1.default.DB_HOST,
            user: EnvConfig_1.default.DB_USER,
            password: EnvConfig_1.default.DB_PASSWORD,
            database: EnvConfig_1.default.DB_NAME
        });
    }
    async getConnection() {
        try {
            const connection = await this.pool.getConnection();
            return connection;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.dataSource = new DataSource();
