import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Заполните обязательные поля" },
        { status: 400 }
      );
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      return NextResponse.json(
        { error: "Введите корректный номер телефона" },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const supportEmail = process.env.SUPPORT_EMAIL;

    if (!smtpUser || !smtpPass || !supportEmail) {
      return NextResponse.json(
        { error: "Не настроены переменные окружения в .env.local" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `Dalmosbur <${smtpUser}>`,
      to: supportEmail,
      replyTo: email,
      subject: `Dalmosbur — новая заявка от ${name}`,
      html: `
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email клиента:</strong> ${email}</p>
        <p><strong>Сообщение:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ошибка отправки email:", error);

    return NextResponse.json(
      { error: "Не удалось отправить сообщение" },
      { status: 500 }
    );
  }
}