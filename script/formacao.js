const formacaoAcademicaContainer = document.getElementById("formacao-academica-container");

async function formacaoAcademica() {
  const response = await fetch("/asset/json/formacao.json");
  const formacao = await response.json();
  let formacaoAcademicaTituloDiv = document.createElement("div");
  formacaoAcademicaTituloDiv.innerHTML = `<h3 class="formacao-academica-titulo">Formação acadêmica</h3>`;
  formacaoAcademicaContainer.appendChild(formacaoAcademicaTituloDiv);

  formacao.forEach((f) => {
    const instituicao = `<li><a href="${f.url}" target="_blank">${f.instituicao}</a></li>`;
    const curso = `<li>${f.curso}</li>`;
    const periodo = `<li>${f.periodo}</li>`;
    const formacaoAcademicaLinkImagem = document.createElement("div");
    formacaoAcademicaLinkImagem.className = "formacao-academica-apresentacao";
    formacaoAcademicaLinkImagem.innerHTML = `<a href="${f.url}" target="_blank"><img src="${f.imagem}" /></a><div><ul>${f.instituicao}${curso}${periodo}</ul></div>`;
    formacaoAcademicaContainer.appendChild(formacaoAcademicaLinkImagem);
  });
}

formacaoAcademica();


