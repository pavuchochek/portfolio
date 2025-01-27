const graphData = [
  {
    id: "analyser",
    title: "Analyser",
    x: 150,
    y: -100,
    description: "Analyser les besoins pour proposer des solutions optimales.",
    noeuds: [
      {
        title: "Python",
        projets: [
          { id: "proj1", titre: "Projet 1", description: "Description du projet 1" },
          { id: "proj2", titre: "Projet 2", description: "Description du projet 2" },
        ],
      },
      { title: "Django", projets: [] },
    ],
  },
  {
    id: "concevoir",
    title: "Concevoir",
    x: -150,
    y: -100,
    description: "Concevoir des architectures adaptées aux besoins.",
    noeuds: [
      { title: "React", projets: [{ id: "proj3", titre: "Projet 3", description: "Description du projet 3" }] },
      { title: "Node.js", projets: [] },
    ],
  },
  {
    id: "gerer",
    title: "Gérer",
    x: 200,
    y: 100,
    description: "Planifier et gérer les projets efficacement.",
    noeuds: [
      { title: "Agile", projets: [{ id: "proj4", titre: "Projet 4", description: "Description du projet 4" }] },
      { title: "Scrum", projets: [{ id: "proj5", titre: "Projet 5", description: "Description du projet 5" }] },
    ],
  },
];



const skillsContainer = document.getElementById("skills-container");

// Met à jour le contenu de la div fixe
function updateSkillDetails(skill) {
  document.getElementById("skill-title").innerText = skill.title;
  document.getElementById("skill-description").innerText = skill.description;
}

// Fonction pour créer un skill principal
function createCircle(skill, index) {
  const { x, y } = calculateSkillPosition(index); // Positionner le skill (haut, gauche, droite)

  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = `${x - 50}px`; // Centrer le cercle en fonction de sa position
  circle.style.top = `${y - 50}px`;  // Centrer le cercle en fonction de sa position
  circle.innerText = skill.title;

  // Sélectionne un skill au clic
  circle.addEventListener("click", () => {
    document.querySelectorAll(".circle").forEach(c => c.classList.remove("selected"));
    circle.classList.add("selected");
    updateSkillDetails(skill);
  });

  // Déterminer la position du skill principal pour ajuster les positions des nœuds
  const skillPosition = index === 0 ? 'haut' : (index === 1 ? 'gauche' : 'droite');

  // Ajouter les nœuds dépendants en fonction de la position du skill principal
  skill.noeuds.forEach((noeud, nodeIndex) => {
    const noeudElement = createDependentNode(noeud,circle, skillPosition);
    circle.appendChild(noeudElement);
  });

  skillsContainer.appendChild(circle);
}

// Fonction qui calcule la position en fonction du skill (haut, gauche, droite)
function calculateSkillPosition(index) {
  const distance = 200; // Distance entre le centre et chaque skill
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  switch (index) {
    case 0: // Premier skill (en haut)
      return { x: centerX, y: centerY - distance };
    case 1: // Deuxième skill (à gauche)
      return { x: centerX - distance, y: centerY };
    case 2: // Troisième skill (à droite)
      return { x: centerX + distance, y: centerY };
    default:
      return { x: centerX, y: centerY };
  }
}


let activeProjetsContainer = null; // Référence au conteneur actif
// Fonction pour créer un nœud dépendant
function createDependentNode(noeud, circleElement,skillPosition) {
  const nodeElement = document.createElement("div");
  nodeElement.className = "dependent-circle";

  // Récupérer les coordonnées du skill principal (cercle parent)
  const circleX = parseInt(circleElement.style.left, 10) + 50; // Le +50 pour prendre en compte la taille du cercle
  const circleY = parseInt(circleElement.style.top, 10) + 50;  // Le +50 pour prendre en compte la taille du cercle

  // Positionner le nœud dépendant en fonction de la position du skill principal
  switch (skillPosition) {
    case 'haut':
      nodeElement.style.left = `${circleX}px`;
      nodeElement.style.top = `${circleY + 150}px`;
      break;
    case 'gauche':
      nodeElement.style.left = `${circleX + 150}px`;
      nodeElement.style.top = `${circleY}px`;
      break;
    case 'droite':
      nodeElement.style.left = `${circleX - 150}px`;
      nodeElement.style.top = `${circleY}px`;
      break;
  }
  nodeElement.innerText = noeud.title;

  // Ajoute la notification si des projets sont associés
  if (noeud.projets && noeud.projets.length > 0) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerText = noeud.projets.length;
    nodeElement.appendChild(notification);
  }

  // Ajoute le conteneur des projets
  const projetsContainer = document.createElement("div");
  projetsContainer.className = "projets-container";
  nodeElement.appendChild(projetsContainer);

  // Gestion du clic pour afficher les projets associés
  nodeElement.addEventListener("click", (event) => {
    event.stopPropagation(); // Empêche le clic de se propager à d'autres éléments
    toggleProjetsDisplay(noeud, projetsContainer);
  });

  return nodeElement;
}


function toggleProjetsDisplay(noeud, container) {
  // Ferme le conteneur actif s'il existe et est différent du conteneur actuel
  if (activeProjetsContainer && activeProjetsContainer !== container) {
    activeProjetsContainer.classList.remove("active");
    activeProjetsContainer.innerHTML = "";
  }

  // Active ou désactive le conteneur actuel
  if (container.classList.contains("active")) {
    container.classList.remove("active");
    container.innerHTML = "";
    activeProjetsContainer = null; // Réinitialise le conteneur actif
  } else {
    container.classList.add("active");
    container.innerHTML = `
      <h4>Projets associés</h4>
      ${noeud.projets.length > 0
        ? noeud.projets
            .map(
              (projet) => `
            <div class="projet">
              <h5>${projet.titre}</h5>
              <p>${projet.description}</p>
              ${projet.lien ? `<a href="${projet.lien}" target="_blank">Voir plus</a>` : ""}
            </div>
          `
            )
            .join("")
        : "<p>Aucun projet disponible</p>"}
    `;
    activeProjetsContainer = container; // Définit le conteneur actif
  }
}

// Ferme les projets associés lorsqu'on clique en dehors
document.addEventListener("click", () => {
  if (activeProjetsContainer) {
    activeProjetsContainer.classList.remove("active");
    activeProjetsContainer.innerHTML = "";
    activeProjetsContainer = null; // Réinitialise le conteneur actif
  }
});


function initializeGraph() {
  graphData.forEach((skill, index) => createCircle(skill, index)); // On passe l'index pour chaque skill
  if (graphData.length > 0) {
    const firstCircle = document.querySelector(".circle");
    firstCircle.classList.add("selected");
    updateSkillDetails(graphData[0]);
  }
}

initializeGraph();
// Fonction pour ajuster l'opacité de l'overlay en fonction du scroll
function adjustOverlayOnScroll() {
  const overlay = document.getElementById("background-overlay");
  const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight); // Pourcentage du scroll
  const opacity = Math.min(0.7, scrollProgress * 0.7); // Limite l'opacité à 0.7

  // Applique l'effet d'assombrissement sur l'overlay
  overlay.style.background = `rgba(0, 0, 0, ${opacity})`;
}

// Écouteur de l'événement scroll
window.addEventListener("scroll", adjustOverlayOnScroll);

// Applique un ajustement initial au chargement
adjustOverlayOnScroll();
// Exemple d'animation pour les éléments qui apparaissent au scroll
ScrollReveal().reveal('.anim-scroll', {
  distance: '50px',
  duration: 800,
  easing: 'ease-in-out',
  opacity: 0,
  reset: true, // Animation répétée à chaque passage dans la vue
});



