
// =====================Clock section==================
function displayTime()
{
var dateTime = new Date();
var hrs=dateTime.getHours();
var min=dateTime.getMinutes();
var sec=dateTime.getSeconds();
var ses = document.getElementById('session');
if(hrs>12)
{
    hrs-=12;
    ses.textContent='PM'
}
else
{
    ses.textContent='AM'
}
document.getElementById('hrs').innerHTML=hrs
if(min<10)
    document.getElementById('min').innerHTML='0'+ min
else
    {document.getElementById('min').innerHTML= min}
if(sec<10)
    {document.getElementById('sec').innerHTML='0' + sec}
else
    {document.getElementById('sec').innerHTML=sec}
}
setInterval(displayTime, 10);

// ===================== Drop Down Menu Section =====================

let subMenu=document.getElementById('sub-menu')
let dropDown=document.getElementById('drop-down')
dropDown.addEventListener('click',(e) =>
{
    subMenu.classList.toggle('sub-menu-active')
})

document.addEventListener("click",function(event)
{
    if(event.target.closest('.sub-menu-wrap') || event.target.closest('.drop-down')) return
    subMenu.classList.remove('sub-menu-active')
})