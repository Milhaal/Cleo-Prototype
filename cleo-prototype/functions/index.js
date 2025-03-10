require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 📌 Vérification que l'API fonctionne
app.get("/", (req, res) => {
    res.send("✅ L'API Firebase fonctionne !");
});

// 📌 Route pour générer une réponse avec ChatGPT
app.post("/callChatGPT", async (req, res) => {
    try {
        console.log("🚀 Requête reçue avec prompt :", req.body.prompt);
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: req.body.prompt }],
            temperature: 0.7
        });

        console.log("✅ Réponse OpenAI :", JSON.stringify(response, null, 2));

        // ✅ Assure-toi de renvoyer `choices`
        res.json({ choices: response.choices });
    } catch (error) {
        console.error("❌ Erreur API OpenAI:", error);
        res.status(500).json({ error: "Erreur OpenAI" });
    }
});

// 📌 Route pour améliorer un prompt
app.post("/improvePrompt", async (req, res) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "Tu es un expert en rédaction de prompts IA." },
                { role: "user", content: `Améliore ce prompt : "${req.body.prompt}".` }
            ],
            temperature: 0.7
        });

        res.json({ improvedPrompt: response.choices[0].message });
    } catch (error) {
        console.error("❌ Erreur OpenAI:", error);
        res.status(500).json({ error: "Erreur OpenAI" });
    }
});

// 📌 Exporter correctement les fonctions
exports.api = functions.https.onRequest(app);