1. Variable Naming and Indentation
```javascript
    let currentQuestion=0;
```
2. Function Naming and Modularity
```JavaScript
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
```
3. Arrays and Object Usage 
```JavaScript
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
4. Array Methods
```javascript
        selectedColors.push(null);

```
5. Looping or Iteration
```javascript
    for(let i=0; i<questions.length;i++){
        selectedColors.push(null);
    }
```
6. JSON Data Handling
```javascript
    const previousResults=JSON.parse(localStorage.getItem("quizResults"))||[];

```
7. Web Storage
```javascript
 const userName= localStorage.getItem("quizUserName")||"Guest";
    sessionStorage.setItem("userName",userName);//store in a session storage

```
8. Saving and Retrieving User Data
```javascript
 const userName= localStorage.getItem("quizUserName")||"Guest";
    sessionStorage.setItem("userName",userName);//store in a session storage

```
9. Cookies with Expiry
```javascript
//delete a cookie by name 
function deleteCookie(name){
    document.cookie=`${name}=; expires=Thu, 01 Jan 1970 00:00:00; path=/`;
}
```
10. DOM Manipulation
```javascript
    const questionDiv=document.createElement("div");

```
11. CSS Manipulation via JS
```javascript
    navButtons.style.display="flex";//show nav buttons

```
12. Theme Preference
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
13. Comments and Code Readability 
```javascript
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
```
14. Error Handling and Debugging
```javascript
document.getElementById("result").innerText = resultText[highest];
          localStorage.setItem("result", resultText[highest]);
        } catch (error) {
          console.error("Error calculating result:", error);
          alert("There was an error processing your quiz. Please try again.");
        }
```
15. Regex Validation
```javascript
    const nameRegex=/^[A-Za-z\s]{2,30}$/;

```
16. Timer and Date Object 
```javascript
    const date=new Date();

```
17. Math, String, Random Methods
```javascript
        const seconds=Math.floor((Date.now()-startTime)/1000);

```
18. Event Listeners and Shortcuts
```javascript
prevBtn.addEventListener("click",()=>{
        if(currentQuestion>0){
            currentQuestion--;
            renderQuestion(currentQuestion);
        }
    });
```

20. CRUD Functionality 
```javascript
        selectedColors.push(null);

```

