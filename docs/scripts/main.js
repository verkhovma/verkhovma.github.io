var button=document.querySelector('button');
var heading=document.querySelector('h1');
function SetUserName(){
    var name=prompt('Enter name.');
    localStorage.setItem('name',name);
    heading.textContent='Hello, '+name;
}
if(!localStorage.getItem('name'))
    SetUserName();
else
    heading.textContent='Hello, '+localStorage.getItem('name');
button.onclick=function(){
    SetUserName();
}
var image=document.querySelector('img');
image.onclick = function() {
    var source=document.querySelector('img').getAttribute('src');
    if(source==='https://avatars.githubusercontent.com/u/114131462')
        image.setAttribute('src','https://dere.shikimori.one/system/user_images/original/94283/1953719.jpg');
    else
        image.setAttribute('src','https://avatars.githubusercontent.com/u/114131462');
}