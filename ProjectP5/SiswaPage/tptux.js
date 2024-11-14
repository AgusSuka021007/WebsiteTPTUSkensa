function filterProfiles() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();
    let cards = document.getElementsByClassName("profile-card");

    for (let i = 0; i < cards.length; i++) {
        let profile = cards[i];
        let info = profile.getElementsByClassName("info")[0];
        let text = info.textContent || info.innerText;

        if (text.toLowerCase().indexOf(filter) > -1) {
            profile.style.display = "";
        } else {
            profile.style.display = "none";
        }
    }
}

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

    // Mengarahkan ke halaman login dan mengganti riwayats
    history.replaceState(null, null, "../LoginPage/Login.html");
    window.location.href = "../LandingPage/Landing.html";

    // Tambahkan log untuk debugging
    console.log("Mengalihkan ke halaman login...");
  }
}
