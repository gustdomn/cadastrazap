







/*var nome= prompt("qualo seu nome?")
alert ("seja bem vindo"  +nome)*/
/*var   numero1 = Number (prompt ("digite o primeiro numero"))
/*criar mais uma variavel,que armazena outro numero  que ar mazena o segundo numero*/
/*var  numero2 = Number (prompt ("digite o segundo numero"))
alert ("o resutado da subitrcaoe"+(numero1-numero2))
alert ("o resutadoo resutado da mutiplicaso e"+(numero1*numero2))
alert ("o resutado da adicao e "+(numero1+numero2))
alert ("o resutadoda divisao e "+(numero1/numero2))*/
//var n1 = Number (prompt ("digite um numero "))
//alert ("o dobro desse numero e " +(n1*2) + " o triplo desse numero e" +(n1*3))
//alert ("o triplo desse numero e "+(n1*3))





/*var nome =prompt  ("qual o seu nome?")
var n1 =Number(prompt ("quala nota da primeira prova?"))
var n2 =Number (prompt (" nota da sugunda prova?"))
var media = ((n1+n2)/2)

alert ("a media sera  "+((n1+n2)/2))
 
if (media>6){
alert ("aluno " + nome + "aprovado")
}

else{
alert ("aluno " + nome + "reprovado")
}
*/




//if = se 


//else = se nao



/*var idade =Number (prompt("qual a sua idade?"))
if (idade >= 18  ){
    alert ("maior de idade")
}

else {
alert ("menor de idade")
}
*/

/*var nota = Number (prompt ("qual a nota do aluno? "))
if(nota>=60){
atert ("aprovado")
}



else {
alert ("reprovado")

}


*/


//tofixed formata um numero

