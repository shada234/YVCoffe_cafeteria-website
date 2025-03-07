document.addEventListener("DOMContentLoaded", function() {
    let track = document.querySelector(".carousel-track");
    let images = document.querySelectorAll(".carousel-track img");
    let index = 0;
    
    function moveSlide() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        track.style.transform = `translateX(-${index * 100}vw)`;
    }
    
    setInterval(moveSlide, 5000); // שינוי תמונה כל 10 שניות עם מעבר מהיר
});
