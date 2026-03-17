const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Transporteur sécurisé
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Page d'accueil
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "p.html"));
});

// Page contact
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

// Envoi du formulaire
app.post("/contact", async (req, res) => {
  const { nom, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // POUR LA SECURITé
      subject: `Message portfolio - ${nom}`,
      text: `
Nom : ${nom}
Email : ${email}

Message :
${message}
      `
    });

    res.send(`
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Message envoyé</title>
  <link rel="stylesheet" href="/style.css">
</head>

<body class="confirmation-body">
  <div class="confirmation-card">
    <div class="confirmation-icon">✅</div>
    <h1>Merci ${nom} !</h1>
    <p>Votre message a bien été envoyé. Je vous répondrai dès que possible.</p>
    <a class="confirmation-btn" href="/">Retour à l'accueil</a>
  </div>
</body>
</html>
`);


  } catch (error) {
    console.error("Erreur :", error);

    res.send(`
      <h1>Erreur</h1>
      <p>Le message n'a pas pu être envoyé.</p>
      <a href="/contact">Réessayer</a>
    `);
  }
});

app.listen(3000, () => console.log("Serveur lancé sur http://localhost:3000"));
