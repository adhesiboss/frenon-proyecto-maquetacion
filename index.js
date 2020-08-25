const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('#nav a');
const body = document.getElementById('body');


let menuIsVisible = false;

function handleMenuClick() {
  if (!menuIsVisible) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
  menuIsVisible = !menuIsVisible;
}

function handleMenuItemClick() {
  if (body.clientWidth <= 720) {
    nav.style.display= "none";
  }
}

menu.addEventListener("click", handleMenuClick);

navLinks.forEach(item => {
  item.addEventListener("click", handleMenuItemClick);
});