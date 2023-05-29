const telaTrending = document.getElementById("trendingContainer");

function alterarTela1() {
  if (telaTrending.classList.contains('imagem1')) {
    telaTrending.classList.remove('imagem1');
    telaTrending.classList.add('imagem2');
  } else if (telaTrending.classList.contains('imagem2')) {
    telaTrending.classList.remove('imagem2');
    telaTrending.classList.add('imagem3');
  } else if (telaTrending.classList.contains('imagem3')) {
    telaTrending.classList.remove('imagem3');
    telaTrending.classList.add('imagem4');
  } else if (telaTrending.classList.contains('imagem4')) {
    telaTrending.classList.remove('imagem4');
    telaTrending.classList.add('imagem1');
  }
}

function alterarTela2() {
  if (telaTrending.classList.contains('imagem1')) {
    telaTrending.classList.remove('imagem1');
    telaTrending.classList.add('imagem4');
  } else if (telaTrending.classList.contains('imagem2')) {
    telaTrending.classList.remove('imagem2');
    telaTrending.classList.add('imagem1');
  } else if (telaTrending.classList.contains('imagem3')) {
    telaTrending.classList.remove('imagem3');
    telaTrending.classList.add('imagem2');
  } else if (telaTrending.classList.contains('imagem4')) {
    telaTrending.classList.remove('imagem4');
    telaTrending.classList.add('imagem3');
  }
}
