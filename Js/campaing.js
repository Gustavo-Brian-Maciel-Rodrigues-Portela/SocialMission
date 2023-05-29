const telaTrending = document.getElementById("trendingContainer")

function alterarTela1() {
    if (telaTrending.style.backgroundImage.indexOf('caco.jpg') != -1) {
        telaTrending.style.backgroundImage = "url('burro.jpg')";
    } else if (telaTrending.style.backgroundImage.indexOf('burro.jpg') != -1) {
        telaTrending.style.backgroundImage = "url('pingu.jpg')";
    } else if (telaTrending.style.backgroundImage.indexOf('pingu.jpg') != -1) {
        telaTrending.style.backgroundImage = "url('ratinho.jpg')";
    } else if (telaTrending.style.backgroundImage.indexOf('ratinho.jpg') != -1) {
        telaTrending.style.backgroundImage = "url('caco.jpg')";
    }
}

function alterarTela2() {
    if (telaTrending.style.backgroundImage.indexOf('caco.jpg') != -1) {
        telaTrending.style.backgroundImage = "url('ratinho.jpg')";
    } else if (telaTrending.style.backgroundImage.indexOf('burro.jpg') != -1) {
        telaTrending.style.backgroundImage = "url('caco.jpg')";
    } else if (telaTrending.style.backgroundImage.indexOf('pingu.jpg') != -1) {
        telaTrending.style.backgroundImage = "url('burro.jpg')";
    } else if (telaTrending.style.backgroundImage.indexOf('ratinho.jpg') != -1) {
        telaTrending.style.backgroundImage = "url('pingu.jpg')";
    }
}