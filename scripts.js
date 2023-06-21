
/*console.log('teste javascript')

console.error('teste erro') //aparece como erro

console.warn('apenas um aviso')


//VARIÁVEIS - Formas de declarar
var x = 10

//Mais modernas
    //podem ser usado a mesma variavel dentro do mesmo escopo

let y = 15 

const z = 20 // Valor não vai mudar

if(1){
    let y = 17
}
console.log(x)
console.log(z)
console.log(y)


OPERADORES LÓGICOS - BOOLEAN

&& - AND
|| - OR
!  - NOT 





//TIPOS DE DADOS
 const name = 'Thiago'
 const qtdcam = 4

 console.log(name)
 console.log(typeof name)
 console.log(qtdcam)
 console.log(typeof qtdcam)

 const desaprovado = false
 console.log(desaprovado)
 console.log(typeof desaprovado)


 let sobrenome = null
 sobrenome = 'Mezacasa'
 console.log(sobrenome)

        //Array
 const languages = ['English','Spanish', 'Portuguese']
 console.log(languages)

        //OBJETO (object list)
 const user = {email   : 'tsmezacasa@gmail.com', 
              password: 'teste123'}
 console.log(user)
*/




/*
//MÉTODOS DE MANIPULAR STRING
   const fullname = 'Thiago Santos Mezacasa'

 
 //SPLIT
  const stringtoArray =fullname.split(' ')  --> Divide uma string por um separador, e retorna um ARRAY

  console.log(stringtoArray)

  //SLICE
   indexof, toUpperCase, toLowerCase,length,
  //slice(0,&) ->fatiar

  //PADSTART --> Insere caracteres antes da string
     let milAoContrario = '1'
     console.log(milAoContrario.padStart(4,"0"))


  //JOIN()  --> Junta elementros de um array em uma frase por meio de um separador     
    let fullname = "Santos Mezacasa".split(' ')
    let fraseMontada = fullname.join('%%%')
    console.log(fraseMontada)  ---> Santos%%Mezacasa

    
  //REPEAT(10)  --> repete a palavra
  //STARTWITH('thiago'); Verifica se a string começa com a palavra
  //ENDSWITH('AGO);  FINAL da string
      
------------------------------------------------------------------------------------------------
   REST OPERATOR
      Fora de uma função receber indefinidos parâmetros
      o Operador rest vai virar um array

   let num=1, nume=5, num2=3, num3=4;
    function imprimeNumeros (...args){
      for (let i=0; i< args.length; i++)
        console.log(args[i])      
    }

    imprimeNumeros(num,nume)
    console.log('pausa')
    imprimeNumeros(num2,num3)
    console.log('outra pausa')
    imprimeNumeros(1,99,758,777)
------------------------------------------------------------------------------------------------   


//DESTRUCTURING  com objetos
   - Podemos definir variáveis com propriedades do objeto com uma notação diferente.
  
   const person = {  //objeto
    name: 'Thiago', //propriedades
    lastname: 'Mezacasa'
  } 

  const {name: fname, lastname: lname} = person;
  console.log(fname)
  console.log(lname)
  
     //PARA ARRAYS TBM FUNCIONA

  let nomes =['thiago','douglas','melchior']   
  let [Eu,Irmao,Pai] = nomes;
  console.log(Eu)
  console.log(Irmao)
//











//MÉTODOS DE MANIPULAR ARRAYS

  const list = ['a','b','c','e','d']//começando com zero
  //console.log(list[2])

     console.log('ultimo elemento da lista é: ' + list[list.length-1])

     list.push('g') //adicionar um elemento no fim da lista

     list.pop() // remover ultimo elemento da lista
     
     
     list.unshift('aa') // Adicionar um elemento no início
     list .shift() // remover um elemento do início


  // INCLUDES()  --> Verifica se o array tem um determinado elemento
    console.log(list.include('a'))   --> retorno será TRUE

  //REVERSE() --> inverte o array





//OBJETOS

    const product = {
        name: 'Camiseta',
        price: 199.23 ,
        sizes: ['P','M','G'],
        instock:'true',
        'Main color': 'Blue',
    }

    console.log(product.name)
    console.log(product['Main color'])

    //destructuring --> desestrutura para variaveis
    const {price,instock} = product
      console.log(price)
      console.log(instock)

  
  // COPIAR PRODPRIEDADES DE UM OBJETO PARA O PRINCIPAL
   let adicionais = {
    quantidade : 30,
   }
   Object.assign(product, adicionais);

   console.log(product)

   
  // MUTAÇÃO (MUTABILITY)      criar um objeto igual ao outro e referenciar ao antigo
    
    let pessoa = { nome: "thiago"}
    
    let pessoa2 = pessoa
    console.log(pessoa=pessoa2)
 
    pessoa2.nome = "JOSÉ"

    console.log(pessoa.nome)





// JSON - JavaScript Object Notation    --> SEMPRE ASPAS DUPLAS

  let pessoa = {
  "name": "Thiago",
  "age"       : 35,
  "position"  : "Developer",
  "languages" : ["javascript","Php"],
  "Hobbies"   : ["Gim","Run"]
  }

  let pessoaTexto = JSON.stringify(pessoa)
    console.log(pessoaTexto)


  let pessoaJson = JSON.parse(pessoaTexto)
  console.log(pessoaJson)

  console.log(pessoa.languages[0] + ' --- ' + pessoaJson.Hobbies[1])
//




// ESTRUTURAS CONDICIONAIS

   const b = 'Thiago'

   if (b === 'Douglas'){// os 2 primeiros iguais compara o valor, ou seja, nesse exemplo iria comparar se Thiago é igual a Douglas
                        // e o Ultimo compara o tipo do dado tbm
     console.log('ddfdfdf')
   }else if(b === 'Jão') {
      console.log('mais teste')
   }else{
      console.log('Nome not found')
   }

  
   const someNumber = 14
// IF TERNÁRIO
  let testing = someNumber < 20 ? 'Yes' : 'No'          // interrogação para TRUE e dois pontos para FALSE
   
  
// ESTRUTURAS DE REPETIÇÃO - LOOPs

    const mylist = [1,2,3,4,5]
    let contador = 0

    while (contador < mylist.length){
        console.log('Mostrando ' + mylist[contador])

        contador++
    }

    
    const mysecondList = ['a','b','c','d','e']
    for (let contador = 0; contador < mysecondList.length; contador ++) {// esse contador está dentro do escopo do FOR, enquanto o outro ali de cima está no escopo geral
        
        console.log(`Mostrando: ${mysecondList[contador]}`) // TEMPLATE LITERALS

    }      


// MÉTODOS DE ARRAY com funções ANÔNIMAS-> REPETIÇÃO

    const names = ["Mateus", "João", "Thiago"]

    names.forEach(function(name) {
      console.log(`o nome é:' ${name}`)
    })

    const nomesModificados = names.map (function(name){ //map para modificar valor
      if (name === 'Thiago'){
        return (name = 'Sr. Thiago')
      }else {
        return name
      }
    })
     console.log(nomesModificados)

     
         //Filtrar numeros
     const bigNumbers = [1,2,3,4,5,6,100,200,400,600].filter(function (number){
      return number > 10
     })
     console.log(bigNumbers)

        
        // Reduzir em uma entidade... um numero 
     const sumAll = [10,20,39,40,50,100].reduce (function (total, number) {
        return total + number
     })
      console.log(sumAll)
     



// FUNÇÕES 
  const nome = 'Douglas'
  const sobrenome = 'Mezacasa'

  function minhafnc(nome, sobrenome) {
    return `Nome completo é: ${nome} ${sobrenome}`    
    
  }      
  console.log(minhafnc('Thiago', 'Mezacasa'))

  const meuNome = minhafnc(nome,sobrenome)
  console.log(meuNome)
   

// ARROW FUNCTIONS
  const myArrowFnc = (a,b) => {
    return a + b
  }
  
      
       OU PODE SER FEITO ASSIM:

  
  const myArrowFnc = (a,b) => a + b;   
  
  console.log(myArrowFnc(1,4))     



  const sumAll = [10,20,39,40,50,100].reduce ((total, number) => {
    return total + number
 })
  console.log(sumAll)

  const SimplesArrowFnc = (a,b) => a + b
  console.log(SimplesArrowFnc(5,5))



// CLASSES - 
  
  class Product {
    constructor (name, price){
      this.name = name  //objeto
      this.price = price
    }
    
    
    //Métodos
    productDetails() {
      return `nome do produto é ${this.name} e o preço é R$ ${this.price}`
    } 


  }

  const car   = new Product('Onix', 50.45)
  const shirt = new Product('Camisa branca', 23.98)
  
  
  console.log(car.name)
  console.log(car.price)


  const socks = new Product('Meia branca', 10.99)
  console.log(socks.name)
  console.log(socks.price)


  console.log(car.productDetails())
  console.log(socks.productDetails())


// HERANÇA - quando extendemos uma classe

  class SuperProduct extends Product{
    constructor(name, price, size){
      super (name, price) //da classe pai
      this.size = size
    }

    //Métodos
    ShowAdjective (adjective) {
      return `O produto ${this.name} é ${adjective}`
    }

    //Métodos Estáticos - posso executar sem precisar instanciar a classe
                   //Métodos auxiliares
     static sayHello(){
       console.log('Testing static methods')

     }
  }


  const tenis = new SuperProduct('Tenis vermelho', 98.3, '42')

  console.log(tenis.name)
  console.log(tenis.productDetails())

  console.log(tenis.ShowAdjective('muito bom'))

  SuperProduct.sayHello()





// DOM -> DOCUMENT OBJECT MODEL -> SELEÇÃO DE ELEMENTOS
         // Adicionar eventos e modificações no html e css pelo JavaScript


  const title = document.getElementById("title")
  console.log(title)

  
  // Query Selector  -> Busca o selector do CSS
  const sameTitle = document.querySelector("#title")

   //método para selecionar varios elementos de uma vez só
   const texts = document.querySelectorAll('.text')
   console.log(texts)
   console.log(texts[1])

  
  texts.forEach((text) => {
    console.log(text.textContent.toUpperCase())


  })



// DOM -> DOCUMENT OBJECT MODEL -> MANIPULAÇÃO DE ELEMENTOS
  title.textContent = 'Mudei o texto' //muda o conteudo do texto


    texts[0].innerHTML = '<span> Alteramos o html </span>'
    texts[1].style.backgroundColor = 'blue'


    texts[2].classList.add('minhaclasse')
    texts[2].classList.remove('text')

    texts[3].remove()



// DOM -> DOCUMENT OBJECT MODEL -> EVENTOS
  
const btn = document.getElementById('btn') 
      // ou document.querySelector('#btn')

btn.addEventListener('click',function() {
  console.log('clicou')
  texts[2].style.color = 'red'
  texts[0].style.color = 'pink'

})*/
    

