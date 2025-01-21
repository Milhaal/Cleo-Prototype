const lesson1 = {
  id: "lesson1",
  status: "Terminé",
  title: "Questions métier ciblées en entretien grâce à l’IA",
  description: "Apprenez à utiliser l’IA pour concevoir des questions d’entretien ciblées, adaptées aux compétences spécifiques des candidats et aux besoins de chaque poste.",
  videoUrl: "https://www.example.com/job-offer-video.mp4",
  content: [
    {
      id: "link-course",
      type: "link",
      value: "Ce chapitre est la première partie de notre cours : ",
      linkText: "Améliorez vos process de recrutement avec Copilot.",
      courseId: "course1"
    },
    {
      id: "text1",
      type: "text",
      value: "Le recrutement est une étape stratégique pour toute organisation, mais il peut être complexe et chronophage, surtout lorsqu’il s’agit de définir des questions adaptées à des rôles spécifiques. Chaque poste a ses particularités, et les questions génériques ne suffisent pas à évaluer efficacement les compétences techniques et comportementales d'un candidat."
    },
    {
      id: "text2",
      type: "text",
      value: "Aujourd’hui, les équipes RH font face à des défis importants : "
    },
    {
      id: "bullet1",
      type: "bullet-point",
      value: [
        "Un manque de temps pour préparer des entretiens personnalisés",
        "Des attentes élevées des managers",
        "La nécessité d’éviter des biais dans les évaluations"
      ]
    },
    {
      id: "video1",
      type: "video",
      url: "https://www.example.com/job-offer-video.mp4"
    },
    {
      id: "text3",
      type: "text",
      value: "L'intelligence artificielle, à travers des outils comme Copilot, offre une opportunité unique de transformer cette étape clé du recrutement. En exploitant des données précises et des modèles avancés, l'IA peut générer des questions pertinentes et adaptées à chaque rôle, réduisant ainsi la charge de travail tout en augmentant la qualité des évaluations."
    },
    {
      id: "text4",
      type: "text",
      value: "Cependant, pour maximiser son potentiel, il est essentiel de maîtriser l'art du “prompting”, c’est-à-dire la façon dont on interagit avec l'outil pour obtenir des résultats optimaux. Ce cours vous montrera comment intégrer l'IA dans vos processus et éviter les erreurs courantes pour garantir des recrutements réussis."
    },
    {
      id: "subtitle1",
      type: "subtitle",
      value: "Pourquoi ce chapitre est essentiel ?"
    },
    {
      id: "text5",
      type: "text",
      value: "Dans un marché du travail de plus en plus compétitif, recruter les bons talents est une priorité stratégique pour les entreprises. Cependant, poser les bonnes questions lors d’un entretien est un véritable défi, surtout pour des postes spécialisés. Une question mal formulée peut entraîner une évaluation biaisée ou incomplète des compétences d’un candidat. L’IA, comme Copilot, peut jouer un rôle décisif en proposant des questions pertinentes et personnalisées, adaptées aux besoins spécifiques du poste et alignées sur les attentes du manager. Ce chapitre est essentiel car il vous permet de structurer vos entretiens pour identifier les meilleurs candidats tout en gagnant du temps."
    },
    {
      id: "subtitle2",
      type: "subtitle",
      value: "Les enjeux et difficultés du sujet"
    },
    {
      id: "text6",
      type: "text",
      value: "Le principal enjeu est de garantir la pertinence et la qualité des entretiens, tout en répondant à des contraintes de temps et de ressources. Les RH doivent jongler avec des attentes parfois contradictoires : répondre aux besoins des managers, offrir une bonne expérience candidat et maintenir une approche objective et équitable. Par ailleurs, la personnalisation des questions est souvent négligée, menant à des entretiens peu efficaces. L’IA aide à relever ces défis en automatisant la création de questions pertinentes et adaptées, mais elle nécessite une maîtrise des outils pour éviter les biais ou des résultats peu exploitables."
    },
    {
      id: "subtitle3",
      type: "subtitle",
      value: "Erreurs courantes à éviter"
    },
    {
      id: "text7",
      type: "text",
      value: "Certaines erreurs reviennent fréquemment dans la préparation des entretiens. Par exemple, utiliser des questions trop génériques qui ne permettent pas de distinguer les candidats, ou poser des questions techniques sans vérifier leur pertinence pour le rôle. Une autre erreur consiste à se fier aveuglément aux suggestions de l’IA sans les adapter au contexte de l’entreprise. Enfin, ne pas inclure le manager dans la validation des questions peut entraîner des attentes mal alignées entre les parties prenantes. Ce chapitre vous apprend à anticiper ces écueils et à éviter les pièges grâce à une approche structurée."
    },
    {
      id: "subtitle4",
      type: "subtitle",
      value: "Les étapes clés pour utiliser l’IA dans la création de questions"
    },
    {
      id: "text8",
      type: "text",
      value: "*Étape 1 : Identifier les besoins spécifiques du poste*"
    },
    {
      id: "text9",
      type: "text",
      value: "Commencez par une réunion avec le manager ou l’équipe concernée pour définir les compétences techniques et comportementales nécessaires. Notez également les défis particuliers du rôle. Par exemple, pour un poste de “Product Manager”, les besoins pourraient inclure la gestion des délais, la communication avec les parties prenantes et la résolution de conflits."
    },
    {
      id: "text10",
      type: "text",
      value: "*Étape 2 : Préparer un prompt adapté*"
    },
    {
      id: "text11",
      type: "text",
      value: "Utilisez un prompt clair et spécifique dans Copilot pour générer les questions. Exemple de prompt :"
    },
    {
      id: "prompt1",
      type: "prompt",
      value: "**Génère une liste de 10 questions d’entretien pour un poste de Product Manager. Mets l’accent sur la gestion de projets et les compétences en communication. Inclue des questions techniques et comportementales.**"
    },
    {
      id: "text12",
      type: "text",
      value: "Soyez précis sur le type de compétences recherchées pour maximiser la pertinence des suggestions."
    },
    {
      id: "text13",
      type: "text",
      value: "*Étape 3 : Analyser les résultats générés*"
    },
    {
      id: "text14",
      type: "text",
      value: "Examinez les questions proposées par l’outil et identifiez celles qui correspondent le mieux au poste. Par exemple, un résultat potentiel pourrait être :"
    },
    {
      id: "prompt2",
      type: "prompt",
      value: "**Décrivez une situation où vous avez dû prendre une décision critique sous pression. Quels ont été les résultats ?**"
    },
    {
      id: "text15",
      type: "text",
      value: "Ajoutez ou modifiez les questions pour refléter votre contexte d’entreprise."
    },
    {
      id: "text16",
      type: "text",
      value: "*Étape 4 : Ajouter des scénarios ou cas pratiques*"
    },
    {
      id: "text17",
      type: "text",
      value: "Enrichissez les questions en y intégrant des scénarios spécifiques. Exemple :"
    },
    {
      id: "prompt3",
      type: "prompt",
      value: "**Imaginez que vous devez gérer une équipe internationale avec des différences culturelles marquées. Comment adaptez-vous votre communication pour éviter les malentendus ?**"
    },
    {
      id: "text18",
      type: "text",
      value: "*Étape 5 : Valider et partager les questions*"
    },
    {
      id: "text19",
      type: "text",
      value: "Faites valider la liste finale par le manager ou les parties prenantes. Partagez-la ensuite dans un format structuré pour faciliter l’utilisation lors des entretiens."
    },
    {
      id: "subtitle5",
      type: "subtitle",
      value: "Intégrer cette méthode dans vos processus actuels"
    },
    {
      id: "text20",
      type: "text",
      value: "Pour que cette méthode soit efficace, intégrez-la dans votre processus de recrutement standard. Dès qu’un poste est ouvert, planifiez une session avec le manager pour définir les besoins précis. Utilisez ensuite l’IA pour générer les questions et partagez-les pour validation. Cela peut être intégré directement dans un système ATS (Applicant Tracking System) ou dans une procédure manuelle existante. Automatisez cette étape autant que possible pour garantir une préparation rapide et cohérente."
    },
    {
      id: "text21",
      type: "text",
      value: "L’IA n’est pas un substitut, mais un allié dans le processus de recrutement. Elle vous permet de gagner du temps et d’améliorer la qualité de vos entretiens en générant des questions adaptées aux besoins spécifiques de chaque poste. Cependant, il est crucial de bien maîtriser son utilisation pour éviter les erreurs et maximiser son impact. En intégrant ces outils dans vos processus actuels, vous renforcerez non seulement vos capacités d’évaluation, mais aussi la qualité de l’expérience candidat."
    },
    {
      id: "link-lesson",
      type: "link-lesson",
      value: "Dans le prochain chapitre nous verrons comment ",
      linkText: "Rédiger des emails efficaces pour transmettre une étude de cas.",
      nextLessonId: "lesson2"
    }
  ]
};

export default lesson1;