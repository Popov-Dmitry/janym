import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, message } = await req.json();

    const response = await resend.emails.send({
      from: "noreply@janym.com",
      to: email,
      subject: "Your order",
      html: `<p>${message}</p>`,
    });

    return Response.json({ success: true, data: response });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
