import { header } from "./compnents/header.js";
import { login } from "./page/login.js";
import { home } from "./page/home.js";
import { createAccounte } from "./page/createaccount.js";
import { footer } from "./compnents/footer.js";
import { btnreturn } from "./page/btnreturn.js";

const app = document.getElementById("app");

// Layout Principal (header, main & footer)
function layoutAll(content) {
  app.innerHTML = `
    ${header()}
    <main id="main-content">${content}
    </main>
    ${footer()}
  `;
}
function layoutSimple(content) {
  app.innerHTML = `
    <main id="main-content">${content}
    </main>
  `;
}

//Events fixes (header & footer)
function initEvents() {
  document.getElementById("navLogin").addEventListener("click", showloginPage);
  document
    .getElementById("navRegister")
    .addEventListener("click", showRegister);
}
//Events dynamiques (Contenu)

function initEventsDym() {
  document.getElementById("btnreturn")?.addEventListener("click", showHomePage);
}

// PAGES
function showloginPage() {
  layoutSimple(btnreturn() + login());
  initEventsDym();
}

function showRegister() {
  layoutSimple(btnreturn() + createAccounte());
  initEventsDym();
}

function showHomePage() {
  layoutAll(home());
  initEvents();
}

//Initialisation
showHomePage();
