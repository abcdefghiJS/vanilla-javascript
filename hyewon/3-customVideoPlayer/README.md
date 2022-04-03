# 목차
- `<video>` 요소
- loadedmetadata
- Event listener 중첩

## `<video>` 요소
- - -
- 비디오 플레이백을 지원하는 미디어 플레이어를 문서에 삽입한다.

### Properties
- - -
<br /> | Description
|--|--|
src | 삽입할 동영상의 주소
poster | 동영상 재생/탐색하기 전까지 출력되는 포스터 프레임 주소
currentTime | 현재 재생 위치
duration | video 전체 길이

### Methods
- - -
<br /> | Description
|--|--|
play() | 재생 시작
pause() | 일시정지

### Events
- - -
<br /> | Description
|--|--|
ended | 현재 video 가 끝났을 때
loadedmetadata | 브라우저가 video 에 대한 메타 데이터를 로드했을 때
pause | video 가 일시정지 되었을 때
play | video 가 시작되었거나 더이상 일시정지 되지 않았을 때
timeupdate | 현재 재생위치가 변경되었을 때

### 내 코드
```javascript
if($video.paused){
    $video.play()
    $playButton.classList.replace('fa-play', 'fa-pause')
    return
}
```
```javascript
$video.currentTime = Math.trunc(currentPosition)
```

## loadedmetadata
- - -
- video 의 메타 데이터가 로드되면 해당 이벤트가 발생한다.
- video 의 전체 길이를 가져오는 duration 속성은, **video 에 대한 로드가 끝나지 않은 시점에서 호출하면 NaN 값이 출력된다.**
- 따라서 로드가 끝난 시점에서 duration 값을 호출하고 싶다면, **'lodaedmetadata'** 이벤트 리스너를 등록해야 한다.

### 내 코드
- - -
```javascript
$video.addEventListener('loadedmetadata', function() {
    const duration = $video.duration
```

## Event listener 중첩
- - -
### 내 코드
```javascript
$video.addEventListener('loadedmetadata', function() {
    const duration = $video.duration
    const unit = ((parseFloat($progressBar.max) - parseFloat($progressBar.min)) / duration) / 4

    $video.addEventListener('timeupdate', e => {
        $progressBar.value = parseFloat($progressBar.value) + unit
        // 생략
    })
    
    $progressBar.addEventListener('change', e => {
        const currentPosition = duration * $progressBar.value / (parseFloat($progressBar.max)
        // 생략
    })
})
```
loadedmetadata 항목의 설명에서도 언급했듯이, duration 은 메타데이터가 로드된 이후에 호출하는 것이 안전하다. 그럼 duration 과 관련된 변수를 사용하는 event listener 들은 loadedmetadata 로 duration 을 가져온 이후에 실행됨이 보장되어야 할 것 같은데, 그렇게 할 만한 방법이 중첩밖에 생각나지 않았다... 이게 효율적인 방법인지는 잘 모르겠다... (nested event listener 이런 식으로 서치해 봤는데 좋은 정보를 얻지 못했다.)

## 참조
- - -
- `<video>` 요소 <br />
https://developer.mozilla.org/ko/docs/Web/HTML/Element/Video <br />
https://html.spec.whatwg.org/#the-video-element <br />
https://www.w3schools.com/tags/ref_av_dom.asp <br />
- loadedmetadata <br />
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=ivory82&logNo=220096880567 <br />
