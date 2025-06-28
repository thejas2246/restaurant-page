export let about = "about page";

export function showAbout() {
  const mainContainer = document.querySelector("#content");
  mainContainer.textContent = "";
  buttonTextDecoration();
  generateAboutPage(mainContainer);
}

function generateAboutPage(mainContainer) {
  const aboutContainer = document.createElement("div");
  aboutContainer.setAttribute("class", "about-container");
  mainContainer.appendChild(aboutContainer);

  const aboutHeading = document.createElement("h2");
  aboutHeading.textContent = "About TasteHub";
  aboutContainer.appendChild(aboutHeading);

  const aboutDescription = document.createElement("p");
  aboutDescription.textContent =
    "At TasteHub, we believe dining is an art form. Our journey began with a simple passion: to create a space where food lovers could gather, celebrate, and savor moments. With years of culinary experience, our team is dedicated to sourcing the finest ingredients and transforming them into dishes that tell a story. We are more than just a restaurant; we are a community built around the love of good food and great company. Explore our commitment to quality, creativity, and hospitality.";
  aboutContainer.appendChild(aboutDescription);
}

function buttonTextDecoration() {
  const homeButton = document.querySelector(".home-buttons");
  const menuButton = document.querySelector(".menu-buttons");
  const aboutButton = document.querySelector(".about-buttons");

  homeButton.style.textDecoration = "none";
  menuButton.style.textDecoration = "none";
  aboutButton.style.textDecoration = "underline";
}
