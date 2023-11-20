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
const produkData = [
  {
    id: "store-card1",
    hotOffer: 1,
    nama: "> Regular Beans <",
    deskripsi:
      "Biji kopi regular kami adalah pencapaian sempurna dari klasik yang tak ternilai. Dipilih dari sumber-sumber terbaik di berbagai wilayah penghasil kopi, biji kopi ini mewakili dedikasi kami untuk memberikan pengalaman kopi yang istimewa dan autentik.",
    harga: 44000,
    hargaAsli: 75000,
    rating: 5,
    gambarSrc: "assets/img/regular/regular-beans.jpeg",
  },
  {
    id: "store-card2",
    hotOffer: 1,
    nama: "> Espresso Beans <",
    deskripsi:
      "Biji espresso kami dihasilkan dari biji kopi berkualitas tinggi yang dipetik secara teliti dari kebun kopi terbaik. Diproses dengan cermat, biji espresso kami menawarkan pengalaman kopi yang unik dan memuaskan bagi para penikmat kopi sejati.",
    harga: 55000,
    hargaAsli: 89000,
    rating: 5,
    gambarSrc: "assets/img/espresso/espresso-beans.jpeg",
  },
  {
    id: "store-card3",
    hotOffer: 1,
    nama: "> Luwak Beans <",
    deskripsi:
      "Biji kopi Luwak kami adalah kopi mewah yang dihasilkan melalui proses unik yang melibatkan musang atau luwak. Biji kopi ini menjadi istimewa karena melalui proses fermentasi alami dalam pencernaan musang, memberikan profil rasa yang sangat istimewa dan kompleks.",
    harga: 69000,
    hargaAsli: 99000,
    rating: 5,
    gambarSrc: "assets/img/luwak/luwak-beans.jpeg",
  },
  {
    id: "store-card4",
    nama: "> Arabica Beans <",
    deskripsi:
      "Biji kopi Arabica kami adalah pilihan kopi yang elegan dan sangat dihargai di seluruh dunia. Dikenal dengan kelembutan rasa dan aroma yang kompleks, kopi Arabica membawa pengalaman kopi yang lembut dan memuaskan bagi para penikmat kopi.",
    rating: 4,
    harga: 51000,
    hargaAsli: 83000,
    gambarSrc: "assets/img/arabika/arabika-beans.jpeg",
  },
  {
    id: "store-card5",
    nama: "> Excelsa Beans <",
    deskripsi:
      "Biji kopi Excelsa kami adalah varietas kopi yang menarik dan unik, dikenal dengan karakteristik rasa yang berbeda dan kompleks. Dipetik dari pohon kopi Excelsa yang tumbuh di ketinggian tertentu, biji kopi ini menawarkan pengalaman kopi yang penuh petualangan.",
    harga: 55000,
    hargaAsli: 89000,
    rating: 3,
    gambarSrc: "assets/img/exelsa/excelsa-beans.jpeg",
  },
  {
    id: "store-card6",
    nama: "> Latte Beans <",
    deskripsi:
      "Biji kopi Latte kami dirancang khusus untuk menciptakan pengalaman kopi latte yang luar biasa. Dipilih dari biji berkualitas tinggi, kopi ini memadukan kehalusan dan kompleksitas yang ideal untuk perpaduan espresso dan susu.",
    rating: 4,
    harga: 55000,
    hargaAsli: 89000,
    gambarSrc: "assets/img/latte/latte-beans.jpeg",
  },
  {
    id: "store-card7",
    nama: "> Liberica Beans <",
    deskripsi:
      "Biji kopi Liberica kami adalah varietas kopi yang unik dan menghadirkan pengalaman kopi yang berbeda. Dikenal dengan daunnya yang besar dan berbentuk inovatif, kopi Liberica menyuguhkan keberanian rasa yang berbeda dari varietas kopi lainnya, menawarkan petualangan baru bagi para penikmat kopi.",
    rating: 4,
    harga: 59000,
    hargaAsli: 89000,
    gambarSrc: "assets/img/liberica/liberica-beans.jpg",
  },
  {
    id: "store-card8",
    nama: "> Robusta Beans <",
    deskripsi:
      "Biji kopi Robusta kami menampilkan karakter yang kuat dan penuh tubuh, menciptakan pengalaman kopi yang intens dan berani. Dikenal dengan keasamannya yang rendah dan kandungan kafein yang tinggi, kopi Robusta memberikan kebangkitan energi yang tahan lama bagi para pencinta kopi yang mencari pengalaman yang tegas.",
    rating: 2,
    harga: 49000,
    hargaAsli: 79000,
    gambarSrc: "assets/img/robusta/robusta-beans.jpeg",
  },
];

