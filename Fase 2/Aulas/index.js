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
// criar um programa que calcula a média das turmas de alunos e envia mensagem do cálculo da média.

const alunosdaturmaA = [
    {
        nome: "Mayk",
        nota: 1.8
        },
    {
        nome: "Diego",
        nota: 10
        },
    {       
        nome: "Fulano",
        nota: 2
    },
    {
        nome: "mais um aluno",
        nota: 10
    }
]

const alunosdaturmaB = [
    {
        nome: "Clayton",
        nota: 10
        },
    {
        nome: "Robson",
        nota: 10
        },
    {       
        nome: "Siclano",
        nota: 0
    },
    {
        nome: "Novo aluno",
        nota: 5
    }

]
 
function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosdaturmaA)
const media2 = calculaMedia(alunosdaturmaB)


function enviaMensagem(media, turma){
    // condicional: se .... então ...., se não .....
    // se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        // faz uma coisa
        console.log(`a média da turma ${turma} foi de ${media}. parabéns`)
    }
    else {
        // faz outra coisa
        console.log(`a média da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')
 
// objetos: coleção de propriedades, que recebe valores ou funcionalidades de alguma coisa na programação.
// vetores ou array: agrupa os objetos em uma única variável
// funções: reaproveitamento de códigos, fazer uma lógica num bloco de códigos e sempre poder contar com isso sem precisar reescrevê-los
// em "console.log()" o console é um objeto, o log é uma função/método e o que está dentro dos () são os parâmetros.
// o método é quando a função está atrelada a um objeto.
// estrutura de repetição: repete o bloco de códigos
// let permite a alteração da variável