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
/*menu*/

function redirectTo(station) {
    window.location.href = `menu.html?station=${station}`;
}


const menuData = {
    cafeteria_dairy: [
        { name: "קולה", price: "5₪", image: "images/cola.png" },
        { name: "פנטה", price: "5₪", image: "images/fanta.png" },
        { name: "בקבוק פנטה", price: "5₪", image: "images/fanta2.png" },
        { name: "שווופס פירות יער", price: "8₪", image: "images/Schweppes_Fruit_Forest.png" },
        { name: "שווופס לימון סודה", price: "8₪", image: "images/Schweppes_Lemon_Soda.png" },
        { name: "ספרייט", price: "8₪", image: "images/spright.png" },
        { name: "טמבור XL", price: "9₪", image: "images/Tamakor_XL.png" },
        { name: "קולה זירו", price: "8₪", image: "images/zero.png" },
        { name: "זירו בכוס", price: "10₪", image: "images/zeroglass.png" },
        { name: "ספרייט", price: "8₪", image: "images/sprait.png" },


        /*toas + pizza + drinks +salads + basta + noodles + רביולי     */
    ],
    snack_shop: [

        { name: "קרוסון שקדים", price: "7₪", image: "images/Almond_Croissant.png" },
        { name: "קפה אמריקאנו", price: "7₪", image: "images/americano.png" },
        { name: "אבוקדו", price: "10₪", image: "images/Avocado_Roll.png" },
        { name: "סנדוויץ אבוקדו", price: "10₪", image: "images/Avocado_Sandwich.png" },
        { name: "קפה שחור ", price: "7₪", image: "images/Black Coffee.png" },
        { name: "קפה הפוך ", price: "7₪", image: "images/Cafe_Au_Lait.png" },
        { name: "בורקס גבינה ", price: "7₪", image: "images/Cheese_Bourekas.png" },
        { name: "קרוסון שוקולד", price: "10₪", image: "images/Chocolate_Croissant.png" },
        { name: "קוקי פאדג' שוקולד", price: "5₪", image: "images/Chocolate_Fudge_Cookie.png" },
        { name: "מאפה קינמון", price: "7₪", image: "images/Cinnamon_Pastry.png" },
        { name: "קולה", price: "5₪", image: "images/cola.png" },
        { name: " סלט ביצים", price: "10₪", image: "images/Egg_Salad_Sandwich.png" },
        { name: "חטיף אנרגי", price: "5₪", image: "images/Energy_Granola_Bar.png" },
        { name: "אספרסו", price: "8₪", image: "images/Espresso.png" },
        { name: "פנטה", price: "5₪", image: "images/fanta.png" },
        { name: "בקבוק פנטה", price: "5₪", image: "images/fanta2.png" },
        { name: "שוקו", price: "8₪", image: "images/shoko.png" },
        { name: "אמריקאנו קר", price: "10₪", image: "images/Iced_Americano.png" },
        { name: "שוקו קר", price: "10₪", image: "images/Iced_Chocolate.png" }, 
        { name: "קפה קר", price: "10₪", image: "images/Iced_Coffee.png" },
        { name: "קפה נס", price: "10₪", image: "images/Instant_Coffee.png" },
        { name: "כדורי קליק", price: "8₪", image: "images/Klik_Balls.png" },
        { name: "עוגיית קליק", price: "8₪", image: "images/Klik_Biscuit.png" },
        { name: "קורנפלקס קליק", price: "9₪", image: "images/Klik_Cereal.png" },
        { name: "עוגייה קליק", price: "8₪", image: "images/Klik_Cookie.png" },
        { name: "קליק קורנפלקס", price: "9₪", image: "images/Klik_Cornflakes.png" },
        { name: "כדורי קליק לבנים", price: "8₪", image: "images/Klik_White_Balls.png" },
        { name: "לואקר קוביות שוקולד", price: "12₪", image: "images/Loacker_Quadratini_chocolate.png" },
        { name: "סנדוויץ' לואקר וניל", price: "10₪", image: "images/Loacker_Sandwich_Vanilla.png" },
        { name: "מאקיאטו", price: "12₪", image: "images/Macchiato.png" },
        { name: "מיני לואקר שוקולד", price: "6₪", image: "images/Mini_Loacker_Chocolate.png" },
        { name: "מיני לואקר אגוזים", price: "6₪", image: "images/Mini_Loacker_Hazelnut.png" },
        { name: "מיני לואקר וניל", price: "6₪", image: "images/Mini_Loacker_Vanilla.png" },
        { name: "סנדוויץ' חביתה", price: "15₪", image: "images/Omelet_Sandwich.png" },
        { name: "בורקס תפוחי אדמה", price: "10₪", image: "images/Potato_Bourekas.png" },
        { name: "מגנום שקדים פרימיום", price: "14₪", image: "images/Premium_Almond_Magnum.png" },
        { name: "חטיף חלבון עוגיות", price: "12₪", image: "images/Protein_Bar_Cookie.png" },
        { name: "רוגלך", price: "10₪", image: "images/Rugelach.png" },
        { name: "שווופס פירות יער", price: "8₪", image: "images/Schweppes_Fruit_Forest.png" },
        { name: "שווופס לימון סודה", price: "8₪", image: "images/Schweppes_Lemon_Soda.png" },
        { name: "שוקו", price: "6₪", image: "images/shoko.png" },
        { name: "ספרייט", price: "8₪", image: "images/sprait.png" },
        { name: "טמבור XL", price: "9₪", image: "images/Tamakor_XL.png" },
        { name: "תה", price: "7₪", image: "images/Tea.png" },
        { name: "רול טונה", price: "20₪", image: "images/Tuna_Roll.png" },
        { name: "סנדוויץ' טונה", price: "18₪", image: "images/Tuna_Sandwich.png" },

        { name: "עוגיית פאדג' וניל", price: "10₪", image: "images/Vanilla_Fudge_Cookie.png" },
        { name: "וופלים שוקולד", price: "9₪", image: "images/Wafers_Chocolate.png" },
        { name: "מים עין גדי", price: "6₪", image: "images/Water_Ein_Gedi.png" },

        { name: "קולה זירו", price: "8₪", image: "images/zero.png" },
        { name: "זירו בכוס", price: "10₪", image: "images/zeroglass.png" }
         
        

    ],
    coffee_bar: [
   
        { name: "קרוסון שקדים", price: "7₪", image: "images/Almond_Croissant.png" },
        { name: "קפה אמריקאנו", price: "7₪", image: "images/americano.png" },
        { name: "אבוקדו", price: "10₪", image: "images/Avocado_Roll.png" },
        { name: "סנדוויץ אבוקדו", price: "10₪", image: "images/Avocado_Sandwich.png" },
        { name: "קפה שחור ", price: "7₪", image: "images/Black Coffee.png" },
        { name: "קפה הפוך ", price: "7₪", image: "images/Cafe_Au_Lait.png" },
        { name: "בורקס גבינה ", price: "7₪", image: "images/Cheese_Bourekas.png" },
        { name: "קרוסון שוקולד", price: "10₪", image: "images/Chocolate_Croissant.png" },
        { name: "קוקי פאדג' שוקולד", price: "5₪", image: "images/Chocolate_Fudge_Cookie.png" },
        { name: "מאפה קינמון", price: "7₪", image: "images/Cinnamon_Pastry.png" },
        { name: "קולה", price: "5₪", image: "images/cola.png" },
        { name: " סלט ביצים", price: "10₪", image: "images/Egg_Salad_Sandwich.png" },
        { name: "חטיף אנרגי", price: "5₪", image: "images/Energy_Granola_Bar.png" },
        { name: "אספרסו", price: "8₪", image: "images/Espresso.png" },
        { name: "פנטה", price: "5₪", image: "images/fanta.png" },
        { name: "בקבוק פנטה", price: "5₪", image: "images/fanta2.png" },
        { name: "שוקו", price: "8₪", image: "images/shoko.png" },
        { name: "אמריקאנו קר", price: "10₪", image: "images/Iced_Americano.png" },
        { name: "שוקו קר", price: "10₪", image: "images/Iced_Chocolate.png" },
        { name: "קפה נס", price: "10₪", image: "images/Instant_Coffee.png" },
        { name: "מאקיאטו", price: "12₪", image: "images/Macchiato.png" },
        { name: "סנדוויץ' חביתה", price: "15₪", image: "images/Omelet_Sandwich.png" },
        { name: "בורקס תפוחי אדמה", price: "10₪", image: "images/Potato_Bourekas.png" },
        { name: "רוגלך", price: "10₪", image: "images/Rugelach.png" },
        { name: "שווופס פירות יער", price: "8₪", image: "images/Schweppes_Fruit_Forest.png" },
        { name: "שווופס לימון סודה", price: "8₪", image: "images/Schweppes_Lemon_Soda.png" },
        { name: "שוקו", price: "6₪", image: "images/shoko.png" },
        { name: "ספרייט", price: "8₪", image: "images/sprait.png" },
        { name: "טמבור XL", price: "9₪", image: "images/Tamakor_XL.png" },
        { name: "תה", price: "7₪", image: "images/Tea.png" },
        { name: "רול טונה", price: "20₪", image: "images/Tuna_Roll.png" },
        { name: "סנדוויץ' טונה", price: "18₪", image: "images/Tuna_Sandwich.png" },
        { name: "קולה זירו", price: "8₪", image: "images/zero.png" },
        { name: "זירו בכוס", price: "10₪", image: "images/zeroglass.png" }



    ],
    service_bar: [  
        { name: "קרוסון שקדים", price: "7₪", image: "images/Almond_Croissant.png" },
        { name: "קפה אמריקאנו", price: "7₪", image: "images/americano.png" },
        { name: "אבוקדו", price: "10₪", image: "images/Avocado_Roll.png" },
        { name: "סנדוויץ אבוקדו", price: "10₪", image: "images/Avocado_Sandwich.png" },
        { name: "קפה שחור ", price: "7₪", image: "images/Black Coffee.png" },
        { name: "קפה הפוך ", price: "7₪", image: "images/Cafe_Au_Lait.png" },
        { name: "בורקס גבינה ", price: "7₪", image: "images/Cheese_Bourekas.png" },
        { name: "קרוסון שוקולד", price: "10₪", image: "images/Chocolate_Croissant.png" },
        { name: "קוקי פאדג' שוקולד", price: "5₪", image: "images/Chocolate_Fudge_Cookie.png" },
        { name: "מאפה קינמון", price: "7₪", image: "images/Cinnamon_Pastry.png" },
        { name: "קולה", price: "5₪", image: "images/cola.png" },
        { name: " סלט ביצים", price: "10₪", image: "images/Egg_Salad_Sandwich.png" },
        { name: "חטיף אנרגי", price: "5₪", image: "images/Energy_Granola_Bar.png" },
        { name: "אספרסו", price: "8₪", image: "images/Espresso.png" },
        { name: "פנטה", price: "5₪", image: "images/fanta.png" },
        { name: "בקבוק פנטה", price: "5₪", image: "images/fanta2.png" },
        { name: "שוקו", price: "8₪", image: "images/shoko.png" },
        { name: "אמריקאנו קר", price: "10₪", image: "images/Iced_Americano.png" },
        { name: "שוקו קר", price: "10₪", image: "images/Iced_Chocolate.png" },
        { name: "קפה נס", price: "10₪", image: "images/Instant_Coffee.png" },
        { name: "כדורי קליק", price: "8₪", image: "images/Klik_Balls.png" },
        { name: "עוגיית קליק", price: "8₪", image: "images/Klik_Biscuit.png" },
        { name: "קורנפלקס קליק", price: "9₪", image: "images/Klik_Cereal.png" },
        { name: "עוגייה קליק", price: "8₪", image: "images/Klik_Cookie.png" },
        { name: "קליק קורנפלקס", price: "9₪", image: "images/Klik_Cornflakes.png" },
        { name: "כדורי קליק לבנים", price: "8₪", image: "images/Klik_White_Balls.png" },
        { name: "לואקר קוביות שוקולד", price: "12₪", image: "images/Loacker_Quadratini_chocolate.png" },
        { name: "סנדוויץ' לואקר וניל", price: "10₪", image: "images/Loacker_Sandwich_Vanilla.png" },
        { name: "מאקיאטו", price: "12₪", image: "images/Macchiato.png" },
        { name: "סנדוויץ' חביתה", price: "15₪", image: "images/Omelet_Sandwich.png" },
        { name: "בורקס תפוחי אדמה", price: "10₪", image: "images/Potato_Bourekas.png" },
        { name: "רוגלך", price: "10₪", image: "images/Rugelach.png" },
        { name: "חטיף חלבון עוגיות", price: "12₪", image: "images/Protein_Bar_Cookie.png" },
        { name: "שווופס פירות יער", price: "8₪", image: "images/Schweppes_Fruit_Forest.png" },
        { name: "שווופס לימון סודה", price: "8₪", image: "images/Schweppes_Lemon_Soda.png" },
        { name: "שוקו", price: "6₪", image: "images/shoko.png" },
        { name: "ספרייט", price: "8₪", image: "images/sprait.png" },
        { name: "טמבור XL", price: "9₪", image: "images/Tamakor_XL.png" },
        { name: "תה", price: "7₪", image: "images/Tea.png" },
        { name: "רול טונה", price: "20₪", image: "images/Tuna_Roll.png" },
        { name: "סנדוויץ' טונה", price: "18₪", image: "images/Tuna_Sandwich.png" },
        { name: "קולה זירו", price: "8₪", image: "images/zero.png" },
        { name: "זירו בכוס", price: "10₪", image: "images/zeroglass.png" }
    ],

    cafeteria_meat: [
        { name: "Steak", price: "50₪", image: "images/steak.png" },
        { name: "Burger", price: "30₪", image: "images/burger.png" }
    ]
};

// Redirect to the selected station's menu
function redirectTo(station) {
    window.location.href = `menu.html?station=${station}`;
}

// Function to get station name from URL
function getStationFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("station");
}

// Function to load the menu dynamically
function loadMenu() {
    const station = getStationFromURL();
    console.log("📌 Station from URL:", station); // Debugging: Show station name

    const menuItems = menuData[station];

    if (!menuItems) {
        console.error("⚠ No menu found for:", station);
        document.getElementById("menu-items").innerHTML = "<p>❌ לא נמצא תפריט לתחנה זו</p>";
        return;
    }

    // Populate the menu
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = "";

    menuItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("menu-item");
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.png';">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button class="add-to-cart" onclick="addToCart('${item.name}', '${item.price}', '${item.image}')">🛒 הוסף לעגלה</button>
        `;
        menuContainer.appendChild(itemElement);
    });

    console.log("✅ Menu loaded successfully!");
}

// Cart functionality
let cart = [];
function addToCart(name, price, image) {
    cart.push({ name, price, image });
    alert(`🛍️ ${name} נוסף לעגלה!`);
    console.log("🛒 Cart Items:", cart); // Log to check cart data
}

// Run loadMenu when page loads
window.onload = loadMenu;
