document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video.video-item');
    videos.forEach(video => {
        video.addEventListener('mouseenter', function() {
            this.pause();
        });
        video.addEventListener('mouseleave', function() {
            this.play();
        });
    });
});