import pool from '../config/config';

const flagsTable = `DROP TABLE IF EXISTS flags CASCADE;
    CREATE TABLE flags (
        id SERIAL PRIMARY KEY NOT NULL,
        userid INTEGER NOT NULL,
        carid INTEGER NOT NULL,
        reason CHARACTER VARYING(255) NOT NULL,
        description TEXT NOT NULL,
        createdOn TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        FOREIGN KEY (userid) references users (id) ON DELETE CASCADE,
        FOREIGN KEY (carid) references cars (id) ON DELETE CASCADE
    )`

    /**
         * Function representing usertableHandler
         * @returns {object} representing success or failure
         */

        export default async function createFlagsTable() {
            try {
                const create = await pool.query(flagsTable);
                console.log(`flagsTable: ${create[0].command}PED and ${create[1].command}D`);
            }
            catch(error) {
               console.log(`flagsTable ${error}`);
            }
        }