// FINALLY
  // É executado indepentende do resultado do try/catch
  // Pode exister com try e catch ou apenas com try


  try {
    let c = 2 + b
  } catch (error) {
    console.log("Algo deu errado: " + error )
  } finally {
    console.log("Executou!")
  }


  


//





//         https://www.hackerrank.com/
//1) const numbers = [1,2,0,-4,-5]
 


 /*
 const negativos = numbers.filter(number => number < 0 )
 const positivos = numbers.filter(number => number > 0 )
 const zeros     = numbers.filter(number => number == 0)
 
 console.log(positivos.length)



 negativos.forEach(function(name) {
  console.log( (negativos.length/numbers.length).toFixed(6))  
})

positivos.forEach(function(name) {
  console.log( (positivos.length/numbers.length).toFixed(6))  
})

zeros.forEach(function(name) {
  console.log( (zeros.length/numbers.length).toFixed(6))  
})


// 2)

 /*const maximo = Math.max(1,3,5,7,9)
 const minimo = Math.min(1,3,5,7,9)
 console.log(maximo)
 console.log(minimo)*/

 //Math.max([valor1[,valor2, ...]])
 
 
 
 //for (let contador = 0; contador < numbers.length; contador++ ){
   
  const meuArray = [1, 2, 3, 4, 5]
  , novoArray = []
  , corte = 4;

