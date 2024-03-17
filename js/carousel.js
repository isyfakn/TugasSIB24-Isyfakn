const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
const prev = carousel.querySelector('.prev');
const next = carousel.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);