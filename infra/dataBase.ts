import * as mongoose from 'mongoose';

class Database {
    private URL = 'mongodb://link-db/db_portal';

    createConnection() {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect(this.URL);
    }
}

export default Database;