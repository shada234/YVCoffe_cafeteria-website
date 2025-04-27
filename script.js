/*home page- תמונות       */
document.addEventListener("DOMContentLoaded", function () {
    let track = document.querySelector(".carousel-track");
    let indicators = document.querySelectorAll(".indicator");
    let items = document.querySelectorAll(".carousel-item");
    let totalSlides = items.length;
    let index = 0;
    let isTransitioning = false;

    // 🟢 שכפול התמונה הראשונה בסוף הקרוסלה כדי ליצור אפקט רציף
    let firstClone = items[0].cloneNode(true);
    track.appendChild(firstClone);

    function updateIndicators() {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    }

    function moveSlide() {
        if (isTransitioning) return; // למנוע בעיות במעבר מהיר
        isTransitioning = true;

        index++;
        track.style.transform = `translateX(-${index * 100}%)`;
        track.style.transition = "transform 1s ease-in-out";

        if (index === totalSlides) { // **כאשר מגיעים לשכפול**
            setTimeout(() => {
                track.style.transition = "none"; // מבטלים את האנימציה לרגע
                track.style.transform = "translateX(0%)"; // קופצים חזרה להתחלה
                index = 0;
                isTransitioning = false;
            }, 1000); // נותנים לאנימציה להסתיים לפני המעבר
        } else {
            setTimeout(() => {
                isTransitioning = false;
            }, 1000);
        }

        updateIndicators();
    }

    indicators.forEach((indicator, i) => {
        indicator.addEventListener("click", function () {
            index = i;
            track.style.transform = `translateX(-${index * 100}%)`;
            track.style.transition = "transform 1s ease-in-out";
            updateIndicators();
        });
    });

    setInterval(moveSlide, 5000); // מעבר כל 5 שניות
    updateIndicators();
});

/*-----------------------------------------------------------------------------------------------
home page- אודות*/
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".me-accordion-button").forEach(button => {
      button.addEventListener("click", function () {
        const item = this.parentElement;
        const content = item.querySelector(".accordion-content");
        const isActive = item.classList.contains("active");
  
        document.querySelectorAll(".accordion-item").forEach(i => {
          i.classList.remove("active");
          i.querySelector(".accordion-content").style.display = "none";
        });
  
        if (!isActive) {
          item.classList.add("active");
          content.style.display = "block";
        }
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[data-target]").forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetSelector = this.getAttribute("data-target");
        const target = document.querySelector(targetSelector);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  });
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*home page- NAVBAR*/
document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".HomeNavbar"); // מזהה את ה-NAVBAR

    window.addEventListener("scroll", function () {
        if (window.scrollY > navbar.offsetHeight) {
            navbar.classList.add("fixed"); // הוספת מחלקת FIXED כשהמשתמש גולל
        } else {
            navbar.classList.remove("fixed"); // החזרת המצב הרגיל
        }
    });
});


/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*home page- התחברות*/
document.addEventListener("DOMContentLoaded", function () {
    console.log("🔹 script.js נטען!");

    const isLoggedIn = localStorage.getItem("userLoggedIn");
    const username = localStorage.getItem("username");

    const authText = document.getElementById("home-auth-text");
    const dropdownMenu = document.getElementById("home-auth-menu");
    const logoutBtn = document.getElementById("home-logout");
    const authContainer = document.querySelector(".auth-container");

    let hideTimeout;

    console.log("🔹 userLoggedIn:", isLoggedIn);
    console.log("🔹 username:", username);

    if (isLoggedIn === "true" && authText) {
        authText.textContent = username;
        authText.href = "#";

        // הצגת תפריט
        authContainer.addEventListener("mouseenter", () => {
            clearTimeout(hideTimeout);
            dropdownMenu.style.display = "flex";
        });

        authContainer.addEventListener("mouseleave", () => {
            hideTimeout = setTimeout(() => {
                dropdownMenu.style.display = "none";
            }, 400); // מחכה קצת לפני סגירה
        });

        dropdownMenu.addEventListener("mouseenter", () => {
            clearTimeout(hideTimeout);
        });

        dropdownMenu.addEventListener("mouseleave", () => {
            hideTimeout = setTimeout(() => {
                dropdownMenu.style.display = "none";
            }, 400);
        });

        // התנתקות
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("userLoggedIn");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("username");
            location.reload();
        });
    }
});


