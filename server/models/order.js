import pool from '../config/config';

const ordersTable = `DROP TABLE IF EXISTS orders CASCADE;
    CREATE TABLE orders (
        id SERIAL PRIMARY KEY NOT NULL,
        buyerid INTEGER NOT NULL,
        carid INTEGER NOT NULL,
        amount CHARACTER VARYING(50) NOT NULL,
        status CHARACTER VARYING(30) NOT NULL DEFAULT ('pending'),
        createdOn TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        FOREIGN KEY (buyerid) references users (id) ON DELETE CASCADE,
        FOREIGN KEY (carid) references cars (id) ON DELETE CASCADE
    )`

    /**
         * Function representing usertableHandler
         * @returns {object} representing success or failure
         */

        export default async function createOrderTable() {
            try {
                const create = await pool.query(ordersTable);
                console.log(`ordersTable: ${create[0].command}PED and ${create[1].command}D`);
            }
            catch(error) {
               console.log(`ordersTable ${error}`);
            }
        }