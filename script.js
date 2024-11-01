const main = document.getElementById("mainsection");
const banner = document.getElementById("navigation");
const bottone = document.getElementById("bottone");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > banner.offsetHeight) {
    if (window.pageYOffset > main.offsetHeight) {
      banner.style.backgroundColor = "white";
      bottone.style.backgroundColor = "green";
    } else {
      banner.style.backgroundColor = "";
      bottone.style.backgroundColor = "";
    }
  } else {
    banner.style.backgroundColor = "";
    bottone.style.backgroundColor = "";
  }
});
