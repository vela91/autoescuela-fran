import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuración del transporter de Nodemailer con Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'autoescolafransalou@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'mljc upyh wqzg bkun'
  }
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Configurar el contenido del email
    const mailOptions = {
      from: `"${name}" <autoescolafransalou@gmail.com>`,
      to: 'autoescolafransalou@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de ${subject} - Autoescola Fran`,
      text: `
        Nuevo mensaje desde el formulario de contacto:

        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || 'No especificado'}
        Asunto: ${subject}

        Mensaje:
        ${message}

        ---
        Este mensaje fue enviado desde el formulario de contacto de autoescolafran.com
      `,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <br>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <br>
        <hr>
        <p style="font-size: 12px; color: #666;">
          Este mensaje fue enviado desde el formulario de contacto de autoescolafran.com
        </p>
      `
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}