export function login() {
  return `<div >
  <div class="d-flex justify-content-center align-items-center">
    <form
    class="border border-secondary mt-5 p-5 rounded-5 border-opacity-25 bg-white w-25 ">
          <div class="mb-1 row">
            <h4 class="d-flex justify-content-center align-items-center mb-5">
              Connexion
            </h4>
            <label for="exampleInputEmail1" class="form-label">Adresse Email</label>
            <input
            type="email"
            class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text"></div>
    </div>
    <div class="mb-1 row">
      <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-1 form-check row">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Afficher </label>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <button id="btnConnect" class="btn btn-primary">Se connecter</button>
    </div>
    
    </form>
</div>

`;
}
