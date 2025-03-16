// ** home.html**

document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();

    // **קרוסלת התמונות בעמוד home.html**
    if (currentPage === "home.html" || currentPage === "") {
        let track = document.querySelector(".carousel-track");
        let indicators = document.querySelectorAll(".indicator");
        let firstClone = track.children[0]?.cloneNode(true);
        if (firstClone) {
            track.appendChild(firstClone);
        }

        let images = document.querySelectorAll(".carousel-track img");
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
                }, 1000);
            } else {
                updateIndicators();
            }
        }

        indicators.forEach(indicator => {
            indicator.addEventListener("click", function () {
                index = parseInt(this.getAttribute("data-index"));
                track.style.transform = `translateX(-${index * 100}vw)`;
                track.style.transition = "transform 1s ease-in-out";
                updateIndicators();
            });
        });

        setInterval(moveSlide, 4000);
        updateIndicators();
    }

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

/*menu*/

function redirectTo(station) {
    window.location.href = `menu.html?station=${station}`;
}


const menuData = {
    cafeteria_dairy: {
        "משקאות קלים": [
            { name: "קולה", price: "5₪", image: "images/cola.png" },
            { name: "פנטה", price: "5₪", image: "images/fanta.png" },
            { name: "בקבוק פנטה", price: "5₪", image: "images/fanta2.png" },
            { name: "ספרייט", price: "8₪", image: "images/sprait.png" },
            { name: "טמבור XL", price: "9₪", image: "images/Tamakor_XL.png" },
            { name: "קולה זירו", price: "8₪", image: "images/zero.png" },
            { name: "זירו בכוס", price: "10₪", image: "images/zeroglass.png" }
        ],
        "משקאות מוגזים": [
            { name: "שווופס פירות יער", price: "8₪", image: "images/Schweppes_Fruit_Forest.png" },
            { name: "שווופס לימון סודה", price: "8₪", image: "images/Schweppes_Lemon_Soda.png" }
        ]
    },


        /*toas + pizza  +salads + basta + noodles + רביולי     */
  
        snack_shop: {
            "משקאות חמים": [
                { name: "קפה אמריקאנו", price: "7₪", image: "images/americano.png" },
                { name: "קפה שחור", price: "7₪", image: "images/Black Coffee.png" },
                { name: "קפה הפוך", price: "7₪", image: "images/Cafe_Au_Lait.png" },
                { name: "אספרסו", price: "8₪", image: "images/Espresso.png" },
                { name: "קפה נס", price: "10₪", image: "images/Instant_Coffee.png" },
                { name: "מאקיאטו", price: "12₪", image: "images/Macchiato.png" },
                { name: "תה", price: "7₪", image: "images/Tea.png" }
            ],
            "משקאות קרים": [
                { name: "שוקו קר", price: "10₪", image: "images/Iced_Chocolate.png" },
                { name: "אמריקאנו קר", price: "10₪", image: "images/Iced_Americano.png" },
                { name: "קפה קר", price: "10₪", image: "images/Iced_Coffee.png" },
                { name: "שוקו", price: "8₪", image: "images/shoko.png" },
                { name: "שווופס פירות יער", price: "8₪", image: "images/Schweppes_Fruit_Forest.png" },
                { name: "שווופס לימון סודה", price: "8₪", image: "images/Schweppes_Lemon_Soda.png" },
                { name: "ספרייט", price: "8₪", image: "images/sprait.png" },
                { name: "טמבור XL", price: "9₪", image: "images/Tamakor_XL.png" },
                { name: "מים עין גדי", price: "6₪", image: "images/Water_Ein_Gedi.png" }
            ],
            "מאפים": [
                { name: "קרוסון שקדים", price: "7₪", image: "images/Almond_Croissant.png" },
                { name: "קרוסון שוקולד", price: "10₪", image: "images/Chocolate_Croissant.png" },
                { name: "מאפה קינמון", price: "7₪", image: "images/Cinnamon_Pastry.png" },
                { name: "רוגלך", price: "10₪", image: "images/Rugelach.png" },
                { name: "בורקס גבינה", price: "7₪", image: "images/Cheese_Bourekas.png" },
                { name: "בורקס תפוחי אדמה", price: "10₪", image: "images/Potato_Bourekas.png" }
            ],
            "כריכים וסלטים": [
                { name: "אבוקדו", price: "10₪", image: "images/Avocado_Roll.png" },
                { name: "סנדוויץ אבוקדו", price: "10₪", image: "images/Avocado_Sandwich.png" },
                { name: "סלט ביצים", price: "10₪", image: "images/Egg_Salad_Sandwich.png" },
                { name: "סנדוויץ' טונה", price: "18₪", image: "images/Tuna_Sandwich.png" },
                { name: "רול טונה", price: "20₪", image: "images/Tuna_Roll.png" },
                { name: "סנדוויץ' חביתה", price: "15₪", image: "images/Omelet_Sandwich.png" }
            ],
            "חטיפים ומתוקים": [
                { name: "חטיף אנרגי", price: "5₪", image: "images/Energy_Granola_Bar.png" },
                { name: "קוקי פאדג' שוקולד", price: "5₪", image: "images/Chocolate_Fudge_Cookie.png" },
                { name: "כדורי קליק", price: "8₪", image: "images/Klik_Balls.png" },
                { name: "עוגיית קליק", price: "8₪", image: "images/Klik_Biscuit.png" },
                { name: "קורנפלקס קליק", price: "9₪", image: "images/Klik_Cereal.png" },
                { name: "כדורי קליק לבנים", price: "8₪", image: "images/Klik_White_Balls.png" },
                { name: "לואקר קוביות שוקולד", price: "12₪", image: "images/Loacker_Quadratini_chocolate.png" },
                { name: "סנדוויץ' לואקר וניל", price: "10₪", image: "images/Loacker_Sandwich_Vanilla.png" },
                { name: "מיני לואקר שוקולד", price: "6₪", image: "images/Mini_Loacker_Chocolate.png" },
                { name: "מיני לואקר אגוזים", price: "6₪", image: "images/Mini_Loacker_Hazelnut.png" },
                { name: "מיני לואקר וניל", price: "6₪", image: "images/Mini_Loacker_Vanilla.png" },
                { name: "מגנום שקדים פרימיום", price: "14₪", image: "images/Premium_Almond_Magnum.png" },
                { name: "חטיף חלבון עוגיות", price: "12₪", image: "images/Protein_Bar_Cookie.png" },
                { name: "עוגיית פאדג' וניל", price: "10₪", image: "images/Vanilla_Fudge_Cookie.png" },
                { name: "וופלים שוקולד", price: "9₪", image: "images/Wafers_Chocolate.png" }
            ]
        },
        
        coffee_bar: {
            "משקאות חמים": [
                { name: "קפה אמריקאנו", price: "7₪", image: "images/americano.png" },
                { name: "קפה שחור", price: "7₪", image: "images/Black Coffee.png" },
                { name: "קפה הפוך", price: "7₪", image: "images/Cafe_Au_Lait.png" },
                { name: "אספרסו", price: "8₪", image: "images/Espresso.png" },
                { name: "קפה נס", price: "10₪", image: "images/Instant_Coffee.png" },
                { name: "מאקיאטו", price: "12₪", image: "images/Macchiato.png" },
                { name: "תה", price: "7₪", image: "images/Tea.png" }
            ],
            "משקאות קרים": [
                { name: "שוקו קר", price: "10₪", image: "images/Iced_Chocolate.png" },
                { name: "אמריקאנו קר", price: "10₪", image: "images/Iced_Americano.png" },
                { name: "קולה", price: "5₪", image: "images/cola.png" },
                { name: "פנטה", price: "5₪", image: "images/fanta.png" },
                { name: "בקבוק פנטה", price: "5₪", image: "images/fanta2.png" },
                { name: "שווופס פירות יער", price: "8₪", image: "images/Schweppes_Fruit_Forest.png" },
                { name: "שווופס לימון סודה", price: "8₪", image: "images/Schweppes_Lemon_Soda.png" },
                { name: "ספרייט", price: "8₪", image: "images/sprait.png" },
                { name: "טמבור XL", price: "9₪", image: "images/Tamakor_XL.png" },
                { name: "קולה זירו", price: "8₪", image: "images/zero.png" },
                { name: "זירו בכוס", price: "10₪", image: "images/zeroglass.png" }
            ],
            "מאפים": [
                { name: "קרוסון שקדים", price: "7₪", image: "images/Almond_Croissant.png" },
                { name: "קרוסון שוקולד", price: "10₪", image: "images/Chocolate_Croissant.png" },
                { name: "מאפה קינמון", price: "7₪", image: "images/Cinnamon_Pastry.png" },
                { name: "רוגלך", price: "10₪", image: "images/Rugelach.png" },
                { name: "בורקס גבינה", price: "7₪", image: "images/Cheese_Bourekas.png" },
                { name: "בורקס תפוחי אדמה", price: "10₪", image: "images/Potato_Bourekas.png" }
            ],
            "כריכים וסלטים": [
                { name: "אבוקדו", price: "10₪", image: "images/Avocado_Roll.png" },
                { name: "סנדוויץ אבוקדו", price: "10₪", image: "images/Avocado_Sandwich.png" },
                { name: "סלט ביצים", price: "10₪", image: "images/Egg_Salad_Sandwich.png" },
                { name: "סנדוויץ' טונה", price: "18₪", image: "images/Tuna_Sandwich.png" },
                { name: "רול טונה", price: "20₪", image: "images/Tuna_Roll.png" },
                { name: "סנדוויץ' חביתה", price: "15₪", image: "images/Omelet_Sandwich.png" }
            ],
            "חטיפים ומתוקים": [
                { name: "חטיף אנרגי", price: "5₪", image: "images/Energy_Granola_Bar.png" },
                { name: "קוקי פאדג' שוקולד", price: "5₪", image: "images/Chocolate_Fudge_Cookie.png" }
            ]
        },
        service_bar: {
            "משקאות חמים": [
                { name: "קפה אמריקאנו", price: "7₪", image: "images/americano.png" },
                { name: "קפה שחור", price: "7₪", image: "images/Black Coffee.png" },
                { name: "קפה הפוך", price: "7₪", image: "images/Cafe_Au_Lait.png" },
                { name: "אספרסו", price: "8₪", image: "images/Espresso.png" },
                { name: "קפה נס", price: "10₪", image: "images/Instant_Coffee.png" },
                { name: "מאקיאטו", price: "12₪", image: "images/Macchiato.png" },
                { name: "תה", price: "7₪", image: "images/Tea.png" }
            ],
            "משקאות קרים": [
                { name: "שוקו קר", price: "10₪", image: "images/Iced_Chocolate.png" },
                { name: "אמריקאנו קר", price: "10₪", image: "images/Iced_Americano.png" },
                { name: "קולה", price: "5₪", image: "images/cola.png" },
                { name: "פנטה", price: "5₪", image: "images/fanta.png" },
                { name: "בקבוק פנטה", price: "5₪", image: "images/fanta2.png" },
                { name: "שווופס פירות יער", price: "8₪", image: "images/Schweppes_Fruit_Forest.png" },
                { name: "שווופס לימון סודה", price: "8₪", image: "images/Schweppes_Lemon_Soda.png" },
                { name: "ספרייט", price: "8₪", image: "images/sprait.png" },
                { name: "טמבור XL", price: "9₪", image: "images/Tamakor_XL.png" },
                { name: "קולה זירו", price: "8₪", image: "images/zero.png" },
                { name: "זירו בכוס", price: "10₪", image: "images/zeroglass.png" }
            ],
            "מאפים": [
                { name: "קרוסון שקדים", price: "7₪", image: "images/Almond_Croissant.png" },
                { name: "קרוסון שוקולד", price: "10₪", image: "images/Chocolate_Croissant.png" },
                { name: "מאפה קינמון", price: "7₪", image: "images/Cinnamon_Pastry.png" },
                { name: "רוגלך", price: "10₪", image: "images/Rugelach.png" },
                { name: "בורקס גבינה", price: "7₪", image: "images/Cheese_Bourekas.png" },
                { name: "בורקס תפוחי אדמה", price: "10₪", image: "images/Potato_Bourekas.png" }
            ],
            "כריכים וסלטים": [
                { name: "אבוקדו", price: "10₪", image: "images/Avocado_Roll.png" },
                { name: "סנדוויץ אבוקדו", price: "10₪", image: "images/Avocado_Sandwich.png" },
                { name: "סלט ביצים", price: "10₪", image: "images/Egg_Salad_Sandwich.png" },
                { name: "סנדוויץ' טונה", price: "18₪", image: "images/Tuna_Sandwich.png" },
                { name: "רול טונה", price: "20₪", image: "images/Tuna_Roll.png" },
                { name: "סנדוויץ' חביתה", price: "15₪", image: "images/Omelet_Sandwich.png" }
            ],
            "חטיפים ומתוקים": [
                { name: "חטיף אנרגי", price: "5₪", image: "images/Energy_Granola_Bar.png" },
                { name: "קוקי פאדג' שוקולד", price: "5₪", image: "images/Chocolate_Fudge_Cookie.png" },
                { name: "כדורי קליק", price: "8₪", image: "images/Klik_Balls.png" },
                { name: "עוגיית קליק", price: "8₪", image: "images/Klik_Biscuit.png" },
                { name: "קורנפלקס קליק", price: "9₪", image: "images/Klik_Cereal.png" },
                { name: "עוגייה קליק", price: "8₪", image: "images/Klik_Cookie.png" },
                { name: "קליק קורנפלקס", price: "9₪", image: "images/Klik_Cornflakes.png" },
                { name: "כדורי קליק לבנים", price: "8₪", image: "images/Klik_White_Balls.png" },
                { name: "לואקר קוביות שוקולד", price: "12₪", image: "images/Loacker_Quadratini_chocolate.png" },
                { name: "סנדוויץ' לואקר וניל", price: "10₪", image: "images/Loacker_Sandwich_Vanilla.png" },
                { name: "חטיף חלבון עוגיות", price: "12₪", image: "images/Protein_Bar_Cookie.png" }
            ]
        },

    cafeteria_meat: [
        { name: "Steak", price: "50₪", image: "images/steak.png" },
        { name: "Burger", price: "30₪", image: "images/burger.png" }
    ]
};

