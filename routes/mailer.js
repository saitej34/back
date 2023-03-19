const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'marcellus.moore50@ethereal.email',
        pass: 'CJZwKaukjHcgG8TeCa'
    }
});

module.exports = transportmail;