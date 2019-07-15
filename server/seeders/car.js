import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import pool from '../config/config';
import format from 'pg-format';

const ownerOne = Number(process.env.AFFICHE_UNO);
const ownerTwo = Number(process.env.AFFICHE_TROIS);

const variables = [
    [ownerOne, 'new', 'unsold', '20000000', 'toyota', 'Tundra', 'car', 'https://res.cloudinary.com/texplode/image/upload/v1559912544/toyota-tundra.jpg'],
    [ownerTwo, 'new', 'unsold', '30000000', 'toyota', 'Hiace', 'van', 'https://res.cloudinary.com/texplode/image/upload/v1559912583/van.jpg'],
    [ownerOne, 'used', 'unsold', '35000000', 'bmw', 'Runner', 'car', 'https://res.cloudinary.com/texplode/image/upload/v1559912618/car.jpg'],
    [ownerOne, 'used', 'unsold', '40000000', 'toyota', 'Runner', 'car', 'https://res.cloudinary.com/texplode/image/upload/v1559912278/toyota-runner.jpg'],
];

const sql = format('INSERT INTO cars (owner, state, status, price, manufacturer, model, bodytype, img_url) VALUES %L returning id', variables);

/**
    * Function representing carAdSeeder
    * @returns {object} representing success or failure
*/

export async function seedCarAds() {
    try {
        const result = await pool.query(sql)
        console.log(`Cars Seeded ${result.command}ED`)
    }
    catch (error) {
        console.log(`seedCars ${error}`);
    }
}