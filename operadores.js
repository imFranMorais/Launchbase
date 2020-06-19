/* operadores de comparação
> maior
< menor
>= maior igual a
<= menor igual a
== igual a
=== igual e do mesmo tipo
!= diferente de
!== diferente, inclusive do tipo
*/

// console.log(5 > 4) //true or false (bolean)  true
// console.log(5 < 4) //false
// console.log(5 >= 4) //true
// console.log(4 <= 4) //true
// console.log(4 == "4") //true
// console.log(4 === "4") //false, porque não é do mesmo tipo
// console.log(4 != "5") //true
// console.log(4 !== "5") //true

// // desafio
// const idade = 17
// // verificar se a pessoa é maior ou igual a 18 anos
// // console.log(idade >= 18)
// // se sim, deixar entrar, se não, bloquear a entrada
// if (idade >= 18) {
//     console.log("deixar entrar")
// } else {
//     console.log("bloquear a entrada")
// }
// // se a pessoa tiver 17 anos, avisar para voltar quando tiver 18
// if (idade === 17){
//     console.log("volte quando tiver 18")
// }


/* Operadores de lógicos
&& "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira.
|| "OU" Uma das condiçoes deve ser verdadeira para que a condição final seja verdadeira.
!  "NÃO" Nega uma condição.
*/

// dar bonificação de 500 reais
// se vendedor possuir 100 ou menos pontos
// mas deve possuir mais de 50 pontos 

// console.log(5 == 5 && 6 == 6) //true
// console.log(5 == 5 && 6 != 6) //false

// console.log(5 == 5 || 6 == 6) //true
// console.log(5 == 5 || 6 != 6) //true
// console.log(!(5 > 6)) // true
// console.log(!(5 < 6)) //false 


// // desafio
// const idade = 18
// // verificar se a pessoa é maior ou igual a 18 anos
// // console.log(idade >= 18)
// // se sim, deixar entrar, se não, bloquear a entrada
// // se a pessoa tiver 17 anos, avisar para voltar quando tiver 18

// if (!(idade >= 18) || idade === 17) {
//     console.log("bloquear a entrada")
// } 
// else {    
//     console.log("deixar entrar")

// }

/* Operadores de Aritméticos
* multiplicação
/ divisão
% resto da divisão
+ adição
- subtração
*/

console.log(2 * 2) //4
console.log(2 / 2) //1
console.log(2 % 1.5) //0.05
console.log(2 + 2) //4
console.log(2 - 2) //0