/*----------------------------------------------------------------------------------------------------------------------------------------------*/
/*home page- חלון עגלה*/
document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function () {
            const parent = this.parentElement;
            parent.classList.toggle("active");

            const content = parent.querySelector(".accordion-content");
            if (parent.classList.contains("active")) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*home page- */
// הצגת חלון הקופץ כשעוברים עם העכבר על הסל
function showCartPopup() {
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = "block";
}

function keepCartPopup() {
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = "block";
}

// הסתרת החלון כאשר העכבר יוצא מהסל
function hideCartPopup() {
    setTimeout(() => {
        const cartPopup = document.getElementById("cart-popup");
        if (!cartPopup.matches(":hover") && !document.querySelector(".cart-container").matches(":hover")) {
            cartPopup.style.display = "none";
        }
    }, 300); // Small delay to allow moving to the popup
}
// ניווט לדף העגלה כאשר לוחצים על הסל
function goToCart() {
    window.location.href = "cart.html"; // מעבר לדף העגלה
}

function updateCartPopup() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("popup-total-price");
    const emptyCartMessage = document.getElementById("empty-cart-message");

    // אם האלמנטים לא קיימים – לצאת מהפונקציה
    if (!cartItemsContainer || !totalPriceElement || !emptyCartMessage) return;

    const cart = getCart();
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        emptyCartMessage.style.display = "block";
        totalPriceElement.style.display = "none";
    } else {
        emptyCartMessage.style.display = "none";
        totalPriceElement.style.display = "block";

        cart.forEach((item) => {
            total += item.price * item.quantity;
            const itemElement = document.createElement("p");
            itemElement.innerHTML = `${item.name} - ${item.quantity}x ${item.price}₪`;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    totalPriceElement.innerText = `סך הכל: ${total.toFixed(2)}₪`;
}

function addToCart(name, price, image, button) {
    let cart = getCart();
    let item = cart.find(item => item.name === name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price: parseFloat(price), image, quantity: 1 });
    }

    saveCart(cart);
    updateCartCount();     
    updateCartPopup();     

    if (button) {
        button.classList.add("added-to-cart");
        button.innerHTML = '<span style="color: black;">✔</span>';
        setTimeout(() => {
            button.classList.remove("added-to-cart");
            button.innerHTML = `<img src="add-to-cart.png" alt="הוסף לעגלה">`;
        }, 1500);
    }
}
function removeFromCartByName(name) {
    let cart = getCart();
    cart = cart.filter(item => item.name !== name);
    saveCart(cart);
    updateCartPage();
    updatePaymentPage();
    updateCartCount();     
    updateCartPopup();     

}
function updateCartSummaryTopBar() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const countElement = document.querySelector(".cart-count");
    const priceElement = document.querySelector(".cart-price");

    if (countElement) countElement.innerText = `(${totalItems})`;
    if (priceElement) priceElement.innerText = `${totalPrice.toFixed(2)}₪`;
}

// 🔹 טעינת הדף - עדכון מספר הפריטים בתצוגה העליונה
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    updateCartPopup();  
    updateCartSummaryTopBar();
  
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
// קבלת אלמנטים מה-HTML
const modalLogin = document.getElementById("modal-login"); // חלון התחברות
const modalRegister = document.getElementById("modal-register"); // נוספה השורה הזו

// בדיקת אם האימייל קיים במערכת
function checkEmail() {
    let email = document.getElementById("email").value.trim();

    if (email === "") {
        alert("אנא הזן כתובת אימייל");
        return;
    }

    let storedUser = localStorage.getItem(email);

    if (storedUser) {
        // האימייל כבר קיים - הצגת חלון הזנת סיסמה
        modalLogin.style.display = "flex";
    } else {
        // אימייל חדש - הצגת חלון הרשמה
        modalRegister.style.display = "flex";
    }
}

