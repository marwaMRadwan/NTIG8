const nodemailer = require("nodemailer");
try {
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
        to:'marwaradwan6@gmail.com',
        subject:'Testing and Testing',
        text:'IT Works'
    };
    transporter.sendMail(mailOptions);
} catch (error) {
    console.log("ERROR : "+error.message);
}

  