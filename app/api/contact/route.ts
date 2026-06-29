import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = process.env.SMTP_PORT
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@gudaidia.com'
const EMAIL_FROM = process.env.EMAIL_FROM || `no-reply@gudaidia.com`

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
  console.warn('Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.')
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT ? Number(SMTP_PORT) : 587,
  secure: SMTP_PORT === '465',
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
})

export async function POST(req: Request) {
  try {
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { success: false, error: 'SMTP configuration is missing.' },
        { status: 500 }
      )
    }

    const data = await req.json()
    const name = (data.name || '').trim()
    const email = (data.email || '').trim()
    const subject = (data.subject || 'New contact request from Gudaidia website').trim()
    const message = (data.message || '').trim()

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    const mailOptions = {
      from: EMAIL_FROM,
      to: CONTACT_EMAIL,
      subject,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact mail error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
