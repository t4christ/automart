import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


dotenv.config();

/**
     * @function sendMail
     * @email receiver's email
     * @link reset link
     * @returns {*} displays the password and sends a message to the email
*/

export const sendMail = async(req, email, token) => {
    //console.log('req', req);
    const transporter = nodemailer.createTransport({
        service: 'mailgun',
        auth: {
            user: process.env.MY_EMAIL,
            password: process.env.MY_PASSWORD
        },
    });
    const mailOptions = {
        from: 'no-reply@automartcare.mailgun.com',
        to: email,
        subject: 'Password Reset Link',
        html: `Hey, you requested to reset your password https://${req.headers.host}/api/v1/auth/reset/${token}`
    };
    //console.log('req', req.headers.host);
    //console.log('tok', token);
    try {
        const result = await transporter.sendMail(mailOptions);
        if(result) {
            return result;
        }
    } 
    catch(error) {
        console.log('mailerror',error.message);
        return false;
    }
    return null;
}