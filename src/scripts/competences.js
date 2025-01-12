const graphData = [
  { id: "analyser", title: "Analyser", x: 150, y: -100, description: "Analyser les besoins pour proposer des solutions optimales." },
  { id: "concevoir", title: "Concevoir", x: -150, y: -100, description: "Concevoir des architectures adaptées aux besoins." },
  { id: "gerer", title: "Gérer", x: 200, y: 100, description: "Planifier et gérer les projets efficacement." },
  { id: "maintenir", title: "Maintenir", x: -200, y: 100, description: "Assurer la maintenance des systèmes existants." },
  { id: "optimiser", title: "Optimiser", x: 0, y: 200, description: "Améliorer les performances des applications." }
];

const graphContainer = document.getElementById("graph-container");
const skillsContainer = document.getElementById("skills");
const popup = document.getElementById("popup");
const popupOverlay = document.getElementById("popup-overlay");

let circles = [];
let lines = [];
let isAnimating = false; // Verrou pour éviter les animations simultanées

function createCircle(skill) {
  const circle = document.createElement("div");
  circle.id = skill.id;
  circle.className = "circle";
  circle.style.left = `${window.innerWidth / 2 + skill.x}px`;
  circle.style.top = `${window.innerHeight / 2 + skill.y}px`;
  circle.innerText = skill.title;

  circle.addEventListener("click", () => showPopup(skill));
  circle.addEventListener("mouseenter", () => centerCircle(circle));
  circle.addEventListener("mouseleave", resetCircles);

  skillsContainer.appendChild(circle);
  circles.push({ skill, element: circle });
  return circle;
}

function showPopup(skill) {
  popup.innerHTML = `
    <div class="popup-content">
      <span class="close">&times;</span>
      <h2>${skill.title}</h2>
      <p>${skill.description}</p>
    </div>
  `;
  popup.classList.add("active");
  popupOverlay.classList.add("active");

  document.querySelector(".close").addEventListener("click", closePopup);
}

function closePopup() {
  popup.classList.remove("active");
  popupOverlay.classList.remove("active");
}

function createLine(circle1, circle2) {
  const line = document.createElement("div");
  line.className = "line";

  const updateLine = () => {
    const rect1 = circle1.getBoundingClientRect();
    const rect2 = circle2.getBoundingClientRect();
    const x1 = rect1.left + rect1.width / 2;
    const y1 = rect1.top + rect1.height / 2;
    const x2 = rect2.left + rect2.width / 2;
    const y2 = rect2.top + rect2.height / 2;

    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

    line.style.width = `${distance}px`;
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;
    line.style.transform = `rotate(${angle}deg) translateY(-50%)`;
  };

  updateLine();
  graphContainer.appendChild(line);
  lines.push({ element: line, updateLine });
}

function centerCircle(circle) {
  if (isAnimating) return; // Évite de déclencher plusieurs animations en parallèle
  isAnimating = true;

  circles.forEach(({ element }) => {
    if (element !== circle) {
      element.style.opacity = "0.5";
      element.style.transform = "scale(0.9)";
    } else {
      element.style.opacity = "1";
      element.style.transform = "scale(1.5)";
      element.style.transition = "all 0.5s ease";
      element.style.left = `${window.innerWidth / 2 - 50}px`;
      element.style.top = `${window.innerHeight / 2 - 50}px`;
    }
  });

  requestAnimationFrame(() => {
    updateLines(); // Met à jour les lignes une seule fois
    isAnimating = false;
  });
}

function resetCircles() {
  if (isAnimating) return; // Évite les conflits entre animations

  circles.forEach(({ skill, element }) => {
    element.style.opacity = "1";
    element.style.transform = "scale(1)";
    element.style.left = `${window.innerWidth / 2 + skill.x}px`;
    element.style.top = `${window.innerHeight / 2 + skill.y}px`;
    element.style.transition = "all 0.5s ease";
  });

  requestAnimationFrame(() => {
    updateLines(); // Met à jour les lignes après la réinitialisation
  });
}

function updateLines() {
  lines.forEach(({ updateLine }) => updateLine());
}

function initializeGraph() {
  graphData.forEach((skill, i) => {
    const circle1 = createCircle(skill);
    if (i > 0) {
      const circle2 = circles[i - 1].element;
      createLine(circle1, circle2);
    }
  });

  createLine(circles[0].element, circles[circles.length - 1].element);
}

popupOverlay.addEventListener("click", closePopup);
initializeGraph();
