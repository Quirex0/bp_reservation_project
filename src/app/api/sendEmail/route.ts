import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await handlePost(req, res);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, subject, message } = req.body;

  try {
    // Vytvoření transporteru
    let transporter = nodemailer.createTransport({
      // Zde doplňte údaje o svém emailovém účtu
      service: 'Gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Odeslání emailu
    let info = await transporter.sendMail({
      from: email, // Adresa odesílatele
      to: process.env.SMTP_EMAIL, // Adresa příjemce (tady můžete použít i pevnou adresu, nebo můžete použít proměnnou SMTP_EMAIL)
      subject: subject, // Předmět emailu
      text: `Jméno: ${name}\nEmail: ${email}\n\n${message}`, // Text emailu (obsahuje jméno, email a zprávu)
    });

    console.log('Email sent: ', info.response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error occurred while sending email: ', error);
    res.status(500).json({ success: false, error: 'Error occurred while sending email.' });
  }
}
