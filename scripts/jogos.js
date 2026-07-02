function filtrarFase(fase, botaoClicado) {
  var botoes = document.querySelectorAll(".filtro-btn");
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove("ativo");
  }
  botaoClicado.classList.add("ativo");

  var grupos = document.querySelectorAll(".jogos-grupo");

  for (var j = 0; j < grupos.length; j++) {
    var faseDoGrupo = grupos[j].getAttribute("data-fase");

    if (fase === "todos") {
      grupos[j].style.display = "block";
    } else if (faseDoGrupo === fase) {
      grupos[j].style.display = "block";
    } else {
      grupos[j].style.display = "none";
    }
  }
}
