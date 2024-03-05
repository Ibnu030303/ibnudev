const toggleButton = document.getElementById("toggleButton");
const navbar = document.querySelector(".navbar");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  navbar.classList.toggle("navbar-dark");
});

// Fungsi untuk menampilkan atau menyembunyikan navbar
let prevScrollPos = window.pageYOffset;

function toggleNavbar() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0"; // Munculkan navbar saat menggulir ke atas
  } else {
    navbar.style.top = "-50px"; // Sembunyikan navbar saat menggulir ke bawah
  }
  prevScrollPos = currentScrollPos;
}

window.addEventListener("scroll", toggleNavbar);

if (window.matchMedia("(max-width: 768px)").matches) {
  // Mulai Typed.js
  var typed = new Typed("#typed", {
    strings: ["Ibnu Nurdiyansa"],
    typeSpeed: 85,
    showCursor: false,
    backDelay: false,
    fadeOut: true,
    loop: false,
    onComplete: function () {
      // Setelah selesai mengetik "Ibnu Nurdiyansa", jalankan Typed untuk mengetik "Frontend Developer"
      var typedFrontend = new Typed("#typed2", {
        strings: ["Frontend Developer"],
        typeSpeed: 85,
        showCursor: false,
        backDelay: false,
        fadeOut: true,
        loop: false, // Set loop menjadi false agar tidak mengulang ketika selesai
        onComplete: function () {
          // Setelah selesai mengetik "Frontend Developer", kembali memulai Typed pertama
          typed.reset();
        },
      });
    },
  });
}

$(document).ready(function () {
  var imagesToShow = 3; // Jumlah gambar yang ditampilkan setiap kali tombol "load more" ditekan

  $(".card").slice(0, imagesToShow).fadeIn();

  $(".load-more").click(function () {
    var hiddenImages = $(".card:hidden");

    hiddenImages.slice(0, 12).fadeIn(); // Menampilkan gambar yang tersembunyi sebanyak yang ditentukan

    if (hiddenImages.length == 0) {
      $(".load-more").text("Close More").toggleClass("close-more"); // Mengubah teks dan kelas tombol menjadi "close-more" jika semua gambar sudah ditampilkan
    }
  });

  $(document).on("click", ".close-more", function () {
    $(".card").slice(imagesToShow).fadeOut(); // Menyembunyikan gambar yang sudah ditampilkan setelah gambar awal
    $(".load-more").text("READMORE").removeClass("close-more"); // Mengembalikan teks dan menghapus kelas "close-more" dari tombol "load-more"
  });
});

$(document).ready(function () {
  $(".logo-slider").slick({
    slidesToShow: 5, // Menampilkan 5 gambar secara default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 768, // Ketika lebar layar mencapai 768px (ukuran mobile)
        settings: {
          slidesToShow: 3, // Mengubah menjadi hanya menampilkan 3 gambar
        },
      },
    ],
  });
});
