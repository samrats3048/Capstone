//^ Quiz.js

//access htmlo elements needed for the quiz interface
const quizContainer= document.getElementById('quizContainer');
const prevBtn=document.getElementById('prevBtn');
const nextBtn=document.getElementById('nextBtn');
const submitBtn=document.getElementById('submitBtn');
const navButtons=document.querySelector('.navigation');

//track the current question index
let currentQuestion=0;

//store the user's selected color answer
let selectedColors=[];

//Set click handlers for prev, next, and submit buttons
function initializeButtons(){
    prevBtn.addEventListener("click",()=>{
        if(currentQuestion>0){
            currentQuestion--;
            renderQuestion(currentQuestion);
        }
    });
    nextBtn.addEventListener("click",()=>{
        if(currentQuestion<questions.length-1){
            currentQuestion++;
            renderQuestion(currentQuestion);
        }
    });
    //submitBtn.addEventListener("click", submitAnswers);
}
//function to start the quiz
window.startQuiz=function(){
    //get username from local Storage or use default
    const userName= localStorage.getItem("quizUserName")||"Guest";
    sessionStorage.setItem("userName",userName);//store in a session storage

    currentQuestion=0;
    
    //reset selectedColors to null for each question 
    selectedColors=[];
    for(let i=0; i<questions.length;i++){
        selectedColors.push(null);
    }

    startQuizTimer();//start the timer
    renderQuestion(currentQuestion);//show the first question
    navButtons.style.display="flex";//show nav buttons
};

//render a specific question and its options 
function renderQuestion(index){
    quizContainer.innerHTML="";//clear the previous question
    const q=questions[index];
    console.log(q)
    const questionDiv=document.createElement("div");
    questionDiv.className="question-block";
    questionDiv.innerHTML=`<h3>Q${index+1}: ${q.question}</h3>`;
    
    //create color option elements
    q.options.forEach(opt=>{
        const option=document.createElement("div");
        option.className=`option ${opt.color}`;
        option.textContent=opt.text;

        //highlight selected option
        if(selectedColors[index]===opt.color){
            option.style.backgroundColor="#dff0d8";
        }

        //when user clicks an option, store the answer and re-render 
        option.addEventListener("click",()=>{
            selectedColors[index]=opt.color;
            renderQuestion(index);
            //toggleSubmitButton();//enable submit if all of the questions are answered 
        });

        questionDiv.appendChild(option);
    });

    quizContainer.appendChild(questionDiv);
        //handle all the button states 
        prevBtn.disabled=index===0;
        nextBtn.style.display=index===questions.length-1 ? "none": "inline-block";
       // submitBtn.style.display=index===questions.length-1 ? "inline-block":"none"

}



