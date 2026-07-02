function enviarContato() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var assunto = document.getElementById("assunto").value;
  var mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || assunto === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  var feedback = document.getElementById("feedbackEnvio");
  feedback.classList.add("visivel");

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("assunto").value = "";
  document.getElementById("mensagem").value = "";

  setTimeout(function () {
    feedback.classList.remove("visivel");
  }, 4000);
}
