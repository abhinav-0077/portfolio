// Smooth scroll function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact form submit
function submitForm(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
}

// Fade/slide animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
// Typing Effect
const text = "Hello, I'm Abhinav S";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // typing speed (100ms per character)
  }
}

window.onload = typeWriter;
