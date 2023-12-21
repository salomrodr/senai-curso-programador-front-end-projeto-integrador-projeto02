document.addEventListener('DOMContentLoaded', function () {
    var fadeInSection = document.querySelector('.fade-in-image');
  
    function checkScroll() {
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
  
      var elementTop = fadeInSection.getBoundingClientRect().top;
      var elementBottom = fadeInSection.getBoundingClientRect().bottom;
  
      // Verifica se o elemento está na janela visível
      if (elementTop < windowHeight && elementBottom >= 0) {
        fadeInSection.classList.add('show');
      } else {
        fadeInSection.classList.remove('show');
      }
    }
  
    // Adiciona um evento de rolagem para verificar quando o elemento está visível
    window.addEventListener('scroll', checkScroll);
  
    // Verifica a visibilidade ao carregar a página
    checkScroll();
  });