// Function to get the station name from the URL
function getStationFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("station");
}

function loadMenu() {
    console.log("📢 Page fully loaded, running loadMenu()");
    
    // בדיקה שהמשתנה menuData קיים
    if (typeof menuData === "undefined") {
        console.error("❌ Error: menuData is not defined!");
        return;
    }

    const station = getStationFromURL();
    console.log("📌 Station from URL:", station);

    // בדיקת קיום האלמנט menu-items
    const menuContainer = document.getElementById("menu-items");
    console.log("🔍 Checking menu-items:", menuContainer);
    if (!menuContainer) {
        console.error("❌ Error: Element 'menu-items' not found in the DOM!");
        return;
    }

    const menuCategories = menuData[station];
    if (!menuCategories) {
        console.error("⚠ No menu found for:", station);
        menuContainer.innerHTML = "<p>❌ לא נמצא תפריט לתחנה זו</p>";
        return;
    }

    console.log("📋 Categories Loaded:", menuCategories);
    menuContainer.innerHTML = "";

    for (const category in menuCategories) {
        console.log(`📌 Loading category: ${category}`);

        const categorySection = document.createElement("div");
        categorySection.classList.add("category-section");

        const categoryTitle = document.createElement("h2");
        categoryTitle.classList.add("category-title");
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);

        const itemsContainer = document.createElement("div");
        itemsContainer.classList.add("category-items");

        menuCategories[category].forEach(item => {
            console.log(`🛒 Adding item: ${item.name}`);

            const itemElement = document.createElement("div");
            itemElement.classList.add("menu-item");
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.png';">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button class="add-to-cart" onclick="addToCart('${item.name}', '${item.price}', '${item.image}')">🛒 הוסף לעגלה</button>
            `;
            itemsContainer.appendChild(itemElement);
        });

        categorySection.appendChild(itemsContainer);
        menuContainer.appendChild(categorySection);
    }

    console.log("✅ Menu loaded successfully!");
}

// Cart functionality
let cart = [];
function addToCart(name, price, image) {
    cart.push({ name, price, image });
    alert(`🛍️ ${name} נוסף לעגלה!`);
    console.log("🛒 Cart Items:", cart);
}

// Ensure script runs only when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("📢 Document fully loaded, running loadMenu()");
    loadMenu();
});


/*---------------------------------------------------------------------------------------------------------------*/
/*cart*/
// 🔹 מפתח לשמירת העגלה ב-localStorage
const cartKey = "shoppingCart";

// 🔹 פונקציה לקבלת עגלת הקניות מה-localStorage
function getCart() {
    return JSON.parse(localStorage.getItem(cartKey)) || [];
}

// 🔹 פונקציה לשמירת העגלה ב-localStorage
function saveCart(cart) {
    localStorage.setItem(cartKey, JSON.stringify(cart));
}

// 🔹 פונקציה להוספת מוצר לעגלה
function addToCart(name, price, image) {
    let cart = getCart();
    let item = cart.find(item => item.name === name);

    if (item) {
        item.quantity++; // אם המוצר כבר בעגלה, נגדיל את הכמות
    } else {
        cart.push({ name, price: parseFloat(price.replace("₪", "")), image, quantity: 1 });
    }

    saveCart(cart);
    alert(name + " נוסף לעגלה!"); // הודעה למשתמש
    updateCartCount(); // עדכון מספר הפריטים בעגלה
}

// 🔹 פונקציה לעדכון מספר הפריטים בעגלת הקניות (בכפתור למעלה)
function updateCartCount() {
    const cart = getCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");

    if (cartCountElement) {
        cartCountElement.innerText = cartCount;
    }
}

// 🔹 פונקציה להצגת מוצרים בעגלה (בדף `cart.html`)
// פונקציה להצגת מוצרים בעגלה
function updateCartPage() {
    const cart = getCart();
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    if (!cartItems) return; // אם אנחנו לא בעמוד העגלה, לא לעשות כלום

    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p style='text-align:center;'>העגלה ריקה</p>";
        totalPrice.style.display = "none";
    } else {
        totalPrice.style.display = "block";

        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            const li = document.createElement("li");
            li.classList.add("cart-item");

            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <p>${item.name}</p>
                    <p>${item.price}₪</p>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <input type="text" value="${item.quantity}" readonly>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">❌</button>
            `;
            cartItems.appendChild(li);
        });
    }

    totalPrice.innerText = `סך הכל: ${total}₪`;
}

