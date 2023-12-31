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
  // Product1
  {
    id: 1,
    nama: "Classic Regular Coffe",
    gambarSrc: "assets/img/regular/regular.jpg",
    harga: 5000,
    deskripsi:
      "Classic Regular adalah kopi regular yang memadukan kekuatan kopi dengan kelembutan rasa, menciptakan minuman kopi yang dapat dinikmati setiap hari. Dipanggang dengan cermat dan dipilih dari biji kopi berkualitas, produk ini merangkul esensi kopi dalam setiap tegukan.",
  },
  // Product2
  {
    id: 2,
    nama: "Arabica Coffe",
    gambarSrc: "assets/img/arabika/arabica.jpeg",
    harga: 8000,
    deskripsi:
      "Arabica adalah kopi istimewa yang dirancang untuk memberikan pengalaman kopi yang halus dan berkelas. Menggunakan biji kopi arabica berkualitas tinggi, kopi ini menghadirkan cita rasa yang lembut dengan sentuhan kompleksitas yang memanjakan lidah.",
  },
  //   Product3
  {
    id: 3,
    nama: "Espresso Coffe",
    gambarSrc: "assets/img/espresso/espresso.jpeg",
    harga: 10000,
    deskripsi:
      "Espresso adalah metode ekstraksi kopi yang menghasilkan minuman kopi kental dengan rasa pekat. Produk kopi espresso biasanya menggunakan biji kopi yang dipanggang lebih gelap dan digiling sangat halus.",
  },
  //   Product4
  {
    id: 4,
    nama: "Excelsa Coffe",
    gambarSrc: "assets/img/exelsa/excelsa.jpeg",
    harga: 10000,
    deskripsi:
      "Excelsa adalah kopi istimewa yang menawarkan pengalaman unik bagi pecinta kopi yang mencari keberagaman rasa. Dikenal dengan karakteristiknya yang unik, digunakan untuk menciptakan campuran yang menggoda selera dan menghadirkan kelezatan yang tak tertandingi.",
  },
  //   Product5
  {
    id: 5,
    nama: "Latte Coffe",
    gambarSrc: "assets/img/latte/latte.jpeg",
    harga: 10000,
    deskripsi:
      "Latte adalah produk kopi latte yang dirancang khusus untuk memberikan pengalaman minuman kopi yang lembut dan memanjakan lidah. Menggabungkan kopi berkualitas tinggi dengan susu yang lembut, produk ini menciptakan harmoni cita rasa yang sempurna.",
  },
  //   Product6
  {
    id: 6,
    nama: "Liberica Coffe",
    gambarSrc: "assets/img/liberica/liberica.jpeg",
    harga: 10000,
    deskripsi:
      "Liberica adalah kopi langka yang mengekspresikan keunikan varietas Liberica, menghadirkan pengalaman kopi yang eksotis dan berbeda. Dipanen dengan hati-hati dari perkebunan pilihan, biji kopi ini menciptakan minuman kopi yang menggoda dan memikat dengan karakteristik khasnya.",
  },
  //   Product7
  {
    id: 7,
    nama: "Robusta Coffe",
    gambarSrc: "assets/img/robusta/robusta.jpeg",
    harga: 7000,
    deskripsi:
      "Robusta adalah kopi yang dibuat khusus untuk pecinta kopi yang menghargai kekuatan dan karakter yang tegas. Kopi ini menghadirkan kekentalan yang kuat dan cita rasa yang berani, membuatnya menjadi pilihan ideal bagi kalian yang mencari pengalaman kopi yang mendalam.",
  },
  //   Product8
  {
    id: 8,
    nama: "Luwak Coffe",
    gambarSrc: "assets/img/luwak/luwak.jpeg",
    harga: 20000,
    deskripsi:
      "Kopi Luwak, atau dikenal juga sebagai kopi musang, adalah kopi yang dihasilkan oleh musang melalui fermentasi alami dalam pencernaan mereka. Proses unik ini memberikan rasa kopi yang istimewa dan kompleks.",
  },
  //   Product9
  {
    id: 9,
    nama: "Machiato Coffe",
    gambarSrc: "assets/img/machiato/machiato.jpeg",
    harga: 12000,
    deskripsi:
      "Macchiato adalah produk kopi macchiato yang merayakan harmoni antara kekuatan kopi dan kelembutan susu. Dengan cermat diciptakan untuk memberikan pengalaman minuman kopi yang seimbang, menghadirkan cita rasa yang kuat namun tetap mempertahankan sentuhan kelembutan yang memikat.",
  },
  //   Product10
  {
    id: 10,
    nama: "Cold Brew",
    gambarSrc: "assets/img/coldbrew/cold-brew.jpeg",
    harga: 20000,
    deskripsi:
      "Cold Brew adalah produk kopi khusus yang mengekspresikan kelezatan dan keaslian kopi yang diseduh secara dingin. Diproses dengan hati-hati untuk menghasilkan minuman kopi yang menyegarkan dan memuaskan, Arctic Chill memberikan pengalaman Cold Brew yang luar biasa.",
  },
];

