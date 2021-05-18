const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'viscaynovonrie@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    });
};

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'viscaynovonrie@gmail.com',
        subject: 'Thanks for being with us!',
        text: `We're sad to see you leave, ${name}. Let me know how you got along with the app :)`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail,
};
