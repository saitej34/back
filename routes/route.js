const express = require('express');
const router = express.Router();
const model = require('../databases/model')
const sendmail = require('./mailer')


router.get('/hello',(req,res)=>{
      res.json({"message":"Hello"})
})







router.post('/postquery',async(req,res)=>{
    const {name,email,organization,phone,siteloc} = req.body;
    console.log(req.body)
    const options = {
      from:"COWE Customer Services <saiteja6734.yelagandula@gmail.com>",
      to:email,
      subject:"Query from "+name,
      text:"Name : " + name + "\n" + "Email : "+email + "\n" + "Organization : "+organization + "\n" + "Phone Number : "  + phone + "\n" +  "Site Location : "+siteloc,
      
    }
    const data = new model({
          name:name,
          email:email,
          organization:organization,
          phone:phone,
          siteloc:siteloc
        })
    await data.save().then((r)=>{
           sendmail.sendMail(options,(err,res)=>{
           if(err)
            {
                console.log(err);
            }
            console.log(res);
            })
            return res.send({"message":"Query Submitted"})
        })
        .catch((err)=>{
          console.log(err)
        })
    
})

module.exports = router;