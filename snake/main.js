const arena = document.querySelector(".arena");







let previousTimeStamp = 0

const mainGame = (timeStamp) =>{ 
    window.requestAnimationFrame(mainGame)
    const timepassed = (timeStamp - previousTimeStamp)/1000
    if(timepassed <1/4) return //sets the speed at which screen refreshes/FPS
    previousTimeStamp = timeStamp
//-----------------------------------------------------------

//code goes in between here










    
//------------------------------------------------------------
    console.log(timepassed)    
}

window.requestAnimationFrame(mainGame)