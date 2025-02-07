document.body.classList.remove('no-js');
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
            lien: 'https://github.com/pavuchochek/projet-python',
            image: 'https://via.placeholder.com/150'
          }
        ]
      },
      { 
        title: 'Cybersécurité',
        projets: [
          {
            titre: 'Stage Analyste SOC',
            description: 'Identification, analyse et détection des attaques de phishing dans un environnement de cybersécurité.',
            lien: 'https://groupetrefle.com/fr/trefle-solution',
            image: 'img/projects/trefle.png'
          }
        ]
      }
    ]
  },
  {
    title: 'Concevoir', 
    description: 'Conception de systèmes, applications et architectures logicielles avec des technologies modernes comme Java et Kotlin.',
    noeuds: [
      { 
        title: 'Java',
        projets: [
          {
            titre: 'Application de gestion de tournoi E-Sport',
            description: 'Optimisation et structuration de l\'application avec des design patterns, MVC, DAO et Java Derby.',
            lien: 'https://github.com/pavuchochek/TESM-ESPORT-MANAGER',
            image: 'img/projects/tesm.png'
          }
        ]
      },
      
    ]
  },
  {
    title: 'Développer', 
    description: 'Développement de logiciels robustes et performants avec des technologies comme PHP, C, et JavaScript.',
    noeuds: [
      { 
        title: 'PHP',
        projets: [
          {
            titre: 'API REST pour un cabinet médical',
            description: 'Implémentation des fonctionnalités CRUD en PHP avec gestion des erreurs HTTP.',
            lien: 'https://github.com/pavuchochek/ClientCabinet',
            image: 'img/projects/cabinet.png'
          }
        ]
      },
      { 
        title: 'JavaScript',
        projets: [
          {
            titre: 'Projet interactif en JavaScript',
            description: 'Création d\'une interface interactive pour la gestion d\'applications.',
            lien: 'https://github.com/pavuchochek/chatAjax',
            image: 'img/projects/chat.png'
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
        title: 'Docker',
        projets: [
          {
            titre: 'Application conteneurisée avec Docker',
            description: 'Création d\'une application conteneurisée pour la gestion des environnements de développement.',
            lien: 'https://github.com/pavuchochek/chatAjax',
            image: 'img/projects/docker.png'
          }
        ]
      }
    ]
  },
  {
    title: 'Tester', 
    description: 'Vérification de la qualité du code et des fonctionnalités via des tests automatisés et manuels.',
    noeuds: [
      { 
        title: 'Postman',
        projets: [
          {
            titre: 'Tests d\'API avec Postman',
            description: 'Documentation automatisée et tests des fonctionnalités API.',
            lien: 'https://github.com/pavuchochek/projet-postman',
            image: 'https://via.placeholder.com/150'
          }
        ]
      },
      { 
        title: 'JUnit',
        projets: [
          {
            titre: 'Tests unitaires avec JUnit',
            description: 'Développement de tests unitaires pour garantir la qualité du code Java.',
            lien: 'https://github.com/pavuchochek/projet-junit',
            image: 'img/projects/tesm².png'
          }
        ]
      }
    ]
  },
  {
    title: 'Maintenir', 
    description: 'Maintenance et évolution de logiciels, en assurant la qualité et la performance à long terme avec des outils comme SonarQube et Git.',
    noeuds: [
      { 
        title: 'SonarQube',
        projets: [
          {
            titre: 'Analyse de code avec SonarQube',
            description: 'Utilisation de SonarQube pour l\'analyse de la qualité du code.',
            lien: 'https://github.com/pavuchochek/projet-sonarqube',
            image: 'img/projects/sonar.png'
          }
        ]
      },
      { 
        title: 'Spring Boot',
        projets: [
          {
            titre: 'Applications Spring Boot en Kotlin',
            description: 'Développement de deux applications web avec Spring Boot et Kotlin, gestion des dépendances et configuration des services.',
            lien: 'https://www.irit.fr/plateformes/elaastic/',
            image: 'img/projects/elaastic_logo.webp'
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
      node.addEventListener('click', (event) => showNodeProjects(noeud, event));

      branch.appendChild(node);
    });
  }
}

// Fonction pour vérifier si le nœud appartient au skill sélectionné
function isNodeInSelectedSkill(nodeTitle, selectedSkillTitle) {
  const selectedSkill = graphData.find(skill => skill.title === selectedSkillTitle);
  return selectedSkill && selectedSkill.noeuds.some(noeud => noeud.title === nodeTitle);
}

// Fonction pour afficher les projets du nœud sélectionné
function showNodeProjects(node, event) {
  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = ''; // Vide le conteneur des projets

  // Enlever tous les 'selected' des nodes
  const nodes = document.querySelectorAll('.node');
  nodes.forEach(node => node.classList.remove('selected'));

  // Ajouter la classe 'selected' au node sélectionné
  event.target.classList.add('selected');

  const selectedSkillElement = document.querySelector('.circle.selected');
  const selectedSkillTitle = selectedSkillElement ? selectedSkillElement.innerText : '';

  // Vérifie si le node appartient au skill sélectionné
  if (!isNodeInSelectedSkill(node.title, selectedSkillTitle)) {
    const newSkillElement = Array.from(document.querySelectorAll('.circle')).find(skill => {
      return graphData.find(s => s.title === skill.innerText).noeuds.some(n => n.title === node.title);
    });

    if (newSkillElement) {
      // Enlever la classe 'selected' de tous les skills
      document.querySelectorAll('.circle').forEach(skill => skill.classList.remove('selected'));

      // Ajouter la classe 'selected' au nouveau skill
      newSkillElement.classList.add('selected');

      // Afficher la description du nouveau skill
      showDescription(graphData.findIndex(skill => skill.title === newSkillElement.innerText));

      // Enlever la classe 'selected' de tous les nodes
      nodes.forEach(node => node.classList.remove('selected'));

      // Ajouter la classe 'selected' au node sélectionné
      event.target.classList.add('selected');
    }
  }
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
      projectImage.alt = project.titre;
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

  //reset tout les nodes selected
  const nodes = document.querySelectorAll('.node');
  nodes.forEach(node => node.classList.remove('selected'));

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

function adjustOverlayOnScroll() {
  const overlay = document.getElementById("background-overlay");
  const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight); // Pourcentage du scroll
  const opacity = Math.min(0.7, scrollProgress * 0.7); // Limite l'opacité à 0.7

  // Applique l'effet d'assombrissement sur l'overlay
  overlay.style.background = `rgba(0, 0, 0, ${opacity})`;
}

function adjustNavBackground() {
  const nav = document.querySelector('nav');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // Calculer l'intensité de l'assombrissement en fonction du scroll
  const darkness = Math.min(scrollPosition / windowHeight, 0.7); // Limiter l'assombrissement à 0.7 maximum

  // Définir les couleurs initiales (53, 62, 93)
  const r = 53 - darkness * 50; // Réduire le rouge pour assombrir
  const g = 62 - darkness * 50; // Réduire le vert pour assombrir
  const b = 93 - darkness * 50; // Réduire le bleu pour assombrir

  // S'assurer que les valeurs RGB ne deviennent pas négatives
  const rClamped = Math.max(r, 0);
  const gClamped = Math.max(g, 0);
  const bClamped = Math.max(b, 0);

  // Appliquer la nouvelle couleur de fond
  nav.style.backgroundColor = `rgb(${rClamped}, ${gClamped}, ${bClamped})`;
}

// Ajouter l'événement de scroll
window.addEventListener('scroll', adjustNavBackground);



// Ajouter l'événement de scroll
window.addEventListener('scroll', adjustNavBackground);



initializeGraph();

// Écouteur de l'événement scroll
window.addEventListener("scroll", adjustOverlayOnScroll);