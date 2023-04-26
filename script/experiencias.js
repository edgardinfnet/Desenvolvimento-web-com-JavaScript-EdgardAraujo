const experienciasContainer = document.getElementById("experiencias-container");

async function experiencias() {
  const response = await fetch("/asset/json/experiencias.json");
  const experiencias = await response.json();
  let tituloExperiencia = document.createElement("h3");
  tituloExperiencia.className = "experiencias-titulo";
  tituloExperiencia.innerText = "Experiências profissionais";
  experienciasContainer.appendChild(tituloExperiencia);

  experiencias.forEach((e) => {
    let divLogoExperiencia = document.createElement("div");
    divLogoExperiencia.innerHTML =
      `<div>
        <div class="experiencias-apresentacao">
          <div>
            <a href="${e.url}" target="_blank">
              <img src="${e.imagem}" alt="${e.alt}">
            </a>
          </div>
        <div>
          <ul>
            <li><a href="${e.url}" target="_blank">EY</a></li>
            <li>${e.cargo}</li>
            <li>${e.modalidade}</li>
            <li>${e.periodo}</li>
            <li>${e.local}</li>
          </ul>
        </div>
      </div>
      <div class="experiencias-atividades">
        <span>${e.descricao}</span>
      </div>
    </div>`;
    experienciasContainer.appendChild(divLogoExperiencia);
  });
}

experiencias();
