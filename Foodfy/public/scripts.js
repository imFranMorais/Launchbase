// front //

const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    const recipe = cards[i]
    recipe.addEventListener('click', () => {
        window.location.href = `/recipe/${i}`
    })
}


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