import { Sequelize } from 'sequelize';
import { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, DB_PORT, DB_HOST, } from '../common/config.js';
const sequelize = new Sequelize(String(POSTGRES_DB), String(POSTGRES_USER), String(POSTGRES_PASSWORD), {
    host: DB_HOST,
    dialect: 'postgres',
    port: +DB_PORT
});
(async () => {
    try {
        await sequelize.authenticate();
        console.log(`Connected to DB on ${DB_PORT} port`);
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
})();
export { sequelize };
