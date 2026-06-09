document.addEventListener('DOMContentLoaded', function() {
    
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Altera o ícone visível entre sanduíche (≡) e fechar (✕)
            if (navLinks.classList.contains('active')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '≡';
            }
        });
    }

    
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.textContent = '≡';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    
    const reveals = document.querySelectorAll('.reveal');

    
    const revealOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                
            }
        });
    }, revealOptions);

    
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});