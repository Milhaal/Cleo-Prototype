<div className="ia-container-evaluation-box">


                {improvedPrompt && (
                    <div className="improved-box">
                        <div className="improved-box-top">
                            <h4 className="improved-box-top-title">Prompt amélioré</h4>
                            <div className="improved-box-top-text">
                                {improvedPrompt.split("\n").map((line, index) => {
                                    line = line.trim();

                                    // 🚫 Ignorer les lignes inutiles "---" ou "###"
                                    if (!line || line === "---" || line.startsWith("###")) return null;

                                    // ✅ Convertir les titres Markdown (## Titre)
                                    if (line.startsWith("# ")) {
                                        return <h2 key={index}>{line.replace(/^#+\s*/, "")}</h2>;
                                    } else if (line.startsWith("## ")) {
                                        return <h3 key={index}>{line.replace(/^##\s*/, "")}</h3>;
                                    } else if (line.startsWith("### ")) {
                                        return <h4 key={index}>{line.replace(/^###\s*/, "")}</h4>;
                                    }

                                    // ✅ Convertir les listes à puces "- Élément"
                                    if (line.startsWith("- ")) {
                                        return <li key={index}>{line.replace("- ", "")}</li>;
                                    }

                                    // ✅ Convertir le gras "**Texte**" correctement sans afficher les **
                                    if (/\*\*(.*?)\*\*/.test(line)) {
                                        return (
                                            <p key={index} dangerouslySetInnerHTML={{
                                                __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                                            }} />
                                        );
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