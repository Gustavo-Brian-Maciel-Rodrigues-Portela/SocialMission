const telaTrending = document.getElementById("trendingContainer");

function alterarTela1() {
  if (telaTrending.style.backgroundImage.includes('caco.jpg')) {
    telaTrending.style.backgroundImage = "url('../Midia/imgCampaing/burro.jpg')";
  } else if (telaTrending.style.backgroundImage.includes('burro.jpg')) {
    telaTrending.style.backgroundImage = "url('../Midia/imgCampaing/pingu.jpg')";
  } else if (telaTrending.style.backgroundImage.includes('pingu.jpg')) {
    telaTrending.style.backgroundImage = "url('../Midia/imgCampaing/ratinho.jpg')";
  } else if (telaTrending.style.backgroundImage.includes('ratinho.jpg')) {
    telaTrending.style.backgroundImage = "url('../Midia/imgCampaing/caco.jpg')";
  }
}

function alterarTela2() {
  if (telaTrending.style.backgroundImage.includes('caco.jpg')) {
    telaTrending.style.backgroundImage = "url('../Midia/imgCampaing/ratinho.jpg')";
  } else if (telaTrending.style.backgroundImage.includes('burro.jpg')) {
    telaTrending.style.backgroundImage = "url('../Midia/imgCampaing/caco.jpg')";
  } else if (telaTrending.style.backgroundImage.includes('pingu.jpg')) {
    telaTrending.style.backgroundImage = "url('../Midia/imgCampaing/burro.jpg')";
  } else if (telaTrending.style.backgroundImage.includes('ratinho.jpg')) {
    telaTrending.style.backgroundImage = "url('../Midia/imgCampaing/pingu.jpg')";
  }
}
