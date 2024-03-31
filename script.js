const eq = document.getElementById("eq");
const nextbtn = document.getElementById("next-btn");
const prevbtn = document.getElementById("prev-btn");
let audio = new Audio();
var audFiles = ["Audio/AJT_amp.wav","Audio/NNMKA.mp3", "Audio/Dhun.mp3"]
// audio.src = "Audio/AJT.wav"
// audio.loop = true;
var i=0;
audio.src = audFiles[i];

function prevAudFile(){
    if (i === 0) {
        i = audFiles.length - 1;
    } else {
        i--;
    }
    audio.src = audFiles[i];
    audio.play();
}
function nextAudFile(){
    if (i === audFiles.length - 1) {
        i = 0;
    } else {
        i++;
    }
    audio.src = audFiles[i];
    // console.log(i);
    // console.log(audio.src);
    audio.play();
}
function toggleAudio(){
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
}
// eq.addEventListener("click", animate);
eq.addEventListener("click", toggleAudio);

audio.addEventListener('playing', animate, false)
audio.addEventListener('pause', stopAnimate, false)
audio.addEventListener('ended', nextAudFile, false)

nextbtn.addEventListener("click", nextAudFile)
prevbtn.addEventListener("click", prevAudFile)
// Equalizer bars
function animate(event){
    console.log("Start animating");
    eq.classList.add("active");
}
function stopAnimate(event){
    console.log("Stop animating");
    eq.classList.remove("active");
}
