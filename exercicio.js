/* Função que retorna o resultado da soma de todos os números pares entre 1 e 100 */

function getSumEvenNumbers (value){
    let sum =  0;
    let start = 2;
    let finish = 100;
                        
    while(start <= finish){
        sum = sum + start;
        start = start + 2;
   }
    return sum;
}
    console.log(getSumEvenNumbers());

/* Função que retorna o resultado da soma de todos os números impares entre 101 e 200 */

function getSumOddNumbers (value){
    let sum =  0;
    let start = 101;
    let finish = 200;
                        
    while(start <= finish){
        sum = sum + start;
        start ++;
   }
    return sum;
}
    console.log(getSumOddNumbers());


/* Escreva uma função que receba como parâmetros dois números distintos, a função deve validar que o primeiro número é menor que o segundo número  e que os números estão 
entre o valor 1 e o valor 30, caso verdadeiro a função deve retornar a soma de todos números entre os números informados. Caso falso deve retornar 0.
 */

 function verifySmallerNumber (number1, number2){
    let message = 0;
    let sum = 0;
     let begin = 1;
     let end = 30;

        if(number1 < number2, number1 >= 1 | number2 <= 30){
            while(begin <= end){
                sum = sum + begin;
                begin ++;
             }
           
        }else{
            return message;
        }
        return sum; 
    }
    console.log(verifySmallerNumber(7,25));



    /* Escreva uma função que receba como parâmetro um número entre 1 e 10 e em seguida retorne o valor do fatorial do número informado. Caso o número informado esteja fora do 
    range (1-10) a função deve retornar uma mensagem indicando que o número informado é inválido. */

    function getFactor(value){
        let warning = "O número informado é inválido !";
        let factor = value;
                
        if(value == 0 | value > 10){
            return warning;
        }else{
            while(value > 1){
                value --;
            // factor *= value;
            factor = factor * value;
            }
        }
        return factor;   
    }
        console.log(getFactor(6));


/* Escreva uma função que receba como parâmetro um número entre 1 e 12 e em seguira retorne o nome do mês correspondente ao número informado. Caso o número informado esteja
fora do range(1-12) a função deve retornar uma mensagem indicado que o número informado é inválido Ex: número informado: 3, retorno da função: "Março". */

function getMonth (value){
    let month = "";

    switch(value){

        case 1:
            month = "Janeiro";
            break;
        
        case 2:
            month = "Fevereiro";
            break;
        
        case 3:
            month = "Março";
            break;
        
        case 4:
            month = "Abril";
            break;

        case 5:
            month = "Maio";
            break;
        
        case 6:
            month = "Junho";
            break;

        case 7:
            month = "Julho";
            break;
        
        case 8:
            month = "Agosto";
            break;
        
        case 9:
            month = "Setembro";
            break;
        
        case 10:
            month = "Outubro";
            break;

        case 11:
            month = "Novembro";
            break;
        
        case 12:
            month = "Dezembro";
            break;

        default:
            month = "O número informado é inválido";
    }
        return month;
}
    console.log(getMonth(7));

   /* Escreva uma função que receba como parâmetro o código de acesso e retorne uma mensagem de acordo com a tabela abaixo:
    
código      mensagem
    xpto        "Bem vindo convidado"
    alfa15      "preparando lançamento"
    tango       "foguete lançado"
   Caso o código informado seja um valor diverente do definido da 
tabela, a função deve retornar uma mensaagem indicando código inválido.  (Utilize o switch/case )
 */

 function getAccessCode(code){
    let warning = "Código inválido";

    switch(code){

        case "xpto":
            warning = "Bem vindo convidado";
            break;
        
        case "alfa15":
            warning = "Preparando lançamento";
            break;
            
        case "tango":
            warning = "Foguete lançado";
            break;
        
        default:
            warning;
 }
    return warning;
}
console.log(getAccessCode("alfa15"));

/* Escreva uma função que receba como parâmetro um número entre 1 e 4 e retorne uma mensagem de acordo com a tabela abaixo
    
número    mensagem
1       "Sacar"
2       "depositar"
3       "Verificar Saldo"
4       "Saír"

    Caso o código informado seja um valor diverente do definido da tabela, a função deve retornar uma mensaagem 
indicando código inválido.  (Utilize o switch/case )
 */

function getOption(value){
    let message = "Código inválido";

    switch(value){

        case 1:
            message = "Sacar";
            break;
            
        case 2:
            message = "Depositar";
            break;

        case 3:
            message = "Verificar Saldo";
            break;

        case 4:
            message = "Sair";    

        default:
            message;
    }
    return  message;
}
console.log(getOption(2));











