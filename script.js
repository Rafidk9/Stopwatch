let clock = document.getElementById("clock");
let timer = null;
let isRunning = false;
let startTime = 0
let elapsedTime = 0;


function start(){
  if(!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}
function stop(){
  clearInterval(timer);
  elapsedTime = Date.now() - startTime;
  isRunning= false;
}
function reset(){
  clearInterval(timer);
  startTime=0;
  elapsedTime=0;
  isRunning=false;
  clock.textContent = "00:00:00:00";
  
}

function update(){
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedTime / 1000 % 60);
  let milliSeconds = Math.floor(elapsedTime % 1000 / 10);
  
  clock.textContent = `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}:${milliSeconds}`;
  
  
}