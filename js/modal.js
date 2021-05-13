let modal = document.querySelector("#myModal")

let btn = document.querySelector("#modal_btn")

let span = document.querySelector(".close")

btn.onclick = function() {
  modal.style.visibility = "initial"
}

span.onclick = function() {
  modal.style.visibility = "hidden"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden"
  }
}