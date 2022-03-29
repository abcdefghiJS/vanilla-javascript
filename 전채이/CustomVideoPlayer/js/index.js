const $screen = document.querySelector('.screen');
const $video = document.querySelector('#video');
const $playButton = document.querySelector('#play');
const $stopButton = document.querySelector('#stop');
const $progress = document.querySelector('.progress');

$screen.addEventListener('click', toggleVideo);
$video.addEventListener('timeupdate', handleProgress);
$playButton.addEventListener('click', playVideo);
$stopButton.addEventListener('click', pauseVideo);
$progress.addEventListener('change', moveProgressBar);

function toggleVideo() {
    $video.paused ? playVideo() : pauseVideo();
}
function handleProgress() {
    const percent = $video.currentTime / $video.duration * 100;
    $progress.value = `${percent}`;
}
function playVideo() {
    $video.play();
}
function pauseVideo() {
    $video.pause();
}
function moveProgressBar(e) {
    console.log("change");
    console.log(e);
    const currentTime = $progress.value;
    console.log(currentTime);
    $video.currentTime = currentTime;
}