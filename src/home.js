import { showMenu } from "./menu";
export function showHome() {
  const mainContainer = document.querySelector("#content");
  mainContainer.textContent = " ";
  generateContent(mainContainer);
  buttonTextDecoration();
}

function generateContent(mainContainer) {
  const subContainer = document.createElement("div");
  subContainer.setAttribute("class", "sub-container");

  const homePageHeading = document.createElement("h1");
  homePageHeading.setAttribute("class", "home-page-heading");

  const homePagePara1 = document.createElement("p");
  homePagePara1.setAttribute("class", "home-page-para-1 para");

  const homePagePara2 = document.createElement("p");
  homePagePara2.setAttribute("class", "home-page-para-2 para");

  const visitMenuButton = document.createElement("button");
  visitMenuButton.setAttribute("class", "visit-menu-button");
  visitMenuButton.textContent = "View Our Menu";

  homePageHeading.textContent = "Welcome to TasteHub Restaurant";
  homePagePara1.textContent =
    "Discover a world of exquisite flavors and memorable dining.";
  homePagePara2.textContent =
    "Join us for an unforgettable culinary journey where every dish is crafted with passion and precision. We combine fresh, local ingredients with innovative techniques to bring you an unparalleled dining experience.";

  subContainer.appendChild(homePageHeading);
  subContainer.appendChild(homePagePara1);
  subContainer.appendChild(homePagePara2);
  subContainer.appendChild(visitMenuButton);
  visitMenuButton.addEventListener("click", showMenu);
  mainContainer.appendChild(subContainer);
}

function buttonTextDecoration() {
  const homeButton = document.querySelector(".home-buttons");
  const menuButton = document.querySelector(".menu-buttons");
  const aboutButton = document.querySelector(".about-buttons");

  console.log(homeButton, menuButton, aboutButton);
  homeButton.style.textDecoration = "underline";
  menuButton.style.textDecoration = "none";
  aboutButton.style.textDecoration = "none";
}
