// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button functionality
const backToTopButton = document.querySelector('.top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Contact form validation
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="name"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelector('input[type="text"]').value;
    const message = contactForm.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        // Form can be submitted
        alert('Form submitted successfully!');
        contactForm.submit();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
