import * as express from 'express';
import Database from './infra/dataBase';
import * as bodyParser from 'body-parser';

class StartUp {
    public app: express.Application;
    private _db: Database;
    private bodyParser;

    constructor() {
        this.app = express();
        this._db = new Database();
        this._db.createConnection();
        this.middler();
        this.routes();
    }

    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false}));
    }

    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versão: '0.0.1' })
        })
    }

}

export default new StartUp();