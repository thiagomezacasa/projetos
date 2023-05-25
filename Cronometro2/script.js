const timer = document.querySelector("#timer");

const iniciar = document.getElementById("start");
const pausar = document.getElementById("pause");
var cronometro;
var formatado;

iniciar.addEventListener("click", () => {
    const tmpini = Date.now();

    const contador = ()=> {
        
        const tmpatual = Date.now();
        let cont = tmpatual - tmpini;
    
        let seg = (tmpatual-tmpini)/1000;
        console.log(seg)
        timer.innerHTML = converter(seg);
    
    }
    
    const converter = (seg)=>{
        const hora = Math.floor(seg/3600);
        const resto = seg%3600;
       
        const min = Math.floor(resto/60);
    
        const segundo = Math.floor(resto%60); 
    
        formatado = (hora<10?"0"+hora:hora)+":"+(min<10?"0"+min:min)+":"+(segundo<10?"0"+segundo:segundo)
        return formatado;
    }

    cronometro = setInterval(contador,1000);
    pausar.innerText = "Pausar";
})

function stopPause(e) {
    clearInterval(cronometro);
    //e.stopPropagation();
}

pausar.addEventListener("click", () => {
    stopPause();
    
    if (pausar.textContent = 'Pausar'){
        pausar.innerText = 'Prosseguir'

    }
    console.log(formatado)
    
    
})
