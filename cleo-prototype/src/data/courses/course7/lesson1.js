const lesson1 = {
    id: "lesson1",
    status: "Terminé",
    role: "RSE",
    title: "Les Risques Éthiques et RSE du Prompting",
    description: "Découvrez les principaux risques environnementaux, sociaux et de gouvernance liés à un prompting non maîtrisé",
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC7.mp4?alt=media&token=fe4853d7-7ca0-4dc6-a170-49919bf8d041",
    content: [
        {
            id: "link-course",
            type: "link",
            value: "Ce chapitre est la première partie de notre cours : ",
            linkText: "Déontologie et maîtrise des risques.",
            courseId: "course7"
        },
        {
            id: "text1",
            type: "text",
            value: "Dans un environnement où les outils d’intelligence artificielle générative sont de plus en plus utilisés pour automatiser des processus, répondre à des besoins créatifs, ou améliorer la productivité, la conception de *prompts responsables* est devenue une exigence cruciale. Les prompts, qui servent de passerelle entre les utilisateurs et les modèles d’IA, orientent directement les résultats produits et influencent leur conformité aux normes éthiques, juridiques et sociétales."
        },
        {
            id: "video1",
            type: "video",
            url: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC7.mp4?alt=media&token=fe4853d7-7ca0-4dc6-a170-49919bf8d041"
          },
        {
            id: "text2",
            type: "text",
            value: "Au-delà des considérations techniques, un prompt non réfléchi peut générer des résultats biaisés, violer des régulations comme le RGPD (Règlement Général sur la Protection des Données), ou contredire des engagements ESG des organisations. Cette réalité impose une réflexion approfondie sur les *enjeux environnementaux, sociaux et de gouvernance (ESG) *qui sous-tendent chaque utilisation de ces technologies."
        },
        {
            id: "text3",
            type: "text",
            value: "Les risques liés au prompting responsable se manifestent à plusieurs niveaux :"
        },
        {
            id: "text4",
            type: "text",
            value: "*Risques environnementaux*"
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
            value: " Les biais implicites dans les prompts peuvent reproduire ou amplifier des discriminations systémiques. Par exemple, les prompts orientés ou mal calibrés peuvent produire des réponses inappropriées, renforçant des stéréotypes ou excluant des groupes minoritaires (Binns, 2018)."
        },
        {
            id: "text8",
            type: "text",
            value: "*Risques de gouvernance*"
        },
        {
            id: "text9",
            type: "text",
            value: "Les organisations utilisant des prompts non conformes aux cadres réglementaires (ex. RGPD ou AI Act) risquent des sanctions financières et une perte de confiance des parties prenantes. La non-conformité en matière de confidentialité des données ou de transparence dans l’utilisation des modèles peut exposer les entreprises à des litiges et nuire à leur réputation (Floridi et Cowls, 2019)."
        },
        {
            id: "link-lesson",
            type: "link-lesson",
            value: "Dans le prochain chapitre nous verrons ",
            linkText: "Le Cadre Déontologique pour le Prompt Responsable.",
            nextLessonId: "lesson2"
        }
    ],
    quiz: [
        {
            question: "Quel est l'un des principaux risques environnementaux associés à un prompting non optimisé ?",
            options: [
                "Une augmentation des biais dans les réponses générées.",
                "Une amplification des discriminations systémiques.",
                "Un impact énergétique accru dû à des cycles de calcul inutiles.",
                "Une perte de confiance des parties prenantes."
            ],
            correct: "Un impact énergétique accru dû à des cycles de calcul inutiles.",
            explanation: "Un prompting inefficace peut entraîner des cycles de calcul inutiles, augmentant ainsi l'empreinte carbone des modèles d'IA générative."
        },
        {
            question: "Quels risques sociaux peuvent découler de prompts biaisés ?",
            options: [
                "La non-conformité aux cadres réglementaires.",
                "La reproduction ou l'amplification de discriminations systémiques.",
                "Un alourdissement de l'empreinte carbone des modèles IA.",
                "Une perte d'efficacité dans l'entraînement des modèles."
            ],
            correct: "La reproduction ou l'amplification de discriminations systémiques.",
            explanation: "Les prompts biaisés peuvent produire des réponses inappropriées, renforçant des stéréotypes ou excluant des groupes minoritaires."
        },
        {
            question: "Quelles conséquences un prompting non conforme aux cadres réglementaires peut-il engendrer pour les organisations ?",
            options: [
                "Une augmentation de l'efficacité énergétique.",
                "Des sanctions financières et une perte de confiance des parties prenantes.",
                "Une réduction des cycles de calcul inutiles.",
                "Une amélioration de la transparence des modèles IA."
            ],
            correct: "Des sanctions financières et une perte de confiance des parties prenantes.",
            explanation: "Le non-respect des cadres réglementaires, comme le RGPD, peut entraîner des litiges, des sanctions et nuire à la réputation de l'organisation."
        },
        {
            question: "Pourquoi est-il essentiel de considérer les enjeux ESG (Environnementaux, Sociaux et de Gouvernance) dans le prompting ?",
            options: [
                "Pour garantir des réponses rapides et concises.",
                "Pour réduire les émissions de CO₂, éviter les biais sociaux et respecter les régulations.",
                "Pour maximiser les profits des entreprises utilisant l'IA.",
                "Pour éviter l'utilisation de prompts dans des contextes créatifs."
            ],
            correct: "Pour réduire les émissions de CO₂, éviter les biais sociaux et respecter les régulations.",
            explanation: "Les enjeux ESG permettent de garantir un usage responsable et durable de l'IA en tenant compte de l'impact environnemental, social et réglementaire."
        }
    ]


};

export default lesson1;