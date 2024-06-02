const express = require('express');
const nodemailer = require('nodemailer')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



app.get('/', (req, res) => {
  res.send("Welcome to the api")
})


app.post('/api/portfolioEmail', async (req, res) => {
    const data = req.body

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'goune.ledreo@gmail.com', // Adresse e-mail Gmail
            pass: 'ytij ijwl esem odwy ' // Mot de passe Gmail
        }
    });
    
    // Options du mail
    const mailOptions = {
        from: data.email,
        to: 'goune.ledreo@gmail.com',
        subject: "Nouveau message venant du portfolio",
        text: `Monsieur/Madame ${data.firstName} ${data.lastName} travaillant chez ${data.company} nous a contacté.\nSon adresse mail est : ${data.email} et son numéro de téléphone : ${data.phoneNumber}\nVoici son message :\n${data.message}`,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
        } else {
            res.status(200).json({ message: "Correctly sent" });
        }
    })
})



// CONNEXION AU SERVEUR
const PORT = process.env.PORT || 3001; // Utilise le port dynamique attribué par le fournisseur d'hébergement ou le port 3000 par défaut en local

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur  http://localhost:${PORT}`);
});
