function smooth(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

document.getElementById("searchInput").addEventListener("input", function () {
  var searchValue = this.value.toLowerCase();
  var projects = document.querySelectorAll(".project");
  projects.forEach(function (project) {
    var projectName = project.dataset.name.toLowerCase();
    if (projectName.includes(searchValue)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});

// JavaScript for modal
function openModal(projectName) {
  var modal = document.getElementById("myModal");
  var modalContent = modal.querySelector("p");
  modalContent.textContent = "Hiring modal for " + projectName;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

var tabButtons = document.querySelectorAll(
  "#tabContainer #buttonContainer button"
);
var tabPanels = document.querySelectorAll("#tabContainer  #tabPanel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, "#f44336");

const section = document.querySelector(".modal"),
  overlay = document.querySelector(".overlay"),
  showBtn = document.querySelector(".show-modal"),
  closeBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", () => section.classList.add("active"));

overlay.addEventListener("click", () => section.classList.remove("active"));

closeBtn.addEventListener("click", () => section.classList.remove("active"));
