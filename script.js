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
  
            console.log(detectarColisao("box", "wall")==true) ? console.log("colidiu") : console.log("ainda não colidiu"); 
  
  
function detectarColisao(idWall, idBox) {
     let box1 = document.getElementById(idBox).getBoundingClientRect();
     let wall1 = document.getElementById(idWall).getBoundingClientRect();


      let pontos_box1 = [ {x: box1.left, y:box1.top}, 
                          {x: box1.left + box1.width, y: box1.top},
                          {x: box1.left + box1.width, y: box1.top + box1.height}];

      let pontos_wall1 = [ {x: wall1.left, y:wall1.top}, 
                           {x: wall1.left + wall1.width, y: wall1.top},
                           {x: wall1.left + wall1.width, y: wall1.top + box1.height}];

      let indice = 0;
      let colidiu = false;

      while ((colidiu == false) && (indice < 3)){
          ((pontos_box1[indice].x >= wall1.left) && (pontos_box1[indice].x <= wall1.left + wall1.width) && (pontos_box1[indice].y >= wall1.top) && (pontos_box1[indice].y <= wall1.top + wall1.height) || 
           (pontos_wall1[indice].x >= box1.left) && (pontos_wall1[indice].x <= box1.left + box1.width) && (pontos_wall1[indice].y >= box1.top) && (pontos_wall1[indice].y <= box1.top + box1.height))? colidiu = true : indice++;
                
        return colidiu;
      }


          
        

}

document.addEventListener('keydown', mover);
