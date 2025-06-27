import HomeFoodImage from "./assets/images/food.jpg";

export function showHome() {
  const mainContainer = document.querySelector("#content");
  const foodImageElement = document.createElement("img");
  foodImageElement.src = HomeFoodImage;
  mainContainer.appendChild(foodImageElement);
}