/* //Enable submit only when all questions are answered
function toggleSubmitButton(){
    const allAnswered= selectedColors.every(color=> color!==null);
    submitBtn.disabled=!allAnswered;
}
//count how many times each color was selected 
function calculateColorResults(){
    const colorCounts={red:0, green:0, blue:0, yellow:0};
    selectedColors.forEach(color=>{
        if(colorCounts[color]!==undefined){
            colorCounts[color]++;
        }
    });
    return colorCounts;
}
//submit the quiz answers and calculate the results
function submitAnswers(){
    if(selectedColors.includes){
        alert("Please answer all of the questions before submitting.");
        return;
    }
    stopQuizTimer();//stops the quiz timer

    const results=calculateColorResults();
    let dominateColor=null;
    let maxCount=-1;

    //find the color with the highest count
    for(let color in results){
        if(results[color]>maxCount){
            maxCount=results[color];
            dominateColor=color;
        }
    }

    //descriptions for each personality type
    const colorDescriptions={
        red:"Having red as your favorite color identifies you as extroverted and optimistic, courageous and confident.You are action oriented and physically active - sex is a necessity to you - you have strong survival instincts.With a favorite color red, you like to be the center of attention - in fact all reds crave attention - other people are drawn to the vitality and sense of excitement you emit.As a personality color red, you are stimulating to be with and you radiate a great deal of energy.You are ambitious and competitive and like to be the winner - you are achievement orientated and second place is not good enough for you. With you it is all or nothing.",
        
        green:"You are a practical, down-to-earth person with a love of nature.You are stable and well balanced or are striving for balance - in seeking this balance, you can at times become unsettled and anxious.Having a personality color green means you are kind, generous and compassionate - good to have around during a crisis as you remain calm and take control of the situation until it is resolved.You are caring and nurturing to others - however you must be careful not to neglect your own needs while giving to others. You are intelligent and love to learn - you are quick to understand new concepts.With a personality color green you have a great need to love and to be loved and you tend to wear your heart on your sleeve- you are an open book who doesn't hide his/her feelings.",
        
        blue:"If this is your favorite color you are conservative, reliable and trustworthy - you are quite trusting of others although you are very wary in the beginning until you are sure of the other person. At the same time, you also have a deep need to be trusted.You are not impulsive or spontaneous - you always think before you speak and act and do everything at your own pace in your own time. You take time to process and share your feelings.You are genuine and sincere, and you take your responsibilities seriously.Having a personality color blue means you have a deep need for peace and harmony in your everyday life - you don't like having your feathers ruffled. You would benefit from daily meditation and quiet time for reflection, introspection and self-discovery.",
        yellow:"You have a happy disposition and are cheerful and fun to be with.You are creative, often being the one who comes up with new ideas - an ideas person who needs others to bring the ideas into reality - you tend to have your head in the clouds much of the time.With a personality color yellow, you can be very critical of yourself as well as others - you are a perfectionist.You analyze everything, all the time, and are methodical in your thinking.With a yellow personality you are impulsive and make quick decisions, but often, out of anxiety, jump in too quickly and rush things rather than taking things at a steady pace.You have a strong independent streak in you, and are selective with your choice of friends, keeping a small group of close and like-minded friends rather than being involved in team events or large social gatherings."
    };
    const timeTaken=getFormattedQuizTime();//get the time the quiz took
    const userName=localStorage.getItem(quizUserName)||"Guest";

    //Load any existing results form localStorage
    const previousResults=JSON.parse(localStorage.getItem("quizResults"))||[];

    //check if the same user has take the quiz before 
    const existingIndex=previousResults.findIndex(result=>result.userName===userName);
    //prepare result object 
    const newResult={
        userName,
        dominateColor,
        description:colorDescriptions[dominateColor],
        timeTaken
    };

    //update existing result or add a new one 
    if (existingIndex!==-1){
        previousResults[existingIndex]=newResult;
    }else{
        previousResults.push(newResult);
    }
    //save updated results
    localStorage.setItem("quizResults",JSON.stringify(previousResults));
    //Display updated results to the user 
    showResult(dominateColor,colorDescriptions[dominateColor], timeTaken);
}

//show the final result on the screen
function showResult(dominateColor,description, timeTaken){
    quizContainer.innerHTML=`
    <h2>Your Color Personality Result!</h2>
    <div class="result-box ${dominateColor}">
        <h3 style="text-transform:capitalize;">${dominateColor}</h3>
        <p>${description}</p>
    </div> 
    <p><strong>Time taken:</strong>${timeTaken}</p>
    <div style="text-align:center; margin-top:20px;">
        <button id="exitAfterSubmit">Exit Quiz</button>
    </div>
    `;
    navButtons.style.display="none";//hide the buttons

    //allow the user to exit or reload 
    const exitBtn=document.getElementById("exitAfterSubmit");
    if(exitBtn){
        exitBtn.addEventListener("click",()=>{
            if (typeof clearUI==="function"){
                clearUI();
            }else{
                location.reload();
            }
        });
    } 
}*/
//initialize buttons once the page content is loaded
window.addEventListener("DOMContentLoaded", initializeButtons);
