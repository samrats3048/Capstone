//*timer.js
let startTime,timerInterval;
//start the quiz timer 
function startQuizTimer(){
    startTime=Date.now();
    sessionStorage.removeItem("quizTime");

    timerInterval=setInterval(()=>{
        const seconds=Math.floor((Date.now()-startTime)/1000);
        sessionStorage.setItem("quizTime", seconds);
        updateTimerDisplay(seconds);
    },1000);
}
//stop thew quiz timer
function stopQuizTimer(){
    clearInterval(timerInterval);
}
//Get formatted time as "Xm Ys"
function getFormattedQuizTime(){
    const seconds=+sessionStorage.getItem("quizTime")||0;
    return formatTime(seconds);
}
//update the visible timer
function updateTimerDisplay(seconds){document.getElementById("timerDisplay").textContent=`Time=${formatTime(seconds)}`;
}
//format the seconds to "Xm Ys"
function formatTime(seconds){
    const m = Math.floor(seconds/60);
    const s= seconds % 60;
    return `${m}m ${s}s`;
}