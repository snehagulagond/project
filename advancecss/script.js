const p=document.querySelector("p")
const text=p.innerText
const charecter="AJE7KDJKSdygDGjdjhHULhj"
let iteration=0
function randomText(){
    const str=text.split('').map((char,index)=>{
        if(index<iteration)
            return char
        return charecter.split("")[Math.floor(Math.random()*52)]
    }).join("")
    p.innerHTML=str
    iteration+=0.2
    console.log(iteration)
}
setInterval(randomText,000)