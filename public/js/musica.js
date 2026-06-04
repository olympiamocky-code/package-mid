const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const album = document.querySelector(".album");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();

    playBtn.textContent = "❚❚";

    album.classList.add("playing");
  } else {
    audio.pause();

    playBtn.textContent = "▶";

    album.classList.remove("playing");
  }
});
