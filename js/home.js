document.getElementById("start-btn").addEventListener("click", () => {
  document.querySelector(".models").scrollIntoView();
});

// <-- Set up Moddels -->
let modelsHolder = document.getElementById("models-holder");
let models = [
  {
    modelTitle: "Modello F24 Ordinario",
    modelIcon: "./img/modello-f24-ordinario.png",
    editePage: "./modello/modello-f24-ordinario.html",
    modelPage: "f24-models.html",
    instructionPage: "f24-models.html",
  },
  {
    modelTitle: "Modello F24 Semplificato",
    modelIcon: "./img/modello-f24-semplificato.png",
    editePage: "f24-models.html",
    modelPage: "f24-models.html",
    instructionPage: "f24-models.html",
  },
  {
    modelTitle: "Modello F24 Accise",
    modelIcon: "./img/modello-f24-accise.png",
    editePage: "f24-models.html",
    modelPage: "f24-models.html",
    instructionPage: "f24-models.html",
  },
  {
    modelTitle: "Modello F24 Elide",
    modelIcon: "./img/modello-f24-elide.png",
    editePage: "f24-models.html",
    modelPage: "f24-models.html",
    instructionPage: "f24-models.html",
  },
  {
    modelTitle: "Modello F23 online",
    modelIcon: "./img/modello-f24-online.png",
    editePage: "f24-models.html",
    modelPage: "f24-models.html",
    instructionPage: "f24-models.html",
  },
];

(function setModels() {
  modelsHolder.innerHTML = "";
  for (let model of models) {
    modelsHolder.innerHTML += `
        <div class="col-md-6 col-lg-4">
        <div class="card text-center">
            <div class="card-body">
            <img class="img-thumbnail" src="${model.modelIcon}" alt="" onclick="setImgPopup('${model.modelIcon}')" />
            <h5 class="card-title mb-3">${model.modelTitle}</h5>
            <div
                class="card-links d-flex justify-content-between align-items-center"
            >
                <a href="${model.editePage}" class="btn text-white px-0 py-1">Modificare</a>
                <a href="${model.modelPage}" class="btn text-white px-0 py-1">Modello</a>
                <a href="${model.instructionPage}" class="btn text-white px-0 py-1">Istruzioni</a>
            </div>
            </div>
        </div>
        </div>
    `;
  }
})();

// <-- Start Functions -->
function setImgPopup(img) {
  document.body.innerHTML += `
    <div class="img-popup">
      <div class="content">
        <button id="close-popup" class="close-btn">X</button>
        <img src="${img}" alt="" />
      </div>
    </div>
  `;

  document.getElementById("close-popup").addEventListener("click", () => {
    document.querySelector(".img-popup").remove();
  });
}
