const formacaoAcademicaContainer = document.getElementById("formacao-academica-container");
const cursoLista = document.getElementById("curso-lista");

formacaoAcademica();
formacaoCursos();

async function formacaoAcademica() {
  const response = await fetch("/asset/json/formacao.json");
  const formacao = await response.json();

  formacao.forEach((f) => {
    const instituicao = ``;
    const curso = ``;
    const periodo = ``;
    const formacaoAcademicaLinkImagem = document.createElement("div");
    formacaoAcademicaLinkImagem.className = "formacao-academica-apresentacao";
    formacaoAcademicaLinkImagem.innerHTML = `<a href="${f.url}" target="_blank"><img src="${f.imagem}" /></a>
    <div><ul><li><a href="${f.url}" target="_blank">${f.instituicao}</a></li><li>${f.curso}</li><li>${f.periodo}</li></ul></div>`;
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
