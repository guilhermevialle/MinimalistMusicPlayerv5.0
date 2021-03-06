const musicas = [
    {
        name: "Art Of Silence",
        path: "./musics/music1.mp3",
        img: "./images/img1.jpg",
        autor: "[Free-to-Use]",
    },
    {
        name: "Vision",
        path: "./musics/music2.mp3",
        img: "./images/img2.jpg",
        autor: "Tenno",
    },
    {
        name: "All That You Are is All That I Need",
        path: "./musics/music3.mp3",
        img: "./images/img3.jpg",
        autor: "Desconhecido",
    },
    {
        name: "The Girl Next Door (Instrumental)",
        path: "./musics/music4.mp3",
        img: "./images/img4.jpg",
        autor: "ON TOP",
    },
    {
        name: "Levi vs Jaw Titan Theme",
        path: "./musics/music5.mp3",
        img: "./images/img5.jpg",
        autor: "Samuel Kim",
    },
    {
        name: "Eaten",
        path: "./musics/music6.mp3",
        img: "./images/img6.jpg",
        autor: "Bloodbath",
    },
    {
        name: "The Floor Is Lava",
        path: "./musics/music7.mp3",
        img: "./images/img7.jpg",
        autor: "[NCS]",
    },
    {
        name: "Reiner Reveal Transformation",
        path: "./musics/music8.mp3",
        img: "./images/img8.jpg",
        autor: "Desconhecido",
    },
    {
        name: "You Only Live Once",
        path: "./musics/music9.mp3",
        img: "./images/img9.jpg",
        autor: "Suicide Silence",
    },
];

// indice da musica atual
var mainArray = 0;

// elementos da musica

const imgDaMusica = document.getElementById("imgDaMusica");
const audioDaMusica = document.getElementById("audioDaMusica");
const autorDaMusica = document.getElementById("autorDaMusica");
const nomeDaMusica = document.getElementById("nomeDaMusica");

// comeca na primeira musica

nomeDaMusica.textContent = musicas[0].name;
imgDaMusica.src = musicas[0].img;
autorDaMusica.textContent = musicas[0].autor;
audioDaMusica.src = musicas[0].path;

// elementos dos controladores

const repeat = document.getElementById("repeat");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const volume = document.getElementById("volume");
const volumeRange = document.getElementById("volumeRange");
const musicTimeDinamic = document.getElementById("musicTimeDinamic");
const addMusicBoxInput = document.querySelectorAll("#addMusicsBox input");
const addMusicBox = document.getElementById("addMusicsBox");
const socialMedia = document.querySelector(".socialMedia");

// time slider / controlador do tempo da musica
const timeSlider = document.getElementById("timeSlider");
timeSlider.value = 0;

// play music function
play.style.maxWidth = "20%";

play.addEventListener("click", playMusic, false);

function playMusic() {
    if (audioDaMusica.paused) {
        audioDaMusica.play();
        play.src = "./icons/pause.svg";
        var newtimer = setInterval(rangeSlider, 1000);
    } else {
        audioDaMusica.pause();
        play.src = "./icons/play.svg";
    }
}

// repeat music function
repeat.addEventListener("click", repeatMusic, false);

function repeatMusic() {
    if (audioDaMusica.loop == 0) {
        audioDaMusica.loop = 1;
        repeat.style.transform = "rotateZ(100deg)";
    } else {
        audioDaMusica.loop = 0;
        repeat.style.backgroundColor = "transparent";
        repeat.style.transform = "rotateZ(0)";
    }
}

// prev music function
prev.addEventListener("click", prevMusic, false);

function prevMusic() {
    if (mainArray < 0) {
        mainArray = 0;
        return;
    } else {
        mainArray--;
        nomeDaMusica.textContent = musicas[mainArray].name;
        imgDaMusica.src = musicas[mainArray].img;
        autorDaMusica.textContent = musicas[mainArray].autor;
        audioDaMusica.src = musicas[mainArray].path;
        playMusic();
    }
}

//next music function

next.addEventListener("click", nextMusic, false);

