import pool from '../config/config';

const carsTable = `DROP TABLE IF EXISTS cars CASCADE;
    CREATE TABLE cars (
        id SERIAL PRIMARY KEY NOT NULL,
        owner INTEGER NOT NULL,
        state CHARACTER VARYING(30) NOT NULL,
        status CHARACTER VARYING(30) NOT NULL DEFAULT ('unsold'),
        price CHARACTER VARYING(50) NOT NULL,
        manufacturer CHARACTER VARYING(100) NOT NULL,
        model CHARACTER VARYING(100) NOT NULL,
        body_type CHARACTER VARYING(100) NOT NULL,
        img_url TEXT NOT NULL,
        registeredOn TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        FOREIGN KEY (owner) references users (id) ON DELETE CASCADE
    )`

    /**
         * Function representing usertableHandler
         * @returns {object} representing success or failure
         */

        export default async function createCarTable() {
            try {
                const create = await pool.query(carsTable);
                console.log(`carsTable: ${create[0].command}PED and ${create[1].command}D`);
            }
            catch(error) {
               console.log(`carsTable ${error}`);
            }
        }