import { loadPage } from "./navigation.js";

const remoteNav = document.getElementById("remoteNav");
const diaryNav = document.getElementById("diaryNav");
const heroNav = document.getElementById("heroNav");
const stuffNav = document.getElementById("stuffNav");

remoteNav.addEventListener("click", () => loadPage("remote"));

diaryNav.addEventListener("click", () => loadPage("diary"));

heroNav.addEventListener("click", () => loadPage("hero"));

stuffNav.addEventListener("click", () => loadPage("stuff"));

loadPage("diary");
