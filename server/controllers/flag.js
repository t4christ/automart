import db from '../config/config';
import { createFlagQuery, fetchSingleCarAdQuery } from '../config/sql'

export const flagAd = async (req, res) => {
    const { carid, reason, description } = req.body;
    const { id } = req.authData.payload;
    const value = Number(carid);
    
    
    try {
        const { rows, rowCount } = await db.query(fetchSingleCarAdQuery, [value]);
        if(rowCount === 0) {
            return res.status(404).json({
                status: 404,
                error: 'Your search is invalid'
            });
        }
        if(!reason || !description) {
            return res.status(400).json({
                status: 400,
                error: 'Status and description are required'
            });
        }
        const result  = await db.query(createFlagQuery, [id, rows[0].id, reason, description]);
        if (result.rowCount !== 0){
            return res.status(201).json({
                status: 200,
                data: result.rows[0]
            });
        }
    }
    catch(error) {
        return res.status(500).json({
            status: 500,
            error: error.message
        });
    };
}