//for (let i = 0; i < meuArray.length;  i = i + corte) {
//  novoArray.push(meuArray.slice(i, i + corte));
//}

//console.log(novoArray);
  
/*meuArray.forEach((name) => {
  novoArray.push(meuArray.slice(meuArray.length, meuArray.length+1));
})
console.log(novoArray);




const min = meuArray.sort(function(a,b){ 
  return a-b  
} )
        
const sum_min = min.slice(0,4).reduce((total,number) => {
  return total + number
})

const sum_max = min.slice(1,5).reduce((total,number) => {
  return total + number

})


//const max = meuArray.sort(function(a,b){ 
//return b-a
//})



console.dir(` ${sum_min} ${sum_max}`)
//console.table(` ${sum_min} ${sum_max}`)

*/




// 3)
/*i
  const s = '03:01:00 PM'

const data = new Date()
 //const hora = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()

//const hora = data.toLocaleTimeString('pt-BR',24)
const hora = data.toLocaleTimeString('en-US', {hour12: true})
const hora2 = data.toLocaleTimeString('pt-BR')



f (s.slice(09,12) == 'PM'){
  const t = s.slice(0,2)
  const a = t + 12
  console.log(a)
}

console.log(hora)
console.log(hora2)


const s = '02:05:01AM'


let [hours, minutes,seconds] = s.substring(0,8).split(':')
const sigla = s.substring(8,10)

  if (hours === '12') {
     hours = '00';
  }
  if (sigla === 'PM') {
     hours = parseInt(hours, 10) + 12;
  }
 

 console.log(`${hours}:${minutes}:${seconds}`)
 */



