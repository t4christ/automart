import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import { defaultRouter, userRouter, carRouter, orderRouter, flagRouter } from './routes';

// import { multerUploads } from './server/middlewares/multer'
// import { cloudinaryConfig } from './server/config/cloudinary';


dotenv.config();

const app = express();
app.use(cors());
app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use('*', cloudinaryConfig);


// app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/api/v1', userRouter);
app.use('/api/v1', carRouter);
app.use('/api/v1', orderRouter);
app.use('/api/v1', flagRouter);
app.use('/', defaultRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is live on PORT ${port}`);
});

export default app;