// Format Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
//

const cartItems = [];

// Fungsi untuk menambahkan produk ke dalam keranjang
function addToCart(product) {
  // Temukan apakah produk sudah ada di dalam keranjang
  const existingItem = cartItems.find((item) => item.id === product.id);

  // Jika produk sudah ada, tingkatkan jumlahnya
  if (existingItem) {
    existingItem.quantity++;
  } else {
    // Jika produk belum ada, tambahkan ke dalam keranjang
    cartItems.push({
      id: product.id,
      nama: product.nama,
      harga: product.harga,
      quantity: 1,
    });
  }

  // Panggil fungsi untuk memperbarui tampilan keranjang
  updateCartTotal();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCartTotal() {
  setTimeout(() => {
    saveCartToLocalStorage();
  }, 100);
}

// Fungsi untuk menyimpan keranjang ke dalam localStorage
function saveCartToLocalStorage() {
  // Implementasi logika penyimpanan ke localStorage
  // ...
}

//
function createProductElement(product) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const flipCardInner = document.createElement("div");
  flipCardInner.classList.add("flip-card-inner");

  const flipCardFront = document.createElement("div");
  flipCardFront.classList.add("flip-card-front");

  const img = document.createElement("img");
  img.classList.add("product-img");
  img.src = product.gambarSrc; // Ganti imgSrc menjadi gambarSrc
  img.alt = product.nama;

  const title = document.createElement("h3");
  title.classList.add("title");
  title.textContent = `${product.nama}`;

  const harga = document.createElement("h6");
  harga.classList.add("harga");
  harga.textContent = `${rupiah(product.harga)}`;

  flipCardFront.appendChild(img);
  flipCardFront.appendChild(title);
  flipCardFront.appendChild(harga);

  const flipCardBack = document.createElement("div");
  flipCardBack.classList.add("flip-card-back");

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = product.deskripsi;

  const fyi = document.createElement("h5");
  fyi.classList.add("fyi");
  fyi.textContent = "Menu Ini Hanya Bisa Di Beli Di Offline Store!";

  flipCardBack.appendChild(description);
  flipCardBack.appendChild(fyi);

  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);

  flipCard.appendChild(flipCardInner);

  return flipCard;
}

function rendersProducts() {
  const flipContainer = document.getElementById("flip-container");

  products.forEach((product) => {
    const productElement = createProductElement(product);
    flipContainer.appendChild(productElement);
  });
}

rendersProducts();

