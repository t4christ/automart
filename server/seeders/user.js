import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import pool from '../config/config';
import format from 'pg-format';

// console.log('format', format);


dotenv.config();



const password = process.env.PASSWORD;


const saltRounds = 10;

const newPassword = bcrypt.hashSync(password, saltRounds);

const email = process.env.EMAIL;
const onemail = process.env.EMAIL_ONE;
const twomail = process.env.EMAIL_TWO;
const threeemail = process.env.EMAIL_THREE;
const emailone = process.env.EMAILL;

const variables = [
    [email, 'adminfirst', 'adminlast', newPassword, '12 ,EPIC village Anthony', true],
    [emailone, 'adminsecond', 'adminsecond', newPassword, '22 ,EPIC village Anthony', true],
    [onemail, 'userone', 'lastone', newPassword, '13 ,EPIC village Anthony', false],
    [twomail, 'usertwo', 'lasttwo', newPassword, '14 ,EPIC village Anthony', false],
    [threeemail, 'userthree', 'lastthree', newPassword, '15 ,EPIC village Anthony', false]
];
const sql = format('INSERT INTO users (email, firstname, lastname, password, address, is_admin) VALUES %L returning id', variables);

/**
    * Function representing usersSeeder
    * @returns {object} representing success or failure
*/

export async function seedUsers() {
    try {
        const result = await pool.query(sql)
        console.log(`Users seeded ${result.command}ED`)
    }
    catch (error) {
        console.log(`seedUsers ${error}`);
    }
}