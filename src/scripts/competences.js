

const graphData = [
  {
    title: 'Analyser', 
    description: 'Capacité à analyser des données, identifier des modèles et résoudre des problèmes complexes en utilisant des outils comme Python.',
    noeuds: [
      { 
        title: 'Python',
        projets: [
          {
            titre: 'Analyse de données avec Python',
            description: 'Développement d\'une application Python pour analyser des ensembles de données complexes.',
            lien: 'https://github.com/moncompte/projet-python',
            image: 'https://via.placeholder.com/150'
          }
        ]
      }
    ]
  },
  {
    title: 'Concevoir', 
    description: 'Conception de systèmes, applications et architectures logicielles avec des technologies modernes comme Java et React.',
    noeuds: [
      { 
        title: 'Java',
        projets: [
          {
            titre: 'Application de gestion en Java',
            description: 'Création d\'une application de gestion de tâches avec Java, utilisant une architecture MVC.',
            lien: 'https://github.com/moncompte/projet-java',
            image: 'https://via.placeholder.com/150'
          }
        ]
      },
      { 
        title: 'React',
        projets: [
          {
            titre: 'Site Web React',
            description: 'Création d\'un site web interactif utilisant React, avec gestion de l\'état via Redux.',
            lien: 'https://github.com/moncompte/projet-react',
            image: 'https://via.placeholder.com/150'
          }
        ]
      }
    ]
  },
  {
    title: 'Développer', 
    description: 'Développement de logiciels robustes et performants avec des technologies comme Node.js et SQL.',
    noeuds: [
      { 
        title: 'Node.js',
        projets: [
          {
            titre: 'API REST avec Node.js',
            description: 'Développement d\'une API RESTful avec Node.js et Express.',
            lien: 'https://github.com/moncompte/projet-nodejs',
            image: 'https://via.placeholder.com/150'
          }
        ]
      },
      { 
        title: 'SQL',
        projets: [
          {
            titre: 'Base de données avec SQL',
            description: 'Création et gestion d\'une base de données relationnelle avec SQL pour une application de gestion de stocks.',
            lien: 'https://github.com/moncompte/projet-sql',
            image: 'https://via.placeholder.com/150'
          }
        ]
      }
    ]
  },
  {
    title: 'Intégrer', 
    description: 'Intégration de différentes technologies et systèmes pour garantir leur bon fonctionnement ensemble.',
    noeuds: [
      { 
        title: 'CI/CD',
        projets: [
          {
            titre: 'Pipeline CI/CD avec Jenkins',
            description: 'Mise en place d\'un pipeline d\'intégration continue et de déploiement continu avec Jenkins.',
            lien: 'https://github.com/moncompte/projet-cicd',
            image: 'https://via.placeholder.com/150'
          }
        ]
      },
      { 
        title: 'Jenkins',
        projets: [
          {
            titre: 'Automatisation de tests avec Jenkins',
            description: 'Automatisation des tests unitaires et fonctionnels à l\'aide de Jenkins et des plugins associés.',
            lien: 'https://github.com/moncompte/projet-jenkins',
            image: 'https://via.placeholder.com/150'
          }
        ]
      },
      { 
        title: 'Docker',
        projets: [
          {
            titre: 'Application conteneurisée avec Docker',
            description: 'Création d\'une application conteneurisée avec Docker pour une meilleure gestion des environnements de développement et de production.',
            lien: 'https://github.com/moncompte/projet-docker',
            image: 'https://via.placeholder.com/150'
          }
        ]
      }
    ]
  },
  {
    title: 'Tester', 
    description: 'Vérification de la qualité du code et des fonctionnalités via des tests automatisés et manuels, incluant des outils comme JUnit.',
    noeuds: [
      { 
        title: 'JUnit',
        projets: [
          {
            titre: 'Tests unitaires avec JUnit',
            description: 'Développement de tests unitaires pour une application Java en utilisant JUnit pour garantir la qualité du code.',
            lien: 'https://github.com/moncompte/projet-junit',
            image: 'https://via.placeholder.com/150'
          }
        ]
      },
      { 
        title: 'CI/CD',
        projets: [
          {
            titre: 'Tests automatisés en CI/CD',
            description: 'Intégration des tests automatisés dans un pipeline CI/CD pour une livraison continue de qualité.',
            lien: 'https://github.com/moncompte/projet-cicd-tests',
            image: 'https://via.placeholder.com/150'
          }
        ]
      }
    ]
  },
  {
    title: 'Maintenir', 
    description: 'Maintenance et évolution de logiciels, en assurant la qualité et la performance à long terme avec des outils comme SonarQube et Spring.',
    noeuds: [
      { 
        title: 'Sonar',
        projets: [
          {
            titre: 'Analyse de code avec SonarQube',
            description: 'Utilisation de SonarQube pour l\'analyse de la qualité du code et l\'identification des problèmes de performance.',
            lien: 'https://github.com/moncompte/projet-sonarqube',
            image: 'https://via.placeholder.com/150'
          }
        ]
      },
      { 
        title: 'Spring',
        projets: [
          {
            titre: 'Application Spring Boot',
            description: 'Développement d\'une application web avec Spring Boot, y compris la gestion des dépendances et la configuration des services.',
            lien: 'https://github.com/moncompte/projet-spring',
            image: 'https://via.placeholder.com/150'
          }
        ]
      },
      { 
        title: 'Git',
        projets: [
          {
            titre: 'Gestion de version avec Git',
            description: 'Utilisation de Git pour la gestion de version d\'une application, y compris les branches et les pull requests.',
            lien: 'https://github.com/moncompte/projet-git',
            image: 'https://via.placeholder.com/150'
          }
        ]
      }
    ]
  }
];

