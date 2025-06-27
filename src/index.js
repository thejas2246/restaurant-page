import { showHome } from "./home";
import { showAbout } from "./about";
import { showMenu } from "./menu";
import "./styles.css";

const homeButton = document.querySelector(".home-buttons");
const menuButton = document.querySelector(".menu-buttons");
const aboutButton = document.querySelector(".about-buttons");

document.addEventListener("DOMContentLoaded", showHome);

homeButton.addEventListener("click", showHome);
menuButton.addEventListener("click", showMenu);
aboutButton.addEventListener("click", showAbout);
