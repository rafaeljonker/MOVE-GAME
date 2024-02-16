const box = document.querySelector(".box")
let cont = 0.4
function getposition(event){

  let positionx = event.clientX;
  let positiony = event.clientY;
  box.style.left = positionx-8 + "px";
  box.style.top = positiony-8 + "px"
   }

   function escrever(){
    let p  = document.querySelector(".texto")
    p.append('o mouse moveu<br>')
    console.log("oi")
   }

  function aumentartamanho(){
   box.style.transform = `scale(${1 + cont})`;
   cont+=0.4
  }
  
  function diminuirtamanho(){
    box.style.transform = `scale(${1 - cont})`;
    cont-=0.4
   }

   function viraVerde(){
    let div_teste = document.querySelector(".teste")
    div_teste.style.backgroundColor = "green";
 
   }


   function viraAzul(){
    let div_teste = document.querySelector(".teste")
    div_teste.style.backgroundColor = "blue";
  
   }