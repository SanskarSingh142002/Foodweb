// Smooth Scroll on Navigation Links
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // Add some offset for the fixed navbar
      behavior: 'smooth'
    });
  });
});
