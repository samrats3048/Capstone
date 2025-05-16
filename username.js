//* Username.js
//get references to HTML elements
const nameEntry=document.getElementById("nameEntry");
const userNameInput=document.getElementById("userName");
const startQuizBtn= document.getElementById("startQuizBtn");
const greeting= document.getElementById("greeting");

///when user clicks the "start quiz" btn
startQuizBtn.addEventListener("click",()=>{
    const enteredName= userNameInput.value.trim();//get user  input and trim spaces

    //simple name regex: allows letters and spaces, 2 to 30 char
    const nameRegex=/^[A-Za-z\s]{2,30}$/;

    if(enteredName===""){
        alert("Please enter your name to start.");
        return;
    }
    if(!nameRegex.test(enteredName)){
        alert("Please enter a valid name (letters and spaces only,2-30 characters).");
        return;
    }

    //store in localStorage, cookie, and sessionStorage
    localStorage.setItem("quizUserName", enteredName);
    setCookie("quizUserName", enteredName, 7); //save in cookie for 7 days
    sessionStorage.setItem("userName", enteredName);//Temporary session use
    
    //load previous quiz results, if any
    const allResults = JSON.parse(localStorage.getItem("quizResults"))|| [];
    const resultData= allResults.find(r=>r.username===enteredName);

    //hide name input and show greeting
    nameEntry.style.display="none";
    greeting.style.display="block";

    if(resultData){
        //show previous result and give retake/exit options
        greeting.innerHTML=`
        Welcome back, ${enteredName}!<br><br>
        <button id="retakeBtn">Retake Quiz</button>
        <button id="exitBtn">Exit Quiz</button> `;

        showResult(resultData.dominantColor, resultData.description,resultData.timeTaken);

        //retake Quiz
        document.getElementById("retakeBtn").addEventListener("click",()=>{
            greeting.style="none";
            startQuiz();
        });
        //exit quiz and clear UI
        document.getElementById("exitBtn").addEventListener("click",()=>{
            clearUI();
        });
    }else{
        //first time user experience
        greeting.textContent=`Hi,${enteredName}! Good luck with your quiz`;
        startQuiz();
    }
});
//reset the UI and go back to name Entry
function clearUI(){
    document.getElementById("quizContainer").innerHTML=""//clear quiz content
    greeting.innerHTML="";//clear greeting message
    nameEntry.style.display="block";//show name input 
    greeting.style.display="none";//hide greeting message
    document.querySelector(".navigation").style.display="none";//hide the nav
    userNameInput.value="";//clear the name input
}
//on page load, check cookie and sync with localStorage if needed
window.addEventListener("DOMContentLoaded",()=>{
    const savedLocal=localStorage.getItem("quizUserName");
    const cookieName=getCookie("quizUserName");

    //if local storage is empty but cookie exist, use cookie value 
    if(!savedLocal&& cookieName){
        localStorage.setItem("quizUserName", cookieName);
    }
});