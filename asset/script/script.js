const curriculoTitulos = document.getElementById("curriculo-titulos");
const curriculoImagem = document.getElementById("curriculo-imagem");
const curriculoApresentacao = document.getElementById("curriculo-apresentacao");

apresentacao();
listarTitulos();

async function apresentacao() {
  const response = await fetch("/asset/json/apresentacao.json");
  const apresentacao = await response.json();
  const autor = document.createElement("h2");
  const fotoAutor = document.createElement("img");

  autor.innerHTML = apresentacao.nome;
  autor.className = 'curriculo-apresentacao-autor';
  curriculoApresentacao.appendChild(autor);

  fotoAutor.src = apresentacao.foto;
  fotoAutor.alt = apresentacao.fotoAlt;
  fotoAutor.className = 'curriculo-foto';
  curriculoImagem.appendChild(fotoAutor);
}

async function listarTitulos() {
  const response = await fetch("/asset/json/titulos.json");
  const titulos = await response.json();
  const tam = titulos.length;

  titulos.forEach((t, index) => {
    const listarTitulos = document.createElement('span');
    if (index + 1 === tam) {
      listarTitulos.innerHTML = t.titulo;
    } else {
      listarTitulos.innerHTML = t.titulo + " | ";
    }
    curriculoTitulos.appendChild(listarTitulos);
  });
}

