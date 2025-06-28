export let menu = "menu page";
import foodImage from "./assets/images/food.jpg";

const recipes = [
  {
    image: foodImage,
    heading: "Classic Margherita Pizza",
    description:
      "Hand-stretched dough, fresh mozzarella, basil, and our signature tomato sauce, baked to perfection.",
    price: "$18.50",
  },
  {
    image: foodImage,
    heading: "Spicy Chicken Tacos",
    description:
      "Crispy corn tortillas filled with tender grilled chicken, fresh pico de gallo, and a kick of chipotle crema.",
    price: "$15.00",
  },
  {
    image: foodImage,
    heading: " Lemon Herb Salmon",
    description:
      "Pan-seared Atlantic salmon with a delicate lemon-herb butter sauce, served with roasted asparagus and cherry tomatoes.",
    price: "$24.75",
  },
  {
    image: foodImage,
    heading: "Decadent Chocolate Lava Cake",
    description:
      "Warm, gooey chocolate cake with a molten center, topped with a scoop of creamy vanilla bean ice cream.",
    price: "$9.00",
  },
  {
    image: foodImage,
    heading: "Signature TasteHub Burger",
    description:
      "Our juicy gourmet beef patty, aged cheddar, caramelized onions, and house aioli on a toasted brioche bun.",
    price: "$17.25",
  },
  {
    image: foodImage,
    heading: "Vegan Buddha Bowl",
    description:
      "A vibrant bowl with fluffy quinoa, roasted sweet potato, creamy avocado, crispy chickpeas, and a tangy tahini dressing.",
    price: "$14.00",
  },
];

export function showMenu() {
  const mainContainer = document.querySelector("#content");
  mainContainer.textContent = " ";
  generateMenu(mainContainer);
  buttonTextDecoration();
}

function generateMenu(mainContainer) {
  const menuHeading = document.createElement("h2");
  menuHeading.textContent = "Our Featured Dishes";
  mainContainer.appendChild(menuHeading);
  const menuContentContainer = document.createElement("div");
  menuContentContainer.setAttribute("class", "menu-content-container");
  mainContainer.appendChild(menuContentContainer);
  for (let recipe of recipes) {
    const menuItems = document.createElement("div");
    menuItems.setAttribute("class", "menu-items");
    menuContentContainer.appendChild(menuItems);

    const recipeImageContainer = document.createElement("div");
    recipeImageContainer.setAttribute("class", "menu-image");
    menuItems.appendChild(recipeImageContainer);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.setAttribute("class", "menu-description");
    menuItems.appendChild(descriptionContainer);

    const recipeImage = document.createElement("img");
    recipeImage.src = foodImage;
    recipeImageContainer.appendChild(recipeImage);

    const heading = document.createElement("h3");
    heading.textContent = recipe.heading;
    descriptionContainer.appendChild(heading);

    const description = document.createElement("p");
    description.textContent = recipe.description;
    descriptionContainer.appendChild(description);

    const price = document.createElement("p");
    price.textContent = recipe.price;
    descriptionContainer.appendChild(price);
  }
}

function buttonTextDecoration() {
  const homeButton = document.querySelector(".home-buttons");
  const menuButton = document.querySelector(".menu-buttons");
  const aboutButton = document.querySelector(".about-buttons");

  homeButton.style.textDecoration = "none";
  menuButton.style.textDecoration = "underline";
  aboutButton.style.textDecoration = "none";
}
