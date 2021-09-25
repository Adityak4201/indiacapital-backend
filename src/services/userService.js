const nodemailer = require("nodemailer");

exports.Mail = async (userData) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.com",
      service: "ionos",
      port: 587,
      secureConnection: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });
    const text =
      "Hi,\n\nA new request has been received. Details of the person are:\n\nName: " +
      userData.name +
      "\nCity: " +
      userData.city +
      "\nPhone: " +
      userData.phone +
      "\nEmail: " +
      userData.email +
      "\nMessage: " +
      userData.feedback +
      "\n\nThanks,\nMahalaxmi Financial Services";
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL2,
      subject: userData.subject,
      text: text,
    });
    const result = "Mail sent";
    return result;
  } catch (error) {
    // console.log(error, "email not sent");
    throw error;
  }
};
