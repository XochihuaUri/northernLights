const lightOne = document.getElementById("light-1")
const lightTwo = document.getElementById("light-2")
const lightThree = document.getElementById("light-3")
const lightFour = document.getElementById("light-4")

const btnOn = document.getElementById("btn-on")
const btnOff = document.getElementById("btn-off")
const btnMore = document.getElementById("btn-+")
const btnLess = document.getElementById("btn--")
const btnRed = document.getElementById("btn-red")
const btnGreen = document.getElementById("btn-green")
const btnYellow = document.getElementById("btn-yellow")
const btnBlue = document.getElementById("btn-blue")
const btnOne = document.getElementById("btn-1")
const btnTwo = document.getElementById("btn-2")
const btnThree = document.getElementById("btn-3")
const btnFour = document.getElementById("btn-4")
const btnAnOne = document.getElementById("btn-an1")
let on = false;
let currentlyColor= "white";
let opacityCounter= 1;
let contadores = [0,0,0,0]

btnOn.addEventListener("click",function(){
    on = true;
    verifyToTurn()
})
btnOff.addEventListener("click",function(){
    on = false;
    verifyToTurn()
})

btnMore.addEventListener("click", function(){
    if(on){
        opacityCounter += 0.1;
        lightOne.style.opacity = opacityCounter
        lightTwo.style.opacity = opacityCounter
        lightThree.style.opacity = opacityCounter
        lightFour.style.opacity = opacityCounter
    }
})

btnLess.addEventListener("click", function(){
    if(on){
        opacityCounter -= 0.2;
        lightOne.style.opacity = opacityCounter
        lightTwo.style.opacity = opacityCounter
        lightThree.style.opacity = opacityCounter
        lightFour.style.opacity = opacityCounter
    }
})

btnRed.addEventListener("click",function(){
    if(on){
        lightOne.style.backgroundColor = "red"
        lightTwo.style.backgroundColor = "red"
        lightThree.style.backgroundColor = "red"
        lightFour.style.backgroundColor = "red"
    }
    currentlyColor = "red"
})

btnGreen.addEventListener("click",function(){
    if(on){
        lightOne.style.backgroundColor = "green"
        lightTwo.style.backgroundColor = "green"
        lightThree.style.backgroundColor = "green"
        lightFour.style.backgroundColor = "green"
    }
    currentlyColor = "green"
})

btnYellow.addEventListener("click",function(){
    if(on){
        lightOne.style.backgroundColor = "yellow"
        lightTwo.style.backgroundColor = "yellow"
        lightThree.style.backgroundColor = "yellow"
        lightFour.style.backgroundColor = "yellow"
    }
    currentlyColor = "yellow"
})

btnBlue.addEventListener("click",function(){
    if(on){
        lightOne.style.backgroundColor = "blue"
        lightTwo.style.backgroundColor = "blue"
        lightThree.style.backgroundColor = "blue"
        lightFour.style.backgroundColor = "blue"
    }
    currentlyColor = "blue"
})

btnOne.addEventListener("click",function(){
    if(on){
        switch(contadores[0]){
            case 0:
                lightOne.style.backgroundColor = "red";
                contadores[0]++
                break;
            case 1:
                lightOne.style.backgroundColor = "green";
                contadores[0]++
                break;
            case 2:
                lightOne.style.backgroundColor = "yellow";
                contadores[0]++
                break;
            case 3:
                lightOne.style.backgroundColor = "blue";
                contadores[0]++
                break;
            case 4:
                lightOne.style.backgroundColor = "white";
                contadores[0] = 0
                break;
            
        }
    }
})

btnTwo.addEventListener("click",function(){
    if(on){
        switch(contadores[1]){
            case 0:
                lightTwo.style.backgroundColor = "red";
                contadores[1]++
                break;
            case 1:
                lightTwo.style.backgroundColor = "green";
                contadores[1]++
                break;
            case 2:
                lightTwo.style.backgroundColor = "yellow";
                contadores[1]++
                break;
            case 3:
                lightTwo.style.backgroundColor = "blue";
                contadores[1]++
                break;
            case 4:
                lightTwo.style.backgroundColor = "white";
                contadores[1] = 0
                break;
            
        }
    }
})

btnThree.addEventListener("click",function(){
    if(on){
        switch(contadores[2]){
            case 0:
                lightThree.style.backgroundColor = "red";
                contadores[2]++
                break;
            case 1:
                lightThree.style.backgroundColor = "green";
                contadores[2]++
                break;
            case 2:
                lightThree.style.backgroundColor = "yellow";
                contadores[2]++
                break;
            case 3:
                lightThree.style.backgroundColor = "blue";
                contadores[2]++
                break;
            case 4:
                lightThree.style.backgroundColor = "white";
                contadores[2] = 0
                break;
            
        }
    }
})

btnFour.addEventListener("click",function(){
    if(on){
        switch(contadores[3]){
            case 0:
                lightFour.style.backgroundColor = "red";
                contadores[3]++
                break;
            case 1:
                lightFour.style.backgroundColor = "green";
                contadores[3]++
                break;
            case 2:
                lightFour.style.backgroundColor = "yellow";
                contadores[3]++
                break;
            case 3:
                lightFour.style.backgroundColor = "blue";
                contadores[3]++
                break;
            case 4:
                lightFour.style.backgroundColor = "white";
                contadores[3] = 0
                break;
            
        }
    }
})

btnAnOne.addEventListener("click", function(){
    animationOne()
})

function animationOne(){
    if(on){
        setTimeout(paintRed,500)
        setTimeout(paintGreen, 1000)
        setTimeout(paintYellow, 1500)
        setTimeout(paintBlue, 2000)

        setTimeout(turnDownAll,2500)

        setTimeout(paintRed,3000)
        setTimeout(paintGreen, 3500)
        setTimeout(paintYellow, 4000)
        setTimeout(paintBlue, 4500)
        
        setTimeout(turnOnAll,5000)
    }
}


function paintRed(){
    lightOne.style.backgroundColor = "red";
}

function paintGreen(){
    lightTwo.style.backgroundColor = "green";
}

function paintYellow(){
    lightThree.style.backgroundColor = "yellow";
}

function paintBlue(){
    lightFour.style.backgroundColor = "blue";
}

function verifyToTurn(){
    if(!on){
        turnDownAll()
    }else{
        turnOnAll()
    }
}

function turnDownAll(){
    lightOne.style.backgroundColor = "white"
    lightTwo.style.backgroundColor = "white"
    lightThree.style.backgroundColor = "white"
    lightFour.style.backgroundColor = "white"
}
function turnOnAll(){
    lightOne.style.backgroundColor = currentlyColor
    lightTwo.style.backgroundColor = currentlyColor
    lightThree.style.backgroundColor = currentlyColor
    lightFour.style.backgroundColor = currentlyColor
}


