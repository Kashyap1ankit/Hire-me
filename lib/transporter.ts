import nodemailer from "nodemailer";

interface contactType {
  from: string;
  subject: string;
  text: string;
  company: string;
}

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAIL_USER,
    pass: process.env.NODEMAIL_PASSWORD,
  },
});

export default async function SendEmail(dataComing: contactType) {
  try {
    const response = await transporter.sendMail({
      from: dataComing.from,
      to: "kashyap25ankit@gmail.com",
      subject: dataComing.subject,
      html: `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border: 1px solid #dddddd;
                border-radius: 5px;
            }
            .header {
                text-align: center;
                padding: 10px 0;
                background-color: #35e81a;
                color: #ffffff;
                border-radius: 5px 5px 0 0;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
                color:white;
                font-weight:bold
            }
            .content {
                padding: 20px;
                line-height: 1.6;
            }
            .content h2 {
                font-size: 20px;
                color: #333333;
            }
            .content p {
                font-size: 16px;
                color: #666666;
            }
            .footer {
                text-align: center;
                padding: 10px 0;
                background-color: #f4f4f4;
                color: #888888;
                border-radius: 0 0 5px 5px;
            }
            .footer p {
                margin: 0;
                font-size: 12px;
            }
            @media (max-width: 600px) {
                .email-container {
                    padding: 10px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <!-- Header -->
            <div class="header">
                <h1>${dataComing.company}</h1>
            </div>
    
            <!-- Content -->
            <div class="content">
              <p>Hello from ${dataComing.from} </p>
               <p>${dataComing.text}</p>
            </div>
    
            <!-- Footer -->
            <div class="footer">
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                <p><a href="#">Unsubscribe</a> | <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    </body>
    </html>`,
    });

    if (response.rejected.length > 0)
      throw new Error("Error while sending mail");

    return {
      status: 200,
      message: "Successfully sent",
    };
  } catch (error: any) {
    return {
      status: 500,
      message: error.message,
    };
  }
}
