export let about = "about page";

export function showAbout() {
  const mainContainer = document.querySelector("#content");
  mainContainer.textContent = "";
  buttonTextDecoration();
}
function buttonTextDecoration() {
  const homeButton = document.querySelector(".home-buttons");
  const menuButton = document.querySelector(".menu-buttons");
  const aboutButton = document.querySelector(".about-buttons");

  homeButton.style.textDecoration = "none";
  menuButton.style.textDecoration = "none";
  aboutButton.style.textDecoration = "underline";
}
