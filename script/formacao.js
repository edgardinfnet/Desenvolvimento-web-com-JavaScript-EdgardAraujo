const formacaoAcademicaContainer = document.getElementById("formacao-academica-container");
const cursoLista = document.getElementById("curso-lista");

formacaoAcademica();
formacaoCursos();

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

async function formacaoCursos() {
  const response = await fetch("/asset/json/cursos.json");
  const cursos = await response.json();
  
  cursos.forEach((c) => {
    let cursosLi = document.createElement("li");
    cursosLi.innerText = c.curso;
    cursoLista.appendChild(cursosLi);
  });
}
