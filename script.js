const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
let resposta = document.querySelector("#resposta");

/*Modifique a calculadora do exercício
anterior removendo o botão e fazendo
com que qualquer alteração de valor em
qualquer um dos campos faça a resposta
ser automaticamente calculada*/

seletor.addEventListener("change", calcular);
campo1.addEventListener("keyup", calcular);
campo2.addEventListener("keyup", calcular);

function calcular(){

    if(campo1.value==='' || campo2.value===''){ //caso o usuario nao digite um numero
        resposta.classList.add("problema");
        resposta.innerHTML="Campo vazio";
        setTimeout(()=>{
            resposta.classList.remove("problema");
            resposta.innerHTML='';
        },3000); //deixa o aviso em vermelho por 3 segundos
    }
    else{
        const valor1 = parseInt(campo1.value);
        const valor2 = parseInt(campo2.value);
        const operacao = seletor.value;
        if(operacao==="somar")
            resposta.innerHTML = valor1 + valor2;
        if(operacao==="subtrair")
            resposta.innerHTML = valor1 - valor2;
        if(operacao==="multiplicar")
            resposta.innerHTML = valor1 * valor2;
        if(operacao==="dividir")
            resposta.innerHTML = valor1 / valor2;
        }
}