// Store Card & Modal Box
const produkData = [
  // Store-Card1
  {
    id: "Produk-1",
    hotOffer: 1,
    nama: "Regular Beans",
    deskripsi:
      "Biji kopi regular kami adalah pencapaian sempurna dari klasik yang tak ternilai. Dipilih dari sumber-sumber terbaik di berbagai wilayah penghasil kopi, biji kopi ini mewakili dedikasi kami untuk memberikan pengalaman kopi yang istimewa dan autentik.",
    harga: 44000,
    hargaAsli: 75000,
    rating: 5,
    gambarSrc: "assets/img/regular/regular-beans.jpeg",
  },
  // Store-Card2
  {
    id: "Produk-2",
    hotOffer: 1,
    nama: "Espresso Beans",
    deskripsi:
      "Biji espresso kami dihasilkan dari biji kopi berkualitas tinggi yang dipetik secara teliti dari kebun kopi terbaik. Diproses dengan cermat, biji espresso kami menawarkan pengalaman kopi yang unik dan memuaskan bagi para penikmat kopi sejati.",
    harga: 55000,
    hargaAsli: 89000,
    rating: 5,
    gambarSrc: "assets/img/espresso/espresso-beans.jpeg",
  },
  // Store-Card3
  {
    id: "Produk-3",
    hotOffer: 1,
    nama: "Luwak Beans",
    deskripsi:
      "Biji kopi Luwak kami adalah kopi mewah yang dihasilkan melalui proses unik yang melibatkan musang atau luwak. Biji kopi ini menjadi istimewa karena melalui proses fermentasi alami dalam pencernaan musang, memberikan profil rasa yang sangat istimewa dan kompleks.",
    harga: 69000,
    hargaAsli: 99000,
    rating: 5,
    gambarSrc: "assets/img/luwak/luwak-beans.jpeg",
  },
  // Store-Card4
  {
    id: "Produk-4",
    nama: "Arabica Beans",
    deskripsi:
      "Biji kopi Arabica kami adalah pilihan kopi yang elegan dan sangat dihargai di seluruh dunia. Dikenal dengan kelembutan rasa dan aroma yang kompleks, kopi Arabica membawa pengalaman kopi yang lembut dan memuaskan bagi para penikmat kopi.",
    rating: 4,
    harga: 51000,
    hargaAsli: 83000,
    gambarSrc: "assets/img/arabika/arabika-beans.jpeg",
  },
  // Store-Card5
  {
    id: "Produk-5",
    nama: "Excelsa Beans",
    deskripsi:
      "Biji kopi Excelsa kami adalah varietas kopi yang menarik dan unik, dikenal dengan karakteristik rasa yang berbeda dan kompleks. Dipetik dari pohon kopi Excelsa yang tumbuh di ketinggian tertentu, biji kopi ini menawarkan pengalaman kopi yang penuh petualangan.",
    harga: 55000,
    hargaAsli: 89000,
    rating: 3,
    gambarSrc: "assets/img/exelsa/excelsa-beans.jpeg",
  },
  // Store-Card6
  {
    id: "Produk-6",
    nama: "Latte Beans",
    deskripsi:
      "Biji kopi Latte kami dirancang khusus untuk menciptakan pengalaman kopi latte yang luar biasa. Dipilih dari biji berkualitas tinggi, kopi ini memadukan kehalusan dan kompleksitas yang ideal untuk perpaduan espresso dan susu.",
    rating: 4,
    harga: 55000,
    hargaAsli: 89000,
    gambarSrc: "assets/img/latte/latte-beans.jpeg",
  },
  //  Store-Card7
  {
    id: "Produk-7",
    nama: "Liberica Beans",
    deskripsi:
      "Biji kopi Liberica kami adalah varietas kopi yang unik dan menghadirkan pengalaman kopi yang berbeda. Dikenal dengan daunnya yang besar dan berbentuk inovatif, kopi Liberica menyuguhkan keberanian rasa yang berbeda dari varietas kopi lainnya, menawarkan petualangan baru bagi para penikmat kopi.",
    rating: 4,
    harga: 59000,
    hargaAsli: 89000,
    gambarSrc: "assets/img/liberica/liberica-beans.jpg",
  },
  // Store-Card8
  {
    id: "Produk-8",
    nama: "Robusta Beans",
    deskripsi:
      "Biji kopi Robusta kami menampilkan karakter yang kuat dan penuh tubuh, menciptakan pengalaman kopi yang intens dan berani. Dikenal dengan keasamannya yang rendah dan kandungan kafein yang tinggi, kopi Robusta memberikan kebangkitan energi yang tahan lama bagi para pencinta kopi yang mencari pengalaman yang tegas.",
    rating: 2,
    harga: 49000,
    hargaAsli: 79000,
    gambarSrc: "assets/img/robusta/robusta-beans.jpeg",
  },
];
//

