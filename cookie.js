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