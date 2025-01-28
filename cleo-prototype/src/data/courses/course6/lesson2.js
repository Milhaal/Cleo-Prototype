const lesson2 = {
    id: "lesson2",
    status: "En cours",
    role: "RSE",
    title: "Prévenir les Biais lors du prompting",
    description: "Apprenez à identifier et reformuler les prompts pour éviter les biais dans les réponses générées.",
    content: [
        {
            id: "link-course",
            type: "link",
            value: "Ce chapitre est la deuxième partie de notre cours : ",
            linkText: "Principes d’un prompt responsable.",
            courseId: "course6"
        },
        {
            id: "text1",
            type: "text",
            value: "Un *biais* est un *écart systématique* dans la réponse générée, en raison de la formulation du prompt ou de l'entraînement du modèle. Cela peut aboutir à des réponses qui ne sont pas représentatives de la réalité ou qui excluent des informations pertinentes."
        },
        {
            id: "text2",
            type: "text",
            value: "*Les biais* dans les prompts se réfèrent à des distorsions ou des préjugés qui peuvent influencer la réponse générée par l'IA, souvent à cause de *données biaisées* ou de formulations qui favorisent certains groupes ou idées. Ces biais peuvent être *intentionnels* ou *involontaires* et sont souvent le reflet de stéréotypes sociaux, culturels, ou économiques."
        },
        {
            id: "text3",
            type: "text",
            value: "Il est important de prendre en compte la manière dont la question est posée pour éviter de propager des stéréotypes."
        },
        {
            id: "bullet1",
            type: "bullet-point",
            value: [
                "Exemple 1 (Prompt biaisé) : “Pourquoi les femmes sont-elles moins compétentes que les hommes dans les métiers scientifiques ?“ Ce prompt génère un contenu discriminatoire. Reformulez-le en “Quels sont les défis auxquels les femmes font face dans les métiers scientifiques et comment y remédier ?“"
            ]
        },
        {
            id: "subtitle1",
            type: "subtitle",
            value: "Exemples célèbres de biais dans l'IA"
        },

        {
            id: "text4",
            type: "text",
            value: "*Biais dans les systèmes de recrutement d'Amazon :*"
        },

        {
            id: "text5",
            type: "text",
            value: "Amazon a découvert que son système de recrutement basé sur l'IA favorisait les *candidats masculins*. Cela était dû au fait que les données d’entraînement étaient biaisées, basées principalement sur les profils historiques de candidats masculins."
        },
        {
            id: "text6",
            type: "text",
            value: "*Biais dans les systèmes de reconnaissance faciale :*"
        },
        {
            id: "text7",
            type: "text",
            value: "Plusieurs études ont montré que les systèmes de reconnaissance faciale avaient des taux d’erreur plus élevés pour *les femmes et les personnes de couleur*, car les modèles étaient principalement entraînés sur des images de personnes blanches et masculines."
        },
        {
            id: "text8",
            type: "text",
            value: "*Biais dans le système COMPAS pour la justice :*"
        },

        {
            id: "text9",
            type: "text",
            value: "COMPAS, un logiciel d’IA utilisé dans le système judiciaire américain pour évaluer le risque de récidive, a été critiqué pour des biais raciaux. Les personnes noires étaient plus souvent classées comme étant à haut risque de récidive, même si leurs antécédents ne justifiaient pas une telle évaluation."
        },
        {
            id: "text10",
            type: "text",
            value: "Un prompt *efficace* et *éthique* doit être formulé avec soin pour éviter les biais, maximiser la précision des réponses et s'assurer que les résultats sont justes, équilibrés et adaptés aux besoins de l’utilisateur. Grâce à ces *meilleures pratiques* et à une approche itérative, vous serez en mesure de créer des *prompts parfaits* qui permettront de tirer le meilleur parti des modèles d'IA générative tout en garantissant une utilisation responsable et éthique."
        },
        {
            id: "link-lesson",
            type: "link-lesson",
            value: "Dans le prochain chapitre nous verrons les ",
            linkText: "Outils d’analyse des biais dans les prompts.",
            nextLessonId: "lesson3"
        }
    ],
    quiz: [
        {
            question: "Qu'est-ce qu'un biais dans un prompt d'IA ?",
            options: [
                "Un écart systématique dans la réponse générée dû à la formulation ou à l'entraînement du modèle.",
                "Une erreur technique de l'IA entraînant une réponse incomplète.",
                "Un problème lié à la vitesse de traitement des prompts.",
                "Un mécanisme volontaire pour favoriser certaines réponses."
            ],
            correct: "Un écart systématique dans la réponse générée dû à la formulation ou à l'entraînement du modèle.",
            explanation: "Un biais dans un prompt peut influencer les réponses en favorisant certains groupes ou idées, souvent en raison de données ou formulations biaisées."
        },
        {
            question: "Comment peut-on reformuler un prompt biaisé pour le rendre éthique ?",
            options: [
                "En changeant le sujet pour éviter toute controverse.",
                "En utilisant un langage neutre et en évitant les stéréotypes.",
                "En posant des questions fermées uniquement.",
                "En augmentant la complexité du prompt pour réduire les biais."
            ],
            correct: "En utilisant un langage neutre et en évitant les stéréotypes.",
            explanation: "Reformuler un prompt avec un langage neutre permet d’éviter les préjugés et d’obtenir des réponses équilibrées et pertinentes."
        },
        {
            question: "Quel est un exemple de biais célèbre dans un système de reconnaissance faciale ?",
            options: [
                "Une IA qui favorise les candidats avec plus d'expérience.",
                "Des taux d'erreur plus élevés pour les femmes et les personnes de couleur.",
                "Un algorithme qui favorise les profils techniques dans les recrutements.",
                "Une IA qui donne la priorité aux grandes entreprises dans les résultats."
            ],
            correct: "Des taux d'erreur plus élevés pour les femmes et les personnes de couleur.",
            explanation: "Les systèmes de reconnaissance faciale présentent souvent des biais liés aux données d'entraînement, favorisant les groupes surreprésentés, comme les hommes blancs."
        },
        {
            question: "Comment prévenir les biais dans un prompt ?",
            options: [
                "En testant et en ajustant le prompt pour s'assurer de sa neutralité.",
                "En limitant le contexte fourni dans le prompt.",
                "En utilisant uniquement des données historiques comme source.",
                "En évitant les questions ouvertes."
            ],
            correct: "En testant et en ajustant le prompt pour s'assurer de sa neutralité.",
            explanation: "Tester et affiner les prompts permet de réduire les biais et d’assurer une formulation plus neutre et inclusive."
        }
    ]

};

export default lesson2;