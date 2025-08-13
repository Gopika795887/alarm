function updateClock(){
    var date=new Date();
    var hours=date.getHours().toString().padStart(2,'0');
    var mins=date.getMinutes().toString().padStart(2,'0');
    var secs=date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;
}

window.setInterval(updateClock,1000);
updateClock();
var card=document.getElementById('card');
var message=document.getElementById('message');

card.addEventListener('mouseover',function(){
    card.style.backgroundColor="green";
    message.innerHTML="You are IN";

});

card.addEventListener('mouseout',function(){
    card.style.backgroundColor="plum";
    message.innerHTML="You are OUT";

});

card.addEventListener('click',function(){
    card.style.backgroundColor="skyblue";
    message.innerHTML="You Clicked";
});
let clickSound=new Audio("clk sound.mp3");
card.addEventListener('click', function(){
    card.style.backgroundColor = "skyblue";
    message.innerHTML = "You Clicked";

    clickSound.currentTime = 0; 
    clickSound.play(); 
});
 


