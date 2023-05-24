const timer = document.querySelector("#timer");

const tmpini = Date.now();

const iniciar = document.getElementById("start");
const pausar = document.getElementById("pause");



const contador = ()=> {
    const tmpatual = Date.now();
    let cont = tmpatual - tmpini;

    let seg = (tmpatual-tmpini)/1000;

    timer.innerHTML = converter(seg);

}

const converter = (seg)=>{
    const hora = Math.floor(seg/3600);
    const resto = seg%3600;
    
    const min = Math.floor(resto/60);

    const segundo = Math.floor(resto%60);
    
    
    if (hora < 10){
        hora == "0"+hora
    }else{
        hora == hora
    }

    if (min < 10){
        min == "0"+min
    }else{
        min == min
    }

    if (segundo < 10){
        segundo == "0"+segundo
    }else{
        segundo == segundo
    }


    //return Math.floor(seg);
    return hora +":"+min+":"+segundo;
    //const formatado = (hora<10?"0"+hora:hora)+":"+(min<10?"0"+min:min)+":"+(segundo<10?"0"+segundo:segundo)
    //    return formatado;
    //fsfsdf
    //dfsfsdfsfsfsdf
}




    setInterval(contador,1000) 