function buatKartuProduk(produk) {
  const kartuProduk = document.createElement("div");
  kartuProduk.classList.add("store-card");
  kartuProduk.setAttribute("data-product-id", produk.id);

  kartuProduk.innerHTML = `
        <div class="store-icons">
          <a href="#" onclick="addToCart('${
            produk.id
          }', event)"><i class="fa-solid fa-cart-shopping"></i></a>
          <div class="hot-offer">${Array.from(
            { length: produk.hotOffer },
            () => '<i class="fa-solid fa-fire-flame-curved"></i>'
          ).join("")}</div>
          <a href="" onclick="tampilkanModal(event, '${
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
            ${rupiah(produk.harga)} <span class="store-price-asli">${rupiah(
    produk.hargaAsli
  )}</span>
      `;

  return kartuProduk;
}

//Modal Box
// Fungsi addToCartFromModal ditempatkan di luar fungsi tampilkanModal
function addToCartFromModal(element) {
  console.log("Adding to cart from modal");
  const productId = element.getAttribute("data-product-id");
  addToCart(productId);
  updateCartNotification();
}

function tampilkanModal(event, id) {
  event.preventDefault();

  const produk = produkData.find((item) => item.id === id);
  const modal = document.getElementById("item-detail-modal");

  modal.querySelector(".product-foto").src = produk.gambarSrc;
  modal.querySelector(".judul-product").textContent = produk.nama;
  modal.querySelector(".description-modal").textContent = produk.deskripsi;
  modal.querySelector(".description-price-promo").textContent = rupiah(
    produk.harga
  );
  modal.querySelector(".description-price-asli").textContent = rupiah(
    produk.hargaAsli
  );

  // ID Product Tombol Button Modal
  const addToCartButton = modal.querySelector(".add-to-cart-button");
  addToCartButton.setAttribute("data-product-id", produk.id);

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

// End

// Tampilkan Container Product
function tampilkanKartuProduk() {
  const container = document.getElementById("produk-container");

  produkData.forEach((produk) => {
    const kartuProduk = buatKartuProduk(produk);
    container.appendChild(kartuProduk);
  });
}

const notifyCart = document.getElementById("notify-cart");

// Notifikasi Keranjang
function updateCartNotification() {
  const cartItems = document.querySelectorAll(".cart-item");

  if (notifyCart) {
    notifyCart.textContent = cartItems.length;
  }

  // Atur properti tampilan berdasarkan panjang cartItems
  notifyCart.style.display = cartItems.length > 0 ? "flex" : "none";
}

// Tombol addToCart
function addToCart(productId, event) {
  if (event) {
    event.preventDefault();
  }

  console.log("Tombol diklik!");

  // Temukan produk yang sesuai dengan ID yang diberikan
  const selectedProduct = produkData.find(
    (product) => product.id === productId
  );

  // Panggil fungsi untuk menambahkan item ke keranjang
  tambahkanItemKeKeranjang(selectedProduct);

  // Panggil fungsi untuk memperbarui notifikasi keranjang
  updateCartNotification();
  updateCartTotal();

  // Tentukan apakah keranjang kosong atau tidak
  const cartContainer = document.getElementById("cart-container");
  const informationElement = cartContainer.querySelector(".information");
  const bottomInfoElement = cartContainer.querySelector(".bottom-info");

  if (informationElement && bottomInfoElement) {
    const cartItems = cartContainer.getElementsByClassName("cart-item");

    if (cartItems.length === 0) {
      // Jika keranjang kosong, tampilkan elemen kosong dan sembunyikan bottomInfo
      informationElement.style.display = "flex";
      bottomInfoElement.style.display = "none";
    } else {
      // Jika ada barang di keranjang, sembunyikan elemen kosong dan tampilkan bottomInfo
      informationElement.style.display = "none";
      bottomInfoElement.style.display = "flex";
    }
  }
  // Tambahkan teks notifikasi ke dalam elemen notifyCart
  notifyCart.textContent = "";
}

function tambahkanItemKeKeranjang(selectedProduct, event) {
  // Mengambil elemen keranjang
  const cartContainer = document.getElementById("cart-container");

  // Mencari item yang sudah ada dalam keranjang berdasarkan ID produk
  const existingCartItem = cartContainer.querySelector(
    `.cart-item[data-product-id="${selectedProduct.id}"]`
  );

  // Mendeklarasikan informationElement di luar blok if
  let informationElement = cartContainer.querySelector(".information");

  // Logika untuk menangani item yang sudah ada dalam keranjang
  if (existingCartItem) {
    const totalItemElement = existingCartItem.querySelector(".total-item");
    let totalItem = parseInt(totalItemElement.textContent);
    totalItem += 1;
    totalItemElement.textContent = totalItem;

    const totalHargaElement = existingCartItem.querySelector(".total-harga");
    let hargaPerItem = parseInt(existingCartItem.getAttribute("data-harga"));
    let totalHarga = hargaPerItem * totalItem;
    totalHargaElement.textContent = rupiah(totalHarga);
  } else {
    // Logika untuk menangani item yang belum ada dalam keranjang
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.setAttribute("data-product-id", selectedProduct.id);
    cartItem.setAttribute("data-harga", selectedProduct.harga);

    cartItem.innerHTML = `
        <img src="${selectedProduct.gambarSrc}" alt="${selectedProduct.nama}" />
        <div class="item-detail">
          <div class="nama-dan-harga">
            <h6 class="nama-products">${selectedProduct.nama}</h6>
            <span class="item-price">${rupiah(selectedProduct.harga)}</span>
          </div>
          <div class="item-lainlain">
            <button class="remove" onclick="removeFromCart('${
              selectedProduct.id
            }', event)">
                <i class="fa-solid fa-minus"></i>
            </button>
            <span class="total-item">1</span>
            <button class="add" onclick="addToCart('${
              selectedProduct.id
            }', event)">
                <i class="fa-solid fa-plus"></i>
            </button>
            <i class="fa-solid fa-equals"></i>
            <span class="total-harga">${rupiah(selectedProduct.harga)}</span>
            <i class="fa-solid fa-trash" onclick="deleteItem('${
              selectedProduct.id
            }')"></i>
            </div>
            </div>
    `;
    cartContainer.appendChild(cartItem);

    informationElement.textContent = "\u2015 Happy Shopping \u2015";
    cartContainer.querySelector(".bottom-info").style.display = "flex";
  }
}

function removeFromCart(productId) {
  const cartItem = document.querySelector(
    `.cart-item[data-product-id="${productId}"]`
  );
  if (cartItem) {
    const totalItemElement = cartItem.querySelector(".total-item");
    let totalItem = parseInt(totalItemElement.textContent);

    if (totalItem > 1) {
      totalItem -= 1;
      totalItemElement.textContent = totalItem;

      // Perbarui total harga untuk produk yang sudah ada di keranjang
      const totalHargaElement = cartItem.querySelector(".total-harga");
      let hargaPerItem = parseInt(
        cartItem.querySelector(".item-price").textContent.replace(/[^0-9]/g, "")
      );
      let totalHarga = hargaPerItem * totalItem;
      totalHargaElement.textContent = rupiah(totalHarga);
    } else {
      cartItem.remove();
    }

    updateCartNotification();
    updateCartTotal();
  }
}

function deleteItem(productId) {
  const cartItem = document.querySelector(
    `.cart-item[data-product-id="${productId}"]`
  );
  if (cartItem) {
    cartItem.remove();
    updateCartNotification();
    updateCartTotal();
  }
}

function updateCartTotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  let totalHarga = 0;
  let totalItem = 0;
  let produkTypeTotal = {};

  cartItems.forEach((item) => {
    const hargaPerItem = parseInt(item.getAttribute("data-harga"));
    const jumlahItem = parseInt(item.querySelector(".total-item").textContent);
    const totalHargaItem = hargaPerItem * jumlahItem;

    totalHarga += totalHargaItem;
    totalItem += jumlahItem;

    const productId = item.getAttribute("data-product-id");
    if (!(productId in produkTypeTotal)) {
      produkTypeTotal[productId] = 0;
    }
    produkTypeTotal[productId] += totalHargaItem;
  });

  let totalSemuaHarga = 0;

  for (const key in produkTypeTotal) {
    totalSemuaHarga += produkTypeTotal[key];
  }

  const totalSemuaHargaElement = document.getElementById("total-semua-harga");
  if (totalSemuaHargaElement) {
    totalSemuaHargaElement.textContent = rupiah(totalSemuaHarga);
  }

  const totalHargaElement = document.getElementById("total-harga");
  totalHargaElement.textContent = rupiah(totalHarga);

  const totalItemElement = document.getElementById("total-item");
  totalItemElement.textContent = totalItem;

  // Log untuk debugging
  console.log("produkTypeTotal:", produkTypeTotal);
  console.log("Total Semua Harga:", totalSemuaHarga);
}

