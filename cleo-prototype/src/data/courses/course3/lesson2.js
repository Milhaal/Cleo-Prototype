const lesson2 = {
    id: "lesson2",
    status: "Terminé",
    role: "Général",
    title: "Comment fonctionne ChatGPT",
    description: "Comment ChatGPT génère des réponses grâce à l’IA générative, ses différentes versions et ses fonctionnalités avancées.",
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC3-L2.mp4?alt=media&token=452cdac8-59b1-4cc4-ab8d-b6cceda36d7d",
    content: [
      {
        id: "link-course",
        type: "link",
        value: "Ce chapitre est la deuxième partie de notre cours : ",
        linkText: "Apprenez à utiliser ChatGPT.",
        courseId: "course3"
      },
      {
        id: "text1",
        type: "text",
        value: "Ce chapitre explique comment ChatGPT génère des réponses grâce à l’IA générative, ses différentes versions et ses fonctionnalités avancées."
      },
      {
        id: "bullet1",
        type: "bullet-point",
        value: [
          "Qu’est-ce que l’IA générative ?",
          "Que se passe-t-il lorsque vous posez une question à ChatGPT ?",
          "Est-ce toujours précis ?",
          "ChatGPT peut-il faire autre chose que générer du texte ?",
          "Pourquoi existe-t-il plusieurs modèles au sein de ChatGPT ?",
          "Comment ChatGPT se compare-t-il aux autres assistants IA ?"
        ]
      },
      {
        id: "video1",
        type: "video",
        url: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC3-L2.mp4?alt=media&token=452cdac8-59b1-4cc4-ab8d-b6cceda36d7d"
      },
      {
        id: "text2",
        type: "text",
        value: "Dans le chapitre précédent, nous avons appris que les LLM comme ChatGPT sont “enseignés” grâce au machine learning, le processus technologique impliqué dans l’entrée des données. Mais qu’en est-il de la sortie ? Comment ChatGPT formule-t-il ses réponses ?"
      },
      {
        id: "text3",
        type: "text",
        value: "La réponse réside dans une technologie appelée *IA générative.*"
      },
      {
        id: "subtitle1",
        type: "subtitle",
        value: "Qu’est-ce que l’IA générative ?"
      },
      {
        id: "text4",
        type: "text",
        value: "Alors que le machine learning et le deep learning se concentrent sur la compréhension et l’interprétation des données, l’IA générative va un pas plus loin en créant de nouvelles données qui imitent l’original de manière innovante. C’est un peu comme un chef qui crée de nouveaux plats en se basant sur ce qu’il a appris de ses formations et des recettes étudiées."
      },
      {
        id: "text5",
        type: "text",
        value: "L’IA générative est utilisée pour diverses applications créatives et pratiques, comme la génération d’images réalistes, de vidéos, et de textes pour les chatbots et assistants virtuels, la création de nouveaux environnements de jeux vidéo, et bien plus encore."
      },
      {
        id: "subtitle2",
        type: "subtitle",
        value: "Alors, que se passe-t-il en coulisses lors d’une interaction avec ChatGPT ?"
      },
      {
        id: "text6",
        type: "text",
        value: "Lorsque vous tapez une question dans ChatGPT et qu’il répond, plusieurs processus fonctionnent en tandem pour que tout fonctionne correctement :"
      },
      {
        id: "bullet2",
        type: "bullet-point",
        value: [
          "Vous tapez votre question, par exemple : “Quel a été le rôle d’Isaac Newton dans le développement de la mécanique classique ?”",
          "ChatGPT utilise un processus appelé traitement du langage naturel (NLP) pour comprendre la signification, le contexte et l’intention derrière la question.",
          "ChatGPT utilise ensuite la récupération de connaissances pour localiser les informations les plus pertinentes dans ses données d’entraînement et formuler une réponse.",
          "Une fois que ChatGPT a rassemblé les informations nécessaires, il utilise un processus appelé “génération de langage” ou “génération de texte” (c’est ici que l’IA générative intervient) pour créer une réponse cohérente et significative."
        ]
      },
      {
        id: "subtitle3",
        type: "subtitle",
        value: "Est-ce toujours précis ?"
      },
      {
        id: "text7",
        type: "text",
        value: "Les LLM ont été largement formés, ce qui signifie qu’ils sont impressionnamment corrects la plupart du temps. Mais ils ne sont pas à 100% fiables."
      },
      {
        id: "text8",
        type: "text",
        value: "Parfois, l’IA peut produire une réponse erronée ou trompeuse. Cela s’appelle une hallucination, et cela peut être causé par :"
      },
      {
        id: "bullet3",
        type: "bullet-point",
        value: [
          "Une question ambiguë, qui pousse l’IA à faire des hypothèses incorrectes.",
          "Des limitations dans les connaissances de l’IA, notamment si les informations requises sont absentes de ses données d’entraînement.",
          "Un manque de contexte.",
          "Les contraintes inhérentes à la conception de l’IA, comme l’incapacité d’accéder à des informations actuelles ou de comprendre des contextes au-delà de la date limite de son entraînement."
        ]
      },
      {
        id: "subtitle4",
        type: "subtitle",
        value: "ChatGPT peut-il faire autre chose que générer du texte ?"
      },
      {
        id: "text9",
        type: "text",
        value: "ChatGPT n’est pas juste un générateur de texte. Il est équipé de plusieurs outils puissants qui vous aident à accomplir des tâches bien au-delà de la création de contenu textuel. Voyons chacun d’eux :"
      },
      {
        id: "text10",
        type: "text",
        value: "*Génération d’images avec DALL-E*"
      },
      {
        id: "text11",
        type: "text",
        value: "DALL-E est le modèle de génération d’images d’OpenAI, intégré nativement à ChatGPT. Il repose sur un modèle de transformer comme GPT, mais au lieu de générer du texte, il produit des images à partir de descriptions textuelles. Il a été formé sur des ensembles de données massifs d’images et de légendes, apprenant à générer de nouvelles visuels en fonction de votre demande. En utilisant DALL-E, le modèle convertit le texte en une représentation latente d’une image, qui est ensuite rendue dans différents styles ou formats."
      },
      {
        id: "text12",
        type: "text",
        value: "Avec DALL-E, vous pouvez générer des images personnalisées à partir de descriptions textuelles. Que ce soit pour des illustrations de blogs, des supports marketing ou des visuels créatifs, DALL-E génère des images de haute qualité en quelques secondes. Tapez simplement votre idée, et le modèle s’occupe du reste."
      },
      {
        id: "text13",
        type: "text",
        value: "*Navigation sur le web*"
      },
      {
        id: "text14",
        type: "text",
        value: "La navigation sur le web utilise des techniques liées à la génération augmentée par récupération (RAG). Lorsque ChatGPT navigue sur le web, il récupère du contenu pertinent à partir de sources en temps réel et l’intègre dans ses réponses. Le cadre RAG lui permet d’abord de collecter des informations, puis de générer une réponse plus précise et actualisée en fonction de ces données. Cette étape de récupération est cruciale pour fournir des informations actuelles ou des informations absentes de ses données d’entraînement."
      },
      {
        id: "text15",
        type: "text",
        value: "C’est idéal pour la recherche de marché, l’analyse de la concurrence ou la consultation des dernières actualités, le tout sans quitter votre fenêtre de chat."
      },
      {
        id: "text16",
        type: "text",
        value: "*Interpréteur de code et analyse de données*"
      },
      {
        id: "text17",
        type: "text",
        value: "L’interpréteur de code exécute des scripts Python dans un environnement isolé. C’est un type de “calcul interactif” où vos entrées déclenchent l’exécution en temps réel des scripts. Cette fonctionnalité permet de relier le langage naturel à la programmation, permettant à ChatGPT de manipuler des données, analyser des ensembles de données et générer des visualisations. Il fonctionne comme un IDE léger au sein de l’interface de chat, vous permettant d’utiliser Python pour des tâches telles que l’analyse statistique, la création de graphiques, et plus encore."
      },
      {
        id: "text18",
        type: "text",
        value: "Que vous soyez en train de traiter des chiffres ou de créer des scripts, ChatGPT peut vous aider à simplifier votre flux de travail avec ses compétences d’interprétation de code."
      },
      {
        id: "text19",
        type: "text",
        value: "💡 *Astuce* : Si vous souhaitez invoquer explicitement la génération d’images, la recherche web ou des capacités avancées de raisonnement, vous pouvez taper un slash “/” dans le champ de saisie de ChatGPT et sélectionner l’une de ces actions avancées. Nous y reviendrons dans un prochain cours !"
      },
      {
        id: "text20",
        type: "text",
        value: "*Canvas*"
      },
      {
        id: "text21",
        type: "text",
        value: "Vous pouvez également interagir avec ChatGPT via un espace de travail interactif appelé “GPT-4o avec canvas”. Canvas est un espace de travail modifiable qui apparaît à côté de l’interface traditionnelle de chat de ChatGPT. Il est optimisé pour les tâches d’écriture et de programmation et vous permet de créer du contenu plus poli dans un document modifiable."
      },
      {
        id: "text22",
        type: "text",
        value: "Vous pouvez intervenir et modifier directement la génération initiale de ChatGPT dans Canvas, surligner du contenu pour que ChatGPT le réécrive ou l’explique, ou même travailler avec des actions en un clic pour que ChatGPT raccourcisse, allonge ou peaufine le document. Si vous êtes familier avec Claude Artifacts, c’est la réponse d’OpenAI à cela. Nous trouvons que c’est une expérience plus collaborative que celle d’Artifacts et, peut-être, un aperçu de l’avenir de l’expérience utilisateur des assistants IA."
      },
      {
        id: "subtitle5",
        type: "subtitle",
        value: "Pourquoi existe-t-il plusieurs modèles au sein de ChatGPT ?"
      },
      {
        id: "text23",
        type: "text",
        value: "Vous avez peut-être remarqué qu’il existe différentes versions de modèles au sein de ChatGPT, comme GPT-4o, GPT-o1, ou GPT-o1-mini. Mais pourquoi autant de modèles ? Tout cela est lié à la performance, à la spécialisation et à l’efficacité. Voici un aperçu rapide :"
      },
      {
        id: "text24",
        type: "text",
        value: "*GPT-4o*"
      },
      {
        id: "text25",
        type: "text",
        value: "C’est le modèle de base de la famille GPT, optimisé pour la rapidité et l’efficacité sans sacrifier la qualité des réponses. GPT-4o est une version plus légère et plus rapide de GPT-4, conçu pour gérer la plupart des tâches quotidiennes à moindre coût (ce qui est particulièrement pertinent si vous utilisez l’API), tout en délivrant des réponses de qualité. C’est le modèle à privilégier pour des performances fiables sur des tâches générales."
      },
      {
        id: "text26",
        type: "text",
        value: "*GPT-o1*"
      },
      {
        id: "text27",
        type: "text",
        value: "Lorsque vous avez besoin de plus de précision ou que vous avez des tâches très complexes, GPT-o1 est une étape au-dessus. Il dispose d’une architecture de chaîne de pensée intégrée (nous expliquerons cela plus en détail dans un prochain cours), ce qui lui permet de gérer des contextes plus profonds, un raisonnement plus nuancé et des conversations plus longues sans perdre le fil. En résumé, il est conçu pour des situations où la qualité et la compréhension sont primordiales, mais il est un peu plus lent que GPT-4o."
      },
      {
        id: "text28",
        type: "text",
        value: "*GPT-o1-mini*"
      },
      {
        id: "text29",
        type: "text",
        value: "Ce modèle équilibre puissance et efficacité. Pensez à GPT-o1-mini comme une solution de niveau intermédiaire pour lorsque vous n’avez pas besoin de toute la puissance de GPT-o1, mais que vous souhaitez un raisonnement et une mémoire supérieurs à GPT-4o. Il est plus efficace pour des tâches nécessitant une complexité intermédiaire, comme l’analyse de données ou la génération de contenu légèrement plus technique."
      },
      {
        id: "text30",
        type: "text",
        value: "Les différents modèles existent pour répondre à des besoins variés, que ce soit la rapidité, le coût ou la complexité. Parfois, vous avez besoin de réponses ultra-rapides, d’autres fois, la précision et la profondeur sont plus importantes. En offrant cette gamme, ChatGPT peut s’adapter à votre cas d’utilisation spécifique. Cela dit, pour la plupart des cas d’usage, GPT-4o est amplement suffisant."
      },
      {
        id: "subtitle6",
        type: "subtitle",
        value: "En quoi ChatGPT est-il différent des autres assistants IA ?"
      },
      {
        id: "text31",
        type: "text",
        value: "Bien que ChatGPT partage de nombreuses capacités avec d’autres assistants IA comme Claude, il existe souvent des distinctions :"
      },
      {
        id: "bullet4",
        type: "bullet-point",
        value: [
          "Qualité du modèle : Au fur et à mesure que de nouveaux modèles sont publiés, la meilleure performance peut varier. Lorsque GPT-4 a été lancé, c’était le modèle le plus performant, mais le modèle Sonnet 3.5 de Claude semble avoir pris le dessus pour certaines tâches spécifiques. Le modèle leader semble changer chaque mois, mais la gamme GPT d’OpenAI est toujours au sommet de la liste.",
          "Fonctionnalités : ChatGPT offre une riche gamme de fonctionnalités, notamment l’analyse et la génération d’images, la génération de code, les GPT personnalisés, la mémoire, la navigation web, et plus encore. Bien que Claude et d’autres chatbots IA offrent de nombreuses fonctionnalités similaires, ChatGPT propose actuellement une suite plus complète. Cependant, cet écart se réduit, car de nouvelles fonctionnalités sont continuellement ajoutées à tous les assistants.",
          "Plateforme : ChatGPT est disponible en version web, application mobile et application de bureau – et propose des fonctionnalités avancées multi-modales comme le mode vocal. Si vous recherchez une expérience cohérente et puissante sur tous les appareils, ChatGPT est un excellent choix. Cependant, d’autres plateformes comme Claude rattrapent leur retard dans ce domaine, en lançant également leur propre gamme d’applications natives.",
          "ChatGPT est guidé par son propre ensemble de principes et de lignes directrices, qui peuvent différer de ceux des autres modèles IA, entraînant des sorties et des comportements variés."
        ]
      },
      {
        id: "link-lesson",
        type: "link-lesson",
        value: "Dans le prochain chapitre nous verrons comment ",
        linkText: "Accéder à ChatGPT et configurer vos environnements.",
        nextLessonId: "lesson3"
      }
    ],
    quiz: [
        {
            question: "Qu’est-ce que l’IA générative ?",
            options: [
                "Une technologie permettant uniquement d’analyser des données existantes.",
                "Une technologie capable de créer du contenu original basé sur des données d’entraînement.",
                "Un outil de gestion de données structuré pour les entreprises.",
                "Une technique utilisée pour améliorer la vitesse de traitement des ordinateurs."
            ],
            correct: "Une technologie capable de créer du contenu original basé sur des données d’entraînement.",
            explanation: "L'IA générative ne se contente pas d'analyser des données existantes, elle peut créer de nouveaux contenus comme du texte, des images ou du code en s'inspirant des données d'entraînement."
        },
        {
            question: "Que se passe-t-il lorsque vous posez une question à ChatGPT ?",
            options: [
                "Il recherche instantanément les réponses sur Internet.",
                "Il analyse la question via le traitement du langage naturel, récupère des informations pertinentes et génère une réponse.",
                "Il compare la question à une base de données prédéfinie et affiche la réponse la plus proche.",
                "Il se réfère uniquement à des sources vérifiées fournies par OpenAI."
            ],
            correct: "Il analyse la question via le traitement du langage naturel, récupère des informations pertinentes et génère une réponse.",
            explanation: "ChatGPT utilise le traitement du langage naturel (NLP) pour comprendre la question, recherche dans ses données d'entraînement et génère une réponse adaptée en utilisant l'IA générative."
        },
        {
            question: "Pourquoi ChatGPT peut-il produire des réponses erronées ou trompeuses ?",
            options: [
                "Parce qu’il ne peut pas comprendre les questions posées par les utilisateurs.",
                "En raison de questions ambiguës, de limitations dans ses données d'entraînement et d'un manque de contexte.",
                "Parce qu’il est limité aux informations disponibles sur Internet.",
                "Parce qu’il ne peut traiter que des données structurées."
            ],
            correct: "En raison de questions ambiguës, de limitations dans ses données d'entraînement et d'un manque de contexte.",
            explanation: "Les erreurs, appelées hallucinations, peuvent survenir lorsque la question est mal formulée, que l’IA manque d’informations ou qu'elle ne dispose pas du contexte nécessaire pour fournir une réponse précise."
        },
        {
            question: "Quels sont les autres outils intégrés à ChatGPT en plus de la génération de texte ?",
            options: [
                "La navigation web, la génération d’images et l’interprétation de code.",
                "La gestion de bases de données, la création de sites web et la maintenance de logiciels.",
                "La reconnaissance vocale, la traduction en temps réel et la vérification grammaticale.",
                "Le support technique, la programmation assistée et l’analyse du marché."
            ],
            correct: "La navigation web, la génération d’images et l’interprétation de code.",
            explanation: "ChatGPT propose plusieurs outils avancés, comme la navigation web en temps réel, la création d’images avec DALL-E et l’interprétation de code en Python."
        }
    ]
  };
  
  export default lesson2;