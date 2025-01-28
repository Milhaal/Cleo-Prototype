const lesson3 = {
    id: "lesson3",
    status: "Pas commencé",
    role: "RSE",
    title: "Outils d’analyse des biais dans les prompts",
    description: "Découvrez des outils pour détecter et réduire les biais dans vos prompts.",
    content: [
        {
            id: "link-course",
            type: "link",
            value: "Ce chapitre est la troisième partie de notre cours : ",
            linkText: "Principes d’un prompt responsable.",
            courseId: "course6"
        },
        {
            id: "text1",
            type: "text",
            value: "L'un des principaux défis dans la rédaction de prompts responsables est d'éviter d'introduire des *biais* dans les résultats générés. Certains outils sont spécifiquement conçus pour détecter les biais implicites dans les prompts et aider à les ajuster avant leur utilisation dans des systèmes d'IA."
        },
        {
            id: "subtitle1",
            type: "subtitle",
            value: "Bias Analyser"
        },
        {
            id: "text2",
            type: "text",
            value: "*Description *"
        },
        {
            id: "text3",
            type: "text",
            value: "Le *Bias Analyser* est un outil qui évalue les *biais potentiels* dans les prompts et les résultats générés par l'IA. Il permet de tester différents types de biais, tels que les *biais raciaux, de genre*, ou *socio-économiques*, en analysant la formulation du prompt et les données utilisées pour l’entraîner."
        },
        {
            id: "text4",
            type: "text",
            value: "*Fonctionnement*"
        },

        {
            id: "text5",
            type: "text",
            value: "Le Bias Analyser vérifie la formulation du prompt et les réponses de l’IA en temps réel. Il fournit un rapport détaillé qui indique les *biais détectés*, avec des recommandations sur comment reformuler les prompts de manière plus inclusive et éthique."
        },
        {
            id: "text6",
            type: "text",
            value: "*Exemple d’utilisation *"
        },
        {
            id: "text7",
            type: "text",
            value: "Vous rédigez un prompt comme “Pourquoi les femmes sont-elles moins intéressées par les sciences que les hommes ?“ Le Bias Analyser détecte un *biais de genre* et propose une reformulation plus neutre : “Quels facteurs influencent l’engagement des femmes dans les carrières scientifiques ?“"
        },
        {
            id: "text8",
            type: "text",
            value: "*Fairness Indicators (Google AI)*"
        },

        {
            id: "text9",
            type: "text",
            value: "Un outil qui mesure l'impact des biais dans les prédictions faites par les modèles d'IA. Il peut être utilisé pour tester les résultats générés à partir de vos prompts, en vérifiant leur impact sur différents groupes."
        },
        {
            id: "text10",
            type: "text",
            value: "*AI Fairness 360 Toolkit (IBM) : *"
        },
        {
            id: "text11",
            type: "text",
            value: "Un ensemble d’outils qui permet de mesurer, réduire et analyser les biais dans les modèles d’IA. Bien que cet outil soit principalement conçu pour analyser les résultats des modèles d’IA, il peut aussi être utilisé pour vérifier si les prompts entraînent des* résultats biaisés.*"
        },
        {
            id: "link-lesson",
            type: "link-lesson",
            value: "Dans le prochain chapitre nous verrons les ",
            linkText: "Vérification de l’éthique et de la neutralité des prompts.",
            nextLessonId: "lesson4"
        }
    ],
    quiz: [
        {
            question: "Quel est l'objectif principal des outils d'analyse des biais dans les prompts ?",
            options: [
                "Améliorer la vitesse des réponses générées par l'IA.",
                "Détecter et réduire les biais implicites dans les prompts et les résultats générés.",
                "Simplifier la formulation des prompts.",
                "Créer des réponses prédéfinies pour des questions fréquentes."
            ],
            correct: "Détecter et réduire les biais implicites dans les prompts et les résultats générés.",
            explanation: "Les outils d'analyse des biais permettent d'identifier les formulations ou données biaisées et d'offrir des recommandations pour garantir des résultats plus inclusifs et éthiques."
        },
        {
            question: "Comment fonctionne le Bias Analyser ?",
            options: [
                "Il vérifie uniquement les données d'entraînement des modèles d'IA.",
                "Il analyse la formulation des prompts et les réponses en temps réel.",
                "Il reformule automatiquement tous les prompts.",
                "Il remplace les prompts biaisés par des réponses standards."
            ],
            correct: "Il analyse la formulation des prompts et les réponses en temps réel.",
            explanation: "Le Bias Analyser fournit un rapport détaillé des biais détectés et propose des recommandations pour reformuler les prompts de manière plus éthique."
        },
        {
            question: "Quel exemple illustre une reformulation éthique proposée par le Bias Analyser ?",
            options: [
                "Pourquoi les femmes sont-elles moins compétentes que les hommes en sciences ?",
                "Quels facteurs influencent l'engagement des femmes dans les carrières scientifiques ?",
                "Pourquoi les hommes dominent-ils les sciences ?",
                "Comment améliorer les compétences des femmes en sciences ?"
            ],
            correct: "Quels facteurs influencent l'engagement des femmes dans les carrières scientifiques ?",
            explanation: "Cette reformulation élimine le biais de genre en posant une question ouverte et neutre qui explore les facteurs sans stéréotypes."
        },
        {
            question: "Quel outil permet de mesurer et réduire les biais dans les modèles d'IA tout en analysant les prompts ?",
            options: [
                "Fairness Indicators (Google AI).",
                "AI Fairness 360 Toolkit (IBM).",
                "Bias Analyser.",
                "DALL-E."
            ],
            correct: "AI Fairness 360 Toolkit (IBM).",
            explanation: "L'AI Fairness 360 Toolkit est un ensemble d'outils développé par IBM qui analyse et réduit les biais, que ce soit dans les modèles ou les résultats générés par les prompts."
        }
    ]

};

export default lesson3;