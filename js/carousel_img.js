document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('.carousel');
    var slides = document.querySelectorAll('.slide');
    var currentIndex = 0;
  
    setInterval(function () {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }, 3000); // Mude a cada 3 segundos (ajuste conforme necessário)
  
    function updateCarousel() {
      carousel.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    }
  });