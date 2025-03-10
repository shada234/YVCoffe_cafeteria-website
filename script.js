/*home.html*/

document.addEventListener("DOMContentLoaded", function() {
    let track = document.querySelector(".carousel-track");
    let firstClone = track.children[0].cloneNode(true);
    track.appendChild(firstClone);
    let images = document.querySelectorAll(".carousel-track img");
    let index = 0;
    
    function moveSlide() {
        index++;
        track.style.transform = `translateX(-${index * 100}vw)`;
        track.style.transition = "transform 1s ease-in-out";

        if (index >= images.length - 1) {
            setTimeout(() => {
                track.style.transition = "none";
                track.style.transform = "translateX(0)";
                index = 0;
            }, 1000); // זמן קצר לפני חזרה ללולאה
        }  
    }

    setInterval(moveSlide, 4000); // שינוי תמונה כל 4 שניות
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
function handleSignUp() {
    let email = document.getElementById("signUpEmail").value;
    let name = document.getElementById("signUpName").value;
    let lastName = document.getElementById("signUpLastName").value;
    let termsChecked = document.getElementById("signUpTerms").checked;

    if (email === "" || name === "" || lastName === "") {
        alert("נא למלא את כל השדות החובה");
    } else if (!termsChecked) {
        alert("יש לאשר את תנאי השימוש");
    } else {
        window.location.href = "dashboard.html"; // מעביר לדף הראשי לאחר ההרשמה
    }
}
/*------------------------------------------------------------------------------------------------------------------------------------*/



