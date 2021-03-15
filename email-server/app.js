const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
});

app.post("/sendmail", (request, res) => {
  console.log("request came");
  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'contact@doggesik.com',
      pass: '123QQsuccess'
    }
  });

  const mailOptions = {
    from: 'contact@doggesik.com',
    to: 'andrei.ghervan7@gmail.com',
    subject: `${request.body.name} Contacted You!`,
    text: `
      Name: ${request.body.name}
      E-mail address: ${request.body.email}
      Message: 'hello'
    `
  };

  console.log(mailOptions);
  console.log('transporter', transporter)

  transporter.sendMail(mailOptions, (error, info) => {
    console.log(error, info);
    if (error) {
      return res.json({ error: true });
    }
    res.json({ done: true });
  });
});