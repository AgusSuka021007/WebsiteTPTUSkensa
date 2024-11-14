// Fungsi login untuk mengecek input dan mengarahkan ke halaman baru jika login berhasil
function login() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");

  // Reset pesan error
  usernameError.style.display = "none";
  passwordError.style.display = "none";

  let isValid = true;

  // Cek apakah username kosong
  if (username.value.trim() === "") {
    usernameError.style.display = "block";
    isValid = false;
  }

  // Cek apakah password kosong
  if (password.value.trim() === "") {
    passwordError.style.display = "block";
    isValid = false;
  }

  // Jika semua kolom sudah terisi, arahkan ke halaman HomePage.html
  if (isValid) {
    window.location.href = "HomePage/HomePage.html"; // Sesuaikan path ini jika perlu
  }
}

window.onclick = function (event) {
  // Jika target dari klik adalah elemen modal (klik di luar konten modal)
  if (event.target == modal) {
    // Sembunyikan modal dengan mengubah properti display menjadi "none"
    modal.style.display = "none";
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

window.onload = function () {
  // Mengganti riwayat halaman sebelumnya
  history.replaceState(null, "../LoginPage/Login.html", window.location.href);
  history.pushState(null, "../LoginPage/Login.html", window.location.href);

  // Cegah navigasi "back" di browser
  window.onpopstate = function () {
    history.go(1);
  };
};
