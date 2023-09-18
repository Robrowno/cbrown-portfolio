import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.mail.me.com',
            port: 587,
            secure: false, // use SSL
            auth: {
                user: process.env.ICLOUD_EMAIL,
                pass: process.env.ICLOUD_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.ICLOUD_EMAIL,
            subject: `New message from ${name}`,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).send('Email sent successfully');
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).send('Error sending email');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}
