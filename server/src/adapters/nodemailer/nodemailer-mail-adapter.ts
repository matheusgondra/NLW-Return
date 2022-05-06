import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
     user: "5b59b8121f5a21",
     pass: "4f9c9826e545db"
   }
 }); 

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
         from: "Equipe Feedget <oi@feedget.com>",
         to: "Matheus Gondra <matheusgondra951@gmail.com>",
         subject: subject,
         html: body
      });
   };
}