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

//scripts para collapse servicios 
function openTratamientos() {
  if (document.getElementById("acordeon-tratamientos").style.display == "block") {
    document.getElementById("acordeon-tratamientos").style.display = "none";
    document.getElementById("acordeon-tratamientos").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-tratamientos").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-tratamientos").style.display = "block";
    document.getElementById("acordeon-tratamientos").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-tratamientos").style.animation = "menuDireccion 0.5s linear forwards";
  }
} 
function openTratamientos2() {
  if (document.getElementById("acordeon-tratamientos-2").style.display == "block") {
    document.getElementById("acordeon-tratamientos-2").style.display = "none";
    document.getElementById("acordeon-tratamientos-2").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-tratamientos-2").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-tratamientos-2").style.display = "block";
    document.getElementById("acordeon-tratamientos-2").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-tratamientos-2").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openTratamientos3() {
  if (document.getElementById("acordeon-tratamientos-3").style.display == "block") {
    document.getElementById("acordeon-tratamientos-3").style.display = "none";
    document.getElementById("acordeon-tratamientos-3").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-tratamientos-3").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-tratamientos-3").style.display = "block";
    document.getElementById("acordeon-tratamientos-3").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-tratamientos-3").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openTratamientos4() {
  if (document.getElementById("acordeon-tratamientos-4").style.display == "block") {
    document.getElementById("acordeon-tratamientos-4").style.display = "none";
    document.getElementById("acordeon-tratamientos-4").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-tratamientos-4").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-tratamientos-4").style.display = "block";
    document.getElementById("acordeon-tratamientos-4").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-tratamientos-4").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openTratamientos5() {
  if (document.getElementById("acordeon-tratamientos-5").style.display == "block") {
    document.getElementById("acordeon-tratamientos-5").style.display = "none";
    document.getElementById("acordeon-tratamientos-5").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-tratamientos-5").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-tratamientos-5").style.display = "block";
    document.getElementById("acordeon-tratamientos-5").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-tratamientos-5").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openTratamientos6() {
  if (document.getElementById("acordeon-tratamientos-6").style.display == "block") {
    document.getElementById("acordeon-tratamientos-6").style.display = "none";
    document.getElementById("acordeon-tratamientos-6").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-tratamientos-6").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-tratamientos-6").style.display = "block";
    document.getElementById("acordeon-tratamientos-6").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-tratamientos-6").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openTratamientos7() {
  if (document.getElementById("acordeon-tratamientos-7").style.display == "block") {
    document.getElementById("acordeon-tratamientos-7").style.display = "none";
    document.getElementById("acordeon-tratamientos-7").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-tratamientos-7").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-tratamientos-7").style.display = "block";
    document.getElementById("acordeon-tratamientos-7").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-tratamientos-7").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openTratamientos8() {
  if (document.getElementById("acordeon-tratamientos-8").style.display == "block") {
    document.getElementById("acordeon-tratamientos-8").style.display = "none";
    document.getElementById("acordeon-tratamientos-8").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-tratamientos-8").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-tratamientos-8").style.display = "block";
    document.getElementById("acordeon-tratamientos-8").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-tratamientos-8").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openTratamientos9() {
  if (document.getElementById("acordeon-tratamientos-9").style.display == "block") {
    document.getElementById("acordeon-tratamientos-9").style.display = "none";
    document.getElementById("acordeon-tratamientos-9").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-tratamientos-9").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-tratamientos-9").style.display = "block";
    document.getElementById("acordeon-tratamientos-9").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-tratamientos-9").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openTratamientos10() {
  if (document.getElementById("acordeon-tratamientos-10").style.display == "block") {
    document.getElementById("acordeon-tratamientos-10").style.display = "none";
    document.getElementById("acordeon-tratamientos-10").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-tratamientos-10").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-tratamientos-10").style.display = "block";
    document.getElementById("acordeon-tratamientos-10").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-tratamientos-10").style.animation = "menuDireccion 0.5s linear forwards";
  }
}

//scripts collapse cirugias
function opencirugia() {
  if (document.getElementById("acordeon-cirugia").style.display == "block") {
    document.getElementById("acordeon-cirugia").style.display = "none";
    document.getElementById("acordeon-cirugia").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-cirugia").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-cirugia").style.display = "block";
    document.getElementById("acordeon-cirugia").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-cirugia").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function opencirugia2() {
  if (document.getElementById("acordeon-cirugia-2").style.display == "block") {
    document.getElementById("acordeon-cirugia-2").style.display = "none";
    document.getElementById("acordeon-cirugia-2").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-cirugia-2").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-cirugia-2").style.display = "block";
    document.getElementById("acordeon-cirugia-2").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-cirugia-2").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function opencirugia3() {
  if (document.getElementById("acordeon-cirugia-3").style.display == "block") {
    document.getElementById("acordeon-cirugia-3").style.display = "none";
    document.getElementById("acordeon-cirugia-3").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-cirugia-3").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-cirugia-3").style.display = "block";
    document.getElementById("acordeon-cirugia-3").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-cirugia-3").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function opencirugia4() {
  if (document.getElementById("acordeon-cirugia-4").style.display == "block") {
    document.getElementById("acordeon-cirugia-4").style.display = "none";
    document.getElementById("acordeon-cirugia-4").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-cirugia-4").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-cirugia-4").style.display = "block";
    document.getElementById("acordeon-cirugia-4").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-cirugia-4").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function opencirugia5() {
  if (document.getElementById("acordeon-cirugia-5").style.display == "block") {
    document.getElementById("acordeon-cirugia-5").style.display = "none";
    document.getElementById("acordeon-cirugia-5").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-cirugia-5").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-cirugia-5").style.display = "block";
    document.getElementById("acordeon-cirugia-5").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-cirugia-5").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function opencirugia6() {
  if (document.getElementById("acordeon-cirugia-6").style.display == "block") {
    document.getElementById("acordeon-cirugia-6").style.display = "none";
    document.getElementById("acordeon-cirugia-6").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-cirugia-6").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-cirugia-6").style.display = "block";
    document.getElementById("acordeon-cirugia-6").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-cirugia-6").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function opencirugia7() {
  if (document.getElementById("acordeon-cirugia-7").style.display == "block") {
    document.getElementById("acordeon-cirugia-7").style.display = "none";
    document.getElementById("acordeon-cirugia-7").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-cirugia-7").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-cirugia-7").style.display = "block";
    document.getElementById("acordeon-cirugia-7").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-cirugia-7").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
//Scripts otros
function openOtros() {
  if (document.getElementById("acordeon-otros").style.display == "block") {
    document.getElementById("acordeon-otros").style.display = "none";
    document.getElementById("acordeon-otros").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-otros").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-otros").style.display = "block";
    document.getElementById("acordeon-otros").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-otros").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
function openOtros2() {
  if (document.getElementById("acordeon-otros-2").style.display == "block") {
    document.getElementById("acordeon-otros-2").style.display = "none";
    document.getElementById("acordeon-otros-2").style.animation = "collapseD 0.5s linear reverse"
    document.getElementById("arrow-otros-2").style.animation = "menuDireccion 0.5s linear reverse forwards";
  } else {
    document.getElementById("acordeon-otros-2").style.display = "block";
    document.getElementById("acordeon-otros-2").style.animation = "collapseD 0.5s linear"
    document.getElementById("arrow-otros-2").style.animation = "menuDireccion 0.5s linear forwards";
  }
}