// פונקציה לעדכון כמות מוצר בעגלה
function updateQuantity(index, change) {
    let cart = getCart();
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) {
            cart.splice(index, 1); // אם הכמות 0, להסיר את המוצר
        }
        saveCart(cart);
        updateCartPage();
    }
}



// 🔹 פונקציה להסרת מוצר מהעגלה
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    updateCartPage();
}

// 🔹 טעינת הדף - רישום אירועים
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount(); // עדכון מספר הפריטים בעגלה כאשר הדף נטען

    // אם המשתמש נמצא ב-`cart.html`, נעדכן את העגלה
    if (document.getElementById("cart-items")) {
        updateCartPage();

        // אירוע למחיקת מוצר מהעגלה
        document.getElementById("cart-items").addEventListener("click", function (event) {
            if (event.target.classList.contains("remove-item")) {
                const index = event.target.getAttribute("data-index");
                removeFromCart(index);
            }
        });

    
    }
});
/*-------------------------------------------------------------------------------------------------------*/
/*payment*/
// 🔹 פונקציה להצגת/הסתרת שדות אשראי בהתאם לבחירת המשתמש
function togglePaymentFields() {
    const creditFields = document.getElementById("credit-card-fields");
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    if (paymentMethod === "credit") {
        creditFields.style.display = "block";
    } else {
        creditFields.style.display = "none";
    }
}

