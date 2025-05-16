# Color Personality Quiz 
This document provides a detail explanation of the Color Personality Quiz  web application code. This application is a simple by complete Color Personality Quiz but built with HTML, CSS, and JavaScript

---

## Table of contents 
- [Color Personality Quiz Explanation](#color-personality-quiz-code-explaination)
    - [Table of Contents](#table-of-contents)
    - [HTML Structure](#html-structure)
    - [CSS Structure](#css-styling)
    - [JavaScript Functionality](#javascript-functionality)
        - [Data JavaScript File](#data-javascript-file)
        - [Cookie JavaScript File](#cookie-javascript-file)
        - [Timer JavaScript File](#timer-javascript-file)
        - [Quiz JavaScript File](#quiz-javascript-file)
        - [Username JavaScript File](#username-javascript-file)
        - [Theme JavaScript File](#data-javascript-file)
        
---

## HTML Structure
the HTML structure defines the user interface of the Color Personality Quiz Application:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Personality Quiz</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- header row with timer and theme toggle -->
    <div class="header-bar">
        <div id="timerDisplay"class="timer-display">Time: 0m 0s</div>
        <button id="themeToggle">Toggle Theme</button>
    </div>
    <!-- name input -->
    <div id="nameEntry" class="name-entry">
        <label for="userName">Enter Thi Name:</label>
        <input type="text" id="userName" placeholder="THI NAME-ITH">
        <button id="startQuizBtn"> Start the quiz</button>
    </div>
    <!-- greeting if the user is returning -->
    <div id="greeting" class="greeting" style="display:none;"></div>
    
    <!--! quiz output -->
    <div id="quizContainer"></div>

    <!-- navigation buttons -->
    <div class="navigation" style="display:none;">
        <button id="prevBtn">Previous</button>
        <button id="nextBtn">Next</button>
        <button id="submitBtn" disabled>Submit</button>
    </div>
    <!-- ^JS files -->
    <script src="data.js"></script>
    <script src="cookie.js"></script>
    <script src="timer.js"></script>
    <script src="quiz.js"></script>
    <script src="username.js"></script>
    <script src="theme.js"></script>

</body>
</html>
```
Key HTML Components 
- A div labeled container that hold the whole program
- Buttons that preform certain functions 
- A text area for the user to type their name 
- A greeting to the user

---

## CSS Styling
The CSS defines the visual appearance of the Task Manager 
```CSS
/* === BASE STYLES === */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(45deg, rgb(247, 142, 142), rgb(245, 211, 147), rgb(242, 242, 159), rgb(143, 242, 143), rgb(135, 135, 245), rgb(216, 178, 243), rgb(235, 172, 235));
    background-size: 400% 400%;
    animation: rainbowShift 15s ease infinite;
    color: #333;
    margin: 0;
    padding: 20px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  body.dark-mode {
    background-color: #1e1e1e;
    color: #f0f0f0;
  }
  
  /* === HEADER BAR: Timer + Theme Toggle === */
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  #themeToggle {
    padding: 8px 12px;
    font-size: 14px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  body.dark-mode #themeToggle {
    background-color: #555;
    color: white;
  }
  
  .timer-display {
    font-size: 16px;
    font-weight: bold;
  }
  
  body.dark-mode .timer-display {
    color: #f0f0f0;
  }
  
  /* === NAME ENTRY === */
  .name-entry {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .name-entry input {
    padding: 8px;
    font-size: 16px;
    width: 200px;
    margin-right: 10px;
  }
  
  .name-entry button {
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
  }
  
  /* === GREETING + RETAKE/EXIT === */
  .greeting {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .greeting button,
  #exitAfterSubmit {
    margin: 10px 5px 0;
    padding: 8px 14px;
    font-size: 14px;
    background-color: #555;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .greeting button:hover,
  #exitAfterSubmit:hover {
    background-color: #333;
  }
  
  body.dark-mode .greeting button,
  body.dark-mode #exitAfterSubmit {
    background-color: #888;
    color: white;
  }
  
  /* === QUIZ CONTAINER === */
  #quizContainer {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: rgb(238, 235, 235);
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  body.dark-mode #quizContainer {
    background-color: #2a2a2a;
  }
  
  /* === QUESTIONS === */
  .question-block {
    background-color: rgb(238, 235, 235);
    margin-bottom: 30px;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  .question-block *{
    margin:5px;
    background-color:whitesmoke;
    border-radius: 3px;
    padding:5px;
  }
  .question-block h3{
    background-color: rgb(238, 235, 235);
  }
 
  
  .option {
    margin: 10px 0;
    padding: 10px 15px;
    background-color: purple;
    border-left: 6px solid transparent;
    border-radius: 6px;
    transition: background-color 0.2s ease;
    cursor: pointer;
  }
  
  .option:hover {
    background-color: #eaeaea;
  }
  
  body.dark-mode .option {
    background-color: #2e2e2e;
    color: #eee;
  }
  
  /* === RESULTS === */
  .result-box {
    padding: 12px 16px;
    margin: 10px 0;
    border-radius: 6px;
    font-weight: bold;
    font-size: 18px;
    background-color: #f9f9f9;
    border-left: 6px solid;
  }
  
  .result-box.red { border-left-color: #e74c3c; }
  .result-box.green { border-left-color: #27ae60; }
  .result-box.blue { border-left-color: #2980b9; }
  .result-box.yellow { border-left-color: #f1c40f; }
  
  body.dark-mode .result-box {
    background-color: #2e2e2e;
    color: #fff;
  }
  
  /* === NAVIGATION BUTTONS === */
  .navigation {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .navigation button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: #3498db;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .navigation button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
```
Key CSS Features:

1. **Global Reset Styles**: Body tag sets default margins, padding, and box-sizing for all elements.
2. **Color Scheme and Contrast**: The colors of the page are complimentary and assessable
3. **Flex Box Styles**: The containers are displayed using flex, allowing for a more dynamic look
4. **Button Styling**: Buttons have a look on the page and during hover. As well as having box-shadows and border styles
5. **CSS Transitions**: The transitions between pages are smooth and easy on the eyes using a 0.03 transition time.
6. **Shadows and Borders**: The containers and the buttons have both border styles and shadows to give a cleaner and more stylish look
7.**Theme Customization Styles**: The user's preference of light or dark style theme, has different properties
8. **Naming Conventions**: The element names are clear and readable
9. **Comments**: The comments of the styles clearly communicate the following properties and separates the different element properties
10. **Toggle Styles**: Changes the styles for when the user pushes the toggle button. From light theme to dark theme
11. **Container Styles**: Sets default margins, padding, and box-sizing for all containers
12. **Navigation Button Styles**: Sets styles for the navigation buttons 
13. **Hover Styles**: Sets default margins, padding, and colors for when the cursor is over the buttons

---

## JavaScript Functionality

### Data JavaScript File 

```javascript
// Quiz questions
const questions = [
    {
        question: "When facing a problem, I typically:",
        options: [
            { text: "Take immediate action to solve it", color: "red" },
            { text: "Discuss it with others to get their input", color: "green" },
            { text: "Think of creative solutions and possibilities", color: "blue" },
            { text: "Create a systematic approach to address it", color: "yellow" }
        ]
    },
    {
        question: "In a team setting, I'm most likely to:",
        options: [
            { text: "Focus on the people and relationships", color: "green" },
            { text: "Make sure we follow proper procedures", color: "yellow" },
            { text: "Push for action and results", color: "red" },
            { text: "Contribute innovative ideas", color: "blue" }
        ]
    },
    {
        question: "I feel most energized when:",
        options: [
            { text: "Everything is organized and runs smoothly", color: "yellow" },
            { text: "I'm implementing new ideas", color: "blue" },
            { text: "I'm completing tasks and seeing results", color: "red" },
            { text: "I'm connecting with people", color: "green" }
        ]
    },
    {
        question: "When learning something new, I prefer:",
        options: [
            { text: "Experimenting and exploring possibilities", color: "blue" },
            { text: "Following step-by-step instructions", color: "yellow" },
            { text: "Jumping in and learning by doing", color: "red" },
            { text: "Learning from others through discussion", color: "green" }
        ]
    },
    {
        question: "When making decisions, I tend to:",
        options: [
            { text: "Go with what feels right for the people involved", color: "green" },
            { text: "Choose the most practical and effective option", color: "red" },
            { text: "Consider all possible innovative solutions", color: "blue" },
            { text: "Analyze details and follow established processes", color: "yellow" }
        ]
    },
    {
        question: "My workspace is usually:",
        options: [
            { text: "Highly organized with everything in its place", color: "yellow" },
            { text: "Functional and practical", color: "red" },
            { text: "Decorated with personal touches and photos", color: "green" },
            { text: "Creative with multiple projects in progress", color: "blue" }
        ]
    },
    {
        question: "I'm most frustrated when:",
        options: [
            { text: "People ignore established procedures", color: "yellow" },
            { text: "There's unnecessary conflict or tension", color: "green" },
            { text: "Progress is slow or tasks remain unfinished", color: "red" },
            { text: "New ideas are dismissed without consideration", color: "blue" }
        ]
    },
    {
        question: "My communication style tends to be:",
        options: [
            { text: "Direct and to the point", color: "red" },
            { text: "Supportive and harmonious", color: "green" },
            { text: "Enthusiastic and full of ideas", color: "blue" },
            { text: "Precise and detail-oriented", color: "yellow" }
        ]
    },
    {
        question: "In a challenging situation, I typically:",
        options: [
            { text: "Find a creative way around the obstacle", color: "blue" },
            { text: "Take charge and address it head-on", color: "red" },
            { text: "Create a structured approach to solve it", color: "yellow" },
            { text: "Consider how it affects everyone involved", color: "green" }
        ]
    },
    {
        question: "I value most in my work:",
        options: [
            { text: "Efficiency and results", color: "red" },
            { text: "Order and consistency", color: "yellow" },
            { text: "Positive relationships and teamwork", color: "green" },
            { text: "Innovation and creative freedom", color: "blue" }
        ]
    }
];
```

Question array of objects:
- `questions`: holds all of the questions and the possible answers

---

### Cookie JavaScript File 
```javascript
//* cookie.js
function setCookie(name,value){
    const date=new Date();
    date.setDate(date.getDate()+7)//adds 7 days to the bye bye date
    document.cookie= `${name}=${value}; expires=${date}; path=/`;
}
//get a cookie value by name
function getCookie(name){
    const match=document.cookie
    .split(";")
    .find(row=>row.startsWith(name+"="));
    return match?.split("=")[1];
}
//delete a cookie by name 
function deleteCookie(name){
    document.cookie=`${name}=; expires=Thu, 01 Jan 1970 00:00:00; path=/`;
}

```

These functions handle the cookie storage:
- `setCookie()`: Creates the cookie the page holds and deletes after 7 days
- `getCookie()`: How the site retrieves the cookie
- `deleteCookie()`: when the site deletes the saved cookie

---

### Timer JavaScript File 
```javascript
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
```

These functions handle the timer of the site:
- `startTimer()`: Starts the timer of the site and shows how much timer the user spends on the page.
- `stopQuizTimer()`: Stops the timer of the site.
- `formattedTIme()`: Creates the time in a formatted time
### Quiz JavaScript File 
```javascript
//^ Quiz.js

//access html elements needed for the quiz interface
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
    submitBtn.addEventListener("click", submitAnswers);
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
    const questionDiv=document.createElement("div");
    questionDiv.className="question-block";
    questionDiv.innerHTML=`<h3>Q${index+1}: ${q.question}</h3>`;
    
    //create color option elements
    q.options.forEach(opt=>{
        const option=document.createElement("div");
        option.className=`option${opt.color}`;
        option.textContent=opt.text;

        //highlight selected option
        if(selectedColors[index]===opt.color){
            option.style.backgroundColor="#dff0d8";
        }

        //when user clicks an option, store the answer and re-render 
        option.addEventListener("click",()=>{
            selectedColors[index]=opt.color;
            renderQuestion(index);
            toggleSubmitButton();//enable submit if all of the questions are answered 
        });

        questionDiv.appendChild(option);
    });
        quizContainer.appendChild(questionDiv);
        //handle all the button states 
        prevBtn.disabled=index===0;
        nextBtn.style.display=index===questions.length-1 ? "none": "inline-block";
        submitBtn.style.display=index===questions.length-1 ? "inline-block":"none"

}


//Enable submit only when all questions are answered
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
    if(selectedColors.includes(null)){
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
    const userName=localStorage.getItem("quizUserName")||"Guest";

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
}
//initialize buttons once the page content is loaded
window.addEventListener("DOMContentLoaded", initializeButtons);
```

These functions handle persistent storage:
- `document.getElement`: Retrieves the elements from the html
- `renderQuestions()`: Displays the questions in the div container in the html
- `colorDescriptors()`: This is the description of the possible personality colors.
- `prevBtn()` and `nextBtn()`: Allows the user to go to the previous and next questions
- `showResults()`: Shows the results of the quiz on the user's side.

---

### Username JavaScript File 
```javascript
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
```

These functions handle persistent storage:
- `document.getElementById`: Retrieves elements from HTML by their Id's
- `startQuizBtn()`: Checks if the user has entered a username and if it abides by the requirements and if it doesn't it gives an alert. As well as saving it in the `localStorage`. And gives a greeting. If it is a returning user it will display a welcome back message and if it is a new user it will display a welcome new user message.
- `window.addEventListener()`:This method allows you to add event listeners on any HTML DOM object such as HTML elements, the HTML document, the window object, or other objects that support events.

---

### Theme JavaScript File 
```javascript
//*theme.js
//get the toggle button from the dom 
const toggleBtn=document.getElementById("themeToggle");

//when the user clicks the toggle button
toggleBtn.addEventListener("click", ()=>{
    //toggle the "dark-mode" class on the body element
    document.body.classList.toggle("dark-mode");

    //optional save the selected theme in localStorage
    const isDark = document.body.classList.contains("dark-mode");//checks the current mode
    localStorage.setItem("theme", isDark ? "dark": "light")//stores the preference
});

document.addEventListener('keydown', function(e){
    if(e.shiftKey && e.key==='D'){
        themeToggle.click();
    }
});
//on page load apply the saved theme -- if it exists
window.addEventListener("DOMContentLoaded",()=>{
    const savedTheme=localStorage.getItem("theme"); //get the saved theme from the storage
    if(savedTheme==="dark"){
        document.body.classList.add("dark-mode");//apply dark mde if it was saved
    }
});
```

These functions handle the theme change:
- `toggleBtn`: Retrieves the preference of the user from the HTML document.
- `toggleBtn()`:Has an event listener to launch this function when the button is clicked and it works when the user uses the short cut for theme change








