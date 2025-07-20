const song = document.getElementById("song");
const progress = document.querySelector(".progress");
const ctrlicon = document.getElementById("ctrlicon");

// Sync progress bar when metadata loads
song.addEventListener("loadedmetadata", () => {
  progress.max = song.duration;
});

// Update progress bar as song plays
song.addEventListener("timeupdate", () => {
  progress.value = song.currentTime;
});

// Let user scrub the song using slider
progress.addEventListener("input", () => {
  song.currentTime = progress.value;
});

// Toggle play/pause
function PlayPause() {
  if (song.paused) {
    song.play();
    ctrlicon.classList.remove("fa-play");
    ctrlicon.classList.add("fa-pause");
  } else {
    song.pause();
    ctrlicon.classList.remove("fa-pause");
    ctrlicon.classList.add("fa-play");
  }
}


function PlayPause() {
  const songImg = document.querySelector(".songimg");

  if (song.paused) {
    song.play();
    ctrlicon.classList.remove("fa-play");
    ctrlicon.classList.add("fa-pause");
    songImg.classList.add("spin"); // Start spinning
  } else {
    song.pause();
    ctrlicon.classList.remove("fa-pause");
    ctrlicon.classList.add("fa-play");
    songImg.classList.remove("spin"); // Stop spinning
  }
}