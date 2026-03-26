export function produits() {
  return `
<ul id="products"></ul>

<script>
  //  1. Vérification AVANT tout
  const user = localStorage.getItem("user");

  if (!user) {
    window.location.href = "index.html";
  } else {
    //  2. Charger les produits uniquement si connecté
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((products) => {
        const ul = document.getElementById("products");

        products.forEach((product) => {
          const li = document.createElement("li");
          li.textContent = product.name + " - " + product.price + " €";
          ul.appendChild(li);
        });
      })
      .catch((error) => console.error("Erreur :", error));
  }
</script>

<script src="js/main.js"></script>`;
}
