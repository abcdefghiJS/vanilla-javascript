import $ from "./lib/util/dom.js";
import setTime from "./lib/util/setTime.js";

const $video = $("#video");
const $playButton = $("#play");
const $stopButton = $("#stop");
const $progress = $("#progress");
const $timeStamp = $("#timestamp");

const toggleVideoStatus = () => {
  if ($video.paused) {
    $video.play();
    return;
  }
  $video.pause();
};

const updatePlayIcon = () => {
  if ($video.paused) {
    $playButton.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    return;
  }
  $playButton.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
};

const updateProgress = () => {
  $progress.value = ($video.currentTime / $video.duration) * 100;

  const minutes = setTime(Math.floor($video.currentTime / 60));
  const seconds = setTime(Math.floor($video.currentTime % 60));

  $timeStamp.innerHTML = `${minutes}:${seconds}`;
};

const setVideoProgress = () => {
  $video.currentTime = (Number($progress.value) * $video.duration) / 100;
};

const stopVideo = () => {
  $video.currentTime = 0;
  $video.pause();
};

const init = () => {
  $video.addEventListener("click", toggleVideoStatus);
  $video.addEventListener("pause", updatePlayIcon);
  $video.addEventListener("play", updatePlayIcon);
  $video.addEventListener("timeupdate", updateProgress);

  $playButton.addEventListener("click", toggleVideoStatus);

  $stopButton.addEventListener("click", stopVideo);

  $progress.addEventListener("change", setVideoProgress);
};

init();