const skillsContainer = document.getElementById("skills-container");

// Fonction pour calculer la position d'un hexagone autour du centre
function calculateHexagonPosition(index, radius) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const hexagonAngles = [0, Math.PI / 3, 2 * Math.PI / 3, Math.PI, 4 * Math.PI / 3, 5 * Math.PI / 3];
  const angle = hexagonAngles[index % hexagonAngles.length];
  return { x: centerX + radius * Math.cos(angle), y: centerY + radius * Math.sin(angle) };
}

// Créer un cercle (skill)
function createCircle(skill, index) {
  const { x, y } = calculateHexagonPosition(index, 400);  // Rayon de 200 pour les skills
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = `${x - 50}px`;
  circle.style.top = `${y - 50}px`;
  circle.innerText = skill.title;
  skillsContainer.appendChild(circle);

  if (skill.noeuds) createBranch(skill, index); // Créer la branche du skill, contenant les nœuds
}

function createBranch(skill, indexOfSkill) {
  const branch = document.createElement("div");
  branch.className = "branch";

  const { x, y } = calculateHexagonPosition(indexOfSkill, 600);  // Positionnement de la branche
  branch.style.left = `${x - 50}px`;
  branch.style.top = `${y - 50}px`;

  // Applique la direction des branches (exemple simplifié)
  const directions = [
    { xOffset: 0, yOffset: 0, direction: 'column' },
    { xOffset: 0, yOffset: 0, direction: 'row' },
    { xOffset: 0, yOffset: 0, direction: 'row' },
    { xOffset: 0, yOffset: 0, direction: 'column' },
    { xOffset: 0, yOffset: 0, direction: 'row' },
    { xOffset: 0, yOffset: 0, direction: 'row' }
  ];

  const { xOffset, yOffset, direction } = directions[indexOfSkill % directions.length];
  branch.style.left = `${x - 50 + xOffset}px`;
  branch.style.top = `${y - 50 + yOffset}px`;
  branch.classList.add(direction);

  skillsContainer.appendChild(branch);

  // Ajouter les nœuds à la branche
  if (skill.noeuds && skill.noeuds.length > 0) {
    skill.noeuds.forEach((noeud, index) => {
      const node = document.createElement("div");
      node.className = "node";
      node.innerText = noeud.title;

      // Vérifier s'il y a des projets et ajouter un badge
      if (noeud.projets && noeud.projets.length > 0) {
        const badge = document.createElement('div');
        badge.classList.add('badge');
        badge.textContent = noeud.projets.length;
        node.appendChild(badge);
      }

      // Ajouter l'événement de sélection du nœud
      node.addEventListener('click', () => showNodeProjects(noeud));

      branch.appendChild(node);
    });
  }
}


// Fonction pour afficher les projets du nœud sélectionné
function showNodeProjects(node) {
  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = ''; // Vide le conteneur des projets
  //enlever tout les selected des nodes
  const nodes = document.querySelectorAll('.node');
  nodes.forEach(node => node.classList.remove('selected'));
  //ajouter la classe selected au node selectionné
  event.target.classList.add('selected');
  if (node.projets && node.projets.length > 0) {
    node.projets.forEach(project => {
      const projectElement = document.createElement("div");
      projectElement.classList.add('project');
      projectElement.classList.add('project_background');


      const projectTitle = document.createElement("h3");
      projectTitle.textContent = project.titre;
      projectTitle.classList.add('titre_projet');
      projectElement.appendChild(projectTitle);
      
      const projectImage = document.createElement("img");
      projectImage.src = project.image;
      projectImage.alt = project.title;
      projectImage.classList.add('project-image');
      projectElement.appendChild(projectImage);

      const projectDescription = document.createElement("p");
      projectDescription.textContent = project.description;
      projectElement.appendChild(projectDescription);

      const projectLink = document.createElement("a");
      projectLink.href = project.lien;
      projectLink.target = "_blank";
      projectLink.textContent = "Voir le projet";
      projectLink.classList.add('lien_projet');
      projectElement.appendChild(projectLink);

      

      projectContainer.appendChild(projectElement);
    });
  }
}

// Initialisation du graphe
function initializeGraph() {
  graphData.forEach((skill, index) => createCircle(skill, index));
}

// Fonction pour afficher la description du skill sélectionné et mettre en évidence le cercle
function showDescription(skillIndex) {
  const descriptionElement = document.getElementById("description");
  const skills = document.querySelectorAll('.circle');

  // Récupérer la description du skill sélectionné
  const skill = graphData[skillIndex];
  descriptionElement.textContent = skill.description;  // Afficher la description

  // Enlever la classe 'selected' de tous les cercles
  skills.forEach(skill => skill.classList.remove('selected'));

  // Ajouter la classe 'selected' au cercle correspondant
  skills[skillIndex].classList.add('selected');

  // Afficher le texte de la description au centre du skill container
  descriptionElement.style.display = 'block';  // Afficher la description
}



// Initialisation : afficher la description du premier skill par défaut et ajouter la classe 'selected'
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner tous les cercles
  const circles = document.querySelectorAll('.circle');

  // Mettre par défaut le premier skill sélectionné et afficher sa description
  showDescription(0);  // Le premier skill est sélectionné par défaut

  // Ajouter l'événement de clic à chaque cercle
  circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      showDescription(index);  // Mettre à jour la description et la sélection
    });
  });
});




initializeGraph();
