window.addEventListener("keydown",(key)=>{
    const audio = document.querySelector("audio[data-key=\""+key.code+"\"]");
    if(!audio) return;
    const soundKey = document.querySelector(".key[data-key=\""+key.code+"\"]");
    audio.currentTime = 0;
    audio.play();
    soundKey.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach((key)=>{
    key.addEventListener("transitionend", (e)=>{
        if(e.propertyName !== "transform") return;//skiip if not a transform
        key.classList.remove("playing");
    });
});