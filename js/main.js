document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        menuItems.forEach(function(item) {
          item.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
});

const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
    currentSlide = slides.children.length - 1;
    }
    updateSlider();
});
nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide === slides.children.length) {
    currentSlide = 0; 
    }
    updateSlider();
});
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
    currentSlide = i;
    updateSlider();
    });
});
function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * (100 / slides.children.length)}%)`;
    updateDots();
}
function updateDots() {
    dots.forEach((dot) => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}
function autoplay() {
    currentSlide++;
    if (currentSlide === slides.children.length) {
    currentSlide = 0;
    }
    updateSlider();
}
slides.style.transition = "transform 0.5s ease-in-out";
setInterval(autoplay, 4000);
updateSlider();

document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const reviewText = this.previousElementSibling;
            if (reviewText.style.maxHeight === 'none') {
                reviewText.style.maxHeight = '35px';
                this.textContent = 'Читать далее';
            } else {
                reviewText.style.maxHeight = 'none';
                this.textContent = 'Скрыть';
            }
        });
    });
});