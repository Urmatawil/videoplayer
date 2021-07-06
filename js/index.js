const video = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");
const progressBar = document.querySelector("#progress-bar");
const mute = document.querySelector("#mute");
const unmute = document.querySelector("#unmute");

video.addEventListener("loadedmetadata", () => {
	progressBar.max = video.duration;
});

video.addEventListener(
	"timeupdate",
	() => (progressBar.value = video.currentTime)
);

progressBar.addEventListener("input", () => video.currentTime = progressBar.value)

play.addEventListener("click", () => {
	video.play();
	play.hidden = true;
	pause.hidden = false;
});

pause.addEventListener("click", () => {
	video.pause();
	play.hidden = false;
	pause.hidden = true;
});

forward.addEventListener("click", () => (video.currentTime += 10));

backward.addEventListener("click", () => (video.currentTime -= 10));

loop.addEventListener("click", () => video.toggleAttribute("loop"));

mute.addEventListener("click",()=>{
    video.volume = 0;
    mute.hidden = true;
    unmute.hidden = false
})

unmute.addEventListener("click",()=>{
    video.volume = 1;
    unmute.hidden = true;
    mute.hidden = false
})
