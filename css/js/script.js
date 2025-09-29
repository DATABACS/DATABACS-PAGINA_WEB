// Toggle mobile menu
function toggleMobile() {
  const nav = document.getElementById('mainNav');
  const hamburger = document.querySelector('.hamburger');
  
  if (nav.style.display === 'flex') {
    nav.style.display = '';
    hamburger.setAttribute('aria-expanded', 'false');
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.padding = '12px';
    hamburger.setAttribute('aria-expanded', 'true');
  }
}

// Handle contact form submission
function handleSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const message = document.getElementById('message').value;
  
  // Aquí puedes conectar con tu backend o servicio de forms
  alert('¡Gracias ' + name + '!\n\nHemos recibido tu mensaje.\n\n(En producción conecta este form a tu backend o a un servicio de forms.)');
  
  // Reset form
  e.target.reset();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
