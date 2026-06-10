import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const data = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        await transporter.verify();
        console.log("SMTP Connected");
        
        await transporter.sendMail({
            from: `"Website Contact" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL,
            replyTo: data.email,
            subject: "新しいお問い合わせが届きました",
            html: `
                <h2>お問い合わせ内容</h2>
                <p><b>お問い合わせ種別:</b> ${data.type}</p>
                <p><b>お名前:</b> ${data.name}</p>
                <p><b>メールアドレス:</b> ${data.email}</p>
                <p><b>お問い合わせ内容:</b><br/>${data.message}</p>
            `,
        });

        return NextResponse.json({
            success: true,
        });

    } catch (error) {
        console.error("Email Error:", error);

        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
}