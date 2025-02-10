require('dotenv').config();

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const axios = require("axios");

// Configuration de Express
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const port = process.env.PORT || 8080;

// Récupération des variables d'environnement Firebase
const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_KEY;

// Vérification si les variables sont bien définies
if (!endpoint || !apiKey) {
    console.error("❌ ERREUR: Les variables d'environnement Azure OpenAI ne sont pas définies.");
}

app.post("/callCopilot", async (req, res) => {
    try {
        console.log("✅ Requête reçue:", req.body);

        const response = await axios.post(
            `${endpoint}/openai/deployments/cleo-gpt-4o/chat/completions?api-version=2024-02-01`,
            {
                messages: [{ role: "user", content: req.body.prompt }]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": apiKey
                }
            }
        );

        console.log("✅ Réponse d'Azure OpenAI:", response.data);
        res.json(response.data);
    } catch (error) {
        console.error("❌ Erreur lors de l'appel à Azure OpenAI:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Erreur lors de l’appel à Azure OpenAI" });
    }
});

// Déploiement de l'API
exports.callCopilot = functions.https.onRequest(app);