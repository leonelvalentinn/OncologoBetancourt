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

//Script formulario
function openForm() {
  document.getElementById("form-menu").style.width = "100%";
}
function closeForm() {
  document.getElementById("form-menu").style.width = "0";
}

//script menu collapse
const $buttons = document.querySelectorAll('.acordeon-item button')
const $dropdowns = document.querySelectorAll('.acordeon-item')
const $arrows = document.querySelectorAll('.ubicacion-item #arrow')

$buttons.forEach((item, i) => (
  item.addEventListener('click', () => {
    $dropdowns[i].classList.toggle('show')
    $arrows[i].classList.toggle('spin-arrow')
  })
))

//scripts para collapse servicios 
const $buttonsTreatments = document.querySelectorAll('.container-tratamientos button')
const $dropdownsTreatments = document.querySelectorAll('.container-tratamientos .acordeon-tratamientos')
const $arrowsTreatments = document.querySelectorAll('.container-tratamientos #arrow')

$buttonsTreatments.forEach((item, i) => (
  item.addEventListener('click', () => {
    $dropdownsTreatments[i].classList.toggle('show')
    $arrowsTreatments[i].classList.toggle('spin-arrow')
  })
))

//scripts collapse cirugías
const $buttonsSurgeries = document.querySelectorAll('.container-cirugia button')
const $dropdownsSurgeries = document.querySelectorAll('.container-cirugia .acordeon-cirugia')
const $arrowsSurgeries = document.querySelectorAll('.container-cirugia #arrow')

$buttonsSurgeries.forEach((item, i) => (
  item.addEventListener('click', () => {
    $dropdownsSurgeries[i].classList.toggle('show')
    $arrowsSurgeries[i].classList.toggle('spin-arrow')
  })
))


// const $itemTreatment = document.querySelectorAll('.item-tratamientos')

// $itemTreatment.forEach((item, i) => (
//   item.addEventListener('mouseover', () => {
//     item.classList.toggle('bg-item-t')
//   })
// ))