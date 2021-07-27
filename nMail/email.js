const nodemailer = require("nodemailer");

async function main(){
    try {
        let transporter =await nodemailer.createTransport({
            service:'gmail',
            auth:{
                user: 'noreplay.OPSPv1@gmail.com',
                pass: 'Matrix219'
            }
        });
        
        let mailOptions = {
            from:'noreplay.OPSPv1@gmail.com',
            to:'samr16707@gmail.com',
            subject:'Testing and Testing',
            text:'IT Works'
        };
        
        await transporter.sendMail(mailOptions,function(err,data){
            if(err){ console.log("Error Occours : "+err.message); }
            else{ console.log("email Sent Successfully!"); }
        });
    } catch (error) {
        console.log("ERROR : "+error.message);
    }
};

main();