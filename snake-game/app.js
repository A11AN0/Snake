let lastRenderTime = 0;

const main = (currentTime) =>{
    window.requestAnimationFrame(main)
    lastRenderTime = currentTime
    console.log(currentTime)
}

window.requestAnimationFrame(main)