export function createAccounte() {
  return `
   
      <div class="d-flex justify-content-center align-items-center">
        <form
          class="border border-secondary p-5 rounded-5 border-opacity-25 w-25 bg-white"
        >
        <p class="d-flex fw-bold justify-content-center align-items-center row">
        Inscrivez-vous sur ShopNow
        </p>
          <div class="mb-3 row">
            <label for="exampleInputEmail1" class="form-label">Nom </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="mb-3 row">
            <label for="exampleInputEmail1" class="form-label">Prénom</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="mb-3 row">
            <label for="exampleInputEmail1" class="form-label"
              >Adresse Email</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="mb-3 row">
            <label for="exampleInputPassword1" class="form-label"
              >Mot de passe</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 row">
            <label for="exampleInputPassword1" class="form-label"
              >Confirmation de mot de passe</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check row">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Afficher
            </label>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button type="submit" class="btn btn-primary" href="#">
              Créer un compte
            </button>
          </div>
        </form>
      </div>`;
}
