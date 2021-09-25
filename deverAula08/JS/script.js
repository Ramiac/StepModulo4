const video = document.querySelector("#video");
const buttonPlayPause = document.querySelector("#buttonPlayPause");
const seekslider = document.getElementById("seekslider");
const curtimetext = document.getElementById("curtimetext");
const durtimetext = document.getElementById("durtimetext");

seekslider.addEventListener("change", vidSeek, false);
video.addEventListener("timeupdate", seektimeupdate, false);

function playPause() {
    if (video.paused) {
        video.play();
        document.querySelector("#buttonPlayPause").innerHTML = '<i id="playPause-icon" class="fas fa-pause"></i>';
    } else {
        video.pause()
        document.querySelector("#buttonPlayPause").innerHTML = '<i id="playPause-icon" class="fas fa-play"></i>';

    }
}

function volumeVideo(valor) {
    video.volume += valor;
}

function vidSeek() {
    var seekto = video.duration * (seekslider.value / 100);
    video.currentTime = seekto;
}

function seektimeupdate() {
    var nt = video.currentTime * (100 / video.duration);
    seekslider.value = nt;
    var curmins = Math.floor(video.currentTime / 60);
    var cursecs = Math.floor(video.currentTime - curmins * 60);
    var durmins = Math.floor(video.duration / 60);
    var dursecs = Math.floor(video.duration - durmins * 60);
    if (cursecs < 10) { cursecs = "0" + cursecs; }
    if (dursecs < 10) { dursecs = "0" + dursecs; }
    if (curmins < 10) { curmins = "0" + curmins; }
    if (durmins < 10) { durmins = "0" + durmins; }
    curtimetext.innerHTML = curmins + ":" + cursecs;
    durtimetext.innerHTML = durmins + ":" + dursecs;
}