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
// Product Menu
const products = [
    {
        nama: 'Classic Regular Coffe',
        imgSrc: 'assets/img/regular/regular.jpg',
        harga: 5000,
        description: 'Classic Regular adalah kopi regular yang memadukan kekuatan kopi dengan kelembutan rasa, menciptakan minuman kopi yang dapat dinikmati setiap hari. Dipanggang dengan cermat dan dipilih dari biji kopi berkualitas, produk ini merangkul esensi kopi dalam setiap tegukan.',
    },
  {
    nama: "Arabica Coffe",
    imgSrc: "assets/img/arabika/arabica.jpeg",
    harga: 8000,
    description:
      "Arabica adalah kopi istimewa yang dirancang untuk memberikan pengalaman kopi yang halus dan berkelas. Menggunakan biji kopi arabica berkualitas tinggi, kopi ini menghadirkan cita rasa yang lembut dengan sentuhan kompleksitas yang memanjakan lidah.",
  },
  {
    nama: "Espresso Coffe",
    imgSrc: "assets/img/espresso/espresso.jpeg",
    harga: 10000,
    description:
      "Espresso adalah metode ekstraksi kopi yang menghasilkan minuman kopi kental dengan rasa pekat. Produk kopi espresso biasanya menggunakan biji kopi yang dipanggang lebih gelap dan digiling sangat halus.",
  },
  {
    nama: "Excelsa Coffe",
    imgSrc: "assets/img/exelsa/excelsa.jpeg",
    harga: 10000,
    description:
      "Excelsa adalah kopi istimewa yang menawarkan pengalaman unik bagi pecinta kopi yang mencari keberagaman rasa. Dikenal dengan karakteristiknya yang unik, digunakan untuk menciptakan campuran yang menggoda selera dan menghadirkan kelezatan yang tak tertandingi.",
  },
  {
    nama: "Latte Coffe",
    imgSrc: "assets/img/latte/latte.jpeg",
    harga: 10000,
    description:
      "Latte adalah produk kopi latte yang dirancang khusus untuk memberikan pengalaman minuman kopi yang lembut dan memanjakan lidah. Menggabungkan kopi berkualitas tinggi dengan susu yang lembut, produk ini menciptakan harmoni cita rasa yang sempurna.",
  },
  {
    nama: "Liberica Coffe",
    imgSrc: "assets/img/liberica/liberica.jpeg",
    harga: 10000,
    description:
      "Liberica adalah kopi langka yang mengekspresikan keunikan varietas Liberica, menghadirkan pengalaman kopi yang eksotis dan berbeda. Dipanen dengan hati-hati dari perkebunan pilihan, biji kopi ini menciptakan minuman kopi yang menggoda dan memikat dengan karakteristik khasnya.",
  },
  {
    nama: "Robusta Coffe",
    imgSrc: "assets/img/robusta/robusta.jpeg",
    harga: 7000,
    description:
      "Robusta adalah kopi yang dibuat khusus untuk pecinta kopi yang menghargai kekuatan dan karakter yang tegas. Kopi ini menghadirkan kekentalan yang kuat dan cita rasa yang berani, membuatnya menjadi pilihan ideal bagi kalian yang mencari pengalaman kopi yang mendalam.",
  },
  {
    nama: "Luwak Coffe",
    imgSrc: "assets/img/luwak/luwak.jpeg",
    harga: 20000,
    description:
      "Kopi Luwak, atau dikenal juga sebagai kopi musang, adalah kopi yang dihasilkan oleh musang melalui fermentasi alami dalam pencernaan mereka. Proses unik ini memberikan rasa kopi yang istimewa dan kompleks.",
  },
  {
    nama: 'Machiato Coffe',
    imgSrc: 'assets/img/machiato/machiato.jpeg',
    harga: 12000,
    description: 'Macchiato adalah produk kopi macchiato yang merayakan harmoni antara kekuatan kopi dan kelembutan susu. Dengan cermat diciptakan untuk memberikan pengalaman minuman kopi yang seimbang, menghadirkan cita rasa yang kuat namun tetap mempertahankan sentuhan kelembutan yang memikat.',
  },
  {
    nama: 'Cold Brew',
    imgSrc: 'assets/img/coldbrew/cold-brew.jpeg',
    harga: 20000,
    description: 'Cold Brew adalah produk kopi khusus yang mengekspresikan kelezatan dan keaslian kopi yang diseduh secara dingin. Diproses dengan hati-hati untuk menghasilkan minuman kopi yang menyegarkan dan memuaskan, Arctic Chill memberikan pengalaman Cold Brew yang luar biasa.',
  }
];

function createProductElement(product) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const flipCardInner = document.createElement("div");
  flipCardInner.classList.add("flip-card-inner");

  const flipCardFront = document.createElement("div");
  flipCardFront.classList.add("flip-card-front");

  const img = document.createElement("img");
  img.classList.add("product-img");
  img.src = product.imgSrc;
  img.alt = product.nama;

  const title = document.createElement("h3");
  title.classList.add("title");
  title.textContent = `${product.nama}`;

  const harga = document.createElement("h6");
  harga.classList.add("harga");
  harga.textContent = `Rp ${product.harga.toLocaleString("id-ID")}`;

  flipCardFront.appendChild(img);
  flipCardFront.appendChild(title);
  flipCardFront.appendChild(harga);

  const flipCardBack = document.createElement("div");
  flipCardBack.classList.add("flip-card-back");

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = product.description;

  const buyButton = document.createElement("button");
  buyButton.innerHTML = '<a href="#">Buy</a>';

  flipCardBack.appendChild(description);
  flipCardBack.appendChild(buyButton);

  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);

  flipCard.appendChild(flipCardInner);

  return flipCard;
}

function renderProducts() {
  const flipContainer = document.getElementById("flip-container");

  products.forEach((product) => {
    const productElement = createProductElement(product);
    flipContainer.appendChild(productElement);
  });
}

renderProducts();

// Store Card & Modal Box
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
          Rp ${produk.harga.toLocaleString(
            "id-ID"
          )} <span class="store-price-asli">Rp ${produk.hargaAsli.toLocaleString(
    "id-ID"
  )}</span>
        </div>
      </div>
    `;

  return kartuProduk;
}

//Modal Box
function tampilkanModal(event, id) {
  event.preventDefault();

  const produk = produkData.find((item) => item.id === id);
  const modal = document.getElementById("item-detail-modal");

  modal.querySelector(".product-foto").src = produk.gambarSrc;
  modal.querySelector(".judul-product").textContent = produk.nama;
  modal.querySelector(".description-modal").textContent = produk.deskripsi;
  modal.querySelector(
    ".description-price-promo"
  ).textContent = `Rp ${produk.harga.toLocaleString("id-ID")}`;
  modal.querySelector(
    ".description-price-asli"
  ).textContent = `Rp ${produk.hargaAsli.toLocaleString("id-ID")}`;

  // Set rating modal
  const stars = modal.querySelectorAll(".description-rating1 i");
  for (let i = 0; i < produk.rating; i++) {
    stars[i].classList.add("fa-solid", "fa-star");
  }

  // Buka modal
  modal.style.display = "flex";

  // Close di luar area modal dan button close
  window.onclick = (event) => {
    if (event.target === modal) {
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
