import util from 'util';
import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const makeDB = (config) => {
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

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default db;
