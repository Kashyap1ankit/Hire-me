interface contactType {
  from: string;
  subject: string;
  text: string;
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function SendEmail(
  dataComing: contactType
): Promise<number> {
  const response = await new Promise((resolve, reject) => {
    try {
      resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["kashankityap@gmail.com"],
        subject: dataComing.subject,
        html: ` <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         <title>${dataComing.subject}</title>
       </head>
       <body>
         <main>
           <h1>${dataComing.subject}</h1>
           <h3>Hello from ${dataComing.from}</h3>
           <p>${dataComing.text}</p>
         </main>
       </body>
       </html>`,
      });
      resolve("solved");
      return 200;
    } catch (error) {
      reject("not sent");
      return 0;
    }
  });

  if (!response) {
    return 0;
  }

  return 200;
}
