const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from:'venkatanagarajas@gmail.com',
        subject: 'Thanks for joing in!',
        text: `Welcome to app, ${name}. Let me know how you get along with the app.`
    })
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'venkatanagarajas@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
/* sgMail.send({
    to: 'venkatanagarajas@gmail.com',
    from: 'venkatanagarajas@gmail.com',
    subject: 'This is My first Email from Gmail ',
    text: 'I love Node.Js'
}) */