function saveCartToLocalStorage() {
  const cartItems = document.querySelectorAll(".cart-item");
  const cartData = [];

  cartItems.forEach((item) => {
    const productId = item.getAttribute("data-product-id");
    const quantity = parseInt(item.querySelector(".total-item").textContent);

    cartData.push({ productId, quantity });
  });

  localStorage.setItem("cart", JSON.stringify(cartData));
}

function loadCartFromLocalStorage() {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  cartData.forEach((item) => {
    const product = produkData.find((p) => p.id === item.productId);
    if (product) {
      for (let i = 0; i < item.quantity; i++) {
        addToCart(product.id);
      }
    }
  });
  updateCartNotification();
}

// Funtion Checkout
function checkout() {
  const cartContainer = document.getElementById("cart-container");
  let products = [];
  let totalSemuaHarga = 0;  // Tambahkan deklarasi totalSemuaHarga

  // Mengumpulkan data produk berdasarkan data yang ada di dalam keranjang
  cartContainer.querySelectorAll(".cart-item").forEach(function (cartItem) {
    const productId = cartItem.getAttribute("data-product-id");
    const productName = cartItem.querySelector('.nama-products').textContent;
    const productPrice = parseInt(cartItem.querySelector('.item-price').textContent.replace(/\D/g, ''));
    const quantity = parseInt(cartItem.querySelector(".total-item").textContent);
    const price = parseInt(cartItem.getAttribute("data-harga"));
    const totalPrice = price * quantity;

    // Ambil data produk yang relevan berdasarkan ID produk
    const product = getProductById(productId);
    products.push({ ...product, productId, productName, productPrice, quantity, totalPrice });
    totalSemuaHarga += totalPrice;  // Hitung totalSemuaHarga
  });

  // Buat pesan yang akan dikirim ke WhatsApp
  let message = "Isi Username dan No.Hp anda Di bawah ini: \nUsername : . . \nNo.Hp : . . \n\nHalo Kak! Saya Mau Checkout : \n";
  
  products.forEach(function (product, index) {
    message += `>NamaProduk : ${product.productName} | Harga : ${rupiah(product.productPrice)} | Total Item : ${product.quantity} | Total Harga : ${rupiah(product.totalPrice)} || \n`;
    
    if (index < products.length - 1) {
      message += "";
    }
  });

  // Tambahkan totalSemuaHarga ke dalam pesan
  message += `\n_*Jumlah Yg Harus DiBayar : ${rupiah(totalSemuaHarga)}*_`;

  // Update total price in the HTML
  const allPriceElement = document.getElementById("total-semua-harga");
  allPriceElement.textContent = rupiah(totalSemuaHarga);

  // Buat tautan ke WhatsApp
  const whatsappUrl = `https://wa.me/6285710379820?text=${encodeURIComponent(message)}`;

  // Arahkan pengguna ke tautan tersebut
  window.open(whatsappUrl, "_blank");
}
 
 function getProductById(productId) {
  return products.find(function (product) {
     return product.id === productId;
  });
 }

 document.getElementById('checkout').addEventListener('click', checkout);

