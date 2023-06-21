

// NULLISH COALESCING OPERATOR

 //const idade =null

// document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado');   
//


//OBJETOS
  /*const user = {
    name: 'Thiago',
    age: 35,
    address:{
        street: 'Rua jmdl',
        number: 250,
    }
  }
 
  document.body.innerText = ('name' in user); // EXISTE name dentro de USER?  TRUE
   

  document.body.innerText = Object.keys(user); // retorna um vetor com as chaves do objeto. EX: name,age,address
  
  document.body.innerText = Object.values(user); // retorna os valores do objeto
  document.body.innerText = JSON.stringify(Object.values(user));  // retorna ["Thiago",35,{"street":"Rua jmdl","number":250}]
  document.body.innerText = JSON.stringify(Object.entries(user));  // retorna um vetor com varios vetores dentro     

//

//DESESTRUTURAÇÃO

  const { address, age}  = user;
  document.body.innerText = JSON.stringify({address,age});

*/


 
/*
  


/*    function fib(num){
      var a = 0;
      var b = 1;
      var temp;

      while (num > 0){
              temp = b;
              b = b + a;
              a = temp;
              num--;
      }
      return a;
}

let resultado = fib(10);
console.log(resultado);*/





/*
const fibonacci = num => {
  // se o valor passado é ou 0 ou 1, é preciso retornar o valor passado
  if(num < 2) {
  return num
  }
  // aqui entra a recursão propriamente dita
  return fibonacci(num - 1) + fibonacci(num - 2)
  }

  console.log(fibonacci(4));



  function GenerateFibonacci(number){
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < number; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
return fibonacci;
}
var f = GenerateFibonacci(10);
console.log(f);

*/
/*

    function calcFibonacci(){
      var termo = parseInt(document.getElementById('termo').value);
      var resultado = document.getElementById('resultado');
      var penultimo=0, ultimo=1;
      var numero;
    
      if(termo<=2)
       numero = termo-1;
      else{
       count=3;
       while(count<=termo){
        numero= ultimo + penultimo;
        penultimo = ultimo;
        ultimo=numero;
        count++;
       }
      }
    
      resultado.innerHTML = numero;
    }


    function fibonacci(){
      
      termo = parseInt(document.getElementById('termo').value);
      let anterior = 0, atual = 1, proximo = 1;
      
      //document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado');   

      
      /*if (Number.isNaN(termo)){
        termo = 10;
        //console.log('ENTRA NO IF')
      }
      else{
        termo = parseInt(document.getElementById('termo').value);
       // console.log('ELSE')
      }
      
     //console.log(termo);

      for (let i = 0; i < termo; i++){
        //resultado.innerHTML = proximo;
        console.log (proximo);
        anterior = atual + proximo;
        atual = proximo;
        proximo = anterior;
      }
    }
*/
/*

 class Funcionario{
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }
  CalcReajust() {
    let soma = this.nome + ' | ' + this.cargo + ' | ' + (this.salario + (this.salario * (5 / 100)));
    console.log(soma);
  } 
  
}   


var dev = new Funcionario('Otacilio','Desenvolvedor',2680)
var con = new Funcionario('Rogério','Consultor',3245)
var ges = new Funcionario('Marcelo','Gerente',5432)


function sumAll (){
  dev.CalcReajust(5)
  ges.CalcReajust(8)
  con.CalcReajust(15)
  
  return Math.abs(dev) + Math.abs(ges) + con;

}

let sumAll = (a,b,c) => dev.CalcReajust(5) + ges.CalcReajust(8) + con.CalcReajust(15);
console.log(sumAll())*/



/*
 function DiaSemana(){
  var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  
      var data = '10/10/2022';
      var arr = data.split("/").reverse();
      var teste = new Date(arr[0], arr[1] - 1, arr[2]);
      var dia = teste.getDay();
      console.log(semana[dia]); 
      //console.log(arr)
};

DiaSemana()


function DiaSemanaNumber(){
  var semana = [0,1,2,3,4,5,6];
  
      var data = 'Domingo';
      var arr = data.split("/").reverse();
      var teste = new Date(arr[0], arr[1] - 1, arr[2]);
      var dia = teste.getDay();
      console.log(semana[dia]); 
      //console.log(arr)
};*/


