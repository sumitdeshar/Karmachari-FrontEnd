
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

//===================== Check in/out Time Section =====================
let checkIn=document.getElementById('Check-in')
let inTime=document.getElementById('in-time')
checkIn.addEventListener('click',()=>
{
    var dateTime = new Date();
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var ses = document.getElementById('session');
    if(hrs>12)
    {
        hrs-=12;
        var ses ='PM'
    }
    else
    {
        ses.textContent='AM'
    }
    checkIn.textContent="Check Out"
    console.log('hello')
    inTime.textContent= hrs + " : " + min + " : " + sec + " " +ses
    checkIn.id="Check-out"
    checkout()
})
/*IDK WHAT TO DO*/ 
function checkout()
{
    let checkOut=document.getElementById('Check-out')
    let outTime=document.getElementById('out-time')
    checkOut.addEventListener('click',()=>
    {
        var dateTime = new Date();
        var hrs=dateTime.getHours();
        var min=dateTime.getMinutes();
        var sec=dateTime.getSeconds();
        var ses = document.getElementById('session');
        if(hrs>12)
        {
            hrs-=12;
            var ses ='PM'
        }
        else
        {
            ses.textContent='AM'
        }
    checkOut.textContent="Reset"
    outTime.textContent= hrs + " : " + min + " : " + sec + " " + ses
    checkOut.id="Reset"
    reset()
})
}
function reset()
{
    let Reset=document.getElementById('Reset')
    let outTime=document.getElementById('out-time')
    let inTime=document.getElementById('in-time')
    Reset.addEventListener('click',()=>
    {
    Reset.textContent="Check In"
    outTime.textContent= "--:--:-- --"
    inTime.textContent= "--:--:-- --"
    Reset.id="Check-in"
    })
}