/*
var peso=Number(prompt("qual o seu peso?"))
var autura=Number(prompt("qual a sua autura?"))
var imc =(peso/(autura*autura)).toFixed(2)
if(imc <18.5){
    alert ("seuimc e de "+imc+"abaixo do peso")
}
else if((imc >=18.5) & (imc<25)){
alert ("peso normal seu imc e "+imc)
}
else if((imc >=25)&(imc<30)){
    alert ("vc esta no sobrepeso seu imc e de "+imc)
}
else if((imc >=30)&(imc<35)){
    alert("vc estar na obasidade nivel 1 seu imc e de "+imc)
}
else if((imc >=35)&(imc<40)){
    alert ("vose esta na obesidade tipo 2 e ele e de "+imc)
}
else if ((imc >=40)){
    alert("vc esta no nivel mrobido e seu imc e de "+imc+" va para uma academia, gigante")
}

var lista_de_curso =["programação","enfermagem ","estetica","imformatica","farmacia","execel","adiministração"]
//lista_de_curso.forEach(curso=> alert (curso))
for(var i=0;i<=6;i++ ){
    alert (lista_de_curso[i])
}


for(var i=90; i>=0; i--){
    alert(i)
}/*
var notas =prompt("quantas notas vc que avaliar?")
  var soma=0
for (var i=1;i<=notas; i++){
    var n = Number (prompt("digite a nota"))
    soma = soma + n
}
var media = soma/notas
alert ("a media e "+media)

var listadenomes=["maylon","arthur","ryan","henrique","maria","gustavo","danilo","patrik"]
//listadenomes.forEach(nome=>alert(nome+" faz o curso de programação"))
var i = Number(prompt ("escolha um inde se de do aluno (0 A 7)"))


var n =Number(prompt("escolha um numero de "))
for( i=0;i<=9;i++ ){
   alert(`(n) * ${i} = ${n*i}`)
    alert(n+"*"+i+"="+n*i)
}
push serve par adicionar um novo registro para uma lista*/
//var lj = prompt["fifa","call of duty","red dead","cs"]
/*var novojogo= prompt("digite um novo jogo ")
lj.push(novojogo)
lj.pop()//remove o utimo elemento da lista
lj.shift()//remove o primeiro elemento da lista
lj.splice(2, 1)//remove 1 elemento a partir do indece
lj.reverse()//inverter a lista*/
//var i =lj.Indexof("fifa")
//alert (i)
/*var lj = ["fifa","call of duty","red dead","cs"]
var qtdejogosn=prompt("quantos jogos vc quer adicionar? ")
for(var i=0;i<qtdejogosn;i++ ){
    var jogo = prompt("digite o nome do jogo ")
    lj.push(jogo)
}
alert(lj)
var i=0
var saldo = 14000

while(i!=1){






var operacao = prompt("1-saldo\n2-transferencia\n3- sair do site ")

if (operacao == 1 ){
    alert ("seu saldo e de "+ saldo)
}
else if (operacao == 2 ){
    
    var saque= Number(prompt("quanto deseja trasferencia? "))
    if (saldo<saque){
        alert ("o saldo n e suficiente")    
    }
else{
saldo = saldo-saque
alert("seu saldo atual e de "+saldo)
}
}
else if (operacao == 3 ){
    alert ("obrigado por acesar o site ")
    i = 1
    
}
}
var curso={
    nome_do_curso:"logica de programação ",
    listadenomes: ["maylon ","arthur","ryan","henrique","maria","gustavo","danilo","patrik"],
    carga_horaria:"60 HORAS ",
    LOCAL:"senac",
    horario:"noite das 19 as 22",
    dias:"segunda a quinta "
}
alert("oi "+curso.listadenomes[1]+"\nvoca faz o curso de "+curso.nome_do_curso+"\na sua carga horaria e "+curso.carga_horaria+"\no local do seu curso e no "+curso.LOCAL+"\no seu horario e de "+curso.horario+"\nnos dias "+curso.dias)

function rotina (){
    alert("acordar ")
    alert("arumar a cama ")
    alert("escovar os detes ")
    alert("vertir o uniovorme ")
    alert("e ir trabalhar ")
}
rotina()

function mutiplicaçãnumeros(){
    var n1=Number(prompt("escolha o primeiro numero "))
    var n2=Number(prompt("escolha o segundo numero "))
    var n3=Number (prompt("escolha o terceiro numero "))
    var resutado=n1*n2*n3
     alert(resutado)
     
}

somarnumeros()

function saudacao(nome){
alert("seja bem vindo, "+nome)
alert("digite a o peracao: \n1 \n2 ")
}

saudacao ("gustavo")
function clasi (a){
    var a=Number(prompt(" escolha um numero maior do que 10 ") )
    if (a<=10){
        alert (`vc n sabe le `)
    }else if (a>10){
        alert(`este numero${a} e maior do que 10 `)
    }
    
}

clasi()

var cep = "38702098"
alert(cep.substring(0,5)+"-",cep.substring(5,8))
var cpf = "52469077698"
var cpffor = alert(`${cpf.substring(0,3)}.${cpf.substring(3,6)}.${cpf.substring(6,9)}-${cpf.substring(9,11)}`)
*/

































































































































































/*


var i =0
var saldo =0
while (i==0){
var operacao = prompt("0-deposito\n1-saldo\n2-transferencia\n3- sair do site ")

if (operacao==0){
var dp=Number(prompt ("quanto deseja depositar?"))
saldo=dp+saldo
}
 else if (operacao == 1 )
    alert ("seu saldo e de "+ saldo)

else if (operacao == 2 ){
    
    var saque= Number(prompt("quanto deseja trasferencia? "))
    if (saldo<saque){
        alert ("o saldo n e suficiente")    
    }
else{
saldo = saldo-saque
alert("seu saldo atual e de "+saldo)
}
}
else if (operacao == 3 ){
    alert ("obrigado por acesar o site ")
    i = 1
    
}
}*/




