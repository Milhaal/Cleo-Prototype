import React, { useState } from "react";
import axios from "axios";
import "./IAComponent.css"; // Fichier CSS pour le style


const IAComponent = () => {
    const [prompt, setPrompt] = useState("Écris une offre d’emploi pour un nouveau poste de Développeur Javascript");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [score, setScore] = useState(null);
    const [improvedPrompt, setImprovedPrompt] = useState("");
    const [copied, setCopied] = useState(false);
    const [hasSentMessage, setHasSentMessage] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const API_BASE_URL = "https://us-central1-cleo-prototype.cloudfunctions.net/api";

    // Mots-clés et verbes d’action pour le scoring
    const actionVerbs = [
        "explique", "analyse", "compare", "résume", "décrit", "détaille",
        "synthétise", "évalue", "structure", "justifie", "argumente", "définis",
        "liste", "donne", "fournis", "construis", "identifie", "développe",
        "élabore", "optimise", "génère", "précise", "présente", "formule", "rédige"
    ];
    const keywords = [
        "automatisation", "éthique", "productivité", "innovation", "sécurité", "données",
        "modèles", "neural", "GPT", "deep learning", "machine learning", "performances",
        "efficacité", "optimisation", "précision", "régulation", "conformité", "fiabilité",
        "expérience utilisateur", "scalabilité", "accessibilité", "analyse", "objectifs",
        "métriques", "amélioration", "évaluation", "systèmes", "intelligence artificielle"
    ];
    const constraints = [
        "exemple", "source", "justifie", "statistique", "chiffres", "temps", "époque",
        "nombre", "pourcentage", "donnée", "référence", "comparaison", "moyenne",
        "quantification", "preuve", "facteur", "indicateur", "mesure", "benchmark"
    ];
    // Fonction pour compter les occurrences des mots dans le texte
    const countWordsInArray = (text, wordArray) => {
        return wordArray.filter(word => text.toLowerCase().includes(word)).length;
    };

    const evaluatePrompt = (text) => {
        const wordCount = text.split(/\s+/).length; // Nombre de mots

        // 1️⃣ Score de longueur (5 points)
        let lengthScore = 0;
        if (wordCount < 10) lengthScore = 0;
        else if (wordCount <= 25) lengthScore = 3;
        else if (wordCount <= 50) lengthScore = 5;
        else lengthScore = 4;

        // 2️⃣ Vérifier la présence d’un élément précis (5 points)
        const containsConstraint = constraints.some(constraint => text.toLowerCase().includes(constraint));
        const preciseElementScore = containsConstraint ? 5 : 0;

        // 3️⃣ Vérifier si un format est demandé (5 points)
        const formatKeywords = ["liste", "tableau", "bullet points", "étapes", "structure", "catégories", "format"];
        const containsFormat = formatKeywords.some(keyword => text.toLowerCase().includes(keyword));
        const formatScore = containsFormat ? 5 : 0;

        // 4️⃣ Vérifier si le prompt est actionnable (5 points)
        const containsActionVerb = actionVerbs.some(verb => text.toLowerCase().includes(verb));
        const clarityScore = containsActionVerb ? 5 : 0;

        // ✅ Score final sur 20
        const totalScore = lengthScore + preciseElementScore + formatScore + clarityScore;

        return {
            total: totalScore,
            length: lengthScore,
            preciseElement: preciseElementScore,
            format: formatScore,
            clarity: clarityScore
        };
    };

    // Loader HTML/CSS
    const LoaderBlue = () => (
        <div className="loader-blue"></div>
    );
    const LoaderWhite = () => (
        <div className="loader-white"></div>
    );


    // Fonction principale pour envoyer le prompt et récupérer la réponse + amélioration
    const handleSubmit = async () => {
        if (!prompt) return;
        setLoading(true);
        setResult("");
        setScore(null);
        setImprovedPrompt("");
        setHasSentMessage(true);

        try {
            console.log("🔹 Envoi de la requête principale et amélioration...");
            const response = await axios.post(`${API_BASE_URL}/callChatGPT`, {
                prompt: `1️⃣ Réponds à ce prompt normalement : "${prompt}" \n
                         2️⃣ Ensuite, améliore ce prompt pour qu'il soit plus clair et efficace en tant que prompt IA.`
            });

            console.log("✅ Réponse brute de l'API :", response.data);

            if (!response.data || !response.data.choices || response.data.choices.length === 0) {
                throw new Error("La réponse de l'API ne contient pas de choix valides.");
            }

            // Séparation de la réponse (réponse normale + prompt amélioré)
            const aiResponses = response.data.choices[0]?.message?.content || "Aucune réponse reçue.";
            console.log("✅ Réponse API traitée :", aiResponses);

            // Séparer la réponse en deux parties
            const responseParts = aiResponses.split("2️⃣ ");
            const initialResponse = responseParts[0]?.trim() || "Aucune réponse générée.";
            const improvedText = responseParts[1]?.trim() || "Aucune amélioration détectée.";

            // Met à jour l'état avec la réponse
            setResult(initialResponse);
            setImprovedPrompt(improvedText);

            // 🔍 Calcul du score basé sur le prompt initial
            const newScore = evaluatePrompt(prompt);
            setScore(newScore);
            console.log("📊 Score calculé :", newScore);

        } catch (error) {
            console.error("❌ Erreur API :", error);
            setResult("Erreur lors de la requête.");
            setImprovedPrompt("Erreur lors de l'amélioration du prompt.");
        }

        setLoading(false);
    };
    const handleImprovePrompt = () => {
        setShowDetails(true); // ✅ On affiche les détails sans API
    };



    return (
        <div className="ia-container">
            <div className="ia-container-left">
                {/* Exercice Box */}
                <div className="ia-container-left-box">

                    <div className="ia-container-left-title-box">
                        <p className="ia-container-left-title">Exercice</p>

                    </div>
                    <div className="ia-container-left-content-box">
                        <p className="ia-container-ask">Lorsqu’un nouveau poste s’ouvre dans une entreprise, il est essentiel de rédiger une fiche de poste claire et complète. ChatGPT peut vous aider à structurer cette offre d’emploi, mais encore faut-il savoir comment formuler votre demande. Dans cet exercice, vous allez apprendre à écrire un prompt précis et détaillé afin d’obtenir une fiche de poste pertinente et attractive.</p>

                    </div>

                </div>
                {/* Score Box */}
                {result && score && (
                    <div className="ia-container-left-box">
                        <div className="ia-container-left-title-box">
                            <p className="ia-container-left-title">Score</p>
                        </div>
                        <div className="ia-container-left-content-box">
                            <div className="score-section">
                                <div className="score-circle-box">
                                    <div className="score-circle">
                                        <svg width="100" height="100" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40" className="score-bg" />
                                            <circle
                                                cx="50" cy="50"
                                                r="40"
                                                className={`score-progress ${score.total < 10 ? "bad" : "good"}`}
                                                strokeDasharray="251.2"
                                                strokeDashoffset={`${251.2 - (score.total / 20) * 251.2}`}
                                            />
                                            <text
                                                x="50"
                                                y="55"
                                                textAnchor="middle"
                                                alignmentBaseline="middle"
                                                className={`score-text ${score.total < 10 ? "bad-score" : "good-score"}`}
                                            >
                                                {score.total}/20
                                            </text>
                                        </svg>
                                    </div>
                                    <p className={`score-label ${score.total < 10 ? "bad-text" : "good-text"}`}>
                                        {score.total < 10 ? "Mauvais" : "Bon"}
                                    </p>
                                </div>

                                <div className="criteria">
                                    <div className="criteria-box">
                                        <p>Longueur</p>
                                        <div className="score-bar">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <div key={i} className={`score-box ${i < score.length ? "filled" : "empty"}`}></div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="criteria-box">
                                        <p>Élément précis</p>
                                        <div className="score-bar">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <div key={i} className={`score-box ${i < score.preciseElement ? "filled" : "empty"}`}></div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="criteria-box">
                                        <p>Format demandé</p>
                                        <div className="score-bar">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <div key={i} className={`score-box ${i < score.format ? "filled" : "empty"}`}></div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="criteria-box">
                                        <p>Clarté et actionnabilité</p>
                                        <div className="score-bar">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <div key={i} className={`score-box ${i < score.clarity ? "filled" : "empty"}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Reco Box */}
                {result && score && (
                    <div className="ia-container-left-box">
                        <div className="ia-container-reco-title-box">
                            <div className="ia-container-reco-icon-box">
                                <span className="material-symbols-outlined">
                                    close
                                </span>
                            </div>
                        </div>
                        <div className="ia-container-reco-content-box">
                            <p className="ia-container-reco-content-title">Votre prompt n’est pas assez précis</p>
                            <p className="ia-container-reco-content-text">Le prompt saisi “{prompt}” manque de détails essentiels.</p>
                            {/* ✅ Affichage conditionnel des détails */}
            {showDetails && (
                <div className="ia-container-reco-details">
                    <p className="ia-container-reco-content-title">Détails supplémentaires</p>
                    <p className="ia-container-reco-content-text">
                        Ce prompt est trop vague. Il ne précise ni le contexte de l’entreprise, 
                        ni les missions exactes du poste, ni le profil recherché. Un développeur 
                        JavaScript peut travailler dans des contextes très variés : front-end, 
                        back-end, full-stack, sur différentes technologies ou frameworks (React, 
                        Node.js, Vue.js, etc.). Sans ces précisions, ChatGPT va proposer une 
                        annonce standardisée qui pourrait ne pas correspondre aux attentes du 
                        recruteur.
                    </p>
                    <p className="ia-container-reco-content-title">Comment l’améliorer ?</p>
                    <p className="ia-container-reco-content-text">
                        Pour obtenir une offre d’emploi plus pertinente, il est conseillé d’ajouter des détails sur :
                        <br />• L’entreprise : Son secteur, sa taille, ses valeurs.
                        <br />• Le poste : Missions principales, technologies utilisées, cadre de travail (télétravail, hybride, présentiel).
                        <br />• Le profil recherché : Années d’expérience, compétences techniques et soft skills requises.
                        <br />• Les avantages : Rémunération, perspectives d’évolution, avantages sociaux.
                    </p>
                </div>
            )}
                            <div className="ia-container-reco-content-bot">
                                {!showDetails && (
                                    <div className="ia-container-reco-content-bot-left" onClick={handleImprovePrompt}>
                                        <i class="bi bi-stars"></i>
                                        <p className="ia-container-reco-content-bot-left-text">Améliorer mon prompt</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <div className="prompt-section">
                <div className="ia-container-left-title-box">
                    <p className="ia-container-left-title">ChatGPT</p>

                </div>
                <div className="chat-container">
                    {!hasSentMessage && (
                        <div className="empty-message">
                            <p className="empty-message-text">Envoyez un message pour commencer une conversation avec ChatGPT.</p>
                        </div>
                    )}

                    {hasSentMessage && (
                        <div className="input-recap-box">
                            <img className="input-recap-box-img" src="./images/naomie-pp.png" alt="Profil utilisateur" />
                            <p className="input-recap-box-text">{prompt}</p>
                        </div>
                    )}

                    {hasSentMessage && (
                        <div className="response-box">
                            <div className="response-box-img-box">
                                <img className="response-box-img" src="./images/openai-logo-black.png" alt="OpenAI Logo" />

                            </div>

                            {loading ? (
                                <div className="loading"><LoaderBlue /></div>
                            ) : (
                                <div className="formatted-response">
                                    {result ? (
                                        result.split("\n").map((line, index) => {
                                            line = line.trim();
                                            if (!line || line === "---" || line.startsWith("###")) return null;
                                            if (line.startsWith("# ")) return <h2 key={index}>{line.replace(/^#+\s*/, "")}</h2>;
                                            if (line.startsWith("## ")) return <h3 key={index}>{line.replace(/^##\s*/, "")}</h3>;
                                            if (line.startsWith("### ")) return <h4 key={index}>{line.replace(/^###\s*/, "")}</h4>;
                                            if (line.startsWith("- ")) return <li key={index}>{line.replace("- ", "")}</li>;
                                            if (/\*\*(.*?)\*\*/.test(line)) {
                                                return <p key={index}>
                                                    <strong>{line.replace(/\*\*(.*?)\*\*/g, "$1")}</strong>
                                                </p>;
                                            }
                                            if (line.includes(":")) {
                                                return (
                                                    <p key={index}>
                                                        <strong>{line.split(":")[0]} :</strong> {line.split(":")[1]}
                                                    </p>
                                                );
                                            }
                                            return <p key={index}>{line}</p>;
                                        })
                                    ) : (
                                        "En attente d'un prompt"
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>


                <div className="input-box">
                    <div className="input-box-content">
                        <input
                            className="ia-container-box-textarea"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <button className="ia-container-box-button" onClick={handleSubmit} disabled={loading}>
                            {loading ? (
                                <LoaderWhite />
                            ) : (
                                <span className="material-symbols-outlined">send</span>
                            )}
                        </button>
                    </div>
                    <div className="input-box-content-bottom">
                        <p className="input-box-content-bottom-text">Vous pouvez envoyer 30 messages par heure</p>
                        <div className="input-box-content-bottom-box">
                            <p className="input-box-content-bottom-box-text">Propulsé par</p>
                            <img className="input-box-content-bottom-box-img" src="./images/open-ai-logo.png"></img>
                        </div>

                    </div>
                </div>


            </div>




        </div>
    );
};

export default IAComponent;