const contatoForm = document.getElementById("form-contato");
const nomeForm = document.getElementById("nome");
const telefoneForm = document.getElementById("telefone");
const emailForm = document.getElementById("email");
const profissionalForm = document.getElementById("profissional");
const mensagemForm = document.getElementById("mensagem");
const urgenciaForm = document.getElementById("urgencia");

const formInputs = document.querySelectorAll(".inputs-texts");
formInputs.forEach((f) => {
  f.classList.add("inputs-border");
});

contatoForm.onsubmit = (event) => {
  event.preventDefault();

  const nomeValor = nomeForm.value;
  const telefoneValor = telefoneForm.value;
  const emailValor = emailForm.value;
  const profissionalValor = profissionalForm.value;
  const mensagemValor = mensagemForm.value;
  const urgenciaValor = urgenciaForm.value;

  if (isValidNome(nomeValor)) {
    console.log("nomeValor: ", nomeValor);
  } else {
    console.log("nomeValor: ", "inválido");
  }

  if (isValidEmail(emailValor)) {
    console.log("emailValor: ", emailValor);
  } else {
    console.log("emailValor: ", "inválido");
  }

  if (isValidMessagem(mensagemValor)) {
    console.log("mensagemValor: ", mensagemValor);
  } else {
    console.log("mensagemValor: ", "inválido");
  }

  console.log("telefoneValor: ", telefoneValor);
  console.log("profissionalValor: ", profissionalValor);
  console.log("urgenciaValor: ", urgenciaValor);

};

function isValidNome(value) {
  if (value.length < 4) {
    return false;
  } else if (value.length > 36) {
    return false;
  }
  return true;
}

function isValidTelefone(value) {

}

function isValidEmail(value) {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const validEmail = value.match(regexEmail);

  if (validEmail === null) {
    return false;
  } else {
    return true;
  }
}

function isValidProfissional(value) {

}

function isValidMessagem(value) {
  if (value.length < 30) {
    return false;
  } else if (value.length > 300) {
    return false;
  }
  return true;
}

function isValidUrgencia(value) {

}
