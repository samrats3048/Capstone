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