function buatKartuProduk(produk) {
  const kartuProduk = document.createElement("div");
  kartuProduk.classList.add("store-card");
  kartuProduk.setAttribute("data-product-id", produk.id);

  kartuProduk.innerHTML = `
      <div class="store-icons">
        <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
        <div class="hot-offer">${Array.from(
          { length: produk.hotOffer },
          () => '<i class="fa-solid fa-fire-flame-curved"></i>'
        ).join("")}</div>
        <a href="#" onclick="tampilkanModal(event, '${
          produk.id
        }')" class="item-detail-button">
          <i class="fa-solid fa-eye"></i>
        </a>
      </div>
      <div class="store-img">
        <img class="foto-product" src="${produk.gambarSrc}" alt="${
    produk.nama
  }" />
      </div>
      <div class="store-description">
        <h4 class="judul">${produk.nama}</h4>
        <p class="description-product" style="display: none">${
          produk.deskripsi
        }</p>
        <div class="store-rating">
          ${Array.from(
            { length: produk.rating },
            () => '<i class="fa-solid fa-star"></i>'
          ).join("")}   
        </div>
        <div class="store-price">
          Rp ${produk.harga.toLocaleString('id-ID')} <span class="store-price-asli">Rp ${
    produk.hargaAsli.toLocaleString('id-ID')
  }</span>
        </div>
      </div>
    `;

  return kartuProduk;
}

function tampilkanModal(event, id) {
    event.preventDefault();

  const produk = produkData.find((item) => item.id === id);
  const modal = document.getElementById("item-detail-modal");

  modal.querySelector(".product-foto").src = produk.gambarSrc;
  modal.querySelector(".judul-product").textContent = produk.nama;
  modal.querySelector(".description-modal").textContent = produk.deskripsi;
  modal.querySelector( ".description-price-promo").textContent = `Rp ${produk.harga.toLocaleString('id-ID')}`;
  modal.querySelector( ".description-price-asli").textContent = `Rp ${produk.hargaAsli.toLocaleString('id-ID')}`;

  // Set rating modal
  const stars = modal.querySelectorAll(".description-rating1 i");
  for (let i = 0; i < produk.rating; i++) {
    stars[i].classList.add("fa-solid", "fa-star");
  }

  // Buka modal
  modal.style.display = "flex";

  // Close di luar area modal dan button close
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
}

// Close Button Modal
function closeModal(event) {
  const modal = document.getElementById("item-detail-modal");
  modal.style.display = "none";

  event.preventDefault();
}

// Tampilkan Container Product
function tampilkanKartuProduk() {
  const container = document.getElementById("produk-container");

  produkData.forEach((produk) => {
    const kartuProduk = buatKartuProduk(produk);
    container.appendChild(kartuProduk);
  });
}

tampilkanKartuProduk();


// const itemDetailModal = document.querySelector("#item-detail-modal");
// const itemDetailButtons = document.querySelectorAll(".item-detail-button");
// const showJudul = document.querySelector(".judul").textContent;
// const showDescription = document.querySelector(".description-product").textContent;
// const showRating = document.querySelector(".store-rating").innerHTML;
// const showPrice = document.querySelector(".store-price").textContent;
// const showImage = document.querySelector(".foto-product").src;

// itemDetailButtons.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal.style.display = "flex";

//     document.querySelector(".judul-product").textContent = showJudul;
//     document.querySelector(".description-modal").textContent = showDescription;
//     document.querySelector(".description-price").textContent = showPrice;
//     document.querySelector(".description-rating1").innerHTML = showRating;
//     document.querySelector(".product-foto").src = showImage;

//     console.log(`Hasil : ${showImage}`);

//     e.preventDefault();
//   };
// });

// // Tombol Close Modal Box
// document.querySelector(".modal .close-button").onclick = (e) => {
//   itemDetailModal.style.display = "none";
//   e.preventDefault();
// };
