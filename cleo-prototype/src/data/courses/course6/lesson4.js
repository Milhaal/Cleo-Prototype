const lesson4 = {
    id: "lesson4",
    status: "Pas commencé",
    role: "RSE",
    title: "Vérification de l’éthique et de la neutralité des prompts",
    description: "Apprenez à garantir que vos prompts respectent les standards éthiques",
    content: [
        {
            id: "link-course",
            type: "link",
            value: "Ce chapitre est la dernière partie de notre cours : ",
            linkText: "Principes d’un prompt responsable.",
            courseId: "course6"
        },
        {
            id: "text1",
            type: "text",
            value: "En plus des outils techniques permettant d’optimiser la qualité des prompts, il est crucial de veiller à ce qu’un prompt ne génère pas de résultats *discriminatoires* ou *partiaux*. Voici des outils pour vérifier les implications éthiques des prompts :"
        },
        {
            id: "subtitle1",
            type: "subtitle",
            value: "Ethical AI Frameworks"
        },
        {
            id: "text2",
            type: "text",
            value: "*Description *"
        },
        {
            id: "text3",
            type: "text",
            value: "Certains outils comme le *Google AI Ethics Review Framework* ou l’*IBM AI Ethics Toolkit* permettent de vérifier les pratiques éthiques des prompts utilisés. Ces outils incluent des modèles pour analyser l'impact social, culturel et politique des résultats générés."
        },
        {
            id: "text4",
            type: "text",
            value: "*Exemple d’utilisation*"
        },

        {
            id: "text5",
            type: "text",
            value: "Un prompt utilisé pour rédiger des recommandations dans le domaine de la justice peut être testé à l’aide de ces outils pour vérifier qu'il ne crée pas de *discrimination raciale* ou *de genre.*"
        },

        {
            id: "link-course2",
            type: "link",
            value: "Merci d'avoir suivi ce cours sur les",
            linkText: "Principes d’un prompt responsable.",
            courseId: "course6"
        },
    ],
    quiz: [
        {
            question: "Quel est l'objectif principal des frameworks éthiques d'IA comme le Google AI Ethics Review Framework ou l'IBM AI Ethics Toolkit ?",
            options: [
                "Accélérer la génération de réponses IA.",
                "Analyser l'impact social, culturel et politique des prompts et des résultats générés.",
                "Automatiser la reformulation des prompts biaisés.",
                "Créer des modèles d'entraînement plus rapides."
            ],
            correct: "Analyser l'impact social, culturel et politique des prompts et des résultats générés.",
            explanation: "Ces frameworks permettent de garantir que les prompts et leurs résultats respectent des standards éthiques en évaluant leur impact potentiel."
        },
        {
            question: "Pourquoi est-il important de vérifier l'éthique et la neutralité des prompts ?",
            options: [
                "Pour éviter des résultats discriminatoires ou partiaux.",
                "Pour améliorer la vitesse de traitement des modèles IA.",
                "Pour limiter l'utilisation des outils IA.",
                "Pour générer uniquement des réponses fermées."
            ],
            correct: "Pour éviter des résultats discriminatoires ou partiaux.",
            explanation: "Assurer l'éthique et la neutralité des prompts est essentiel pour éviter de propager des discriminations ou des biais à travers les réponses générées."
        },
        {
            question: "Comment les Ethical AI Frameworks peuvent-ils être utilisés dans le domaine de la justice ?",
            options: [
                "En vérifiant qu'un prompt ne génère pas de discrimination raciale ou de genre.",
                "En générant des recommandations automatiques sans besoin de vérification.",
                "En remplaçant totalement les avocats par des modèles IA.",
                "En limitant l'accès à certaines données sensibles."
            ],
            correct: "En vérifiant qu'un prompt ne génère pas de discrimination raciale ou de genre.",
            explanation: "Ces outils permettent de tester les prompts dans des contextes sensibles comme la justice, afin de garantir qu'aucun groupe n'est défavorisé par les résultats générés."
        },
        {
            question: "Que devez-vous faire après avoir suivi ce cours sur les principes d'un prompt responsable ?",
            options: [
                "Utiliser uniquement des prompts simples.",
                "Adopter des outils et frameworks pour vérifier l'éthique et la neutralité des prompts.",
                "Supprimer tous les prompts générés auparavant.",
                "Créer des prompts uniquement pour des usages personnels."
            ],
            correct: "Adopter des outils et frameworks pour vérifier l'éthique et la neutralité des prompts.",
            explanation: "Les outils comme les Ethical AI Frameworks aident à garantir que vos prompts respectent les standards éthiques et produisent des résultats équitables."
        }
    ]

};

export default lesson4;