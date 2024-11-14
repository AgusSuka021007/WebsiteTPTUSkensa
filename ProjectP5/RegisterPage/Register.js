// function button login agaar bisa diklik dan pindah halaman
function login() {
  window.location.href = "../index.html";
}

// agar setelah login tidak bisa bulak balik
window.onload = function () {
  // Mengganti riwayat halaman sebelumnya
  history.replaceState(null, "", window.location.href);
  history.pushState(null, "", window.location.href);

  // Cegah navigasi "back" di browser
  window.onpopstate = function () {
    history.go(1);
  };
};

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

  // Jika semua kolom sudah terisi, arahkan ke halaman Project1.html
  if (isValid) {
    window.location.href = "HomePage.html";
  }
}