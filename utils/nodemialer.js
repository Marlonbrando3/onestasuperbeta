import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: "lh.pl",
    auth:{
        user: email,
        pass: pass,
    },
})

export const mailOption = {
    form: email,
    to: email,
}