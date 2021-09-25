const musica = document.getElementById("musica");
const video = document.getElementById("video");
const buttonPlayPause = document.getElementById("buttonPlayPause");
//////////////////MUSICA

function play() {
    musica.play();
}

function pause() {
    musica.pause();
}

function volume(valor) {
    musica.volume += valor;
}

//////////////////////////////VIDEO

function playPause() {
    if (video.paused) {
        video.play();
        buttonPlayPause.innerHTML = 'pause';
    } else {
        video.pause()
        buttonPlayPause.innerHTML = 'play_arrow';
    }
}

function volumeVideo(valor) {
    video.volume += valor;
}