document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let count = 0;
    let isMouseDown = false;
    let slideInterval;

    function nextSlide() {
        count++;
        if (count === document.querySelectorAll('.slide').length) {
            count = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        count--;
        if (count < 0) {
            count = document.querySelectorAll('.slide').length - 1;
        }
        updateSlider();
    }

    function updateSlider() {
        const slideWidth = document.querySelector('.slide').clientWidth;
        slider.style.transform = `translateX(${-count * slideWidth}px)`;
    }

    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    slider.addEventListener('mousedown', function () {
        isMouseDown = true;
        stopSlideInterval();
    });

    slider.addEventListener('mouseup', function () {
        isMouseDown = false;
        startSlideInterval();
    });

    slider.addEventListener('mouseleave', function () {
        if (isMouseDown) {
            isMouseDown = false;
            startSlideInterval();
        }
    });

    document.querySelector('.prev-button').addEventListener('click', function () {
        prevSlide();
    });

    document.querySelector('.next-button').addEventListener('click', function () {
        nextSlide();
    });

    startSlideInterval();
});
