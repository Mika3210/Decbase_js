// const hamb = document.querySelector("#namb");
// const body = document.body;

// hamb.addEventListener("click", hambHandler);

// function hambHandler(e) {
//     e.preventDefault()
// }

// const nav_list = document.querySelector(".nav_list");
// const nav_link = document.querySelectorAll(".nav_link");
// const hamb= document.querySelector(".hamb");
// const burger= document.querySelector(".burger");

// function toggleMenu() {
//   if (nav_list.classList.contains("showMenu")) {
//     nav_list.classList.remove("showMenu");
//     burger.style.display = "block";
//   } else {
//     nav_list.classList.add("showMenu");
//     burger.style.display = "none";
//   }
// }

// hamb.addEventListener("click", toggleMenu);

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    // menu.display = "block"
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)








const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();




function popupToggle(){
    const  popup = document.getElementById('popup');
    popup.classList.toggle('active')
}