//const data = new Date();

//console.log(data.toLocaleDateString())
//console.log(data)

/*
var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

function calcDiaMes(diaEscolhido){

  "use strict"
  //var diaEscolhido = "Segunda-Feira"
  //console.log(typeof diaEscolhido)
  var mes = Math.abs(data.getMonth()) + 1; //Mês atual
  var ano = Math.abs(data.getFullYear()); //Ano atual
  var hoje = Math.abs(data.getDate()) // Dia atual
  var hojeExtenso = semana[data.getDay()] // Dia atual por extenso
  var indiceSemana = semana.indexOf(hojeExtenso); //Indice, do dia atual, da semana
 

  var lastDay = (new Date(ano,mes,0)).getDate() //ultimo dia do mês atual
  
  var d = 0;
  var qtdd = 0;
  var qtdArr = semana.length;  // tamanho do array da semana
  
  if (typeof diaEscolhido == 'string'){
   
      for (var index = 0; index < qtdArr; index++) {        
        qtdd = semana.indexOf(diaEscolhido)
        d =  (qtdd + hoje) + 7
      }
        // Fazer um throw (jogar) tratando um dia da semana passado errado
       //throw new Error ("Dia da semana não existe") // ELE VAI PARAR O PROGRAMA

       // OU usar o try catch
   
    console.log(`Hoje é o dia (da semana): ${hojeExtenso}`)
    console.log(`Hoje é o dia (do Mês): ${hoje}`)
    console.log(`Útiltimo dia do Mês): ${lastDay}`)
    
    console.log(`Próximo(a) ${diaEscolhido} será ${d}/${mes}`)
    
  }
  else {
    d = diaEscolhido + 7
    console.log(`Próximo dia ${diaEscolhido} será ${d}/${mes}`)
  }

  if (d > lastDay){
    mes = mes + 1
  }
  
  

  
}

calcDiaMes('Domingo')



const teste = "thiago"
const frase = teste.substring(0,3)
console.log(frase)

//var lastDay = (new Date(2022,09,0)).getDate()
var lastDay = Math.abs(data.toLocaleDateString().substring(6,10))
console.log(lastDay)

console.log(data.getFullYear())

var lastDay = (new Date(2022,11,0)).getDate() //ultimo dia do mês atual
console.log (lastDay)

*/


/*function calculaIdade(dataNasc){ 
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  
  
  var diaNasc = dataNasc.substring(0,2)
  
  var mesNasc = dataNasc.substring(3,5)
  
  var anoNasc = dataNasc.substring(6,10)
  
  var idade = anoAtual - anoNasc;

  var mesAtual = dataAtual.getMonth() + 1; 
  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
  if(mesAtual < mesNasc){
    idade--; 
  } else {
    //Se estiver no mes do nascimento, verificar o dia
    if(mesAtual == mesNasc){ 
      if(new Date().getDate() < diaNasc ){ 
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        idade--; 
      }
    }
  } 
  return idade; 
 }

 console.log(calculaIdade('18/07/1987'));*/


 /*let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);
 // resposta 91*/

 

 /*function fibonacci(){
      
  termo = parseInt(document.getElementById('termo').value);
  let anterior = 0, atual = 1, proximo = 1;  
  let  sequencia = [];

  if (Number.isNaN(termo)){
    termo = 10;    
  }
  else{
    termo = parseInt(document.getElementById('termo').value);   
  }
  
  for (let i = 0; i < termo; i++){  
    console.log (proximo);
    sequencia.push(proximo)
    anterior = atual + proximo;
    atual = proximo;
    proximo = anterior;    
  }
  console.log(sequencia)
  if (sequencia.indexOf(termo) >= 0){
    console.log('verdade')
  }else{
    console.log('Não tem')
  }
}*/

app.querySelector('main').innerHTML = 'thiagoooo';

