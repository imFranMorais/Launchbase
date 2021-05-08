// abre receita ao clicar no card
// const cards = document.querySelectorAll('.card')
// for (let i = 0; i < cards.length; i++) {
//     const recipe = cards[i]
//     recipe.addEventListener('click', () => {
//         window.location.href = `/site/recipe/${i}`
//     })
// }

// script para esconder ou mostrar partes da receita
const topics = document.querySelectorAll(".topic")
for (let topic of topics) {
    const btn = topic.querySelector("span")

    btn.addEventListener("click", () => {
        if (btn.innerText == "ESCONDER") {
            topic.querySelector(".content").classList.add("hidden")
            btn.innerText = "MOSTRAR"
        } else {
            topic.querySelector(".content").classList.remove("hidden")
            btn.innerText = "ESCONDER"
        }
    })
}

// script para menu ativo
const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .primary ul li a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

// Adiciona campos extras
function addInput(event) {
    const ingredients = document.querySelector('#ingredients')
    const preparation = document.querySelector('#preparation')
    const buttonName = event.target.name
    const fieldCointainer = document.querySelectorAll(`.${buttonName}`)
 
    // Clone do último ingrediente adicionado
    const newField = fieldCointainer[ fieldCointainer.length - 1 ].cloneNode(true)

    // Não add novo input se último estiver vazio
    if (newField.children[0].value == "") return false

    // Deixa o valor do input vazio
    newField.children[0].value = ""
    if (buttonName === 'ingredient') {
        ingredients.appendChild(newField)
    } else {
        preparation.appendChild(newField)
    }
}

document
    .querySelectorAll(".add-input")
    .forEach(button => button.addEventListener("click", addInput))


const formDelete = document.querySelector("#form-delete")
if (formDelete) {
formDelete.addEventListener("submit", function (event) {
    const confirmation = confirm("Deseja deletar?")
    if (!confirmation) {
        event.preventDefault()
    }
})
}



const PhotosUpload = {
    uploadLimit: 5,
    handleFileInput(event) {
        const { files: fileList } = event.target
        const { uploadLimit } = PhotosUpload

        if (fileList.length > uploadLimit) {
            alert(`Envie no máximo ${uploadLimit} fotos!`)
            event.preventDefault()
            return
        }

        Array.from(fileList).forEach(file => {
            const reader = new FileReader()

            reader.onload = () => {
                const image = new Image()
                image.src = String(reader.result)

                const div = document.createElement('div')
                div.classList.add('photo')

                div.onclick = () => alert('remover foto')

                div.appendChild(image)

                document.querySelector('#photos-preview').appendChild(div)
            }

            reader.readAsDataURL(file)
        })
    }
}

document.querySelector(".button.delete").addEventListener("click", (event) => {
    event.preventDefault();
    const formulario = document.querySelector("#form-delete");
    formulario.submit();
})

const formUpdate = document.querySelector("#form-update")
const updateButton = document.querySelector("#update")
if (formUpdate) {
updateButton.addEventListener("click", function() {
    formUpdate.submit()
})
}