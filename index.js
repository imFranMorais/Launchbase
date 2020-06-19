// aula 1
// variavel: tudo que eu guardo em mémoria do computador por um tempo, mas depois que executo ele some da memória
// para criar a variavel de formato constante:
// constante é uma variável que não aceita receber outros valores ao longo do tempo
// const nome = 'Mayk boot'
// console.log(nome)

// aula 2
// para fazer comentários como esse: "ctrl" + ";"
// string é um texto, sinalizado com "" ou '' ou `` (sendo que esse útlimo é uma template string e pode colocar variaveis dentro)
// exemplo: 
// const nome = "Mayk"
// const nome2 = 'Diego'
// const nome3 = `Fran e ${nome}`
// console.log(nome3)

// para saber tipo de variavel 
// console.log(typeof notaAluno01)


// desafio 
// criar um programa que calcula a média das notas entre os alunos e envia mensagem do cálculo da média.

const aluno01 = 'Mayk'
const notaAluno01 = 9.8

const aluno02 = 'Diego'
const notaAluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// condicional: se .... então ...., se não .....
// se a média for maior que 5, parabenizar a turma
if (media > 5) {
// faz uma coisa
    console.log(`a nota foi de ${media}. parabéns`)
}
else {
    // faz outra coisa
    console.log(`a média é menor que 5`)
}
 
