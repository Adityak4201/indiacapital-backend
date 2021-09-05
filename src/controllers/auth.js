const { Mail } = require("../services/userService");

exports.sendMail = async (req, res) => {
    try {
        const { subject, name, email, phone, city, feedback } = req.body;
        const mail = await Mail({ subject, name, email, phone, city, feedback });
        res.status(200).json({result: mail});
    } catch (error) {
        res.status(402).json({ errors: error });
    }
};