const $videoPlayer = document.getElementById('video');
const $playButton = document.getElementById('play');
const $stopButton = document.getElementById('stop');
const $progressBar = document.getElementById('progress');
const $timeStamp = document.getElementById('timestamp');

const playPauseVideo = () => {
  if ($videoPlayer.paused) {
    $playButton.firstElementChild.className = 'fa fa-pause fa-2x';
    $videoPlayer.play();
    return;
  }
  $playButton.firstElementChild.className = 'fa fa-play fa-2x';
  $videoPlayer.pause();
};

const stopVideo = () => {
  $playButton.firstElementChild.className = 'fa fa-play fa-2x';
  $videoPlayer.pause();
  $videoPlayer.currentTime = 0;
};

const renderCurrentVideoTime = () => {
  const minutes = Math.floor($videoPlayer.currentTime / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor($videoPlayer.currentTime - minutes)
    .toString()
    .padStart(2, '0');

  $timeStamp.textContent = `${minutes}:${seconds}`;
  $progressBar.value = (100 / $videoPlayer.duration) * $videoPlayer.currentTime;
};

const handleProgressBar = (e) => {
  $videoPlayer.currentTime = e.target.value * ($videoPlayer.duration / 100);
};

$videoPlayer.addEventListener('click', playPauseVideo);
$videoPlayer.addEventListener('ended', stopVideo);
$videoPlayer.addEventListener('timeupdate', renderCurrentVideoTime);

$progressBar.addEventListener('change', handleProgressBar);

$playButton.addEventListener('click', playPauseVideo);
$stopButton.addEventListener('click', stopVideo);
