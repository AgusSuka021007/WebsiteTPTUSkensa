const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function showSlide(n) {
  slides[slideIndex].classList.remove('active');
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
}

function slidePrev() {
  showSlide(slideIndex - 1);
}

function slideNext() {
  showSlide(slideIndex + 1);
}

const dd1 = document.querySelector('.tn');
const op1 = document.querySelector('.op1')

dd1.addEventListener('click', () => {
  op1.classList.toggle('hidden')
})

const dd2 = document.querySelector('.tn2');
const op2 = document.querySelector('.op2')

dd2.addEventListener('click', () => {
  op2.classList.toggle('hidden')
})

const dd3 = document.querySelector('.tn3');
const op3 = document.querySelector('.op3')

dd3.addEventListener('click', () => {
  op3.classList.toggle('hidden')
})



document.querySelector('.menu-toggle').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});


document.querySelector('.menu-toggle').addEventListener('click', function() {
  var nav = document.querySelector('nav');
  if (nav.style.display === 'flex') {
      nav.style.display = 'none';
  } else {
      nav.style.display = 'flex';
  }
});


function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu")
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block"
}

// Menutup dropdown jika user mengklik di luar area dropdown
window.onclick = function(event) {
  if (!event.target.matches('.Profil')) {
    const dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu && dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    }
  }
}

function logout() {
  // Konfirmasi logout
  if (confirm("Apakah Anda yakin ingin logout?")) {
    // Hapus data sesi (jika ada)
    sessionStorage.clear();

    // Mengarahkan ke halaman login dan mengganti riwayat
    // Mengarahkan ke halaman login dan mengganti riwayats
    history.replaceState(null, null, "../LoginPage/Login.html");
    window.location.href = "../LandingPage/Landing.html";

    // Tambahkan log untuk debugging
    console.log("Mengalihkan ke halaman login...");
  }
}


