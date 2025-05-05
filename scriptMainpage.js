const video = document.getElementById("background-video");

video.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

video.addEventListener("contextmenu", (event) => event.preventDefault());
video.addEventListener("dragstart", (event) => event.preventDefault());
video.addEventListener("dragover", (event) => event.preventDefault());