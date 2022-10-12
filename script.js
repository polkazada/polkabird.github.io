var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
var lives = 5;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>465)||((blockLeft<95)&&(blockLeft>25)&&((cTop<holeTop)||(cTop>holeTop+115)))){
        
        hole.style.animationName = "none";
        block.style.animationName = "none";
        
        requestAnimationFrame(() => {
            hole.style.animationName = "";
            block.style.animationName = ""; 
        });
        
        lives = lives - 1;
        alert("Game over.\nScore: "+counter+"\nLives Remaining: "+lives);
        character.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    document.getElementById('character').style.transform = "rotate(-45deg)";
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            document.getElementById('character').style.transform = "rotate(35deg)";
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}

document.body.onkeydown = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    jump();
  }
}