// Menampilkan kartu produk saat halaman dimuat
tampilkanKartuProduk();

// Memuat keranjang dari local storage saat halaman dimuat ulang
loadCartFromLocalStorage();

// Memanggil fungsi untuk memperbarui tampilan penghitung keranjang
updateCartNotification();


// Sweet Alert
  function inputBtn(form) {
    Swal.fire({
      text: 'Terima Kasih Atas Saran Anda Yang Sangat Membantu Kami!',
      title: '<span style="color: #b6895b;">Saran Anda Sudah Kami Terima.</span>',
      icon: 'success',
      iconColor: '#b6895b',
      width: '50%',
      color: '#fff',
      background: '#111',
      showConfirmButton: false,
      timer: 3300,
      showClass: {
        popup: 'animate__animated animate__fadeInUpBig animate__fast',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDownBig animate__fast',
      },
    })
    return false;
  }

  // Scroll Reveal
  // Logo
  ScrollReveal().reveal('.logo', { origin: 'top', distance: '75px', duration: 1000 })

  // Hero
  ScrollReveal().reveal('.content', { origin: 'left', distance: '20px', duration: 1000, reset: true });
  
  // About
  ScrollReveal().reveal('.about-img', { origin: 'left', distance: '20px', duration: 1000, reset: true });
  ScrollReveal().reveal('.judul-about', { origin: 'right', distance: '20px', duration: 1000, reset: true });
  ScrollReveal().reveal('.visi', { origin: 'right', distance: '20px', duration: 1000, reset: true, delay: 300 });

  // Menu 
  ScrollReveal().reveal('#flip-container', { duration: 1000, reset: true });
  ScrollReveal().reveal('.flip-card', { interval: 120, reset: true });

  // Store Produk
  ScrollReveal().reveal('#produk-container', { duration: 1000, reset: true });
  ScrollReveal().reveal('.store-card', { interval: 150, reset: true });

  // Contact
  ScrollReveal().reveal('.map', { origin: 'left', distance: '10px', duration: 1000, delay: 200, reset: true });
  ScrollReveal().reveal('.form', { origin: 'right', distance: '10px', duration: 1000, delay: 200, reset: true });
  ScrollReveal().reveal('.input-grup', { interval: 300, reset: true });
  