function nextMusic() {
    if (mainArray > musicas.length) {
        mainArray = musicas.length - 1;
        return;
    } else {
        mainArray++;
        nomeDaMusica.textContent = musicas[mainArray].name;
        imgDaMusica.src = musicas[mainArray].img;
        autorDaMusica.textContent = musicas[mainArray].autor;
        audioDaMusica.src = musicas[mainArray].path;
        playMusic();
    }
}

// no volume function
volume.addEventListener("click", semVolume, false);

function semVolume() {
    if (audioDaMusica.volume) {
        audioDaMusica.volume = 0;
        volume.src = "./icons/novolume.svg";
        volumeRange.style.display = "none";
    } else {
        audioDaMusica.volume = volumeRange.value / 100;
        volume.src = "./icons/volume.svg";
        volumeRange.style.display = "flex";
    }
}

timeSlider.addEventListener("change", changeDuration, false);

// escolher duracao da musica
function changeDuration() {
    sliderPosition = audioDaMusica.duration * (timeSlider.value / 100);
    audioDaMusica.currentTime = sliderPosition;
}

// duracao da musica dinamica
const totalTime = document.getElementById("totalTime");

function tempoDaMusica() {
    musicTimeDinamic.innerHTML =
        parseInt((audioDaMusica.currentTime / 60) % 60) +
        ":" +
        parseInt(audioDaMusica.currentTime % 60);

    totalTime.textContent =
        parseInt((audioDaMusica.duration / 60) % 60) +
        ":" +
        parseInt(audioDaMusica.duration % 60);
}

function rangeSlider() {
    let posicao = 0;

    if (!isNaN(audioDaMusica.duration)) {
        position = audioDaMusica.currentTime * (100 / audioDaMusica.duration);
        timeSlider.value = position;

        tempoDaMusica();

        if (position == 100) {
            nextMusic();
        }
    }
}

// volume change slider
volumeRange.addEventListener("change", changeVolume, false);

volumeRange.value = 20;
audioDaMusica.volume = 0.2;

function changeVolume() {
    audioDaMusica.volume = volumeRange.value / 100;
}
// interface animation kk
const interface = document.getElementById("interface");
const footer = document.querySelector(".footer");
const paiDaInterface = document.querySelector(".paiDaInterface");

function animation() {
    paiDaInterface.style.transform = "translateY(0)";
    paiDaInterface.style.opacity = 1;
}

// miniatura scripts
const nomeDoAutorMiniatura = document.querySelectorAll("#nomeDoAutorMiniatura");
const nomeDaMusicaMiniatura = document.querySelectorAll(
    "#nomeDaMusicaMiniatura"
);
const imgDaMusicaMiniatura = document.querySelectorAll("#imgDaMusicaMiniatura");

const divFaixa = document.querySelectorAll("#faixa");

for (let newArray = 0; newArray < nomeDaMusicaMiniatura.length; newArray++) {
    nomeDoAutorMiniatura[newArray].textContent = musicas[newArray].autor;
    nomeDaMusicaMiniatura[newArray].textContent = musicas[newArray].name;
    imgDaMusicaMiniatura[newArray].src = musicas[newArray].img;

    function putMusic() {
        mainArray = newArray;
        nomeDaMusica.textContent = musicas[newArray].name;
        imgDaMusica.src = musicas[newArray].img;
        autorDaMusica.textContent = musicas[newArray].autor;
        audioDaMusica.src = musicas[newArray].path;
        playMusic();
    }

    divFaixa[newArray].addEventListener("click", putMusic, false);
}

// enviar arquivos / add music
const btnPegarFiles = document.getElementById("pegarFiles");

const imgFile = document.getElementById("imgFile");
const musicFile = document.getElementById("musicFile");
const autorFile = document.getElementById("autorFile");
const nomeDaMusicaFile = document.getElementById("nomeDaMusicaFile");

