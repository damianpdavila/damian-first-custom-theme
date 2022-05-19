const bgVideoID = document.querySelector('.js-background-video').getAttribute('data-video');

//TEST
console.log('bgVideoID: ' + bgVideoID);

const playerOptions = {
    autoplay: 1,
    mute: 1,
    autohide: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    controls: 0,
    disablekb: 1,
    enablejsapi: 1,
    iv_load_policy: 3,
    loop: 1,
    playlist: bgVideoID
};

const videoOverlay = document.querySelector('.js-video-overlay');

//TEST
console.log('videoOverlay: ' + videoOverlay);


let ytPlayer;

function onYouTubeIframeAPIReady() {
    //TEST
    console.log('In onYouTubeIframeAPIReady()');
    ytPlayer = new YT.Player('yt-player', {
        width: '1280',
        height: '720',
        videoId: bgVideoID,
        playerVars: playerOptions,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {

    //TEST
    console.log('In onPlayerReady()');


    event.target.playVideo();

    /* const videoDuration = event.target.getDuration();

    setInterval(function() {
        const videoCurrentTime = event.target.getCurrentTime();
        const timeDifference = videoDuration - videoCurrentTime;

        if (2 > timeDifference > 0) {
            event.target.seekTo(0);
        }
    }, 1000); */
}

function onPlayerStateChange(event) {

    //TEST
    console.log('In onPlayerStateChange()');
    console.debug(event);

    if (event.data == YT.PlayerState.PLAYING) {
        videoOverlay.classList.add('video-overlay-fadeOut');
    }
}