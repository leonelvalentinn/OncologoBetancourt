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

//script menu collapse
function openMenu() {
  if (document.getElementById("acordeon").style.display == "block") {
    document.getElementById("acordeon").style.display = "none";
    document.getElementById("acordeon").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon").style.display = "block";
    document.getElementById("acordeon").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openMenu2() {
  if (document.getElementById("acordeon-2").style.display == "block") {
    document.getElementById("acordeon-2").style.display = "none";
    document.getElementById("acordeon-2").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-2").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-2").style.display = "block";
    document.getElementById("acordeon-2").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-2").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openMenu3() {
  if (document.getElementById("acordeon-3").style.display == "block") {
    document.getElementById("acordeon-3").style.display = "none";
    document.getElementById("acordeon-3").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-3").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-3").style.display = "block";
    document.getElementById("acordeon-3").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-3").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openMenu4() {
  if (document.getElementById("acordeon-4").style.display == "block") {
    document.getElementById("acordeon-4").style.display = "none";
    document.getElementById("acordeon-4").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-4").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-4").style.display = "block";
    document.getElementById("acordeon-4").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-4").style.animation = "menuDireccion 0.5s linear forwards";
  }
}