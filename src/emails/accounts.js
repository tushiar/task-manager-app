
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: "testapi@yopmail.com",
    subject: "Welcome to Task App!!",
    text: "Tried from Node JS",
    html: `Welcome to the application <strong>Mr. ${name}</strong>`,
  };
  sgMail.send(msg);
};

const sendCancelEmail = (email, name) => {
  const msg = {
    to: email,
    from: "testapi@yopmail.com",
    subject: "Account removed from Task App!!",
    text: "Tried from Node JS",
    html: `Sorry to see you go <strong>Mr. ${name}</strong>`,
  };
  sgMail.send(msg);
};

module.exports = { sendWelcomeEmail, sendCancelEmail };
