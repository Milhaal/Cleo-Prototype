require('dotenv').config();

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const axios = require("axios");

// Configuration de Express
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const port = process.env.PORT || 5001;

// Récupération des variables d'environnement Firebase
const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_KEY;

// Vérification si les variables sont bien définies
if (!endpoint || !apiKey) {
    console.error("❌ ERREUR: Les variables d'environnement Azure OpenAI ne sont pas définies.");
}

// 📌 Fonction principale pour générer une réponse à un prompt
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

// 📌 Nouvelle fonction pour améliorer un prompt
app.post("/improvePrompt", async (req, res) => {
    try {
        console.log("📌 Requête pour l'amélioration du prompt reçue :", req.body);

        if (!req.body.prompt) {
            return res.status(400).json({ error: "Aucun prompt fourni." });
        }

        const improvedPromptRequest = {
            messages: [
                { role: "system", content: "Tu es un expert en rédaction de prompts." },
                { role: "user", content: `Améliore ce prompt pour qu'il soit plus clair et précis : "${req.body.prompt}". Donne moi uniquement le prompt amélioré sans guillemets.` }
            ]
        };

        const response = await retryRequest(() => axios.post(
            `${endpoint}/openai/deployments/cleo-gpt-4o/chat/completions?api-version=2024-02-01`,
            improvedPromptRequest,
            {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": apiKey
                }
            }
        ), 3, 10000); // Jusqu'à 3 tentatives avec 10s d’attente

        console.log("✅ Réponse d'Azure OpenAI pour amélioration :", response.data);
        res.json(response.data);
    } catch (error) {
        console.error("❌ Erreur lors de l’amélioration du prompt :", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Erreur lors de l’amélioration du prompt" });
    }
});

// Déploiement des deux API
exports.callCopilot = functions.https.onRequest(app);
exports.improvePrompt = functions.https.onRequest(app);