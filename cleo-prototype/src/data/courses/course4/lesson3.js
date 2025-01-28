const lesson3 = {
    id: "lesson3",
    status: "Terminé",
    role: "IT",
    title: "IA & Éthique dans les équipes IT",
    description: "Découvrir comment les équipes IT assurent la sécurité et la transparence des solutions IA.",
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC4-L3.mp4?alt=media&token=afff9fc4-7c34-4faf-bcf0-0073caefe7f7",
    content: [
      {
        id: "link-course",
        type: "link",
        value: "Ce chapitre est la troisième partie de notre cours : ",
        linkText: "IA & Éthique.",
        courseId: "course4"
      },
  
      {
        id: "video1",
        type: "video",
        url: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC4-L3.mp4?alt=media&token=afff9fc4-7c34-4faf-bcf0-0073caefe7f7"
      },
      {
        id: "text1",
        type: "text",
        value: "Les équipes IT jouent un rôle clé dans l’intégration et la sécurisation des solutions d’intelligence artificielle. Elles doivent veiller à ce que les infrastructures techniques soutiennent une IA éthique et respectueuse des réglementations."
      },
      {
        id: "subtitle1",
        type: "subtitle",
        value: "Leur contribution à l’éthique"
      },
      {
        id: "text2",
        type: "text",
        value: "Les ingénieurs IT doivent s’assurer que les systèmes sont conçus pour être transparents, sécurisés et conformes aux exigences légales. Cela inclut des pratiques comme la minimisation des données collectées, le chiffrement des informations sensibles et l’audit régulier des systèmes IA."
      },
      {
        id: "subtitle2",
        type: "subtitle",
        value: "Défis rencontrés"
      },
      {
        id: "text3",
        type: "text",
        value: "Les principaux défis résident dans la gestion des accès, la surveillance des biais algorithmiques et l’assurance que les systèmes restent compréhensibles pour les équipes métiers."
      },
      {
        id: "link-lesson",
        type: "link-lesson",
        value: "Dans le prochain chapitre nous aborderons le thème ",
        linkText: "IA & Éthique dans les consultants",
        nextLessonId: "lesson4"
      }
    ],
    quiz: [
      {
          question: "Quel est le rôle des équipes IT dans l’éthique des solutions IA ?",
          options: [
              "Concevoir des algorithmes pour optimiser la performance.",
              "Assurer la transparence, la sécurité et la conformité réglementaire des solutions IA.",
              "Analyser les tendances du marché pour améliorer les modèles IA.",
              "Gérer uniquement l’aspect matériel des infrastructures IA."
          ],
          correct: "Assurer la transparence, la sécurité et la conformité réglementaire des solutions IA.",
          explanation: "Les équipes IT doivent garantir que les solutions IA respectent les réglementations en vigueur en matière de sécurité et de transparence."
      },
      {
          question: "Quelles sont certaines des pratiques clés pour garantir une IA éthique dans les infrastructures IT ?",
          options: [
              "Minimisation des données collectées, chiffrement des informations sensibles et audits réguliers.",
              "Optimisation des performances des modèles IA en augmentant la collecte de données.",
              "Suppression de toutes les données après chaque traitement IA.",
              "Ignorer les exigences légales pour favoriser l'innovation."
          ],
          correct: "Minimisation des données collectées, chiffrement des informations sensibles et audits réguliers.",
          explanation: "Ces pratiques sont essentielles pour garantir la sécurité et la conformité des solutions IA tout en réduisant les risques de fuites de données."
      },
      {
          question: "Quel est l'un des principaux défis rencontrés par les équipes IT dans la mise en place de solutions IA éthiques ?",
          options: [
              "L’augmentation de la puissance de calcul des infrastructures.",
              "La surveillance des biais algorithmiques et la gestion des accès.",
              "L’automatisation complète des processus sans intervention humaine.",
              "L’amélioration de la vitesse d’exécution des modèles IA."
          ],
          correct: "La surveillance des biais algorithmiques et la gestion des accès.",
          explanation: "Les équipes IT doivent veiller à limiter les biais dans les algorithmes tout en contrôlant l’accès aux systèmes IA pour garantir la sécurité des données."
      },
      {
          question: "Pourquoi est-il important que les systèmes IA restent compréhensibles pour les équipes métiers ?",
          options: [
              "Pour faciliter leur adoption et garantir un usage aligné avec les objectifs de l’entreprise.",
              "Pour permettre aux équipes métiers de modifier les algorithmes en temps réel.",
              "Pour éviter tout besoin de formation supplémentaire pour les utilisateurs finaux.",
              "Pour réduire le coût de maintenance des solutions IA."
          ],
          correct: "Pour faciliter leur adoption et garantir un usage aligné avec les objectifs de l’entreprise.",
          explanation: "Des systèmes compréhensibles permettent aux équipes métiers d’utiliser efficacement l’IA tout en s'assurant de son alignement avec les besoins de l'entreprise."
      }
  ]
  
  };
  
  export default lesson3;