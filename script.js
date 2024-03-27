var arr = [
    {
        songName:"Shendur lal Chadhayo",
        url: "./song/Shendur Laal Chadhayo (Aarti).mp3",
        img: "./images/vaastav.jpg",
        album: "vaastav",
        time: "3:12"
    },

    {
        songName:"Starboy",
        url: "./song/Starboy.mp3",
        img: "./images/starboy.jpg",
        album: "Starboy",
        time: "3:50"
    },

    {
        songName:"Roll up (ft. KR$NA)",
        url: "./song/Roll Up.mp3",
        img: "./images/rollup.jpeg",
        album: "-",
        time: "3:20"
    },

    {
        songName:"Peaches (Justin Bieber)",
        url: "./song/Peaches.mp3",
        img: "./images/peaches.jpeg",
        album: "Justin",
        time: "3:18"
    }
]


var clutter = ''

var selectedSong = 0

var audio = new Audio();

var saareSong = document.querySelector(".saareSong");
var poster = document.querySelector(".container1");
var sNamePlayer = document.querySelector(".player h1");
var play = document.querySelector("#play");
var back = document.querySelector("#back");
var forward = document.querySelector("#forward");


function mainFunction(){
    arr.forEach(function(elem, index){
        // console.log(elem.songName)
        clutter += `<div class="all-songs" id=${index}>
    
                        <div class="allSongs-Nav-P1">
                            <h3>${index}</h3>
                            <img src=${elem.img} alt="">    
                        </div>
                    
                        <div class="allSongs-Nav-P2">
                            <i class="ri-play-fill"></i>
                            <h3>${elem.songName}</h3>   
                        </div>
                    
                        <div class="allSongs-Nav-P3">
                            <h3>${elem.album}</h3>
                            <h3>${elem.time}</h3>
                        </div>
                    
                        <div class="allSongs-Nav-P4">
                            <h3>0</h3>
                            <i class="ri-heart-fill"></i>
                        </div>
    
                    </div>`
    })

    saareSong.innerHTML = clutter;

    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
    sNamePlayer.innerHTML = `${arr[selectedSong].songName}`
}


mainFunction();

saareSong.addEventListener("click", function(dets, idx){
    selectedSong = dets.target.id;
    // mainFunction()

    play.innerHTML = `<i class="ri-pause-fill"></i>`
    flag = 1
    audio.play();

})

var flag = 0
play.addEventListener("click", function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        mainFunction();
        audio.play();
        flag = 1;
    } else{
        play.innerHTML = `<i class="ri-play-large-fill"></i>`
        mainFunction();
        audio.pause();
        flag = 0;
    }
   
})


forward.addEventListener("click", function(){
    if(selectedSong < arr.length - 1){
        selectedSong++
        mainFunction();
        audio.play()
        forward.style.opacity = 1;
    } else {
        forward.style.opacity = 0.45;
    }
})

back.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction();
        audio.play()
        back.style.opacity = 1;
    } else {
        back.style.opacity = 0.45;
        // audio.pause();
    }
})