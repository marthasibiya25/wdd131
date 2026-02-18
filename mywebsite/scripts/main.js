// Highlight active nav link
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Animate cards on scroll
const cards = document.querySelectorAll('.features .card');
window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.transform = "translateY(0)";
            card.style.opacity = 1;
        } else {
            card.style.transform = "translateY(50px)";
            card.style.opacity = 0;
        }
    });
});

// LocalStorage Greeting (from previous code)
const nameInput = document.getElementById('name');
const greeting = document.getElementById('greeting');

if (localStorage.getItem('userName')) {
    greeting.textContent = `Welcome back, ${localStorage.getItem('userName')}!`;
}

if (nameInput) {
    nameInput.addEventListener('change', () => {
        localStorage.setItem('userName', nameInput.value);
        greeting.textContent = `Welcome, ${nameInput.value}!`;
    });
}

// Contact Form Alert
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
    });
}
