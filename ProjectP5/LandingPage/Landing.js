document.querySelector('.menu-toggle').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});


  // ImageSlider
  let counter = 1;
  
  setInterval(() => {
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if (counter > 4) {
          counter = 1;
      }
  }, 5000);


  window.onclick = function (event) {
    // Jika target dari klik adalah elemen modal (klik di luar konten modal)
    if (event.target == modal) {
      // Sembunyikan modal dengan mengubah properti display menjadi "none"
      modal.style.display = "none";
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


  

  




  


 

  




  