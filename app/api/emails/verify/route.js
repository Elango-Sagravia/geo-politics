import { query } from "@/lib/db";
import nodemailer from "nodemailer";
import { emailContent } from "./content.js"; // Import the email content from content.js

// Create a transporter
const transporter = nodemailer.createTransport({
  host: "mail.geopolitics.email",
  port: 465,
  secure: true, // Use TLS
  auth: {
    user: "daily@geopolitics.email", // Your email address
    pass: "Sagravia123$$", // Your email password
  },
});

// Function to send an email
async function sendEmail(email) {
  let mailOptions = {
    from: '"Geopolitics World" <daily@geopolitics.email>',
    to: email,
    bcc: "elango@sagravia.com", // Recipient email from the API path
    subject: "Verify us, or we go to spam 🥺",
    text: "",
    html: emailContent.replace("test@test.com", email), // Use the HTML content from content.js
    headers: {
      "List-Unsubscribe": `<https://geopolitics.world/unsubscribe?email=${email}>`,
    },
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s to %s", info.messageId, email);
  } catch (error) {
    console.error("Error sending to %s: %s", email, error.message);
  }
}

// API handler function for GET request
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return new Response("Email parameter is required", { status: 400 });
  }

  await sendEmail(email);

  return new Response("Email sent successfully", { status: 200 });
}
