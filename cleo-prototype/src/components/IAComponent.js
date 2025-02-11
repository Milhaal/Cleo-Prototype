import React, { useState } from "react";
import axios from "axios";
import "./IAComponent.css"; // Fichier CSS pour le style

const IAComponent = () => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [score, setScore] = useState(null);
    const [improvedPrompt, setImprovedPrompt] = useState("");
    const [copied, setCopied] = useState(false);

    // Mots-clés et verbes d’action pour le scoring
    const actionVerbs = ["explique", "analyse", "compare", "résume", "décrit", "détaille", "synthétise", "évalue", "structure", "justifie", "argumente"];
    const keywords = ["automatisation", "éthique", "productivité", "innovation", "sécurité", "données", "modèles", "neural", "GPT", "deep learning", "machine learning"];
    const constraints = ["exemple", "source", "justifie", "statistique", "chiffres", "temps", "époque"];

    // Fonction pour compter les occurrences des mots dans le texte
    const countWordsInArray = (text, wordArray) => {
        return wordArray.filter(word => text.toLowerCase().includes(word)).length;
    };

    // Fonction améliorée pour évaluer un prompt
    const evaluatePrompt = (text) => {
        // Score de longueur
        const lengthScore = (text.length < 10) ? 1 :
            (text.length < 20) ? 2 :
                (text.length < 50) ? 3 :
                    (text.length < 150) ? 4 : 5;

        // Score de niveau d’action et d’analyse
        const actionCount = countWordsInArray(text, actionVerbs);
        const actionScore = (actionCount === 0) ? 1 :
            (actionCount === 1) ? 2 :
                (actionCount === 2) ? 3 :
                    (actionCount === 3) ? 4 : 5;

        // Score de mots-clés pertinents
        const keywordCount = countWordsInArray(text, keywords);
        const keywordScore = (keywordCount === 0) ? 1 :
            (keywordCount === 1) ? 2 :
                (keywordCount === 2) ? 3 :
                    (keywordCount === 3) ? 4 : 5;

        //  Score de contraintes et structure
        const constraintCount = countWordsInArray(text, constraints);
        const constraintScore = (constraintCount === 0) ? 1 :
            (constraintCount === 1) ? 2 :
                (constraintCount === 2) ? 3 :
                    (constraintCount === 3) ? 4 : 5;

        // ✅ Score final sur 20
        const totalScore = lengthScore + actionScore + keywordScore + constraintScore;
        return { total: totalScore, length: lengthScore, action: actionScore, keywords: keywordScore, constraints: constraintScore };
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

        try {
            console.log("🔹 Envoi de la requête principale et amélioration...");
            const response = await axios.post("https://callcopilot-x5mjnplfsa-uc.a.run.app/callCopilot", {
                prompt: `1️⃣ Réponds à ce prompt normalement : "${prompt}" \n
                     2️⃣ Ensuite, améliore ce prompt pour qu'il soit plus clair et efficace en tant que prompt IA.`
            });

            const aiResponses = response.data.choices[0]?.message?.content || "Aucune réponse reçue.";
            console.log("✅ Réponse API :", aiResponses);

            // Séparation de la réponse en deux parties (Réponse + Prompt amélioré)
            const [initialResponse, improvedText] = aiResponses.split("2️⃣ ");
            setResult(initialResponse.trim());
            setImprovedPrompt(improvedText?.trim() || "Aucune amélioration générée.");

            // Calcul du score basé sur le prompt initial
            const newScore = evaluatePrompt(prompt);
            setScore(newScore);

        } catch (error) {
            console.error("❌ Erreur API :", error);
            setResult("Erreur lors de la requête.");
            setImprovedPrompt("Erreur lors de l'amélioration du prompt.");
        }

        setLoading(false);
    };

    const copyToClipboard = () => {
        if (improvedPrompt) {
            navigator.clipboard.writeText(improvedPrompt);
            setCopied(true);

            // Remettre à l'état initial après 2 secondes
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    };

    return (
        <div className="ia-container">
            <h3 className="ia-container-title">Testez votre niveau</h3>
            <p className="ia-container-ask">En tant que RH, vous souhaitez écrire une offre d’emploi pour un nouveau poste de Développeur Javascript au sein de votre entreprise. Quel prompt vous paraît le plus adapté ?</p>

            <div className="prompt-section">
                <div className="input-box">
                    <h4 className="ia-container-box-title">Entrez votre prompt</h4>
                    <textarea
                        className="ia-container-box-textarea"
                        placeholder="Tapez ici..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <button className="ia-container-box-button" onClick={handleSubmit} disabled={loading}>
                        {loading ? (
                            <>
                                <LoaderWhite /> Chargement...
                            </>
                        ) : (
                            "Tester"
                        )}
                    </button>
                </div>

                <div className="output-box">
                    <div className="output-box-title">
                        <h4 className="ia-container-box-title">Résultat</h4>
                        {loading && <span className="loading"><LoaderBlue /> Chargement</span>}
                    </div>

                    <div className="response-box">
                        {result ? (
                            <div className="formatted-response">
                                {result.split("\n").map((line, index) => {
                                    line = line.trim();

                                    // Ignorer les lignes contenant uniquement "---" ou "###"
                                    if (!line || line === "---" || line.startsWith("###")) return null;

                                    // Convertir les titres Markdown (## Titre)
                                    if (line.startsWith("# ")) {
                                        return <h2 key={index}>{line.replace(/^#+\s*/, "")}</h2>;
                                    } else if (line.startsWith("## ")) {
                                        return <h3 key={index}>{line.replace(/^##\s*/, "")}</h3>;
                                    } else if (line.startsWith("### ")) {
                                        return <h4 key={index}>{line.replace(/^###\s*/, "")}</h4>;
                                    }

                                    // Convertir les listes à puces "- Élément"
                                    if (line.startsWith("- ")) {
                                        return <li key={index}>{line.replace("- ", "")}</li>;
                                    }

                                    // Convertir les textes en gras "**Texte**"
                                    if (/\*\*(.*?)\*\*/.test(line)) {
                                        return <p key={index}>
                                            <strong>{line.replace(/\*\*(.*?)\*\*/g, "$1")}</strong>
                                        </p>;
                                    }

                                    // Détecter les phrases en "Clé : Valeur"
                                    if (line.includes(":")) {
                                        return (
                                            <p key={index}>
                                                <strong>{line.split(":")[0]} :</strong> {line.split(":")[1]}
                                            </p>
                                        );
                                    }

                                    return <p key={index}>{line}</p>; // Paragraphe normal
                                })}
                            </div>
                        ) : (
                            "En attente d'un prompt"
                        )}
                        
                    </div>
                </div>
            </div>

            <div className="ia-container-evaluation-box">
                {score && (
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
                                <p>Action & Analyse</p>
                                <div className="score-bar">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className={`score-box ${i < score.action ? "filled" : "empty"}`}></div>
                                    ))}
                                </div>
                            </div>


                            <div className="criteria-box">
                                <p>Mots-clés </p>
                                <div className="score-bar">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className={`score-box ${i < score.keywords ? "filled" : "empty"}`}></div>
                                    ))}
                                </div>
                            </div>


                            <div className="criteria-box">
                                <p>Contraintes & Structure </p>
                                <div className="score-bar">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className={`score-box ${i < score.constraints ? "filled" : "empty"}`}></div>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                )}

                {improvedPrompt && (
                    <div className="improved-box">
                        <div className="improved-box-top">
                            <h4 className="improved-box-top-title">Prompt amélioré</h4>
                            <div className="improved-box-top-text">
                                {improvedPrompt.split("\n").map((line, index) => {
                                    line = line.trim();

                                    // Ignorer les lignes inutiles "---" ou "###"
                                    if (!line || line === "---" || line.startsWith("###")) return null;

                                    // Convertir les titres Markdown (## Titre)
                                    if (line.startsWith("# ")) {
                                        return <h2 key={index}>{line.replace(/^#+\s*/, "")}</h2>;
                                    } else if (line.startsWith("## ")) {
                                        return <h3 key={index}>{line.replace(/^##\s*/, "")}</h3>;
                                    } else if (line.startsWith("### ")) {
                                        return <h4 key={index}>{line.replace(/^###\s*/, "")}</h4>;
                                    }

                                    // Convertir les listes à puces "- Élément"
                                    if (line.startsWith("- ")) {
                                        return <li key={index}>{line.replace("- ", "")}</li>;
                                    }

                                    // Convertir les textes en gras "**Texte**"
                                    if (/\*\*(.*?)\*\*/.test(line)) {
                                        return <p key={index}>
                                            <strong>{line.replace(/\*\*(.*?)\*\*/g, "$1")}</strong>
                                        </p>;
                                    }

                                    return <p key={index}>{line}</p>;
                                })}
                            </div>
                        </div>

                        <div className="improved-box-bot" onClick={copyToClipboard}>
                            <span className="material-symbols-outlined improved-box-bot-icon">
                                {copied ? "check" : "content_copy"}
                            </span>
                            <p className="improved-box-bot-text">
                                {copied ? "Prompt copié" : "Copier le prompt"}
                            </p>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
};

export default IAComponent;