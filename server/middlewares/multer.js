// import multer from 'multer';
// import Datauri from 'datauri';
// //import { uploader } from '../config/cloudinary';
// import path from 'path';

// const storage = multer.memoryStorage();
// const multerUploads = multer({ storage }).single('image');


// const dUri = new Datauri();


// /**
// * @description This function converts the buffer to data url
// * @param {Object} req containing the field object
// * @returns {String} The data url from the string buffer
// */

/**
 * 
 * we can destructure originalname and buffer from the req.file object 
 */
 // const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

//  const imageUpload = async(req) => {
//      try {
//         const file = await dataUri(req).content;
//         const result = await uploader.upload(file);
//         console.log('HELLO', result);
//      } catch(error) {
//          throw error;
//      }
     
//  }
// export { multerUploads, dataUri };


// import multer from 'multer';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//       cb(null, 'uploads');
//     }
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// export const upload = multer({
//   storage,
// });

// import multer from 'multer';
// export const upload  = multer({ dest: 'uploads/' });
