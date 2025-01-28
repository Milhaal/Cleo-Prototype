const lesson3 = {
    id: "lesson3",
    status: "En cours",
    role: "Général",
    title: "Accéder à ChatGPT et configurer vos environnements",
    description: "Apprenez à accéder à ChatGPT, configurer vos environnements et naviguer sur ses différentes interfaces (web, mobile et desktop) pour une utilisation optimisée selon vos besoins.",
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC3-L3.mp4?alt=media&token=b1f68bee-39a2-43d1-be8f-b3f3d2385d7b",
    content: [
      {
        id: "link-course",
        type: "link",
        value: "Ce chapitre est la troisième partie de notre cours : ",
        linkText: "Apprenez à utiliser ChatGPT.",
        courseId: "course3"
      },
      {
        id: "text1",
        type: "text",
        value: "Dans ce chapitre, nous aborderons les sujets suivants :"
      },
      {
        id: "bullet1",
        type: "bullet-point",
        value: [
          "Comprendre l’interface de ChatGPT",
          "Les environnements ChatGPT",
          "Les versions de l’application de bureau et mobile de ChatGPT"
        ]
      },
      {
        id: "video1",
        type: "video",
        url: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC3-L3.mp4?alt=media&token=b1f68bee-39a2-43d1-be8f-b3f3d2385d7b"
      },
      {
        id: "text2",
        type: "text",
        value: "Pour commencer à utiliser ChatGPT, vous devrez créer un compte sur le site web d’OpenAI. Il existe un plan gratuit qui offre un accès limité aux fonctionnalités et modèles. Cependant, si vous souhaitez utiliser les fonctionnalités et modèles les plus avancés, vous devrez vous abonner à (et payer pour) ChatGPT Plus."
      },
      {
        id: "text3",
        type: "text",
        value: "Quelles sont les différences entre le plan gratuit et le plan payant ? Il y a quelques distinctions clés. Avec le plan Plus, vous bénéficiez de :"
      },
      {
        id: "bullet2",
        type: "bullet-point",
        value: [
          "Un quota mensuel de messages plus élevé",
          "Un accès prioritaire pendant les périodes de forte utilisation",
          "Des temps de réponse plus rapides",
          "L’accès au modèle le plus récent et le plus performant"
        ]
      },
      {
        id: "text4",
        type: "text",
        value: "💡 *Astuce* : Il existe également des plans Team et Enterprise pour les entreprises, offrant des services plus robustes autour de la confidentialité des données, de la sécurité et de l’administration des utilisateurs."
      },
      {
        id: "subtitle1",
        type: "subtitle",
        value: "Comprendre l’interface de ChatGPT"
      },
      {
        id: "text5",
        type: "text",
        value: "L’une des choses les plus impressionnantes à propos de ChatGPT est son interface intuitive. Elle est tellement facile à utiliser que nous avons failli ne pas écrire cette section. Cela dit, de nombreuses fonctionnalités ont été ajoutées au fil du temps, alors nous allons passer en revue rapidement les différents composants de l’interface web."
      },
      {
        id: "text6",
        type: "text",
        value: "Pour commencer, connectez-vous à la version web de l’outil. En bas de l’écran, vous verrez un champ de saisie pour discuter avec ChatGPT et télécharger des documents. 99% de votre temps avec ChatGPT sera consacré à l’utilisation de ce composant de l’outil."
      },
      {
        id: "image1",
        type: "image",
        url: "/images/lessons/C3-L3-IMG1.avif",
        alt:""
      },
      {
        id: "text7",
        type: "text",
        value: "La navigation sur la droite est l’endroit où se trouve votre historique de chats ainsi que vos GPTs personnalisés et le magasin GPT. Les GPTs personnalisés sont une fonctionnalité avancée de ChatGPT que nous explorerons plus en détail dans un cours ultérieur. Nous mettrons donc ce sujet de côté pour l’instant, mais ne vous inquiétez pas, nous y reviendrons plus tard dans le cours !"
      },
      {
        id: "text8",
        type: "text",
        value: "Toujours dans la même barre de navigation, sous les GPTs, vous pouvez cliquer sur n’importe lequel de vos chats précédents pour revoir le contenu ou reprendre là où vous en étiez dans votre discussion. Vous pouvez considérer cela comme votre historique de chats."
      },
      {
        id: "image2",
        type: "image",
        url: "/images/lessons/C3-L3-IMG2.avif",
        alt:""
      },
      {
        id: "text9",
        type: "text",
        value: "💡 *Astuce* : Vous pouvez créer une nouvelle fenêtre de chat en cliquant sur l’icône de crayon en haut à gauche de cette fenêtre de navigation."
      },
      {
        id: "text10",
        type: "text",
        value: "Dans le coin supérieur gauche de la fenêtre de chat, vous devriez voir un nom de modèle listé. Comme mentionné dans le chapitre précédent, OpenAI publie régulièrement de nouveaux modèles, plus avancés ou spécialisés dans un ensemble de tâches spécifiques. Pour les besoins de ce cours, vous pouvez souvent laisser le modèle par défaut, que OpenAI présente comme étant “idéal pour la plupart des tâches”."
      },
      {
        id: "image3",
        type: "image",
        url: "/images/lessons/C3-L3-IMG3.avif",
        alt:""
      },
      {
        id: "text11",
        type: "text",
        value: "Enfin, dans le coin supérieur droit de l’outil, vous pouvez cliquer sur votre photo de profil pour accéder à diverses configurations. Comme pour les GPTs personnalisés, nous plongerons dans ces paramètres avancés dans un cours ultérieur, mais il est utile de savoir que les paramètres généraux sont accessibles dans cette section plus discrète de l’application."
      },
      {
        id: "image4",
        type: "image",
        url: "/images/lessons/C3-L3-IMG4.avif",
        alt:""
      },
      {
        id: "subtitle2",
        type: "subtitle",
        value: "Les différents environnements ChatGPT"
      },
      {
        id: "text12",
        type: "text",
        value: "ChatGPT a été lancé initialement comme un outil web, c’est ainsi que beaucoup de gens accèdent encore au produit, mais depuis, l’équipe d’OpenAI a lancé une application iOS, une application Android et une version de bureau macOS."
      },
      {
        id: "text13",
        type: "text",
        value: "Il existe donc désormais trois façons d’accéder à ChatGPT :"
      },
      {
        id: "bullet3",
        type: "bullet-point",
        value: [
          "ChatGPT sur le web",
          "Application mobile ChatGPT (iOS et Android)",
          "Application de bureau ChatGPT"
        ]
      },
      {
        id: "text14",
        type: "text",
        value: "Nous allons principalement travailler sur la version web de ChatGPT tout au long du reste de ce cours, car elle est la plus accessible et la plus complète. Avant de plonger dans des cas d’utilisation spécifiques avec l’outil, voyons ce que c’est que d’utiliser les applications mobile ou de bureau par rapport à la version web."
      },

      {
        id: "subtitle3",
        type: "subtitle",
        value: "Les fonctionnalités des versions desktop et mobile de ChatGPT"
      },
      {
        id: "text15",
        type: "text",
        value: "Les versions desktop et mobile de ChatGPT offrent des fonctionnalités puissantes. Cependant, certaines différences notables peuvent affecter la façon dont vous utilisez l’outil en fonction de l’endroit où vous y accédez. Voyons ce que les applications mobile et desktop offrent en plus de l’expérience principale sur le web."
      },
      {
        id: "text16",
        type: "text",
        value: "*Desktop* : Bien que les deux plateformes vous permettent d’interagir avec ChatGPT, l’interface utilisateur sur desktop offre un peu plus d’espace pour des interactions complexes, comme la révision de longues conversations, la gestion de documents ou l’utilisation de la plateforme pour des tâches détaillées telles que la rédaction de rapports ou le codage."
      },
      {
        id: "image5",
        type: "image",
        url: "/images/lessons/C3-L3-IMG5.avif",
        alt:""
      },
      {
        id: "text17",
        type: "text",
        value: "*Application mobile* : L’application mobile est conçue pour un accès rapide et en déplacement. Si vous avez besoin de demander rapidement une recommandation, de résumer une réunion ou de générer une réponse pendant que vous êtes entre deux rendez-vous, l’application mobile est idéale."
      },
      {
        id: "image6",
        type: "image",
        url: "/images/lessons/C3-L3-IMG6.avif",
        alt:""
      },
      {
        id: "text17",
        type: "text",
        value: "Que vous utilisiez l’application desktop ou mobile, vos conversations sont synchronisées sur toutes les plateformes. Cela signifie que vous pouvez commencer une conversation sur votre desktop, puis la reprendre sur votre téléphone pendant vos trajets, et continuer la discussion sans accroc."
      },
      {
        id: "subtitle4",
        type: "subtitle",
        value: "Fonctionnalité de la note vocale (exclusivité des applications mobile et desktop)"
      },
      {
        id: "text18",
        type: "text",
        value: "La fonctionnalité vocale de l’application mobile et desktop de ChatGPT est un atout majeur. Elle est particulièrement utile lorsque vous êtes en déplacement, car elle vous permet de poser des questions ou de donner des commandes à ChatGPT sans avoir à taper. Il existe deux façons d’utiliser la voix dans les applications ChatGPT :"
      },
      {
        id: "text19",
        type: "text",
        value: "*Microphone* : Il s’agit d’une transcription de la voix en texte. Tapez sur l’icône du microphone à côté de la barre de texte et dites ce que vous voulez à haute voix. ChatGPT transcrira votre note vocale en une invite de texte et générera une réponse."
      },
      {
        id: "image7",
        type: "image",
        url: "/images/lessons/C3-L3-IMG7.avif",
        alt:""
      },
      {
        id: "text20",
        type: "text",
        value: "*Mode vocal* : Pour activer le mode vocal, appuyez sur l’icône des écouteurs à côté de l’icône du microphone. En mode vocal, vous pouvez discuter avec ChatGPT de manière plus conversationnelle. Cela est particulièrement utile lorsque vous êtes en déplacement ou si vous souhaitez une expérience de brainstorming en temps réel. Actuellement, le mode vocal avancé n’a pas accès aux instructions personnalisées et ne peut pas créer de mémoires."
      },
      {
        id: "image8",
        type: "image",
        url: "/images/lessons/C3-L3-IMG8.avif",
        alt:""
      },
      {
        id: "text21",
        type: "text",
        value: "Dans l’ensemble, les fonctionnalités vocales de ChatGPT sont idéales pour :"
      },
      {
        id: "bullet4",
        type: "bullet-point",
        value: [
          "Le multitâche - que vous conduisiez, fassiez de l’exercice ou soyez dans des situations où vous ne pouvez pas vous asseoir et taper.",
          "Capturer des pensées ou des idées fugaces que vous pourriez autrement oublier.",
          "Le brainstorming, lorsque vous avez de grandes idées mais avez du mal à les taper."
        ]
      },
      {
        id: "subtitle5",
        type: "subtitle",
        value: "Limitations des applications mobile et desktop"
      },
      {
        id: "text22",
        type: "text",
        value: "Bien que l’application mobile soit idéale pour des tâches rapides et des interactions vocales, il existe certaines tâches pour lesquelles la version desktop ou web reste supérieure. Par exemple, des projets plus complexes impliquant plusieurs documents ou des recherches détaillées, des tâches comme le codage ou la création de rapports détaillés, ou tout ce qui nécessite une interaction approfondie avec de longs textes sont mieux adaptés à la version desktop ou web, où vous avez plus d’espace pour naviguer entre les documents, les conversations et les saisies."
      },

      {
        id: "text23",
        type: "text",
        value: "De plus, vous ne pouvez pas créer de GPTs personnalisés depuis les applications mobile ou desktop. Comme mentionné plus tôt, il s’agit d’une fonctionnalité avancée que nous aborderons dans un cours ultérieur du programme."
      },
      {
        id: "link-lesson",
        type: "link-lesson",
        value: "Dans le prochain chapitre nous verrons comment ",
        linkText: "Utiliser ChatGPT pour les tâches personnelles au quotidien.",
        nextLessonId: "lesson4"
      }
    ],
    quiz: [
        {
            question: "Quelle est la principale différence entre le plan gratuit et le plan ChatGPT Plus ?",
            options: [
                "Le plan gratuit offre toutes les fonctionnalités avancées sans limitation.",
                "Le plan ChatGPT Plus donne accès au modèle le plus récent, des temps de réponse plus rapides et un accès prioritaire.",
                "Le plan gratuit permet l'utilisation de la version mobile et desktop sans restrictions.",
                "Le plan ChatGPT Plus est uniquement disponible pour les entreprises."
            ],
            correct: "Le plan ChatGPT Plus donne accès au modèle le plus récent, des temps de réponse plus rapides et un accès prioritaire.",
            explanation: "Le plan Plus offre des avantages comme l'accès au modèle le plus performant, des temps de réponse améliorés et une disponibilité prioritaire en période de forte demande."
        },
        {
            question: "Quel est le principal avantage de l'application mobile de ChatGPT ?",
            options: [
                "Elle permet de gérer plusieurs documents en même temps.",
                "Elle est idéale pour des interactions rapides et la transcription vocale en déplacement.",
                "Elle offre une interface plus complète que la version web.",
                "Elle permet de créer des GPTs personnalisés directement depuis l'application."
            ],
            correct: "Elle est idéale pour des interactions rapides et la transcription vocale en déplacement.",
            explanation: "L'application mobile est conçue pour un accès rapide, permettant aux utilisateurs de poser des questions à la volée et d'utiliser des fonctionnalités vocales pour plus de flexibilité."
        },
        {
            question: "Où pouvez-vous consulter l'historique de vos conversations sur l'interface web de ChatGPT ?",
            options: [
                "Dans le coin supérieur gauche de la fenêtre de chat.",
                "Dans la barre de navigation à droite de l'écran.",
                "Dans les paramètres avancés accessibles en haut à droite.",
                "Dans un menu caché accessible via un raccourci clavier."
            ],
            correct: "Dans la barre de navigation à droite de l'écran.",
            explanation: "L'historique des chats est stocké dans la barre de navigation à droite, où vous pouvez consulter et reprendre vos anciennes discussions."
        },
        {
            question: "Quelle est une limitation actuelle des applications mobile et desktop de ChatGPT ?",
            options: [
                "Elles ne permettent pas d'accéder aux modèles les plus récents.",
                "Elles ne prennent pas en charge les interactions vocales.",
                "Elles ne permettent pas de créer des GPTs personnalisés.",
                "Elles ne permettent pas la synchronisation des conversations entre les appareils."
            ],
            correct: "Elles ne permettent pas de créer des GPTs personnalisés.",
            explanation: "Actuellement, la création de GPTs personnalisés est uniquement disponible sur la version web de ChatGPT, offrant plus de flexibilité et d'options avancées."
        }
    ]
  };
  
  export default lesson3;