/*___________________________________________
ORIENTAÇÃO A OBJETOS
 ___________________________________________
 //1) Métodos --> São ações dos objetos
 
   let automovel = {
      fabricante: 'Sem',    
      
      tipo: function(){ //método
        console.log("Carro");
      },      


      setFabricante: function(fabricante){ //metodo
        this.fabricante = fabricante;
      },
    
      getFabricante: function(){
        return "O Fabricante é " + this.fabricante //metodo para imprimir
      }
      
   }
   
   console.log(automovel.fabricante);
   automovel.setFabricante("Peugeot");
   console.log(automovel.fabricante);

   automovel.getFabricante();
   console.log(automovel.getFabricante())



 //2) PROTOTYPE   -> É o pai do objeto criado
         //Todo objeto tem
   let pessoa ={
     mãos: 2
   }

   console.log(Object.getPrototypeOf(pessoa));   //pessoa é filho do Object
   console.log(Object.getPrototypeOf(pessoa) === Object.prototype)
   console.log(Object.getOwnPropertyNames(pessoa))

   
   const pessoaNova = Object.create(pessoa)
   //Quando criamos essa PessoaNova a partir do Pessoa, o base (pessoa) será o prototype
    // Ele hedará métodos e propriedades do Object pai (pessoa)
   console.log(pessoaNova.mãos)

   console.log(Object.getPrototypeOf(pessoaNova) === pessoa); // Aqui o pessoa é PROTOTYPE do pessoaNova
 
  

 // CLASSES  
   // Prototype tbm pode ser chamado de CLASSE

   let cachorro = {
    raca: 'Poodle',
    patas: 4,
    latir: function(){
      console.log('Latindo')
    }
   }

   let pastorAlemao = Object.create(cachorro);   
   pastorAlemao.latir();   
   pastorAlemao.raca = 'Pastor Alemao'

   console.log(pastorAlemao.raca);
   console.log(cachorro.raca);
   
   console.log('\n----------')

   let labrador = Object.create(cachorro)
   labrador.raca = 'Labrador'
   console.log(labrador.raca)
   console.log('\n----------')
   

   let doberman = Object.create(cachorro);
   doberman.raca = 'Doberman';
   console.log(doberman.raca);
   doberman.patas = 3;
   console.log(doberman.patas)
  // 
 
  // CLASSES: CONSTRUTOR POR FUNÇÃO   
    //  Construtor são formas de instanciar uma classe
    function criaCachorro(raca, patas, cor){
      let cachorro = Object.create({});
      cachorro.raca = raca;
      cachorro.patas = patas;
      cachorro.cor = cor;
      cachorro.latir = function(){  //MÉTODO
        console.log(`Cachorro da raça ${cachorro.raca} está latindo.`)
      }
      return cachorro;
    }

    let Dalmata = criaCachorro('Dalmata',4,'Preto&Branco');
    Dalmata.latir();
  //
  
  //CLASSES: CONSTRUTOR POR NEW
    // mais usada

   function Cachorro(raca, patas, cor){
     this.raca = raca;
     this.patas = patas;
     this.cor = cor;
     this.latir = function(){ //MÉTODO
        console.log('Latindo')
     }
   }

   let husky = new Cachorro('Husky',4, 'Branca');
   husky.latir();
  //

  //CLASSES: CONSTRUTOR COM MÉTODO  
       // É mais usado porque deixamos as propriedades somente na Classe, e os métodos separados. Ficando mais organizado
    
   function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;    
   }

   let husky = new Cachorro('Husky',3,'Cinza');
   
   Cachorro.prototype.Latir = function(){
    console.log("Latindo");
   }   
   husky.Latir();

   Cachorro.prototype.Correr = function(){
    console.log('Correndo')
   }
   husky.Correr();
   

   
   //---------------------------
    // NOVA FORMA DE FAZER
   //----------------------------
 
   class Cachorro{
    constructor(raca,patas,cor){
      this.raca = raca;
      this.patas = patas;
      this.cor = cor;  
    }
   }
   
   let husky = new Cachorro('Husky',3,'Cinza');
 // 
 
   
  //CLASSES: MANEIRA MAIS USADA
    // Aqui tenho que declarar propriedades dentro do construct OU pelo prototype.
    // Isso ajuda quando quero adicionar uma propriedade especifica... não precisando que essa propriedade seja instanciada com a classe.

    class Cachorro{
      constructor(raca,cor){
        this.raca = raca;        
        this.cor = cor;  
      }

      latir (){   //MÉTODO
        console.log('Latindo')
      }
     }
     
     Cachorro.prototype.raca = 'Poodle';
     Cachorro.prototype.patas = 4;
     
     let labrador = new Cachorro('Labrador','Amarelo');
     console.log(labrador.patas)

     labrador.latir();

      //OVERRIDE
       console.log(labrador.raca);
       console.log(Cachorro.prototype.raca);
 //
   
  // SIMBOLS
        // Propriedades únicas dos objetos, que não podem ser alteradas e nem criadas duas vezes. Igual a CONST
     
    class Cachorro{
      constructor(raca,cor){
        this.raca = raca;        
        this.cor = cor;  
      }

      latir (){   //MÉTODO
        console.log('Latindo')
      }
    }    
      
    let labrador = new Cachorro('labrador', 'cinza')
    let patas = Symbol();
    Cachorro.prototype[patas] = 4;  
    
    console.log(Cachorro.prototype[patas]); //SÓ PODE SER ACESSADO PELO PROTOTYPE
    console.log(labrador[patas]);
 //
  
  // GETTERS e SETTERS
    // get: Resgata valor de uma propriedade
    // set: Altera valor de uma propriedade

    class Cachorro{
      constructor(raca,cor){
        this.raca = raca;        
        this.cor = cor;  
      }

      latir (){   //MÉTODO
        console.log('Latindo')
      }

      get getCor(){
        return this.cor;
      }

      set setCor(cor){
        this.cor = cor;
      }
    }   

    let pastor = new Cachorro('Pastor Alemão','Nasceu branco');
    console.log(pastor.cor)

    pastor.setCor = 'Ficou preto';
    console.log(pastor.getCor);
  //

  // HERANÇA

    class Mamifero {
      constructor(patas){
        this.patas = patas;
      }        
    }
    
    let coiote = new Mamifero(5);
    console.log(coiote.patas);


    class Cachorro extends Mamifero{
      constructor(patas, raca){
        super(patas,patas); //altera direto no objeto pai
        this.raca = raca;        
      }
      latir(){
        console.log('latindo');
      }
    }

    let pug = new Cachorro(3,'Pug');
    console.log(pug.patas)

    //verificar quem é o pai do objeto - -INSTANCEOF      
    console.log(pug instanceof Mamifero);
    console.log(new Cachorro instanceof Mamifero);

  //
  
________________________________________
          CALLBACKS - Assíncrona
  ________________________________________ 
   console.log('1');
   console.log('2');
   console.log('3');
  
  //1) 
   setTimeout(function(){
    console.log("4")
   }, 2000); //milisegundos

   console.log('5');
  //
  
  //2 - Promises
    // O objeto é Promise, e o método resolve é o que resolve a promise. O Then é o que faz ela poder ser executada em um ponto futuro
  
    let p = Promise.resolve(5);

    console.log("Outros códigos");

    console.log(p);
    
    p.then ((value) => {console.log(`O valor é ${value}`)});
  //
  */
  //FUNÇÕES ASSÍNCRONAS
     // Elas retornam uma promise



     

 const arr1 = []
 const arr2 = []
 
 for (let i=0; i<5; i++){
   setTimeout(() => {arr1.push(i)}, 0);
 }

 console.log(arr1)


 for (let i = 0; i < 5; i++) {
    setTimeout(() => {arr2.push(i)}, 0);
 }

 console.log(arr2)

 resultado.querySelector.