// charger le header
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

// charger le footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

//Charger la connexion
fetch("connexion.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("connexion").innerHTML = data;
  });
//Créer un compte
fetch("createaccount.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("createaccount").innerHTML = data;
  });

window.addEventListener("scroll", function () {
  let scrollPosition = window.innerHeight + window.scrollY;
  let pageHeight = document.body.offsetHeight;

  if (scrollPosition >= pageHeight) {
    document.getElementById("footer").style.bottom = "0";
  } else {
    document.getElementById("footer").style.bottom = "-100px";
  }
});
