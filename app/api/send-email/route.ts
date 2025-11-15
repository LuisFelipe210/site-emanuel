import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const host = process.env.EMAIL_SERVER_HOST;
const port = Number(process.env.EMAIL_SERVER_PORT);
const user = process.env.EMAIL_SERVER_USER;
const pass = process.env.EMAIL_SERVER_PASS;
const toEmail = process.env.EMAIL_TO;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        if (!name || !email || !phone || !subject || !message) {
            return NextResponse.json({ error: 'Dados incompletos.' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: host,
            port: port,
            secure: true,
            auth: {
                user: user,
                pass: pass,
            },
        });

        const mailOptions = {
            from: `"${name}" <${user}>`,
            to: toEmail,
            replyTo: email,
            subject: `Nova Mensagem do Site: ${subject}`,
            html: `
        <h1>Nova Mensagem do site</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email enviado com sucesso!' });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao enviar o email.' }, { status: 500 });
    }
}