/*
var i =0
var saldo =0
while (i==0){
var operacao = prompt("0-deposito\n1-saldo\n2-transferencia\n3- sair do site ")

if (operacao==0){
var dp=Number(prompt ("quanto deseja depositar?"))
saldo=dp+saldo
}
 else if (operacao == 1 )
    alert ("seu saldo e de "+ saldo)

else if (operacao == 2 ){
    
    var saque= Number(prompt("quanto deseja trasferencia? "))
    if (saldo<saque){
        alert ("o saldo n e suficiente")    
    }
else{
saldo = saldo-saque
alert("seu saldo atual e de "+saldo)
}
}
else if (operacao == 3 ){
    alert ("obrigado por acesar o site ")
    i = 1
  */
    /*
var listaDePessoas = [{ nome: "Mylon", telefone: "3411234434" },
    
    { nome: "gustavo", telefone: "38999501525" }, 
    
     { nome: "enzo", telefone: "31988534233" },
     
    { nome: "maria", telefone: "34977658411" },
      
     { nome: "geovana", telefone: "31999705542" },
       
      { nome: "felipe", telefone: "38999607329" },
        
       { nome: "otavio", telefone: "347776453" },
        
        { nome: "henrique", telefone: "34984415573" },
        
        { nome: "gabriel", telefone: "3198350119" }]

  

    listaDePessoas.forEach(pessoa => {
        var ddd = pessoa.telefone.substring(0,2)
        pessoa.ddd = ddd
        if (ddd = 34){
            pessoa.cidade = " patos de minas"
        }
        if (ddd = 38){
            pessoa.cidade = " brasilia"
        }
        if (ddd = 31){
            pessoa.cidade = " belo horizonte"
        }
    })

alert("seja bem vindo ao cadastrazap")
var i =0
while (i==0){
var operacao = prompt("o q vc deseja fazer no site?\n1-cadastrar o seu zap\n2-achar o zap de auguem\n3-sair do site")

if (operacao == 1) {
    var nome= prompt("qual o seu nome?")
    var n1 = Number(prompt("coloque seu zap aqui " + nome))
    alert(nome + " seu zap  " + n1 + " foi cadastrado no cadastrazap")
    
    var pessoa = {nome:nome,telefone:n1}
    
    listaDePessoas.push(pessoa)
}
else if (operacao == 2) {

    var nomeprocurado = prompt("digite o nome da pessoa ")

   

    var pessoa = listaDePessoas.filter(pessoa => pessoa.nome == nomeprocurado)

    alert("o numero dele e "+pessoa[0].telefone+" e mora na cidade "+ pessoa[0].cidade)
}
else if (operacao == 3 ){
    alert ("obrigado por acesar o site ")
    i = 1}

}
*/

var listaDePessoas = [{ nome: "Mylon", telefone: "3411234434" },
    
    { nome: "gustavo", telefone: "38999501525" }, 
    
     { nome: "enzo", telefone: "31988534233" },
     
    { nome: "maria", telefone: "34977658411" },
      
     { nome: "geovana", telefone: "31999705542" },
       
      { nome: "felipe", telefone: "38999607329" },
        
       { nome: "otavio", telefone: "347776453" },
        
        { nome: "henrique", telefone: "34984415573" },
        
        { nome: "gabriel", telefone: "3198350119" }]

  

    listaDePessoas.forEach(pessoa => {
        var ddd = pessoa.telefone.substring(0,2)
        pessoa.ddd = ddd
        if (ddd = 34){
            pessoa.cidade = " patos de minas"
        }
        if (ddd = 38){
            pessoa.cidade = " brasilia"
        }
        if (ddd = 31){
            pessoa.cidade = " belo horizonte"
        }
    })

alert("seja bem vindo ao cadastrazap")
var i =0
while (i==0){
var operacao = prompt("o q vc deseja fazer no site?\n1-cadastrar o seu zap\n2-achar o zap de auguem\n3-sair do site")

if (operacao == 1) {
    var nome= prompt("qual o seu nome?")
    var n1 = Number(prompt("coloque seu zap aqui " + nome))
    alert(nome + " seu zap  " + n1 + " foi cadastrado no cadastrazap")
    
    var pessoa = {nome:nome,telefone:n1}
    
    listaDePessoas.push(pessoa)
}
else if (operacao == 2) {

    var nomeprocurado = prompt("digite o nome da pessoa ")

   

    var pessoa = listaDePessoas.filter(pessoa => pessoa.nome == nomeprocurado)

    alert("o numero dele e "+pessoa[0].telefone+" e mora na cidade "+ pessoa[0].cidade)
}
else if (operacao == 3 ){
    alert ("obrigado por acesar o site ")
    i = 1}

}




























