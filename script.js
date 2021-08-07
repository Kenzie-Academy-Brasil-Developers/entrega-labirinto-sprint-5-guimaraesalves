let boxTop = 545;
let boxLeft = 50;

function mover(){
  let box = document.getElementById("box");
  let wall = document.getElementById("wall");
  let seta = event.keyCode;


  //keyCode: Valores para as teclas: "ArrowDown" - 40 - (seta para baixo = (+10)); "ArrowLeft" - 37 - (seta para esq = (-10)); "ArrowRight"  - 39 -(seta para dir  = (+10)); "ArrowUp" - 38 (seta para cima = (-10));

            if(seta == 37){
                boxLeft -= 10;
                box.style.left = boxLeft + "px";
            } else if (seta == 38){
                boxTop -= 10;
                box.style.top = boxTop + "px"
            } else if (seta == 39){
                boxLeft += 10;
                box.style.left = boxLeft + "px";
            } else if (seta == 40){
                boxTop += 10;
                box.style.top = boxTop + "px";
            }


            box = {x: 5, y: 5, width: 50, height: 50}
            wall = {x: 20, y: 10, width: 10, height: 10}
        
            
        
            if (box.x < wall.x + wall.width &&
               box.x + box.width > wall.x &&
                box.y < wall.y + wall.height &&
                box.y + box.height > wall.y) {        
                    
                
            }
        
            
        
            /*if (5 < 30 &&
                55 > 20 &&
                5 < 20 &&
                55 > 10) {
                
            }*/
        

}

document.addEventListener('keydown', mover);
