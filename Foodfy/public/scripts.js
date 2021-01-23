// lembrar o que siginifica esse primeiro
const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) {
    const recipe = cards[i]
    recipe.addEventListener('click', () => {
        window.location.href = `/site/recipe/${i}`
    })
}

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
const menuItems = document.querySelectorAll("header .menu a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}