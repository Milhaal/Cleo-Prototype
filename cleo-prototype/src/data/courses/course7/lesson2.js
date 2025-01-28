const lesson2 = {
    id: "lesson2",
    status: "En cours",
    role: "RSE",
    title: "Le cadre déontologique pour le prompt responsable",
    description: "Apprenez à intégrer des principes éthiques et juridiques dans vos pratiques de prompting",
    content: [
        {
            id: "link-course",
            type: "link",
            value: "Ce chapitre est la deuxième partie de notre cours : ",
            linkText: "Déontologie et maîtrise des risques.",
            courseId: "course7"
        },
        {
            id: "text1",
            type: "text",
            value: "Un prompting responsable repose sur une intégration proactive des principes éthiques et juridiques. Les utilisateurs doivent non seulement comprendre les implications des instructions qu’ils formulent, mais aussi veiller à ce qu’elles respectent des standards élevés de conformité et d’éthique."
        },
        {
            id: "text2",
            type: "text",
            value: "*Comprendre les bases du prompting éthique*"
        },
        {
            id: "text3",
            type: "text",
            value: "Le prompting, en tant qu’outil d’interaction avec les systèmes d’IA, doit être conçu et utilisé de manière responsable. Cela inclut la formulation des instructions, la compréhension des conséquences potentielles et l’anticipation des impacts sur les individus et la société. Pour cela, il est crucial de développer une approche basée sur des principes éthiques clairs, comme l’équité, la transparence et la responsabilité."
        },
        {
            id: "text4",
            type: "text",
            value: "*Équité et inclusion*"
        },
        {
            id: "text5",
            type: "text",
            value: "L’impact énergétique des modèles d’IA générative est amplifié par des prompts inefficaces ou mal optimisés. Selon une étude de Strubell et al. (2019), l’entraînement des grands modèles linguistiques peut générer jusqu’à 284 tonnes de CO₂, équivalant à cinq fois les émissions annuelles moyennes d’un individu. Un prompting inefficace entraîne des cycles de calcul inutiles et alourdit cet impact."
        },
        {
            id: "text6",
            type: "text",
            value: "*Risques sociaux*"
        },
        {
            id: "text7",
            type: "text",
            value: "L’un des enjeux majeurs du prompting réside dans l’identification et la minimisation des biais qui peuvent influencer les résultats générés par l’IA. Ces biais, souvent involontaires, peuvent perpétuer des stéréotypes ou exclure certains groupes de population."
        },
        {
            id: "text8",
            type: "text",
            value: "Des outils tels que le *Bias Analyser* jouent un rôle clé pour détecter ces biais dans les formulations. En analysant les prompts, ils permettent de repérer des expressions ou des termes susceptibles de générer des contenus discriminatoires ou non inclusifs. Par exemple, un prompt lié au recrutement doit éviter les biais systémiques en termes de genre, d’âge ou d’origine ethnique."
        },
        {
            id: "text9",
            type: "text",
            value: "*Protection des données et vie privée*"
        },
        {
            id: "text10",
            type: "text",
            value: "La collecte, le stockage et l’utilisation des données doivent respecter des réglementations strictes en matière de protection des données personnelles, comme le RGPD en Europe ou le CCPA aux États-Unis. Lors de la rédaction de prompts, il est essentiel de s’assurer que ceux-ci ne demandent pas de données sensibles ou ne violent pas les droits des utilisateurs."
        },
        {
            id: "text11",
            type: "text",
            value: "Les bonnes pratiques incluent :"
        },
        {
            id: "bullet1",
            type: "bullet-point",
            value: [
                "Utiliser des données anonymisées dans vos interactions avec l’IA.",
                "Limiter les informations demandées à celles strictement nécessaires pour accomplir la tâche visée.",
                "Documenter les cas d’usage pour garantir une conformité juridique et éthique."
            ]
        },
        {
            id: "text12",
            type: "text",
            value: "*Transparence et gouvernance*"
        },
        {
            id: "text13",
            type: "text",
            value: "La traçabilité et la responsabilité dans les processus de prompting sont des éléments essentiels. Documenter les instructions, leurs objectifs et leurs résultats permet non seulement d’assurer un contrôle interne, mais aussi de garantir une meilleure communication avec les parties prenantes."
        },
        {
            id: "text14",
            type: "text",
            value: "Les entreprises et les organisations doivent mettre en place des *guidelines de prompting* qui définissent clairement les bonnes pratiques à suivre. Cela comprend également des formations pour sensibiliser les utilisateurs aux enjeux éthiques et juridiques liés à l’IA."
        },
        {
            id: "text15",
            type: "text",
            value: "*Vers une approche proactive et évolutive*"
        },
        {
            id: "text16",
            type: "text",
            value: "Le cadre déontologique pour un prompting responsable ne doit pas être figé. Avec l’évolution des technologies et des régulations, les utilisateurs et les concepteurs doivent rester proactifs en ajustant leurs pratiques et en intégrant les nouvelles normes. Cela inclut la collaboration avec des experts en éthique, des juristes et des techniciens pour développer des processus solides et évolutifs."
        },
        {
            id: "link-lesson",
            type: "link-lesson",
            value: "Dans le prochain chapitre nous aborderons le thème : ",
            linkText: "Une Responsabilité Partagée.",
            nextLessonId: "lesson3"
        }
    ],
    quiz: [
        {
            question: "Quel est l'objectif principal d'un cadre déontologique pour le prompting responsable ?",
            options: [
                "Maximiser l'efficacité des prompts pour générer des réponses rapides.",
                "Assurer une conformité éthique et juridique dans l'utilisation des prompts.",
                "Éviter l'utilisation de prompts pour des tâches créatives.",
                "Réduire le volume des données traitées par les modèles IA."
            ],
            correct: "Assurer une conformité éthique et juridique dans l'utilisation des prompts.",
            explanation: "Un cadre déontologique garantit que les prompts respectent les principes d'éthique, de transparence et de responsabilité, tout en restant conformes aux réglementations en vigueur."
        },
        {
            question: "Quel principe est essentiel pour éviter les biais dans les prompts ?",
            options: [
                "Utiliser des termes génériques pour maximiser l'inclusivité.",
                "Analyser les prompts avec des outils comme le Bias Analyser.",
                "Limiter les prompts à des questions fermées uniquement.",
                "Inclure des informations sensibles dans les prompts."
            ],
            correct: "Analyser les prompts avec des outils comme le Bias Analyser.",
            explanation: "Le Bias Analyser identifie les termes ou expressions susceptibles de générer des contenus biaisés ou discriminatoires, permettant une reformulation inclusive."
        },
        {
            question: "Quelles sont les bonnes pratiques pour protéger les données personnelles lors de l'utilisation de prompts ?",
            options: [
                "Ne pas demander de données sensibles dans les prompts.",
                "Documenter les cas d'usage pour garantir la conformité.",
                "Utiliser des données anonymisées.",
                "Toutes les réponses ci-dessus."
            ],
            correct: "Toutes les réponses ci-dessus.",
            explanation: "La protection des données inclut l'anonymisation, la limitation des informations demandées et la documentation des cas d'usage pour assurer une conformité stricte."
        },
        {
            question: "Pourquoi la transparence et la gouvernance sont-elles importantes dans le prompting ?",
            options: [
                "Pour garantir une traçabilité et une communication claire avec les parties prenantes.",
                "Pour éviter de former des utilisateurs à l'utilisation de l'IA.",
                "Pour accélérer le processus de génération des prompts.",
                "Pour réduire le besoin de documentation dans les processus."
            ],
            correct: "Pour garantir une traçabilité et une communication claire avec les parties prenantes.",
            explanation: "La transparence et la gouvernance permettent de documenter les instructions, leurs objectifs et leurs résultats, favorisant ainsi un contrôle interne efficace et une meilleure communication."
        }
    ]


};

export default lesson2;