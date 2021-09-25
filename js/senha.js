const form = document.querySelector(".modal")
form.addEventListener("submit", (e) => {

    const senha = document.querySelectorAll("input[type='password']")

    if (senha[0].value !== senha[1].value) {
        e.preventDefault()
        alert("As senhas não correspondem!")

    } else if (senha[0].value.length < 6 ) {
        e.preventDefault()
        alert("A senha precisa de no mínimo 6 ou mais caractéres!")
    }
})