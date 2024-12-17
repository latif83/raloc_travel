"use server";
import nodemailer from "nodemailer";

export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail or another email service
    auth: {
      user: "latifm8360@gmail.com", // Your email
      pass: "danh ldoi deni hfmc", // Your email password or app password
    },
  });

  const mailOptions = {
    from: '"RALOC Travels" <latifm8360@gmail.com>', // Sender info
    to: data.email,
    subject: `RALOC Travels - Application Confirmation @ ${new Date().toDateString()} - ${new Date().toLocaleTimeString()}`,
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0d4785; padding: 20px; text-align: center; color: white;">
            <h1>RALOC Travels</h1>
            <p>Your trusted travel partner</p>
          </div>
          <div style="padding: 20px;">
            <p>Dear <strong>${data.fullname}</strong>,</p>
            <p>Thank you for applying for the offer:</p>
            <h2 style="color: #0d4785;">${data.listing}</h2>
            <p>
              We have received your application and will review it shortly. Our team will get back to you using the provided contact information. Meanwhile, feel free to reach out to us if you have any questions.
            </p>
            <p style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 5px solid #0d4785;">
              <strong>Contact Information:</strong><br />
              Email: info@raloctravels.com<br />
              Phone: +233 50 390 5535<br />
            </p>
            <p>
              Follow us on social media for the latest updates and offers:
            </p>
            <div style="text-align: center; margin-top: 20px;">
              <a href="https://facebook.com/raloc-travels" style="margin: 0 10px; text-decoration: none;">
                <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" width="40" />
              </a>
              <a href="https://twitter.com/raloc-travels" style="margin: 0 10px; text-decoration: none;">
                <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" width="40" />
              </a>
              <a href="https://instagram.com/raloc-travels" style="margin: 0 10px; text-decoration: none;">
                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" width="40" />
              </a>
              <a href="https://linkedin.com/company/raloc-travels" style="margin: 0 10px; text-decoration: none;">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" width="40" />
              </a>
            </div>
          </div>
          <div style="background-color: #f1f1f1; padding: 20px; text-align: center;">
            <p style="font-size: 12px; color: #666;">
              RALOC Travels © ${new Date().getFullYear()} | All rights reserved.
            </p>
            <p style="font-size: 12px; color: #666;">
              You are receiving this email because you applied for an offer at RALOC Travels.
            </p>
          </div>
        </div>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email: ", error);
    throw new Error("Failed to send email");
  }
};

export const sendSMS = async (data) => {
  try {

      // Base URL and parameters for the Hubtel SMS API
      const baseUrl = `https://smsc.hubtel.com/v1/messages/send`;
      const clientSecret = "mezqdoaq"; // Replace with your actual client secret
      const clientId = "qaeklhjy"; // Replace with your actual client ID
      const from = "Raloc"; // Sender name or ID

       // Create the SMS content based on the email template
    const content = `Dear ${data.fullname},\n\nThank you for applying for the travel offer "${data.listing}". We have received your application and will review it shortly.\n\nIf you have any questions, feel free to contact us at:\nEmail: info@raloctravels.com\nPhone: +233 50 390 5535\n\nYou can also check the details of your offer here: ${data.offerLink}\n\nThank you for choosing Raloc Travels!`;

      // Construct the full URL with query parameters
      const url = `${baseUrl}?clientsecret=${clientSecret}&clientid=${clientId}&from=${from}&to=${data.tel}&content=${encodeURIComponent(content)}`;

      // Send the SMS
      const response = await fetch(url);

      // Check if the response is successful
      if (response.ok) {
          console.log("SMS sent successfully!");
      } else {
          console.error("Failed to send SMS. Response:", await response.text());
      }
  } catch (e) {
      console.error("Error sending SMS:", e);
  }
};

