

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(){
    console.log("Clicou aqui!")
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function() {
    btn1.removeEventListener("click",msg);

    setTimeout(function(){
        btn1.addEventListener("click", msg)    
    },3000)

});

//Aqui não pode ter arrowfunction... tem q ter uma função com nome 