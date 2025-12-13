var arr=[
    {
        dp:"https://i.pinimg.com/736x/c1/5d/02/c15d020633bd1f59d15979ae9219912c.jpg",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfxk0H-Uk5r3-oimBsB001-Ewcm9c5sh59w&s"
    },{
        dp:"https://thumbs.dreamstime.com/b/blonde-woman-sweater-sitting-grass-dunes-facing-windy-beach-ocean-ai-generated-woman-sitting-grass-overlooking-373153917.jpg",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_PHhOaVGiZ-wFdDB87nVGT7t9zcsQRlk_w&s"
    },{
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQdb2YAWS35DVS0l0qOTbQW4nJebnelKt8A&s",story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },{
        dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
];
var storiyan=document.querySelector("#storiyan")
var clutter=""
arr.forEach(function(elem,idx){
    clutter+=` <div class="story">
                    <img id="${idx}" src="${elem.dp}" alt="">
               </div>`

});

storiyan.innerHTML=clutter;
storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImge=`url(${arr[dets.target.id].story})`
    /*setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },3000)*/

});