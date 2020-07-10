// criar um programa que calcula a average das Classs de students e envia mensagem do cálculo da average.

const ClassA = [
    {
        name: "Mayk",
        grade: 9.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    }
]

const ClassB = [
    {
        name: "Clayton",
        grade: 10
    },
    {
        name: "Robson",
        grade: 10
    },
    {
        name: "Siclano",
        grade: 0
    },
    {
        name: "New student",
        grade: 5
    }

]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length
    
    return average
}

const average1 = calculateAverage(ClassA)
const average2 = calculateAverage(ClassB)

function sendMessage(average, Class) {
    if (average > 5) {
        console.log(`${Class} average: ${average}. Congrats!`)
    }
    else {
        console.log(`${Class} average: ${average}. Is not good!`)
    }
}


function markAsFlunked(student) {
    student.Flunked = false
    if (student.grade < 5) {
        student.Flunked = true
    }
}

function sendMessageFlunked(student) {
    if (student.Flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsFlunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageFlunked(student)
    }
}

sendMessage(average1, 'ClassA')
sendMessage(average2, 'ClassB')

studentsFlunkeds(ClassA)
studentsFlunkeds(ClassB)


// ======== OBSERVAÇÕES ======== 
// variavel: tudo que eu guardo em mémoria do computador por um tempo, mas depois que executo ele some da memória
// para criar a variavel de formato constante:
// constante é uma variável que não aceita receber outros valores ao longo do tempo
// const name = 'Mayk boot'
// console.log(name)
// para fazer comentários como esse: "ctrl" + ";"
// string é um texto, sinalizado com "" ou '' ou `` (sendo que esse útlimo é uma template string e pode colocar variaveis dentro)
// exemplo: 
// const name = "Mayk"
// const name2 = 'Diego'
// const name3 = `Fran e ${name}`
// console.log(name3)
// para saber tipo de variavel 
// console.log(typeof gradeAluno01)
// objetos: coleção de propriedades, que recebe valores ou funcionalidades de alguma coisa na programação.
// vetores ou array: agrupa os objetos em uma única variável
// funções: reaproveitamento de códigos, fazer uma lógica num bloco de códigos e sempre poder contar com isso sem precisar reescrevê-los
// em "console.log()" o console é um objeto, o log é uma função/método e o que está dentro dos () são os parâmetros.
// o método é quando a função está atrelada a um objeto.
// estrutura de repetição: repete o bloco de códigos
// let permite a alteração da variável
// todo array recebe funções e propriedades nativas. Eu posso usar a propriedade length para saber quantos elementos eu tenho no meu array.
// .table faz a informação ser exibida formatada 