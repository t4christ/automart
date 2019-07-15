// import 'dotenv/config';
// import { config, uploader } from 'cloudinary';


// const cloudinaryConfig = (req, res, next) => {
//     config({
//         cloud_name: process.env.CLOUD_NAME,
//         api_key: process.env.API_KEY,
//         api_secret: process.env.API_SECRET
//     });
//     next();
// }
// export { cloudinaryConfig, uploader };

// import cloudinary from 'cloudinary';
// import dotenv from 'dotenv';

// dotenv.config();
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.API_SECRET
// });

// export const cloudinaryImage = (req, res, next) => {
//     console.log('>>>>', req.file);
//     if(!req.file) return res.send('Holla');
//   cloudinary.v2.uploader.upload(req.file.path, (error, result) => {
//     req.body.imageurl = result.url;
//     return next();
//   });
// };
