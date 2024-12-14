const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'wp_user',
    password: 'Jumeaux.2017',
    database: 'mspr_remi_wp'
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
  const query = "INSERT INTO faq (question, reponse) VALUES (?, ?)";
  db.query(query, [question, reponse], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de l'ajout de la FAQ");
    } else {
      res.status(201).send("FAQ ajoutée avec succès");
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


//lancement du serveur
app.listen(3000, () => {
    console.log("Serveur démarré (http://localhost:3000/) !");
  });

