"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const dataBase_1 = require("./infra/dataBase");
const newsController_1 = require("./controller/newsController");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new dataBase_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versão: '0.0.1' });
        });
        this.app.route('/api/v1/news').get(newsController_1.default.get);
        this.app.route('/api/v1/news/:id').get(newsController_1.default.getById);
        this.app.route('/api/v1/news').post(newsController_1.default.create);
        this.app.route('/api/v1/news/:id').put(newsController_1.default.update);
        this.app.route('/api/v1/news/:id').delete(newsController_1.default.delete);
    }
}
exports.default = new StartUp();
