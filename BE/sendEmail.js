const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            service: "hostinger",
            port: 587,
            //   secure: Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        let data = await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
        });
        console.log("email sent successfully", transporter, data);
        return null;

    } catch (error) {
        console.log("email not sent!");
        console.log(error);
        return error;
    }
};