// סגירת חלון
function closeModal(modal) {
    document.getElementById(modal).style.display = "none";
}

// שליחת פרטי הרשמה ושמירה ב-localStorage
function submitRegistration() {
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!email || !phone || !firstName || !lastName || !password) {
        alert("יש למלא את כל השדות!");
        return;
    }

    // שמירת המשתמש ב-localStorage
    let userData = {
        phone,
        firstName,
        lastName,
        password
    };

    localStorage.setItem(email, JSON.stringify(userData));

    alert("ההרשמה הושלמה! כעת תוכל להתחבר.");
    closeModal("modal-register"); // סגירת מודאל ההרשמה
}

// בדיקת סיסמה למשתמשים רשומים
function loginUser() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
  
    if (!email || !password) {
      alert("אנא הזן כתובת אימייל וסיסמה.");
      return;
    }
  
    let storedUser = localStorage.getItem(email);
  
    if (storedUser) {
      let userData = JSON.parse(storedUser);
  
      if (userData.password === password) {
        alert("התחברת בהצלחה!");
  
        localStorage.setItem("userLoggedIn", "true");
        localStorage.setItem("userEmail", email);
        localStorage.setItem("username", userData.firstName + " " + userData.lastName);
        localStorage.setItem("userPhone", userData.phone);
  
        // ✅ אם יש כתובת יעד – נשלח לשם
        const redirectUrl = localStorage.getItem("redirectAfterLogin");
        if (redirectUrl) {
          localStorage.removeItem("redirectAfterLogin");
          window.location.href = redirectUrl;
        } else {
          window.location.href = "stations.html"; // או דף אחר שאת רוצה
        }
      } else {
        alert("סיסמה שגויה, נסה שנית.");
      }
    } else {
      alert("המשתמש לא נמצא, יש להירשם תחילה.");
    }
  }
  



/*------------------------------------------------------------------------------------------------------------------------------------*/
/* menuPage */

function redirectTo(station) {
    window.location.href = `menu.html?station=${station}`;
}

// פונקציה להבאת תפריט מהשרת
async function fetchMenuData() {
    try {
        const response = await fetch('http://localhost:3001/api/menu');
        const menuItems = await response.json();
        return menuItems;
    } catch (error) {
        console.error('שגיאה בטעינת התפריט:', error);
        return [];
    }
}



// תוספות לבשרי
const urlParams = new URLSearchParams(window.location.search);
const station = urlParams.get("station");

if (station === "cafeteria_meat") {
    const trayContainer = document.getElementById("tray-top");
    if (trayContainer) {
        trayContainer.innerHTML = `
          <section class="tray-section-inline">
            <h2 class="tray-title">למלא את המגש שלך</h2>
            <img src="מגש ריק.png" alt="מגש ריק" class="empty-tray-inline">
          </section>
        `;
    }

    document.getElementById("addons-bottom").innerHTML = `
      <section class="addons-section">
        <h3>תוספות לבחירה:</h3>
        <div class="addon-category">
          <h4>רטבים ותיבול:</h4>
          <label><input type="checkbox" class="addon-checkbox" data-name="טחינה" data-price="1"> טחינה - 1₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="עמבה" data-price="1.5"> עמבה - 1.5₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="מיו / מיו שום" data-price="1"> מיו / מיו שום - 1₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="קטשופ" data-price="0.5"> קטשופ - 0.5₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="חרדל" data-price="0.5"> חרדל - 0.5₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="סחוג ירוק / אדום" data-price="1"> סחוג ירוק / אדום - 1₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="שום כתוש" data-price="1"> שום כתוש - 1₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="רוטב צ'ילי מתוק" data-price="1"> רוטב צ'ילי מתוק - 1₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="רוטב סויה" data-price="0.5"> רוטב סויה - 0.5₪</label>
        </div>

        <div class="addon-category">
          <h4>תיבול יבש:</h4>
          <label><input type="checkbox" class="addon-checkbox" data-name="מלח ופלפל" data-price="0"> מלח ופלפל</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="זעתר" data-price="0.5"> זעתר - 0.5₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="סומאק" data-price="0.5"> סומאק - 0.5₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="פפריקה" data-price="0.5"> פפריקה - 0.5₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="לימון סחוט / פלחים" data-price="1"> לימון סחוט / פלחים - 1₪</label>
        </div>

        <div class="addon-category">
          <h4>אקסטרה קטנות:</h4>
          <label><input type="checkbox" class="addon-checkbox" data-name="פרוסות לחם / פיתה" data-price="1.5"> פרוסות לחם / פיתה - 1.5₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="ביצים קשות" data-price="2"> ביצים קשות - 2₪</label>
          <label><input type="checkbox" class="addon-checkbox" data-name="זיתים / חמוצים" data-price="1"> זיתים / חמוצים - 1₪</label>
        </div>
      </section>
    `;

    function addAddonToCart(name, price) {
        let cart = getCart();
        let item = cart.find(item => item.name === name);

        if (item) {
            item.quantity++;
        } else {
            cart.push({
                name,
                price: parseFloat(price),
                image: "images/addons.png",
                quantity: 1
            });
        }

        saveCart(cart);
        updateCartCount();
    }

    document.addEventListener("change", function (e) {
        if (e.target.classList.contains("addon-checkbox")) {
            const name = e.target.dataset.name;
            const price = parseFloat(e.target.dataset.price);

            if (e.target.checked) {
                addAddonToCart(name, price);
            } else {
                removeFromCartByName(name);
            }
        }
    });
}