// Search Bar
  function renderProductCard(product) {
    return `
    <a href="" onclick="tampilkanModal(event, '${product.id}')" class="item-detail-button">
    <img src="${product.gambarSrc}" alt="${product.nama}" style="max-width: 100%;">
    <h6>${product.nama}</h6>
        </a>
    `;
  }

  function renderProducts(products) {
    const searchList = document.getElementById('search-list');
    searchList.innerHTML = '';
  
    if (products.length === 0) {
      searchList.innerHTML = '<p style="color: #000;">Tidak ditemukan.</p>';
    } else {
      products.forEach(product => {
        searchList.innerHTML += renderProductCard(product);
      });
    }
  
    // Tampilkan elemen dengan ID "productList" hanya jika sudah ada kata kunci pencarian
    searchList.style.display = products.length > 0 ? 'flex' : 'none';
  }
  
  function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  
    // Tambahkan pengecekan tambahan untuk menentukan apakah input mengandung huruf
    const hasLetters = /[a-zA-Z]/.test(searchInput);
  
    if (hasLetters) {
      const filteredProducts = produkData.filter(product => product.nama.toLowerCase().includes(searchInput));
      renderProducts(filteredProducts);
    } else {
      // Jika input tidak mengandung huruf, sembunyikan searchList
      const searchList = document.getElementById('search-list');
      searchList.innerHTML = '';
      searchList.style.display = 'none';
    }
  }

  // Fungsi untuk menangani klik di luar area searchList
function handleDocumentClick(event) {
  const searchList = document.getElementById('search-list');

  // Periksa apakah elemen yang diklik bukan bagian dari searchList
  if (!searchList.contains(event.target)) {
    searchList.style.display = 'none';
  }
}
// Tambahkan event listener untuk mendengarkan klik di dokumen
document.addEventListener('click', handleDocumentClick);

  
  function handleAutocomplete() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = produkData.filter(product => product.nama.toLowerCase().includes(searchInput));
  
    renderProducts(filteredProducts);
  }
  // Tampilkan elemen dengan ID "productList" hanya jika sudah ada kata kunci pencarian
  document.getElementById('productList').style.display = 'none';  
  

