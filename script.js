// To create multiple bubbles & assigning random values
function makeBubble() {
    var clutter = "";
for(var i=1; i<120; i++) {
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

// Timer 
var timer = 30;
function runTimer() {
    var timerinterval = setInterval(function(){
        if(timer>=0){
            document.querySelector("#timervalue").textContent = timer;
            timer--;   
        } else {
            clearInterval(timerinterval);
            document.querySelector("#pbtm").innerHTML = `<h1> YaaaaaaY : Your Score is ${score}</h1>`;
            const soundy = document.querySelector("#Sound");
            soundy.play();
        }
    },1000);
}
runTimer();

// Random number for hit 
var hitrn = 0;
function newHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent = hitrn;
}
newHit();

// Increasing score
var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

// Event Listener
const clickSound = document.querySelector("#clickSound");
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn) {
        increaseScore();
        clickSound.play();
        newHit();
        makeBubble();
    }
})

// Gasp Animation
gsap.to(".dec01",{
    y: 550,
    delay: 1,
    duration: 15,
    repeat: -1,
    yoyo: true
})
gsap.to(".dec03",{
    y: -550,
    delay: 1,
    duration: 15,
    repeat: -1,
    yoyo: true
})
