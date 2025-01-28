const lesson1 = {
    id: "lesson1",
    status: "Terminé",
    role: "RSE",
    title: "Comprendre les Coûts de l’IA et leur Impact avant les Prompts",
    description: "Découvrez les coûts énergétiques, financiers et de maintenance liés à l’entraînement et à l’utilisation des modèles d’IA.",
    content: [
        {
            id: "link-course",
            type: "link",
            value: "Ce chapitre est la première partie de notre cours : ",
            linkText: "Impacts Environnementaux des Prompts.",
            courseId: "course8"
        },
        {
            id: "text1",
            type: "text",
            value: "Avant de se plonger dans l’univers des prompts, il est essentiel de comprendre les coûts associés à la conception et au fonctionnement des modèles d’intelligence artificielle (IA). Ces coûts incluent l’entraînement des modèles, l’acquisition et la gestion des données, ainsi que leur impact environnemental."
        },
        {
            id: "subtitle1",
            type: "subtitle",
            value: "Évaluation des Coûts et de l’Impact Environnemental"
          },
        {
            id: "text2",
            type: "text",
            value: "*Mesurer l’Empreinte Carbone*"
        },
        {
            id: "text3",
            type: "text",
            value: "Les systèmes d’IA consomment d’importantes quantités d’énergie, générant une empreinte carbone significative."
        },
        {
            id: "text4",
            type: "text",
            value: "*Outils recommandés*"
        },
        {
            id: "bullet1",
            type: "bullet-point",
            value: [
              "CodeCarbon : Suivi des émissions de CO₂ générées par les modèles",
              "ML CO2 Impact : Évaluation de l’impact environnemental des entraînements",
              "Exemple : Un entraînement sur un cluster consomme 50 kWh, soit environ 22 kg de CO₂, équivalant à un trajet de 140 km en voiture."
            ]
          },
        {
            id: "text5",
            type: "text",
            value: "*Calcul du Retour sur Investissement Durable*"
        },
        {
            id: "text6",
            type: "text",
            value: "Réduire l’empreinte énergétique des entraînements permet de réaliser des économies substantielles."
        },
        {
            id: "bullet2",
            type: "bullet-point",
            value: [
              "Réduire les entraînements inutiles",
              "Utiliser des modèles plus compacts ou spécialisés",
              "Exemple : Une réduction de 20 % des entraînements inutiles permet d’économiser des milliers d’euros et de réduire l’impact environnemental."
            ]
          },
        {
            id: "text7",
            type: "text",
            value: "*Reporting Environnemental*"
        },
        {
            id: "text8",
            type: "text",
            value: "Un suivi clair et documenté est essentiel pour garantir transparence et responsabilité."
        },
        {
            id: "text9",
            type: "text",
            value: "*Composants principaux*"
        },
        {
            id: "bullet3",
            type: "bullet-point",
            value: [
              "Consommation énergétique détaillée par étape.",
              "Réductions obtenues grâce aux optimisations."
            ]
          },
          {
            id: "subtitle2",
            type: "subtitle",
            value: "Coûts Liés aux Prompts et aux Modèles IA"
          },
          {
            id: "text10",
            type: "text",
            value: "*Coûts d’Entraînement*"
        },
        {
            id: "text11",
            type: "text",
            value: "L’entraînement des modèles d’IA est un poste de dépense majeur, impliquant des ressources de calcul, des données et de l’énergie."
        },
        {
            id: "text12",
            type: "text",
            value: "*Ressources de Calcul :*"
        },
        {
            id: "bullet4",
            type: "bullet-point",
            value: [
              "Matériel utilisé : GPU (NVIDIA A100) et TPU (Google TPUv4) pour des calculs intensifs.",
              "Impact de la taille du modèle : Plus un modèle est volumineux, plus il consomme.",
              "GPT-3 : 175 milliards de paramètres ; coût estimé à 4,6 millions de dollars.",
              "GPT-4 : Plus de 100 millions de dollars pour son entraînement."
            ]
          },
          {
            id: "text13",
            type: "text",
            value: "*Optimisations*"
        },
        {
            id: "bullet5",
            type: "bullet-point",
            value: [
              "Fine-tuning de modèles existants pour réduire les coûts."
            ]
          },
          {
            id: "text14",
            type: "text",
            value: "*Consommation énergétique*"
        },
        {
            id: "bullet6",
            type: "bullet-point",
            value: [
              "Entraînement d’un modèle GPT-3 : 1 287 MWh, soit 154 440 $ (à 0,12 $/kWh)."
            ]
          },
          {
            id: "subtitle3",
            type: "subtitle",
            value: "Coûts des Données"
          },
          {
            id: "text15",
            type: "text",
            value: "*Sources :*"
        },
        {
            id: "bullet7",
            type: "bullet-point",
            value: [
              "Gratuites : Bases publiques (Wikipedia, Common Crawl).",
              "Payantes : Données commerciales (Factiva, Elsevier)."
            ]
          },
          {
            id: "text16",
            type: "text",
            value: "*Traitement et stockage :*"
        },
        {
            id: "bullet8",
            type: "bullet-point",
            value: [
              "Annotation manuelle : Environ 20 000 $ à 50 000 $ pour 100 heures de travail.",
              "Stockage annuel pour 570 To : 157 320 $ sur AWS ou Google Cloud."
            ]
          },
          {
            id: "text17",
            type: "text",
            value: "Comprendre les coûts et l’impact environnemental des modèles d’IA permet de mieux gérer les ressources et d’adopter des pratiques durables et responsables. Cela favorise non seulement la rentabilité, mais également une réduction de l’empreinte carbone globale."
        },
        {
            id: "link-lesson",
            type: "link-lesson",
            value: "Dans le prochain chapitre nous aborderons la ",
            linkText: "Réduction de l’empreinte carbone des IA.",
            nextLessonId: "lesson2"
        }
    ],
    quiz: [
        {
            question: "Quel est l’impact environnemental principal des systèmes d’IA générative ?",
            options: [
                "Ils consomment peu d'énergie mais utilisent beaucoup de données.",
                "Ils génèrent une empreinte carbone significative en raison de leur consommation énergétique.",
                "Ils n’ont aucun impact environnemental grâce à l’optimisation des modèles.",
                "Ils n’utilisent que des sources de données renouvelables."
            ],
            correct: "Ils génèrent une empreinte carbone significative en raison de leur consommation énergétique.",
            explanation: "Les systèmes d'IA consomment d'importantes quantités d'énergie, entraînant une empreinte carbone notable, notamment lors de l'entraînement des modèles."
        },
        {
            question: "Quel outil peut être utilisé pour mesurer les émissions de CO₂ générées par un modèle IA ?",
            options: [
                "AWS Tracker",
                "CodeCarbon",
                "Google Compute Analyzer",
                "ML Efficiency Monitor"
            ],
            correct: "CodeCarbon",
            explanation: "CodeCarbon permet de suivre les émissions de CO₂ générées par les modèles d’IA et de mieux comprendre leur impact environnemental."
        },
        {
            question: "Quelle optimisation permet de réduire les coûts d’entraînement des modèles IA ?",
            options: [
                "Entraîner des modèles plus volumineux.",
                "Utiliser uniquement des bases de données payantes.",
                "Effectuer un fine-tuning de modèles existants.",
                "Augmenter les itérations d’entraînement pour garantir la qualité."
            ],
            correct: "Effectuer un fine-tuning de modèles existants.",
            explanation: "Le fine-tuning permet d’adapter des modèles existants à des tâches spécifiques, réduisant ainsi les coûts et la consommation énergétique."
        },
        {
            question: "Quel est un exemple de coût lié aux données pour les modèles d’IA ?",
            options: [
                "La consommation énergétique des GPU.",
                "L’annotation manuelle des données, pouvant coûter jusqu’à 50 000 $ pour 100 heures.",
                "Le développement de modèles personnalisés.",
                "L’entraînement sur des clusters."
            ],
            correct: "L’annotation manuelle des données, pouvant coûter jusqu’à 50 000 $ pour 100 heures.",
            explanation: "L’annotation manuelle représente un coût significatif dans le processus de préparation des données pour les modèles d’IA."
        }
    ]



};

export default lesson1;