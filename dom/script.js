/*var btn=document.createElement('button')
btn.innerHTML = 'click'
var main = document.querySelector('main')
main.appendChild(btn)
/*console.log(h1);
var btn = document.querySelector('button')
btn.addEventListener('click',function(){

})
var div = document.createElement('div')*/


var btn = document.querySelector('button')
var body = document.querySelector('body')

btn.addEventListener('click',function(){
    var div = document.createElement('div')
    var x = Math.random()*100
    var y = Math.random()*100
    var r = Math.random()*360
    
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    
    div.style.height = '50px'
    div.style.width='50px'
    div.style.position='absolute'
    div.style.left=x + '%'
    div.style.top=y + '%'
    div.style.rotate=r+'deg'
    div.style.backgroundColor=`rgb(${c1},${c2},${c3})`
    

    body.appendChild(div)
    console.log(div);
})
