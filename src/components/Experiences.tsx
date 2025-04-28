import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

/*import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";*/



const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
];


const experiences = [
    {
        id: 1,
        role: "Développeuse Web Freelance",
        company: " Remote",
        period: "Janvier 2024 - Aujourd'hui 2025 ",
        description: [
            "Création d’APIs REST en Laravel et Express.js pour des projets clients (gestion de tâches, CRM léger) ",
            "Développement d'interfaces utilisateur avec React et Tailwind CSS",
            "Intégration de bases de données relationnelles et NoSQL (PostgreSQL, MongoDB)",
            "Déploiement sur des plateformes cloud (Render, Railway, Vercel)",
            "Gestion de projets sur GitHub avec issues et kanban",
        ],  
    },
    {
        id: 2,
        role: "Administratrice de systèmes et de bases de données",
        company: "KH INDUSTRIE",
        period: "Mars 2020 - Juillet 2023",
        description: [
            "Création, configuration et administration de bases PostgreSQL et MySQL en environnement virtualisé multi-datacenters (Linux, Docker) ",
            "Mise en œuvre et personnalisation des systèmes de gestion de bases de données ",
            "Exploitation des serveurs de bases de données : automatisation des tâches (scripts Bash, PowerShell), contrôle des accès, optimisation des requêtes et traitements",
            "Développement d’outils internes pour faciliter l’exploitation (scripts de monitoring, rapports de performance, alerting)",
            "Participation active aux comités de suivi de projet (daily meetings)",
            "Intervention sur différents environnements : Recette, Préprod, Production",
            
        ],
        //image: meta,
    },
    {
        id: 3,
        role: "Stagiaire en test qualité logiciel",
        company: "Auto Hall",
        period: "Septembre 2019 - Février 2020",
        description: [
            "Analyse des exigences et rédaction des scénarios de test",
            "Réalisation de tests manuels et automatisés (Selenium,Cypress)",
            "Vérification des corrections et exécution des tests",
            "Rédaction des rapports de test et collaboration avec les équipes de développement",
            "Mise en place de scripts d’automatisation des tests",
            "Tests de compatibilité et de performance sur différents environnements (Web, mobile, API, base de données)",
            "Application des méthodologies Agile/Scrum",
        ],
        //image: meta,
    },
    {
            id: 4,
            role: "Stagiaire en développement web PHP",
            company: "Wilaya de la Région",
            period: "Avril 2016 - Juin 2016",
            description: [
                "Assister à la conception et au développement d’applications web en PHP (Laravel, Symfony)",
                "Participer à l’intégration et à la gestion des bases de données SQL (MySQL, PostgreSQL)",
                "Développer et tester des fonctionnalités sous la supervision des développeurs",
                "Corriger des bugs et améliorer la performance des applications existantes",
                "Collaborer avec l’équipe pour intégrer des APIs et services tiers",
                "Contribuer à la documentation du code et des processus techniques",
                "Participer aux réunions d’équipe et aux revues de code",
                
                
            ],
            //image: meta,
    },
    
];



const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <div className="ml-4">
                                    <h1 className="text-xl text-info font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences
