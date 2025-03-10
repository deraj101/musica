const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');
menuClose.addEventListener('click', () => sidebar.style.left = '-100%');

// script.js

// Get references to the audio player and the button
const audioPlayer = document.getElementById('audio-player');
const listenButton = document.querySelector('.buttons button'); // Adjust selector as needed

// Add event listener to the button
listenButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        listenButton.textContent = 'Pause'; // Change button text to 'Pause'
    } else {
        audioPlayer.pause();
        listenButton.textContent = 'Play'; // Change button text to 'Play'
    }
});

// Add event listener for when the audio ends
audioPlayer.addEventListener('ended', () => {
    listenButton.textContent = 'Listen Now'; // Change button text back to 'Listen Now'
});


// Get references to the audio player and the button

const audioPlay = document.getElementById('audio-play');
const playButton = document.getElementById('play-button');
const currentSongTitle = document.getElementById('current-song-title');
const currentSongArtist = document.getElementById('current-song-artist');
const currentSongImage = document.getElementById('current-song-image');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const activeLine = document.getElementById('active-line');
const deactiveLine = document.getElementById('deactive-line');

// Song list
const songs = [
    {
        title: "Stay",
        artist: "The Kid LAROI, Justin Bieber",
        src: "The Kid LAROI, Justin Bieber - Stay (Lyrics).mp3",
        image: "perez.png",
        duration: "03:45"
    },

    {
        title: "S",
        artist: "The Kid LAROI, Justin Bieber",
        src: "wwd.mp3juice.blog - LXNGVX, Warriyo - Mortals Funk Remix NCS - Copyright Free Music (320 KBps).mp3",
        image: "perez.png",
        duration: "03:45"
    },
    
    
    {
        title: "Sunrise",
        artist: "Lila Rivera",
        src: "assets/song2.mp3",
        image: "assets/song-1.png",
        duration: "03:30"
    },
    {
        title: "Voyage",
        artist: "Tyde Brennnan",
        src: "assets/song3.mp3",
        image: "assets/song-2.png",
        duration: "04:00"
    }
];

let currentSongIndex = 0;

// Load the current song
function loadSong(song) {
    audioPlay.src = song.src;
    currentSongTitle.textContent = song.title;
    currentSongArtist.textContent = song.artist;
    currentSongImage.src = song.image;
    durationDisplay.textContent = song.duration;
}

// Play or pause the song
playButton.addEventListener('click', () => {
    if (audioPlay.paused) {
        audioPlay.play();
        playButton.classList.add('playing');
    } else {
        audioPlay.pause();
        playButton.classList.remove('playing');
    }
});

// Update progress bar
audioPlayer.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audioPlayer;
    currentTimeDisplay.textContent = formatTime(currentTime);
    activeLine.style.width = `${(currentTime / duration) * 100}%`;
});

// Format time in MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Load the first song initially
loadSong(songs[currentSongIndex]);

// Next and Previous buttons
document.getElementById('next-button').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audioPlayer.play();
});

document.getElementById('prev-button').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audioPlayer.play();
});

// When the audio ends, load the next song
audioPlay.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audioPlay.play();
});