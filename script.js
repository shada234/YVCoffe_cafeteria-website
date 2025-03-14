/*home.html*/

document.addEventListener("DOMContentLoaded", function() {
    let track = document.querySelector(".carousel-track");
    let firstClone = track.children[0].cloneNode(true);
    track.appendChild(firstClone);
    let images = document.querySelectorAll(".carousel-track img");
    let indicators = document.querySelectorAll(".indicator");
    let index = 0;

    function updateIndicators() {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    }

    function moveSlide() {
        index++;
        track.style.transform = `translateX(-${index * 100}vw)`;
        track.style.transition = "transform 1s ease-in-out";

        if (index >= images.length - 1) {
            setTimeout(() => {
                track.style.transition = "none";
                track.style.transform = "translateX(0)";
                index = 0;
                updateIndicators();
            }, 1000); // זמן קצר לפני חזרה ללולאה
        } else {
            updateIndicators();
        }
    }

    indicators.forEach(indicator => {
        indicator.addEventListener("click", function() {
            index = parseInt(this.getAttribute("data-index"));
            track.style.transform = `translateX(-${index * 100}vw)`;
            track.style.transition = "transform 1s ease-in-out";
            updateIndicators();
        });
    });

    setInterval(moveSlide, 4000); // שינוי תמונה כל 4 שניות
    updateIndicators();
});




/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*Log in*/

function handleAuth() {
    let email = document.getElementById("email").value;
    if (email === "") {
        alert("נא להכניס כתובת מייל תקינה");
    } else {
        window.location.href = "signUp.html";
    }
}

/*---------------------------------------------------------------------------------------------------------------------------------*/
/*signup*/

/*------------------------------------------------------------------------------------------------------------------------------------*/
/*stations*/




