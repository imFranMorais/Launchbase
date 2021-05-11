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
    const newField = fieldCointainer[fieldCointainer.length - 1].cloneNode(true)

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
    input: "",
    preview: document.querySelector('#photos-preview'),
    uploadLimit: 5,
    files: [],
    handleFileInput(event) {
        const { files: fileList } = event.target
        PhotosUpload.input = event.target
        
        if (PhotosUpload.hasLimit(event)) return

        Array.from(fileList).forEach(file => {

            PhotosUpload.files.push(file)

            const reader = new FileReader()

            reader.onload = () => {
                const image = new Image()
                image.src = String(reader.result)

                const div = PhotosUpload.getContainer(image)
                PhotosUpload.preview.appendChild(div)
            }

            reader.readAsDataURL(file)
        })

        PhotosUpload.input.files = PhotosUpload.getAllFiles()
    },
    hasLimit(event) {
        const { uploadLimit, input, preview } = PhotosUpload
        const { files: fileList} = input

        if (fileList.length > uploadLimit) {
            alert(`Envie no máximo ${uploadLimit} fotos!`)
            event.preventDefault()
            return true
        }

        const photosDiv = []
        preview.childNodes.forEach(item => {
            if (item.classList && item.classList.value == "photo")
                photosDiv.push(item)
        })

        const totalPhotos = fileList.length + photosDiv.length
        if (totalPhotos > uploadLimit) {
            alert("Você atingiu o limite máximo de fotos")
            event.preventDefault()
            return true
        }

        return false
    },
    getAllFiles() {
        const dataTransfer = new ClipboardEvent("").clipboardData || new DataTransfer()

        PhotosUpload.files.forEach(file => dataTransfer.items.add(file))

        return dataTransfer.files

    },
    getContainer(image) {
        const div = document.createElement('div')
        div.classList.add('photo')

        div.onclick = PhotosUpload.removePhoto

        div.appendChild(image)
        div.appendChild(PhotosUpload.getRemoveButton())

        return div
    },
    getRemoveButton() {
        const button = document.createElement('i')
        button.classList.add('material-icons')
        button.innerHTML = "close"
        return button
    },
    removePhoto(event) {
        const photoDiv = event.target.parentNode // <div class="photo"> 
        const photosArray = Array.from(PhotosUpload.preview.children)
        const index = photosArray.indexOf(photoDiv)

        PhotosUpload.files.splice(index, 1)
        PhotosUpload.input.files = PhotosUpload.getAllFiles()

        photoDiv.remove()
    },
    removeOldPhoto(event) {
        const photoDiv = event.target.parentNode

        if (photoDiv.id) {
            const removedFiles = document.querySelector('input[name="removed_files"]')
            if (removedFiles) {
                removedFiles.value += `${photoDiv.id},`
            }
        }

        photoDiv.remove()
    }
}

const ImageGallery = {
    highlight: document.querySelector('.gallery .highlight > img'),
    previews: document.querySelectorAll('.gallery-preview img'),
    setImage(e) {
        const { target } = e

        ImageGallery.previews.forEach(preview => preview.classList.remove('active'))
        target.classList.add('active')

        ImageGallery.highlight.src = target.src
        Lightbox.image.src = target.src
    }
}

const Lightbox = {
    target: document.querySelector('.lightbox-target'),
    image: document.querySelector('.lightbox-target img'),
    closeButton: document.querySelector('.lightbox-target a.lightbox-close'),
    open() {
        Lightbox.target.style.opacity = 1
        Lightbox.target.style.top = 0
        Lightbox.target.style.bottom = 0
        Lightbox.closeButton.style.top = 0
    },
    close() {
        Lightbox.target.style.opacity = 0
        Lightbox.target.style.top = "-100%"
        Lightbox.target.style.bottom = "initial"
        Lightbox.closeButton.style.top = "-80px"

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
    updateButton.addEventListener("click", function () {
        formUpdate.submit()
    })
}