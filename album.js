console.log(Math.random(1920)*1000);


// STREAM===================================================
const listen = document.querySelector('.main-stream');
const listenTop = document.querySelector('.fixed-media-listen');

function listenAlbum(){
    location.href = "https://vk.com/audios274262518?section=all&z=audio_playlist274262518_99";
};

listen.addEventListener("click", listenAlbum);
listenTop.addEventListener("click", listenAlbum);

// SHOOT====================================================
const text = document.querySelector('.main-text');
const maintitle = document.querySelector('.main-albumtitle');
const lirycs = document.querySelector('.popup-content');

function shootPlay(){
    const audio = new Audio();
    audio.src = 'img/shoot.mp3'
    audio.autoplay = true;
    audio.play();
};

maintitle.addEventListener("click", shootPlay);
text.addEventListener("click", shootPlay);
lirycs.addEventListener("click", shootPlay);
// ГОЛОС========================================================

function devtVoice(){
    const voice = new Audio();
    voice.src = 'img/voice.mp3';
    voice.autoplay = "";
    voice.playsinline="true";
    voice.webkitPlaysinline ="true";
    voice.play();
    
}

document.addEventListener("DOMContentLoaded", devtVoice);


// ТЕКСТА=====================================================
const textButton = document.querySelector('.fixed-icon.text');
const textPopup = document.querySelector('.popup');


textPopup.addEventListener("click", textsClose);



function textsOpen(){
if(textPopup.classList.contains("passive")){

textPopup.classList.remove("passive");
textPopup.classList.add("active");

}
};
function textsClose(){
    if(textPopup.classList.contains("active")){

        textPopup.classList.remove("active");
        textPopup.classList.add("passive");
        
        }
}


textButton.addEventListener("click", textsOpen);

// BULLET=================================================
const main = document.querySelector('.main');
const clear = document.querySelector('.main-other');



function bullet(){
main.insertAdjacentHTML(
    `afterbegin`,
    `<img src="img/bullet.png" class="bullet">`
)
const bulletImg = document.querySelector('.bullet');
bulletImg.style.position = 'absolute';

const top = Math.random(920)*900;
const left = Math.random(3800)*1500;



bulletImg.style.top = top + 'px';
bulletImg.style.left = left + 'px';
bulletImg.style.maxWidth = '20px'
bulletImg.style.opacity = '1';

};



text.addEventListener("click", bullet);
maintitle.addEventListener("click", bullet);


const bulletImg = document.querySelectorAll('.bullet');

function bulletsClear(){
    
    e.forEach(e => {
        bulletImg.style.display = 'none';
    });
}


clear.addEventListener("clear", bulletsClear);


function bulletSpace(k){
    if(k.keyCode == '32'){
    
        const audio = new Audio();
        audio.src = 'img/shoot.mp3'
        audio.autoplay = true;
        audio.play();
    
    
        main.insertAdjacentHTML(
        `afterbegin`,
        `<img src="img/bullet.png" class="bullet">`
    )
    const bulletImg = document.querySelector('.bullet');
    bulletImg.style.position = 'absolute';
    
    const top = Math.random(920)*900;
    const left = Math.random(3800)*1500;
    bulletImg.style.top = top + 'px';
    bulletImg.style.left = left + 'px';
    bulletImg.style.maxWidth = '20px'
    bulletImg.style.opacity = '1';
    
    }};



document.addEventListener("keypress", bulletSpace);

