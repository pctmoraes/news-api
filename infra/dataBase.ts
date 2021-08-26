import * as mongoose from 'mongoose';

class Database {
    private DB_URL = 'mongodb://link-db:3050/db_portal';

    createConnection() {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect(this.DB_URL);
    }
}

export default Database;