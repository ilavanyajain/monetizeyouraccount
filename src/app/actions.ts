"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitApplication(prevState: any, formData: FormData) {
  const handle = formData.get("handle") as string;
  const email = formData.get("email") as string;

  // Basic server-side validation
  if (!handle || handle.trim().length < 2) {
    return {
      status: "error",
      message: "Please enter a valid handle",
    };
  }

  if (!email || !email.includes("@")) {
    return {
      status: "error",
      message: "Please enter a valid email address",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Monetize App <onboarding@resend.dev>", // This works for testing. Once you verify a domain, change this.
      to: ["husain@identity-labs.com"],
      subject: `New Application: ${handle}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">New Creator Application</h2>
          <div style="background: #f4f4f5; padding: 20px; border-radius: 12px; margin-top: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Handle:</strong> <a href="https://twitter.com/${handle.replace('@', '')}">${handle}</a></p>
            <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">Sent from your landing page.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return {
        status: "error",
        message: "Failed to send application. Please try again later.",
      };
    }

    return {
      status: "success",
      message: "Application received!",
    };
  } catch (error) {
    console.error("Submission Error:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
