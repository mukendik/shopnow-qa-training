function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

// Charger header et footer
loadComponent("header", "page/header.html");
loadComponent("logInPage", "page/loginpage.html");
loadComponent("footer", "page/footer.html");

document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
});
