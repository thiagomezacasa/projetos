const filtroElemento = document.querySelector('header input');
const cards = document.querySelectorAll('.cards li'); 


filtroElemento.addEventListener('input', filterCards); //sempre q eu clicar vai disparar a funcao fiterCards

let arrayOfData = [];

for (let card of cards){
    arrayOfData.push(card);
}

console.log(arrayOfData)

function filterCards(){
    //console.log('testete')
    

    if (filtroElemento.value != ''){

        
        
        for (let card of cards){
            let title = card.querySelector('h2').textContent.toLowerCase();            
            let filterText = filtroElemento.value.toLowerCase();

            if(!title.includes(filterText) ){  //se não houver o texto/letra q eu colocar no campo de pesquisar
                card.style.display = "none"

            }else {
                card.style.display = "block"
            }
        }
    }else{        
        arrayOfData.style.display = "block"
        
    }
}