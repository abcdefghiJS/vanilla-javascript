const $screen = document.querySelector('.screen');
const $video = document.querySelector('#video');
const $playButton = document.querySelector('#play');
const $stopButton = document.querySelector('#stop');
const $progress = document.querySelector('.progress');
const $timestamp = document.querySelector('.timestamp');

$screen.addEventListener('click', toggleVideo);
$video.addEventListener('timeupdate', handleProgress);
$playButton.addEventListener('click', playVideo);
$stopButton.addEventListener('click', pauseVideo);
$video.addEventListener('timeupdate', updateTimestamp);
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
function moveProgressBar() {
    $video.currentTime = $progress.value * $video.duration / 100;
}
function updateTimestamp() {
    const secs = getUnderPoint($video.currentTime / 100);
    const min = getUnderPoint(Math.round(secs / 60) / 100);
    const sec = getUnderPoint(secs % 60/100);
    $timestamp.textContent = `${min}:${sec}`;
}
function getUnderPoint(num) {
    return Number(num).toFixed(2).split('.')[1];
}