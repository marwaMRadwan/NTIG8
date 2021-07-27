// require('dotenv').config();
const nodemailer = require("nodemailer");

    try {
        // let transporter =await nodemailer.createTransport({
        //     host:'smtp.gmail.com',
        //     port:'465',
        //     auth:{
        //         user:process.env.EMAIL,
        //         pass:process.env.PASSWORD
        //     }

        // });

        var smtpConfig = {
            service: 'gmail',
           
            auth: {
                user: 'noreplay.OPSPv1@gmail.com',
                pass: 'Matrix219'
            }
        };
        var transporter = nodemailer.createTransport(smtpConfig);

        let mailOptions = {
            from:"noreplay.OPSPv1@gmail.com",
            to:'samr16707@gmail.com',
            subject:'Testing and Testing',
            text:'IT Works'
        };
        
        transporter.sendMail({
            from:"noreplay.OPSPv1@gmail.com",
            to:'samr16707@gmail.com',
            subject:'Testing and Testing',
            text:'IT Works'
        });
    } catch (error) {
        console.log("ERROR : "+error.message);
    }
