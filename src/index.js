import "./styles.css";
// Collapse Box

const collapseHandler = (event) => {
  const collapseContent = document.getElementById("collapse-content-1");
  collapseContent.classList.toggle("collapse-content-show");
};

const collapseHeader = document.getElementById("collapse-header-1");
collapseHeader.addEventListener("click", collapseHandler);
