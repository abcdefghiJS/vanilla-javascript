const $video = document.getElementById('video')
const $playButton = document.querySelector('.controls .btn#play .fa')
const $progressBar = document.getElementById('progress')
const $timestamp = document.getElementById('timestamp')

function videoPlay() {
    if($video.paused){
        $video.play()
        $playButton.classList.replace('fa-play', 'fa-pause')
        return
    }
    if($video.played) {
        $video.pause()
        $playButton.classList.replace('fa-pause', 'fa-play')
        return
    }
}

function stop() {
    $video.currentTime = 0
    $video.pause()
    if($playButton.classList.contains('fa-pause')){
        $playButton.classList.replace('fa-pause', 'fa-play')
    }
    $progressBar.value = 0
}

$video.addEventListener('loadedmetadata', function() {
    const duration = $video.duration
    const unit = ((parseFloat($progressBar.max) - parseFloat($progressBar.min)) / duration) / 4

    $video.addEventListener('timeupdate', e => {
        $progressBar.value = parseFloat($progressBar.value) + unit
        const min = Math.trunc(Math.trunc($video.currentTime) / 60)
        const sec = Math.trunc(Math.trunc($video.currentTime) % 60)
        const time = ((min >= 10 ) ? `${min}` : ("0" + `${min}`)) + ((sec >= 10) ? `:${sec}` : (":0" + `${sec}`))
        $timestamp.textContent = time
        if($video.ended) {
            $playButton.classList.replace('fa-pause', 'fa-play')
        }
    })
    
    $progressBar.addEventListener('change', e => {
        const currentPosition = duration * $progressBar.value / (parseFloat($progressBar.max) - parseFloat($progressBar.min))
        $video.currentTime = Math.trunc(currentPosition)
    })
})