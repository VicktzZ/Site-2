window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("menu-fixed").style.backgroundColor = "rgba(35,35,35, 0.9)"
  } else {
    document.getElementById("menu-fixed").style.backgroundColor = "rgba(35,35,35, 0.0)"
  }
}