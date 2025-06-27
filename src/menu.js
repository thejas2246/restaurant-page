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
    heading: "Classic Margherita Pizza",
    description:
      "Hand-stretched dough, fresh mozzarella, basil, and our signature tomato sauce, baked to perfection.",
    price: "$18.50",
  },
  {
    image: foodImage,
    heading: "Classic Margherita Pizza",
    description:
      "Hand-stretched dough, fresh mozzarella, basil, and our signature tomato sauce, baked to perfection.",
    price: "$18.50",
  },
  {
    image: foodImage,
    heading: "Classic Margherita Pizza",
    description:
      "Hand-stretched dough, fresh mozzarella, basil, and our signature tomato sauce, baked to perfection.",
    price: "$18.50",
  },
  {
    image: foodImage,
    heading: "Classic Margherita Pizza",
    description:
      "Hand-stretched dough, fresh mozzarella, basil, and our signature tomato sauce, baked to perfection.",
    price: "$18.50",
  },
  {
    image: foodImage,
    heading: "Classic Margherita Pizza",
    description:
      "Hand-stretched dough, fresh mozzarella, basil, and our signature tomato sauce, baked to perfection.",
    price: "$18.50",
  },
  {
    image: foodImage,
    heading: "Classic Margherita Pizza",
    description:
      "Hand-stretched dough, fresh mozzarella, basil, and our signature tomato sauce, baked to perfection.",
    price: "$18.50",
  },
  {
    image: foodImage,
    heading: "Classic Margherita Pizza",
    description:
      "Hand-stretched dough, fresh mozzarella, basil, and our signature tomato sauce, baked to perfection.",
    price: "$18.50",
  },
];

export function showMenu() {
  const mainContainer = document.querySelector("#content");
  mainContainer.textContent = " ";
  generateMenu(mainContainer);
}

function generateMenu(mainContainer) {
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
