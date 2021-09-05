const nodemailer = require("nodemailer");

exports.Mail = async (userData) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        port: 587,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
      });
      const text = "Name: " + userData.name + "\nCity: " + userData.city + "\nPhone: " + userData.phone + "\nFeedback: " + userData.feedback;
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: userData.email,
        subject: userData.subject,
        text: text
      });
      const result = "Mail sent";
      return result;
    } catch (error) {
      // console.log(error, "email not sent");
      throw error;
    }
  };