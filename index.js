let home=document.getElementById("home")
let guest=document.getElementById("guest")

let homeScore = 0
let guestScore = 0

function addh1()
{
    homeScore++   
    home.textContent=homeScore
}
function addh2()
{
    homeScore+=2
    home.textContent=homeScore
}
function addh3()
{
    homeScore+=3   
    home.textContent=homeScore
}

function addg1(){
    guestScore++   
    guest.textContent=guestScore
}
function addg2(){
    guestScore+=2
    guest.textContent=guestScore
}

function addg3(){
    guestScore+=3   
    guest.textContent=guestScore
}

function reset(){
    guestScore=0
    homeScore=0
    guest.textContent=guestScore
    home.textContent=homeScore
}