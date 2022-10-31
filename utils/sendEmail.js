const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST || "smtp.gmail.com",
    port: process.env.SMPT_PORT || "465",
    service: process.env.SMPT_SERVICE || "gmail",
    auth: {
      user: process.env.SMPT_MAIL || "shubhpatel4680@gmail.com",
      // pass: process.env.SMPT_PASSWORD || "Shubh@1220",
      pass: process.env.SMPT_APP_PASSWORD || "vsqt lbyc hoiq jxef"
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL || "shubhpatel4680@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
