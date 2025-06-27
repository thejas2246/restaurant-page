export function showHome() {
  const mainContainer = document.querySelector("#content");
  generateContent(mainContainer);
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

  homePageHeading.textContent = "Welcome to TasteHub Restaurant";
  homePagePara1.textContent =
    "Discover a world of exquisite flavors and memorable dining.";
  homePagePara2.textContent =
    "Join us for an unforgettable culinary journey where every dish is crafted with passion and precision. We combine fresh, local ingredients with innovative techniques to bring you an unparalleled dining experience.";

  subContainer.appendChild(homePageHeading);
  subContainer.appendChild(homePagePara1);
  subContainer.appendChild(homePagePara2);

  mainContainer.appendChild(subContainer);
}
