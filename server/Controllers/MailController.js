const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "haribabalibraryofficial45.np@gmail.com",
    pass: "haribabalibrary",
  },
});

exports.sendMail = (data) => {
  try {
    const { to, subject, html } = data;
    console.log(data);
    let mailOption = {
      from: "haribabalibraryofficial45.np@gmail.com",
      to: to,
      subject: subject,
      html: html,
    };

    transporter.sendMail(mailOption, function (err, data) {
      if (err) {
        console.log(err, "Error");
      } else {
        console.log("sent");
      }
    });
  } catch (error) {
    console.log("error while sending mail", error);
  }
};