btnPegarFiles.addEventListener(
    "click",
    () => {
        //nome
        const nomeDaMusicaFileCreated = nomeDaMusicaFile.value;

        //music
        function musicFunc() {
            const musicFileCreated = URL.createObjectURL(musicFile.files[0]);
            return musicFileCreated;
        }

        musicFile.addEventListener("change", musicFunc, false);

        //img
        function imgFunc() {
            const imgFileCreated = URL.createObjectURL(imgFile.files[0]);
            return imgFileCreated;
        }

        imgFile.addEventListener("change", imgFunc, false);

        //autor
        const autorFileCreated = autorFile.value;

        if (nomeDaMusicaFileCreated == musicas[musicas.length - 1].name) {
            alert("This song already exist.");
            return;
        } else {
            AddInMainArray(
                nomeDaMusicaFileCreated,
                musicFunc(),
                imgFunc(),
                autorFileCreated
            );
            addMusicInMiniatura(
                nomeDaMusicaFileCreated,
                imgFunc(),
                autorFileCreated
            );
        }
    },
    false
);

// funccao q add o objeto no array
function AddInMainArray(name, path, img, autor) {
    const newMusicArray = {
        name: name,
        path: path,
        img: img,
        autor: autor,
    };

    musicas.push(newMusicArray);
}

// add musica na miniatura
const miniatura = document.getElementById("miniatura");

function addMusicInMiniatura(name, img, autor) {
    var myDiv = document.createElement("div");
    myDiv.id = "faixa";
    myDiv.className = "faixa";

    myDiv.innerHTML = `
    
        <div class="imgFaixaBox">
            <img id="imgDaMusicaMiniatura" src=${img} />
        </div>
        <div class="infoMusic">
            <div class="nome">
            <p id="nomeDoAutorMiniatura">${autor}</p>
        </div>
            <div class="titulo">
                <h3 id="nomeDaMusicaMiniatura">${name}</h3>
            </div>
        </div>    

    `;
    miniatura.appendChild(myDiv);
}

// button hover animation
const buttonHover = document.getElementById("buttonHover");

function animationButton() {
    miniatura.classList.toggle("displayOff");
}

buttonHover.addEventListener("click", animationButton, false);

// gambiarra animacao
function gambiarra() {
    if (miniatura.classList[1] == "displayOff") {
        miniatura.style.zIndex = 0;
    }
}

miniatura.addEventListener("transitionend", gambiarra, false);

function gambiarra2() {
    if (miniatura.classList[1] != "displayOff") {
        miniatura.style.zIndex = -1;
        interface.style.zIndex = 10000;
    }
}

miniatura.addEventListener("transitionstart", gambiarra2, false);

// button click to show add musics box
const addMusicButton = document.getElementById("addMusicButton");

function showBox() {
    addMusicBox.classList.toggle("teste");
    socialMedia.classList.toggle("teste2");
}

// colocar uma nova musica adicionada pra tocar *****BUG RESOLVIDO*****
const addMusicWithNewArray = () => {
    let newFaixa = document.querySelectorAll("#faixa");

    newFaixa.forEach((item, index) => {
        item.addEventListener(
            "click",
            () => {
                mainArray = index;

                imgDaMusica.src = musicas[index].img;
                audioDaMusica.src = musicas[index].path;
                autorDaMusica.textContent = musicas[index].autor;
                nomeDaMusica.textContent = musicas[index].name;
                playMusic();
            },
            false
        );
    });
};

miniatura.addEventListener("DOMNodeInserted", addMusicWithNewArray);

// init particles
particlesJS("particles-js", {
    particles: {
        number: { value: 6, density: { enable: true, value_area: 800 } },
        color: { value: "#180304" },
        shape: {
            type: "polygon",
            stroke: { width: 0, color: "#000" },
            polygon: { nb_sides: 7 },
            image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
            value: 0.3286994724774322,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
            value: 51,
            random: true,
            anim: { enable: true, speed: 10, size_min: 40, sync: false },
        },
        line_linked: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 1,
            width: 2,
        },
        move: {
            enable: true,
            speed: 8,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false, mode: "grab" },
            onclick: { enable: false, mode: "push" },
            resize: true,
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: false,
});
