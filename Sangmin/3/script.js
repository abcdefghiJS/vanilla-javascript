const video = document.querySelector("#video");

const playBtn = document.querySelector("#play");
const playBtnProperty = playBtn.querySelector("i");
const stopBtn = document.querySelector("#stop");

const progress = document.querySelector(".progress");
const timestamp = document.querySelector(".timestamp");

const PutToPlay = () => {
  playBtnProperty.classList.remove("fa-play");
  playBtnProperty.classList.add("fa-pause");
};
const PutToPause = () => {
  playBtnProperty.classList.remove("fa-pause");
  playBtnProperty.classList.add("fa-play");
};

const adjustVideoPlay = () => {
  video.paused ? video.play() : video.pause();
  video.paused ? PutToPause() : PutToPlay();
};

const resetTimestamp = () => {
  video.currentTime = 0;
  video.pause();
  PutToPause();
};

const adjustProgressBar = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  let minutes = String(Math.floor(video.currentTime / 60)).padStart(2, "0");
  let seconds = String(Math.floor(video.currentTime % 60)).padStart(2, "0");

  timestamp.innerHTML = `${minutes}:${seconds}`;
};

const updateProgress = () => {
  video.currentTime = (progress.value * video.duration) / 100;
};

video.addEventListener("click", adjustVideoPlay);
playBtn.addEventListener("click", adjustVideoPlay);
stopBtn.addEventListener("click", resetTimestamp);

video.addEventListener("timeupdate", adjustProgressBar);

progress.addEventListener("change", updateProgress);
