console.log("Welcome to Spotify");
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "shapeofyou",filepath:"songs/1.mp3",coverPath:"cover/img1.jpg"},
    {songName: "Mashmello-alone",filepath:"songs/2.mp3",coverPath:"cover/img2.jpg"},
    {songName: "AlanWalker-faded",filepath:"songs/3.mp3",coverPath:"cover/img4.jpg"},
    {songName: "Makhna",filepath:"songs/4.mp3",coverPath:"cover/img3.jpg"},
    {songName: "Believer",filepath:"songs/5.mp3",coverPath:"cover/img5.jpg"},
]

songitems.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
        mastersongname.innerText = songs[songindex].songName;
    })
// play pause click 
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        mastersongname.innerText = songs[songindex].songName;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        mastersongname.innerText = songs[songindex].songName;
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})
const makeAllplay =()=>{   
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        mastersongname.innerText = songs[songindex].songName;
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplay();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${index++}.mp3`;
        mastersongname.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5)
    {
        songindex = 0
    }
    else 
    {
        songindex += 1;
    }
    audioElement.src = `songs/${index++}.mp3`;
    mastersongname.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex>=0)
    {
        songindex = 0
    }
    else 
    {
        songindex -= 1;
    }
    audioElement.src = `songs/${index=index-1}.mp3`;
    mastersongname.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})