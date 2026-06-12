document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Obrigado por entrar em contato! Responderemos em breve.');
    this.reset();
});