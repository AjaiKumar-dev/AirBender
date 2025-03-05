function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sendEmail() {
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;

  if (name && message) {
      let subject = encodeURIComponent("New Contact Message from " + name);
      let body = encodeURIComponent("Name: " + name + "\n\nMessage: " + message);

      let mailtoLink = `mailto:ajaiarunmithran@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      setTimeout(() => {
        nameField.value = "";
        messageField.value = "";
    }, 500); // Small delay to ensure email client opens
  } else {
      alert("Please enter both Name and Message.");
  }
}
window.onload = function () {
  window.scrollTo(0, 0);
};
window.onload = function () {
    if (window.location.hash) {
        window.location.replace(window.location.pathname);
    }
};

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true, // Enables infinite scrolling
    autoplay: false,
    slidesPerView: 1, // Shows one image at a time
    spaceBetween: 20, // Adds some space between slides
    speed: 1000, // Makes animation smooth (adjust as needed)
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "slide", // Enables a smooth sliding effect
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, { threshold: 0.1 });

  // Check if elements are already in the viewport on page load
  cards.forEach((card) => {
    observer.observe(card);

    if (card.getBoundingClientRect().top < window.innerHeight) {
      card.classList.add("show");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.querySelector(".contact-section");

  function handleScroll() {
      const rect = contactSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
          contactSection.classList.add("visible");
      }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check on load
});
