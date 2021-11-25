import util from 'util';
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();


export const makeDB = (config) => {
    const conncection = mysql.createPool(config);
    return {
        query(sql, args) {
            return util.promisify(conncection.query)
                .call(conncection, sql, args);
        },
        close() {
            return util.promisify(conncection.end).call(conncection);
        }
    };
}

const db = makeDB({
    host: as,
    port: as,
    user: as,
    password: as,
    database: as,
});

export default db;