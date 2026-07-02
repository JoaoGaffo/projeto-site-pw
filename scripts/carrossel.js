var slideAtual = 0;

var slides = document.querySelectorAll(".hero-slide");

function moverSlide(direcao) {
  slides[slideAtual].style.display = "none";

  slideAtual = slideAtual + direcao;

  if (slideAtual >= slides.length) {
    slideAtual = 0;
  }

  if (slideAtual < 0) {
    slideAtual = slides.length - 1;
  }

  slides[slideAtual].style.display = "block";
}

function iniciarCarrossel() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[0].style.display = "block";
}

function autoPlay() {
  setInterval(function () {
    moverSlide(1);
  }, 5000);
}

iniciarCarrossel();
autoPlay();
