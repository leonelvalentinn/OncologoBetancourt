//Script menu
function openNav() {
  document.getElementById("mobile-menu").style.width = "100%";
  document.getElementById("closeMenu").style.animation = "menuMobile 0.5s linear";
  document.getElementById("openMenu").style.display = "none";
  document.getElementById("closeMenu").style.display = "flex";
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0%";
  document.getElementById("openMenu").style.animation = "menuMobile 0.5s linear";
  document.getElementById("openMenu").style.display = "flex";
  document.getElementById("closeMenu").style.display = "none";
}