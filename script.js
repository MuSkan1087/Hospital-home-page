let teams=document.querySelectorAll(".Team");
let card=document.querySelectorAll(".servicecard");
let count = 0;

teams.forEach(function(card, index){
card.style.left=`${index*100}%`;
});

function myfun(){
teams.forEach(function(curValue){
curValue.style.transform=`translateX(-${count*100}%)`;
});
}

setInterval(function(){
count++;
if(count == teams.length){
count=0;
}
myfun()
}, 3000)


// service Card

card.forEach(function(curCard){
    curCard.addEventListener("click",function(){
        console.log(curCard);
        let div=document.createElement("div");
        div.classList.add("detailcard");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} class="detail-img" alt="">   
        <h2>${curCard.lastElementChild.innerHTML}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto id dolorem itaque fugit consequuntur? Cumque accusantium possimus omnis error, quae vel soluta!</p>   
        `;
        document.querySelector("body").appendChild(div);
        document.querySelector("#icon").addEventListener("click",function(){
            div.remove()

        })
    })
})