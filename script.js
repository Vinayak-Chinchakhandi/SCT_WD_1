window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if(window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); 

  let msg = document.createElement('p');
  msg.textContent = 'Inquiry sent successfully! Thank you.';
  msg.style.color = '#ffd966';
  msg.style.textAlign = 'center';
  msg.style.marginTop = '1rem';
  msg.style.fontWeight = 'bold';

  if (!this.querySelector('.success-msg')) {
    msg.classList.add('success-msg');
    this.appendChild(msg);

    setTimeout(() => {
      msg.remove();
    }, 5000);
  }

  this.reset();
});
