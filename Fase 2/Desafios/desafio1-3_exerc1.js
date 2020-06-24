// Sobre o desafio
// Desafios para fortalecer alguns conceitos, entre eles:

// Funções e métodos;
// Estruturas de repetição;
// Escopos.
// Usuários e tecnologias
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

// const usuarios = [
//   { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//   { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//   { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

// const usuarios = [
//     {
//         nome: "Carlos",
//         tecnologias: ["HTML", "CSS"]
//     },
//     {
//         nome: "Jasmine",
//         tecnologias: ["JavaScript", "CSS"]
//     },
//     {
//         nome: "Tuane",
//         tecnologias: ["HTML", "Node.js"]
//     }

// ]


// Dessa forma, também aceita mais de duas tecnologias.

// for (let i = 0; i < usuarios.length; i++){
//     let tecnologias = ""
//     for (let a = 0; a < usuarios[i].tecnologias.length; a++){
//         tecnologias += `${usuarios[i].tecnologias[a]}` 
//         if (a != usuarios[i].tecnologias.length -1){
//             tecnologias += ', '
//         }
//     }        
    
//     console.log(`${usuarios[i].nome} trabalha com ${tecnologias}`)

// }


const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

    for (let a = 0; a < usuarios.length; a++) {
    
        let tecnologias = "";
    for (let i = 0; i < usuarios[a].tecnologias.length; i++){
        
        if (i == 0){
        tecnologias = usuarios[a].tecnologias[i]
        } else {
            tecnologias = tecnologias + ", " + usuarios[a].tecnologias[i]
        }
    }
    console.log(`${usuarios[a].nome} trabalha com ${tecnologias}`)
    }



// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

