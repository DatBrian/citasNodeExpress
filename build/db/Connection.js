"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const ConnectDataSource_1 = require("../config/ConnectDataSource");
class Connection {
    get connect() {
        return ConnectDataSource_1.dataSource.getConnection();
    }
}
exports.Connection = Connection;
