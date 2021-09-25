const dinheiro = document.querySelector(".dinheiro")
const clicker = document.querySelector(".clicker")
let clickeroff = true
let shop = document.querySelector("#shop")
let upgrades = document.querySelector("#upgrades")
let upgradeoff = true

preco = valor => {
    return valor <= dinheiro.innerHTML ? dinheiro.innerHTML -= valor : false
} 

dinheiro.innerHTML = (dinheiro.innerHTML)

clicker.addEventListener("click", () => {
    if (clickeroff == true) {
        clickeroff = false
        clicker.style.transform = "scale(1.25, 1.25)"
        setTimeout(() => {
            clicker.style.transition = "0.5"
            clicker.style.transform = "none"
        }, 250)
        setTimeout(() => {
            dinheiro.innerHTML ++
            clickeroff = true
        }, 500);
    }
})

shop.addEventListener("click", () => {
    preco(1)
})


upgrades.addEventListener("click", () => {
    if (clickeroff == true) {
        clickeroff = false
        setInterval(() => {
            dinheiro.innerHTML ++
            clickeroff = true
        }, 1000);
    }
})