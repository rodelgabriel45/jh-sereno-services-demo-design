document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger-icon').addEventListener('click', function () {
    console.log('burger clicked');
    document.querySelector('.mobile-nav').classList.toggle('active');
  });
});

let currentSlide = 0;
let intervalId;

function moveSlide(n) {
  clearInterval(intervalId);
  currentSlide += n;
  showSlide();
}

function showSlide() {
  const slides = document.querySelectorAll('.carousel-item');
  if (currentSlide >= slides.length) {
    currentSlide = 0; // Wrap around to the first slide
  }
  if (currentSlide < 0) {
    currentSlide = slides.length - 1; // Wrap around to the last slide
  }
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.remove('hide');
    } else {
      slide.classList.add('hide');
    }
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
  // Automatically move to the next slide every 3 seconds
  intervalId = setInterval(() => {
    moveSlide(1);
  }, 3000);
}

// Initial call to start automatic sliding
showSlide();
