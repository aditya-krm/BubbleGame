async function startGame() {
    await new Promise((resolve) => {
      alert("Rule: Just match hit number and random bubbles. Let's Go!");
      resolve();
    });
  
    score = 0;
    timer = 60;
    hit = 0;
    document.querySelector("#scorevalue").textContent = score;
    document.querySelector("#timervalue").textContent = timer;
    document.querySelector("#hitvalue").textContent = hit;
    runTimer();
    makeBubble();
    getNewHit();
}

function resetGame() {
    if(timer>0){
        timer = 0;
        document.querySelector(".pbtm").innerHTML("Terminated");
    }
    else{
        alert("Rule : Just match hit number and random bubbles. Lets Go!");
        score = 0;
        timer = 60;
        hit = 0;
        document.querySelector("#scorevalue").textContent = score;
        document.querySelector("#timervalue").textContent = timer;
        document.querySelector("#hitvalue").textContent = hit;
        runTimer();
        makeBubble();
        getNewHit();
    }
  }

function makeBubble(){
    let clutter = "";

    for(var i=1;i<=176;i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = clutter;
}
function getNewHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hit;
}
function runTimer(){
    var minmtime = setInterval(function(){
        if(timer > 0){
            timer -- ;
            document.querySelector("#timervalue").textContent = timer;
        }
        else{
            document.querySelector(".pbtm").innerHTML = "<h1>Game Over ! </h1>";
            clearInterval(minmtime);
        }
    },1000)
}
function getScore(){
    score+=10;
    document.querySelector("#scorevalue").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click",function(dets){
    var clicked = (Number(dets.target.textContent));
    if( hit === clicked){
        getScore();
        getNewHit();
        makeBubble();
    }
})



document.querySelector("#playAgainBtn").addEventListener("click",function(){
        resetGame();
})

startGame();