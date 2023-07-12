"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class RouterCommon {
    router;
    controller;
    middleware;
    constructor(TController, UMiddleware) {
        this.router = (0, express_1.Router)();
        this.controller = new TController;
        this.middleware = new UMiddleware;
        this.routes();
    }
    routes() { }
}
exports.default = RouterCommon;
