// TOGGLE CLASS ACTIVE
// Toggle Class Active Menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu-bars").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle Class Active Search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle Class Active Shopping Cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-shopping-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// KLIK DILUAR AREA AGAR CLOSE
// Mengilangkan side bar diluar area
const menu = document.querySelector("#menu-bars");
const searchButton = document.querySelector("#search-button");
const cartshoppingButton = document.querySelector("#cart-shopping-button");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (
    !cartshoppingButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const showJudul = document.querySelectorAll(".judul").textContent;
const showDescription = document.querySelector(
  ".description-product"
).textContent;
const showRating = document.querySelector(".store-rating").innerHTML;
const showPrice = document.querySelector(".store-price").textContent;
const showImage = document.querySelector(".foto-product").src;

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";

    document.querySelector(".judul-product").textContent = showJudul;
    document.querySelector(".judul-product").textContent = showJudul;
    document.querySelector(".description-modal").textContent = showDescription;
    document.querySelector(".description-price").textContent = showPrice;
    document.querySelector(".description-rating1").innerHTML = showRating;
    document.querySelector(".product-foto").src = showImage;

    console.log(`Hasil : ${showImage}`);

    e.preventDefault();
  };
});

// Tombol Close Modal Box
document.querySelector(".modal .close-button").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Close Diluar Area
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
