 const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); // отменяем обычную отправку
        window.location.href = '/thanks.html'; // переходим на страницу спасибо
      });
    });
  });