const song = document.getElementById('song');
const playBtn = document.querySelector('.fa-play');
const backwardBtn = document.querySelector('.fa-backward');
const forwardBtn = document.querySelector('.fa-forward');
const progress = document.getElementById('progress');

playBtn.addEventListener('click', () => {
    if (song.paused) {
        song.play();
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
    } else {
        song.pause();
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
    }
});

song.addEventListener('timeupdate', () => {
    progress.value = (song.currentTime / song.duration) * 100;
});

progress.addEventListener('input', () => {
    song.currentTime = (progress.value / 100) * song.duration;
});

// Optional: Skip 5 seconds backward/forward
backwardBtn.addEventListener('click', () => {
    song.currentTime -= 5;
});
forwardBtn.addEventListener('click', () => {
    song.currentTime += 5;
});

// ...existing code...