// פונקציה לקריאת התחנה מה-URL
function getStationFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("station");
}

// טעינת התפריט
async function loadMenu() {
    const station = getStationFromURL();
    updateStationTitle(station);

    const menuContainer = document.getElementById("menu-items");
    if (!menuContainer) {
        return;
    }

    const menuItems = await fetchMenuData();

    const filteredItems = menuItems.filter(item => item.station === station);

    if (filteredItems.length === 0) {
        menuContainer.innerHTML = "<p> לא נמצא תפריט לתחנה זו</p>";
        return;
    }

    menuContainer.innerHTML = "";

    const categories = {};

    filteredItems.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push(item);
    });

    for (const categoryName in categories) {
        const categorySection = document.createElement("div");
        categorySection.classList.add("category-section");

        const categoryTitle = document.createElement("h2");
        categoryTitle.classList.add("category-title");
        categoryTitle.textContent = categoryName;
        categorySection.appendChild(categoryTitle);

        const itemsContainer = document.createElement("div");
        itemsContainer.classList.add("category-items");

        categories[categoryName].forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("menu-item");

            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-image" onerror="this.src='images/placeholder.png';">
                <h3>${item.name}</h3>
                <div class="menu-item-bottom">
                    <p class="menu-price">${item.price}₪</p>
                    <button class="add-to-cart" onclick="addToCart('${item.name}', '${item.price}', '${item.image}', this)">
                        <img src="add-to-cart.png" alt="הוסף לעגלה">
                    </button>
                </div>
            `;
            itemsContainer.appendChild(itemElement);
        });

        categorySection.appendChild(itemsContainer);
        menuContainer.appendChild(categorySection);
    }

    // חיפוש מוצר
    document.getElementById('product-search').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const products = document.querySelectorAll('.menu-item');

        products.forEach(product => {
            const text = product.textContent.toLowerCase();
            product.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

// התחלה
document.addEventListener("DOMContentLoaded", () => {
    loadMenu();
});

/*---------------------------------------------------------------------------------------------------------------*/
/*cartPage*/
/*שמירת העגלה ב LOCALSTORAGE*/

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
function findProductByName(productName) {
    const clean = str => str.trim();
    const station = new URLSearchParams(window.location.search).get("station");
  
    if (!menuData[station]) return null;
  
    for (const category in menuData[station]) {
      for (const item of menuData[station][category]) {
        if (clean(item.name) === clean(productName)) {
          return item;
        }
      }
    }
  
    return null;
  }
  

// 🔹 פונקציה להוספת מוצר לעגלה
function addToCart(name, price, image, button) {
    const product = findProductByName(name);
  
    if (product && product.extras) {
      openProductModal(product);
      return;
    }
  
    // ⬇ אם אין תוספות – ממשיכים כרגיל
    let cart = getCart();
    let item = cart.find(item => item.name === name);
  
    if (item) {
      item.quantity++;
    } else {
      cart.push({ name, price: parseFloat(price.replace("₪", "")), image, quantity: 1 });
    }
  
    saveCart(cart);
    updateCartCount();
  
    button.classList.add("added-to-cart");
    button.innerHTML = '<span style="color: black;">✔</span>';
  
    setTimeout(() => {
      button.classList.remove("added-to-cart");
      button.innerHTML = `<img src="add-to-cart.png" alt="הוסף לעגלה">`;
    }, 1500);
  }
  
  

// 🔹 פונקציה לעדכון מספר הפריטים בעגלת הקניות (בכפתור למעלה)
function updateCartCount() {
    const cart = getCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");

    if (cartCountElement) {
        cartCountElement.innerText = " " + cartCount;
    }
}

// 🔹 פונקציה להצגת מוצרים בעגלה (בדף `cart.html`)
function updateCartPage() {
    const cart = getCart();
    const cartItems = document.getElementById("cartPage-items");
    const totalPrice = document.getElementById("total-price");

    if (!cartItems) return; // אם אנחנו לא בעמוד העגלה, לא לעשות כלום

    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p style='text-align:center;'>העגלה ריקה</p>";
        totalPrice.style.display = "none";
    } else {
        totalPrice.style.display = "block";

        cart.forEach((item) => {
            total += item.price * item.quantity;
            const li = document.createElement("li");
            li.classList.add("cart-item");
            li.innerHTML = `
            <div class="cart-item-main">
              <span class="item-name">${item.name}</span>
              <img src="${item.image}" alt="${item.name}" class="cart-item-img" 
                   onerror="this.onerror=null; this.src='add.png';">
            </div>
            <div class="cart-item-bottom">
              <p class="item-price">${item.price}₪</p>
              <div class="cart-item-quantity">
                <button onclick="updateQuantityByName('${item.name}', -1)">-</button>
                <input type="text" value="${item.quantity}" readonly>
                <button onclick="updateQuantityByName('${item.name}', 1)">+</button>
                <button class="remove-item" data-name="${item.name}" title="הסר מהעגלה">
                  <img src="bin.png" alt="הסר" class="bin-icon">
                </button>
              </div>
            </div>
          `;
          
          
          
            cartItems.appendChild(li);
        });
    }

    totalPrice.innerText = `סך הכל: ${total}₪`;
}

// 🔹 פונקציה להצגת עגלת הקניות גם בדף `payment.html`
function updatePaymentPage() {
    const cart = getCart();
    const cartList = document.getElementById("cart-items-list");
    const totalPriceElement = document.getElementById("total-price");

    if (!cartList) return; // אם אנחנו לא בדף התשלום, לא לעשות כלום

    cartList.innerHTML = "";
    let totalPrice = 0;

    if (cart.length === 0) {
        cartList.innerHTML = "<p style='text-align:center;'>העגלה שלך ריקה</p>";
    } else {
        cart.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `x ${item.quantity} <strong>${item.name}</strong> - ${item.price * item.quantity}₪` ;
            cartList.appendChild(li);
            totalPrice += item.price * item.quantity;
        });
    }
    totalPriceElement.textContent = `סך הכל: ${totalPrice}₪`;
}

// 🔹 פונקציה לעדכון כמות מוצר בעגלה
function updateQuantityByName(name, change) {
    let cart = getCart();
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            cart = cart.filter(i => i.name !== name);
        }
        saveCart(cart);
        updateCartPage();
        updatePaymentPage(); // עדכון גם בדף התשלום 
    }
}

// 🔹 פונקציה להסרת מוצר מהעגלה
function removeFromCartByName(name) {
    let cart = getCart();
    cart = cart.filter(item => item.name !== name);
    saveCart(cart);
    updateCartPage();
    updatePaymentPage(); // עדכון גם בדף התשלום
    updateCartCount();
}

// 🔹 טעינת הדף - רישום אירועים
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount(); // עדכון מספר הפריטים בעגלה כאשר הדף נטען

    // אם המשתמש נמצא ב-`cart.html`, נעדכן את העגלה
    if (document.getElementById("cartPage-items")) {
        updateCartPage();

        // אירוע למחיקת מוצר מהעגלה
    }

    // אם המשתמש נמצא ב-`payment.html`, נעדכן את העגלה שם
    if (document.getElementById("cart-items-list")) {
        updatePaymentPage();
    }
});


// 🔹 האזנה למחיקת מוצר דרך כפתור עם data-name

document.addEventListener("click", function (event) {
    const removeBtn = event.target.closest(".remove-item");
    if (removeBtn) {
        const name = removeBtn.getAttribute("data-name");
        if (name) removeFromCartByName(name);
    }
});

function togglePickupTime() {
    const customTimeInput = document.getElementById("custom-pickup-time");
    const selectedOption = document.querySelector('input[name="pickup-time"]:checked').value;

    if (selectedOption === "custom") {
        customTimeInput.disabled = false;
    } else {
        customTimeInput.disabled = true;
        customTimeInput.value = ""; // איפוס השעה אם חזרו ל-5 דקות
    }
}

/*-------------------------------------------------------------------------------------------------------*/
/*payment*/
// 🔹 פונקציה להצגת/הסתרת שדות אשראי בהתאם לבחירת המשתמש
// 🔹 פונקציה להצגת/הסתרת שדות אשראי בהתאם לבחירת המשתמש
function togglePaymentFields() {
    const creditFields = document.getElementById("credit-card-fields");
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    creditFields.style.display = (paymentMethod === "credit") ? "block" : "none";
}

// 🔹 פונקציה לעיצוב מספר כרטיס אשראי (רווחים כל 4 ספרות)
function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, ""); // מסיר תווים שאינם מספרים
    value = value.replace(/(.{4})/g, "$1 ").trim(); // מוסיף רווח כל 4 ספרות
    input.value = value.substring(0, 19); // מגביל ל-19 תווים מקסימום
}

// 🔹 פונקציה לעיצוב תוקף הכרטיס (MM/YY)
function formatExpiryDate(input) {
    let value = input.value.replace(/\D/g, ""); // מסיר תווים לא מספריים
    if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    input.value = value.substring(0, 5);
}

function processPayment() {
    const isLoggedIn = localStorage.getItem("userLoggedIn");
    if (isLoggedIn !== "true") {
      alert("אנא התחבר לפני ביצוע ההזמנה");
      window.location.href = "logIn.html";
      return;
    }
  
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const statusMessage = document.getElementById("payment-status");
  
    if (paymentMethod === "credit") {
      const cardNumber = document.getElementById("card-number").value.trim();
      const expiryDate = document.getElementById("expiry-date").value.trim();
      const cvv = document.getElementById("cvv").value.trim();
  
      if (cardNumber.length < 19) {
        showError("❌ מספר כרטיס האשראי אינו תקין (יש להכניס 16 ספרות)");
        return;
      }
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        showError("❌ תוקף הכרטיס אינו תקין (פורמט MM/YY)");
        return;
      }
      if (cvv.length < 3) {
        showError("❌ מספר CVV חייב להיות 3 ספרות");
        return;
      }
  
      showSuccess("✅ התשלום בוצע בהצלחה");
    } else {
      showSuccess("✅ התשלום יתבצע במזומן בעת האיסוף");
    }
  
    // ✨ שמירת ההזמנה
    const cart = getCart();
    if (cart.length === 0) {
      alert("העגלה ריקה");
      return;
    }
  
    saveOrder(cart);   // ⬅️ קודם שומרים
    clearCart();       // ⬅️ אחר כך מנקים
  
    // ✅ הצגת המודאל אחרי שנייה
    setTimeout(() => {
      document.getElementById("modal-payment").style.display = "flex";
    }, 1000);
  }
  
// 🔹 פונקציה להצגת שגיאה
function showError(message) {
    const statusMessage = document.getElementById("payment-status");
    statusMessage.style.color = "red";
    statusMessage.innerText = message;
}

// 🔹 פונקציה להצגת הצלחה
function showSuccess(message) {
    const statusMessage = document.getElementById("payment-status");
    statusMessage.style.color = "green";
    statusMessage.innerText = message;
}

// 🔹 פונקציה למניעת הכנסת תווים שאינם מספרים
function validateNumbers(input) {
    input.value = input.value.replace(/[^0-9]/g, ''); // מסיר כל תו שאינו מספר
}

// 🔹 פונקציה למניעת הכנסת תווים לא חוקיים בתוקף (רק מספרים ולוכסן /)
function validateExpiryDate(input) {
    input.value = input.value.replace(/[^0-9/]/g, ''); // רק מספרים ולוכסן מותרים
}

// 🔹 פונקציה לסגירת המודאל (חלון קופץ)
function closeModalPayment() {
    document.getElementById("modal-payment").style.display = "none";
    window.location.href = "home.html"; // הפניה חזרה לדף הראשי
}

// 🔹 פונקציה לצפייה בהזמנה לאחר התשלום
function viewOrder() {
    document.getElementById("modal-payment").style.display = "none";
    window.location.href = "order-status.html"; // מעבר לדף סטטוס ההזמנה
}


/*---------------------------------------------------------------------------------------------------*/
/*orderStatus*/
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
            let itemTotalPrice = item.price * item.quantity; // מחיר כולל לכל מוצר
            total += itemTotalPrice; // הוספת המחיר הכולל לסכום הכללי

            const li = document.createElement("li");
            li.innerHTML = `${itemTotalPrice}₪ - ${item.name} x ${item.quantity} `;
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



/*---------------------------------------------------------------------------------------------------*/
/*login התחברות*/
function setupLoginStatus() {
    let isLoggedIn = localStorage.getItem("userLoggedIn");
    let userEmail = localStorage.getItem("userEmail");
    let username = localStorage.getItem("username");

    let usernameText = document.getElementById("username-text");
    let profileHeader = document.getElementById("profile-header");
    let profileUsername = document.getElementById("profile-username");

    if (!usernameText || !profileHeader || !profileUsername) {
        console.warn("אלמנטים של התחברות לא נטענו עדיין");
        return;
    }

    if (isLoggedIn === "true") {
        usernameText.textContent = username;
        profileUsername.textContent = userEmail;
        profileHeader.style.display = "block";

        document.getElementById("login-link").style.display = "none";
        document.getElementById("profile-link").style.display = "block";
        document.getElementById("orders-link").style.display = "block";
        document.getElementById("logout-link").style.display = "block";
    } else {
        usernameText.textContent = "התחברות";
        profileHeader.style.display = "none";
        document.getElementById("login-link").style.display = "block";
        document.getElementById("profile-link").style.display = "none";
        document.getElementById("orders-link").style.display = "none";
        document.getElementById("logout-link").style.display = "none";
    }

    // הפונקציה להתנתקות
    const logoutLink = document.getElementById("logout-link");
    if (logoutLink) {
        logoutLink.addEventListener("click", function () {
            localStorage.removeItem("userLoggedIn");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("username");
            alert("התנתקת בהצלחה!");
            location.reload(); // נטען מחדש את הדף הזה בלבד
        });
    }
}



/*---------------------------------------------------------------------------------------------------*/
/*orders*/
function saveOrder(cart) {
    const orders = JSON.parse(localStorage.getItem("userOrders")) || [];
  
    const newOrder = {
      date: new Date().toLocaleDateString('he-IL'),
      time: new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' }),
      items: cart,
      total: cart.reduce((sum, item) => sum + item.quantity * item.price, 0),
      status: "בהכנה"
    };
  
    orders.push(newOrder);
    localStorage.setItem("userOrders", JSON.stringify(orders));
  }
  
  function clearCart() {
    localStorage.removeItem("shoppingCart");
    updateCartCount(); // אם יש ספירה ליד עגלת קניות
    updateCartPopup(); // אם יש עגלת פופאפ
  }
  

  /*---------------------------------------------------------------------------------------------------*/
