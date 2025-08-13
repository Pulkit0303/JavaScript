let hex = "0123456789ABCDEF"
const genHex = () => {
    let color = "#"
    for(let i=0; i<6;i++){
        color+=hex[Math.floor(Math.random() * 16 )]
    }
    return color
}

let start;

const startChangeColor = () => {
    function changeBG (){
        document.body.style.backgroundColor=genHex()
    }
    if(!start) start = setInterval(changeBG,1000)
    console.log("Started color change")
}

const stopChangeColor = () =>{
    clearInterval(start)
    start = null
    console.log("Stopped Color change")
}

document.querySelector("#start").addEventListener('click',startChangeColor,)

document.querySelector("#stop").addEventListener('click',stopChangeColor,)

