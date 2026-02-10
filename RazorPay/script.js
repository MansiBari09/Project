// Sticky Header Effect on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-xl');
        nav.style.paddingTop = '10px';
        nav.style.paddingBottom = '10px';
    } else {
        nav.classList.remove('shadow-xl');
        nav.style.paddingTop = '16px';
        nav.style.paddingBottom = '16px';
    }
});

// Simple Log for testing
console.log("Razorpay Clone Initialized!");