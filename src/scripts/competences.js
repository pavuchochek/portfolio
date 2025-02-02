const graphData = [
  { id: "analyser", title: "Analyser", description: "Analyser les besoins pour proposer des solutions optimales.",
    noeuds:[{
      id:"figma",
      title:"Figma",
      img:"./images/figma.png",
   },{
      id:"example",
      title:"Example",
      img:"./images/figma.png",
   },{
      id:"example2",
      title:"Example2",
      img:"./images/figma.png",
   }] },
  { id: "concevoir", title: "Concevoir", description: "Concevoir des architectures adaptées aux besoins." },
  { id: "gerer", title: "Gérer", description: "Planifier et gérer les projets efficacement." },
  { id: "Administrer", title: "Administrer", description: "Administrer les systèmes et les bases de données." },
  { id: "Collaborer", title: "Collaborer", description: "Travailler en équipe pour atteindre les objectifs." },
  { id: "Optimiser", title: "Optimiser", description: "Optimiser les performances des applications." }
];

const skillsContainer = document.getElementById("skills-container");
const overlay = document.getElementById("background-overlay");
// Fonction pour calculer la position des cercles sur un hexagone
function calculateHexagonPosition(index, radius = 200) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Hexagon angles : 0°, 60°, 120°, 180°, 240°, 300°
  const hexagonAngles = [0, Math.PI / 3, 2 * Math.PI / 3, Math.PI, 4 * Math.PI / 3, 5 * Math.PI / 3];
  
  // Choisir l'angle en fonction de l'index
  const angle = hexagonAngles[index];

  // Calcul des positions en fonction de l'angle
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  return { x, y };
}

// Fonction pour créer un skill
function createCircle(skill, index) {
  const { x, y } = calculateHexagonPosition(index);

  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = `${x - 50}px`; // Centrage du cercle en soustrayant la moitié de la largeur du cercle
  circle.style.top = `${y - 50}px`;  // Idem pour la hauteur
  circle.innerText = skill.title;
  //creation de la branche avec les noeuds et la position du skill
  if(skill.noeuds){
    createBranch(skill.noeuds, index);
  }

  // Sélectionne un skill au clic
  circle.addEventListener("click", () => {
    document.querySelectorAll(".circle").forEach(c => c.classList.remove("selected"));
    circle.classList.add("selected");
    updateSkillDetails(skill);
  });

  skillsContainer.appendChild(circle);
}
// Fonction pour créer une branche avec des noeuds d'un skill en prenant en compte la position dans l'hexagone
function createBranch(noeuds, positionDuSkill) {
  //creation de la div branche du ce skill
  const branch = document.createElement("div");
  branch.className = "branch";
  //calcul de la position de la branchen en fonction de la position du skill
  const { x, y } = calculateBranchPosition(positionDuSkill);
  branch.style.left = `${x - 50}px`; 
  branch.style.top = `${y - 50}px`;  // Idem pour la hauteur
  //parcours des noeuds
  noeuds.forEach((noeud, index) => {
    //calcul de la position du noeud en fonction de la position du skill
    const { x, y } = calculateHexagonPosition(index, 150);
    //creation de la div noeud
    const node = document.createElement("div");
    node.className = "node";
    node.style.left = `${x - 50}px`; 
    node.style.top = `${y - 50}px`;  // Idem pour la hauteur
    //ajout du titre du noeud
    node.innerText = noeud.title;
    //ajout de l'image du noeud
    const img = document.createElement("img");
    img.src = noeud.img;
    img.alt = noeud.title;
    node.appendChild(img);
    //ajout du noeud à la branche
    branch.appendChild(node);
  });

  skillsContainer.appendChild(branch);
}

//calcul de la position de la branche en rapport avec la position du skill
function calculateBranchPosition(index, radius = 200) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Hexagon angles : 0°, 60°, 120°, 180°, 240°, 300°
  const hexagonAngles = [0, Math.PI / 3, 2 * Math.PI / 3, Math.PI, 4 * Math.PI / 3, 5 * Math.PI / 3];
  
  // Choisir l'angle en fonction de l'index
  const angle = hexagonAngles[index];

  // Calcul des positions en fonction de l'angle
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  return { x, y };
}
// Met à jour le contenu de la div fixe
function updateSkillDetails(skill) {
  document.getElementById("skill-title").innerText = skill.title;
  document.getElementById("skill-description").innerText = skill.description;
}

// Initialise le graphe avec tous les skills
function initializeGraph() {
  graphData.forEach((skill, index) => createCircle(skill, index));
  if (graphData.length > 0) {
    const firstCircle = document.querySelector(".circle");
    firstCircle.classList.add("selected");
    updateSkillDetails(graphData[0]);
  }
}

initializeGraph();
function adjustOverlayOnScroll() {
  const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  const opacity = Math.min(0.7, scrollProgress * 0.7);
  
  // Ajuste l'opacité de l'overlay
  overlay.style.background = `rgba(0, 0, 0, ${opacity})`;

  // Sélectionne le titre
  const title = document.querySelector(".title-comp");

  // Change la couleur du titre en fonction de l'opacité de l'overlay
  if (opacity >= 0.4) {
    title.style.color = "white"; // Titre en blanc quand l'overlay est sombre
  } else {
    title.style.color = ""; // Restaure la couleur par défaut quand l'overlay est plus clair
  }
}

window.addEventListener("scroll", adjustOverlayOnScroll);