// 🔹 פונקציה לעיצוב מספר כרטיס אשראי (מרווחים בין הספרות)
function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, ""); // מסיר תווים לא מספריים
    value = value.replace(/(.{4})/g, "$1 "); // מוסיף רווח כל 4 ספרות
    input.value = value.trim().substring(0, 19); // חותך ל-19 תווים מקסימום
}

// 🔹 פונקציה לעיצוב תוקף הכרטיס (MM/YY)
function formatExpiryDate(input) {
    let value = input.value.replace(/\D/g, ""); // מסיר תווים לא מספריים
    if (value.length >= 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    input.value = value.substring(0, 5);
}

// 🔹 פונקציה לבדיקת תשלום
function processPayment() {
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const statusMessage = document.getElementById("payment-status");

    if (paymentMethod === "credit") {
        const cardNumber = document.getElementById("card-number").value.trim();
        const expiryDate = document.getElementById("expiry-date").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        // בדיקות תקינות בסיסיות
        if (cardNumber.length < 19 || expiryDate.length < 5 || cvv.length < 3) {
            statusMessage.style.color = "red";
            statusMessage.innerText = "❌ יש למלא את כל פרטי הכרטיס כראוי!";
            return;
        }

        // הודעה על הצלחה (סימולציה)
        statusMessage.style.color = "green";
        statusMessage.innerText = "✅ התשלום בוצע בהצלחה!";

    } else {
        // תשלום במזומן
        statusMessage.style.color = "green";
        statusMessage.innerText = "✅ התשלום יתבצע במזומן בעת האיסוף!";
    }

    // לאחר שנייה, ניתן להפנות לדף אישור הזמנה (כמו `thank-you.html`)
    setTimeout(() => {
        window.location.href = "thank-you.html";
    }, 2000);
}
/*---------------------------------------------------------------------------------------------------*/
/*order status*/
// 🔹 פונקציה לקבלת עגלת הקניות מה-localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("shoppingCart")) || [];
}

// 🔹 פונקציה להצגת פרטי ההזמנה
function displayOrderDetails() {
    const cart = getCart();
    const orderItems = document.getElementById("order-items");
    const totalPriceElement = document.getElementById("total-price");

    if (!orderItems) return; // אם לא בדף סטטוס ההזמנה - לצאת

    orderItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        orderItems.innerHTML = "<p>❌ לא נמצאו פריטים בהזמנה</p>";
        totalPriceElement.style.display = "none";
    } else {
        totalPriceElement.style.display = "block";

        cart.forEach((item) => {
            total += item.price * item.quantity;
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - ${item.price}₪ x ${item.quantity}`;
            orderItems.appendChild(li);
        });
    }

    totalPriceElement.innerText = `סך הכל: ${total}₪`;

    // ✅ יצירת מספר הזמנה רנדומלי (לסימולציה)
    document.getElementById("order-id").innerText = Math.floor(100000 + Math.random() * 900000);
}

// 🔹 טעינת פרטי ההזמנה
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("order-items")) {
        displayOrderDetails();
    }
});


