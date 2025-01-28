const lesson1 = {
    id: "lesson1",
    status: "Terminé",
    role: "L&D",
    title: "Créer des questionnaires efficaces pour identifier les besoins de formation",
    description: "Découvrez comment l’IA peut vous aider à concevoir des questionnaires clairs et pertinents pour recueillir les besoins de formation des collaborateurs.",
    content: [
      {
        id: "link-course",
        type: "link",
        value: "Ce chapitre est la première partie de notre cours : ",
        linkText: "Optimiser la formation en entreprise grâce à l’IA.",
        courseId: "course2"
      },
      {
        id: "text1",
        type: "text",
        value: "La création d’un questionnaire bien conçu est une étape essentielle pour identifier avec précision les besoins de formation des collaborateurs. Cette démarche, souvent sous-estimée, conditionne la pertinence des réponses obtenues et leur utilité dans la planification des actions de formation."
      },
      {
        id: "text2",
        type: "text",
        value: "Les défis sont multiples : "
      },
      {
        id: "bullet1",
        type: "bullet-point",
        value: [
          "Formuler des questions claires et non biaisées",
          "Équilibrer le contenu entre questions ouvertes et fermée",
          "Adapter le questionnaire aux différents publics cibles"
        ]
      },
      {
        id: "text3",
        type: "text",
        value: "Une mauvaise conception peut entraîner des réponses inutilisables, limitant ainsi la capacité des responsables L&D à prendre des décisions éclairées."
      },
      {
        id: "text4",
        type: "text",
        value: "L’IA, à travers des outils comme Copilot, offre une solution efficace pour automatiser et affiner cette étape. Elle permet de gagner du temps tout en garantissant la création de questionnaires adaptés et stratégiquement alignés. Ce cours vous guide dans l’utilisation de l’IA pour concevoir des questionnaires structurés, pertinents et exploitables."
      },
      {
        id: "subtitle1",
        type: "subtitle",
        value: "Pourquoi cette étape est essentielle ?"
      },
      {
        id: "text5",
        type: "text",
        value: "La qualité du questionnaire détermine directement la qualité des réponses obtenues. Un questionnaire bien conçu permet de comprendre précisément les attentes des collaborateurs, d’identifier des besoins communs ou spécifiques, et de prioriser les formations à développer. Sans cette étape, les plans de formation risquent de manquer de pertinence, ce qui peut affecter l’engagement des équipes et le retour sur investissement des programmes."
      },
      {
        id: "subtitle2",
        type: "subtitle",
        value: "Les défis de la conception d’un questionnaire"
      },
      {
        id: "text6",
        type: "text",
        value: "Créer un questionnaire efficace n’est pas une tâche simple. Parmi les principaux défis, on retrouve :"
      },
      {
        id: "bullet2",
        type: "bullet-point",
        value: [
          "Formulation des questions : Trouver un équilibre entre clarté, précision et exhaustivité pour obtenir des réponses exploitables.",
          "Adaptabilité : Conception de questions pertinentes pour différents métiers ou niveaux hiérarchiques.",
          "Engagement : Éviter les questionnaires trop longs ou complexes qui découragent les participants."
        ]
      },
      {
        id: "text7",
        type: "text",
        value: "L’IA peut vous aider à relever ces défis en générant des questions adaptées, en structurant le contenu et en optimisant le format pour maximiser le taux de réponse."
      },
      {
        id: "subtitle3",
        type: "subtitle",
        value: "Les erreurs courantes à éviter"
      },
      {
        id: "text8",
        type: "text",
        value: "Certaines erreurs fréquentes peuvent limiter l’efficacité d’un questionnaire :"
      },
      {
        id: "bullet3",
        type: "bullet-point",
        value: [
          "Questions ambiguës : Elles mènent à des réponses non exploitables. Par exemple, “Quelles formations vous intéressent ?” manque de contexte.",
          "Manque de structure : Un questionnaire désorganisé décourage les répondants.",
          "Absence de variété : Ne pas inclure de questions ouvertes peut restreindre l’expression des besoins spécifiques."
        ]
      },
      {
        id: "text9",
        type: "text",
        value: "Ce cours vous aidera à éviter ces pièges en utilisant l’IA pour structurer et enrichir vos questionnaires."
      },
      {
        id: "subtitle4",
        type: "subtitle",
        value: "Les étapes pour créer un questionnaire avec l’IA"
      },
      {
        id: "text10",
        type: "text",
        value: "*Étape 1 : Définir vos objectifs*"
      },
      {
        id: "text11",
        type: "text",
        value: "Avant de rédiger les questions, identifiez clairement ce que vous souhaitez obtenir du questionnaire. Par exemple :"
      },
      {
        id: "bullet4",
        type: "bullet-point",
        value: [
          "Identifier les compétences manquantes au sein de l’équipe.",
          "Prioriser les sujets de formation pour un département spécifique.",
          "Évaluer l’intérêt pour des formats spécifiques (webinaires, e-learning, ateliers)."
        ]
      },
      {
        id: "text12",
        type: "text",
        value: "*Étape 2 : Créer un prompt clair pour générer les questions*"
      },
      {
        id: "text13",
        type: "text",
        value: "Formulez un prompt précis dans Copilot. Par exemple :"
      },
      {
        id: "prompt1",
        type: "prompt",
        value: "**Crée un questionnaire pour identifier les besoins de formation des collaborateurs dans le domaine de la gestion de projet. Inclue des questions ouvertes et fermées, avec un équilibre entre compétences techniques et comportementales.**"
      },
      {
        id: "text14",
        type: "text",
        value: "Résultat attendu :"
      },
      {
        id: "bullet5",
        type: "bullet-point",
        value: [
          "Section 1 : Compétences techniques",
          "Section 2 : Compétences comportementales",
          "Section 3 : Préférences en termes de format et de durée"
        ]
      },
      {
        id: "text15",
        type: "text",
        value: "*Étape 4 : Tester et ajuster le questionnaire*"
      },
      {
        id: "text16",
        type: "text",
        value: "Avant de le diffuser, testez le questionnaire auprès d’un petit groupe pilote. Demandez-leur si les questions sont claires et s’ils se sentent à l’aise pour y répondre. Utilisez leurs retours pour affiner votre questionnaire."
      },
      {
        id: "text17",
        type: "text",
        value: "*Étape 5 : Finaliser et diffuser*"
      },
     {
        id: "text18",
        type: "text",
        value: "Une fois ajusté, diffusez le questionnaire via les canaux appropriés (email, intranet, plateforme RH) et précisez les délais pour répondre. Incluez un message expliquant l’objectif du questionnaire et l’utilisation des données collectées pour rassurer les répondants."
      },
      {
        id: "subtitle5",
        type: "subtitle",
        value: "Inclure cette méthode dans vos processus actuels"
      },
      {
        id: "text19",
        type: "text",
        value: "Intégrez cette démarche dans vos cycles de planification annuelle ou semestrielle des formations. Automatisez la création des questionnaires pour gagner du temps et garantir leur qualité. Par exemple, créez des modèles standardisés avec l’IA pour des besoins récurrents, que vous pourrez personnaliser pour chaque campagne."
      },
      {
        id: "text20",
        type: "text",
        value: "Un questionnaire bien conçu est le point de départ de tout programme de formation réussi. En utilisant l’IA pour automatiser et affiner cette étape, vous garantissez des retours de qualité, tout en économisant du temps et des ressources. Cette méthode vous permettra de collecter des données exploitables pour concevoir des formations alignées sur les attentes des collaborateurs et les objectifs de l’entreprise."
      },
      {
        id: "link-lesson",
        type: "link-lesson",
        value: "Dans le prochain chapitre nous verrons comment ",
        linkText: "Analyser efficacement les besoins de formation avec l’IA.",
        nextLessonId: "lesson2"
      }
    ],
    quiz: [
      {
        question: "Quel est l’objectif principal d’un questionnaire bien conçu pour identifier les besoins de formation ?",
        options: [
          "Déterminer les préférences des collaborateurs en matière de formation sans analyse approfondie.",
          "Recueillir des données précises et exploitables pour orienter les actions de formation.",
          "Remplir une obligation administrative sans réelle utilité.",
          "Mesurer uniquement le niveau de satisfaction des collaborateurs sur les formations passées."
        ],
        correct: "Recueillir des données précises et exploitables pour orienter les actions de formation.",
        explanation: "Un questionnaire bien structuré permet de collecter des informations pertinentes sur les besoins en compétences des collaborateurs, facilitant ainsi la prise de décision pour le développement des formations."
      },
      {
        question: "Quelle est une erreur courante à éviter lors de la conception d’un questionnaire de formation ?",
        options: [
          "Utiliser une combinaison de questions ouvertes et fermées.",
          "Poser des questions trop génériques et ambiguës.",
          "Structurer le questionnaire en sections logiques.",
          "Tester le questionnaire avant sa diffusion."
        ],
        correct: "Poser des questions trop génériques et ambiguës.",
        explanation: "Des questions mal formulées, comme “Quelles formations vous intéressent ?”, peuvent manquer de contexte et conduire à des réponses inutilisables pour la planification des formations."
      },
      {
        question: "Quelle est la première étape recommandée pour concevoir un questionnaire de formation avec l’IA ?",
        options: [
          "Rédiger immédiatement les questions à poser aux collaborateurs.",
          "Définir clairement les objectifs du questionnaire.",
          "Diffuser le questionnaire à l’ensemble des collaborateurs sans test préalable.",
          "Regrouper toutes les compétences disponibles dans l’entreprise."
        ],
        correct: "Définir clairement les objectifs du questionnaire.",
        explanation: "Avant de rédiger un questionnaire, il est essentiel d’identifier ce que l’on souhaite obtenir, comme identifier les compétences manquantes ou évaluer les formats préférés des collaborateurs."
      },
      {
        question: "Quel est un bon exemple de prompt pour générer un questionnaire efficace avec l’IA ?",
        options: [
          "“Écris un questionnaire sur la formation.”",
          "“Crée un questionnaire pour identifier les besoins de formation des collaborateurs dans le domaine de la gestion de projet, incluant des questions ouvertes et fermées.”",
          "“Trouve des questions pour un sondage aléatoire sur la formation.”",
          "“Rédige un questionnaire très détaillé sur tous les aspects de la formation professionnelle.”"
        ],
        correct: "“Crée un questionnaire pour identifier les besoins de formation des collaborateurs dans le domaine de la gestion de projet, incluant des questions ouvertes et fermées.”",
        explanation: "Un prompt précis et spécifique permet à l’IA de générer des questions pertinentes et adaptées aux besoins réels des collaborateurs, en équilibrant clarté et exhaustivité."
      }
    ]
  };
  
  export default lesson1;