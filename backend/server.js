require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
      console.error("Erreur de connexion à la base de données :", err);
    } else {
      console.log("Connecté à la base de données MySQL !");
    }
  });

  // Récupération des FAQ
  app.get("/faq", (req, res) => {
    const query = "SELECT * FROM faq";
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erreur lors de la récupération des FAQ");
      } else {
        res.json(results);
      }
    });
  });


  // Ajout d'une question/réponse dans la FAQ
app.post("/faq", (req, res) => {
  const { question, reponse } = req.body;
  if (!question || !reponse) {
    return res.status(400).json({ error: "Les champs question et réponse sont obligatoires." });
  }

  if (question.length > 255 || reponse.length > 1000) {
    return res.status(400).json({
      error: "La question ou la réponse dépasse la longueur autorisée.",
    });
  }
  const query = "INSERT INTO faq (question, reponse) VALUES (?, ?)";
  db.query(query, [question, reponse], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de l'ajout de la FAQ." });
    } else {
      res.status(201).json({ message: "FAQ ajoutée avec succès." });
    }
  });
});

// Suppression d'une question/réponse dans la FAQ
app.delete("/faq/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM faq WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la suppression de la FAQ");
    } else {
      res.status(200).send("FAQ supprimée avec succès");
    }
  });
});

// Modification d'une question/réponse dans la FAQ
app.put("/faq/:id", (req, res) => {
  const id = req.params.id;
  const { question, reponse } = req.body;
  const query = "UPDATE faq SET question = ?, reponse = ? WHERE id = ?";
  db.query(query, [question, reponse, id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la modification de la FAQ");
    } else {
      res.status(200).send("FAQ modifiée avec succès");
    }
  });
});
///////////////////////////////////////////////////////////////////////////////
  //Récupération des messages
  app.get("/messages", (req, res) => {
    const query = "SELECT * FROM messages";
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erreur lors de la récupération des messages");
      } else {
        res.json(results);
      }
    });
  });

// Route pour stocker un message
app.post("/messages", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Vérification de base
  if (!name || !email || !subject || !message) {
    return res.status(400).send("Tous les champs sont obligatoires.");
  }

  // Vérification des longueurs
  if (name.length > 100 || subject.length > 200 || message.length > 2000) {
    return res.status(400).send("Certains champs sont trop longs.");
  }

  // Validation email 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send("Email invalide.");
  }

  const query = "INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, subject, message], (err, results) => {
    if (err) {
      console.error("Erreur lors de l'insertion du message :", err);
      return res.status(500).send("Erreur lors de l'enregistrement du message.");
    }

    res.status(201).send("Message enregistré avec succès.");
  });
});



//lancement du serveur
app.listen(5000, () => {
    console.log("Serveur démarré (http://localhost:5000/) !");
  });

