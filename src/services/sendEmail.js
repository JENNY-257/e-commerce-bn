import nodemailer from "nodemailer";

export const sendEmail = async(options) =>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
        },
      
      });
      let mailOptions = {
        from:  ` Empire ${process.env.MAIL_USERNAME}`,
        to: options.to,
        subject: options.subject,
        html: `<p>${options.text}</p> <a href="${options.url}">Activate account</a>`
      };
     await transporter.sendMail(mailOptions);
};

 