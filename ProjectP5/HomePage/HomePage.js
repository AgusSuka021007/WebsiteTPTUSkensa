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


// ImageSlider
let counter = 1;

setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

setInterval(nextSlide, 5000);