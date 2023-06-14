//Video https://www.youtube.com/watch?v=6bnZc1-gu1M&t=595s

const months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];


function render(){
    let output = '';
    const thisMonth = months[new Date().getMonth()];
    for (let month of months) {
      const active = thisMonth == month ? 'atual' : ''

      output += `<div class="${active}">${month}</div>`
        
    }
    return output
}

app.querySelector('main').innerHTML = render();
app.querySelector('header span').innerHTML = new Date().getFullYear();


//const voltar = document.querySelector('voltar');
const voltar = document.getElementById('voltar');
voltar.addEventListener("click",() => {
    app.querySelector('header span').innerHTML = new Date().getFullYear() -1;

}) 

const acrescentar = document.getElementById('acrescentar');
acrescentar.addEventListener("click",() => {
    app.querySelector('header span').innerHTML = new Date().getFullYear() +1;

}) 