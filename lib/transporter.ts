import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false,
  auth: {
    user: process.env.NODEMAIL_USER_NAME,
    pass: process.env.NODEMAIL_PASS_WORD,
  },
});

interface contactType {
  from: string;
  subject: string;
  text: string;
}

export default async function SendEmail(data: contactType) {
  const mailInfo = {
    from: data.from,
    to: "kashyap25ankit@gmail.com",
    subject: data.subject,
    text: data.text,
    html: `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${data.subject}</title>
</head>
<body>
  <main>
      <h1>${data.subject}</h1>  

      <br/><br/><br/>
      
      <h3>Hello from ${data.from} </h3>

      <p>${data.text}</p>
  </main>
<script src="index.js"></script>
</body>
</html>
`,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailInfo, (err, info) => {
      if (err) {
        console.log(err);
        return 0;
      } else {
        resolve(info);
        return 200;
      }
    });
  });
}
