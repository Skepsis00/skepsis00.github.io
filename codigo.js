let botton = document.querySelector("#tema");
let body = document.querySelector("body");
let modoOscuro = false;
botton.addEventListener("click",()=>{
    if(modoOscuro == false){
        modoOscuro = true
        body.style.backgroundColor = "black";
    }else{
        modoOscuro = false;
        body.style.backgroundColor = "blanchedalmond"
    }
})