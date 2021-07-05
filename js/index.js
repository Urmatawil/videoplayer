const video = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");

play.addEventListener("click", () => {
    video.play();
    play.hidden = true;
    pause.hidden = false;
});

pause.addEventListener("click", () => {
    video.pause()
    play.hidden = false;
    pause.hidden = true;
});

forward.addEventListener("click", () => video.currentTime += 10);

backward.addEventListener("click", () => video.currentTime -= 10);

loop.addEventListener("click", () => video.toggleAttribute('loop'));

mute.addEventListener("click", () => {
    (video.volume === 0) ? video.volume = 1 : video.volume = 0
});
