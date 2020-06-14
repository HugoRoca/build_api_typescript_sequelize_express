import { Sequelize } from "sequelize";

export const database = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: '1234',
    port: 5432,
    database: 'payment_cash',
    host: 'localhost'
});
