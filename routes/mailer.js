const nodemailer = require('nodemailer')


const transportmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user:"saitejayelagandula369@gmail.com",
        pass:"tlwxejqewfebnaxb"
    }
});

module.exports = transportmail;