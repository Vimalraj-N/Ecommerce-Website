/*side bar */
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menubar');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});

/*header Slide image*/ 

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    function goToSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < slideCount - 1) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0);
        }
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

/*  customer review*/
const slides1 = document.querySelector('.slides1');
const slideCount1 = document.querySelectorAll('.slide1').length;
let currentIndex1 = 0;

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex1 === 0) {
        currentIndex1 = slideCount1 - 1;
    } else {
        currentIndex1--;
    }
    updateSlider1();
});

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex1 === slideCount1 - 1) {
        currentIndex1 = 0;
    } else {
        currentIndex1++;
    }
    updateSlider1();
});

function updateSlider1() {
    slides1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}
