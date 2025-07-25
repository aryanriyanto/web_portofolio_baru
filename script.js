function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function openModal(img) {
  document.getElementById("imgModal").style.display = "block";
  document.getElementById("modalImg").src = img.src;
  document.getElementById("caption").innerText = img.alt;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

function moveSlide(step, sliderId) {
  const slider = document.getElementById(sliderId).querySelector('.slides');
  const slides = slider.children;
  const slideWidth = slides[0].offsetWidth;
  slider.style.transform = `translateX(-${step * slideWidth}px)`;
}

// Add this to your script.js file
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll('.fade-in');

  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it becomes visible
      }
    });
  }, options);

  fadeElements.forEach(element => {
    observer.observe(element);
  });
});

function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");
  
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

function closeModal() {
  const modal = document.getElementById("imgModal");
  modal.style.display = "none";
}

function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));

  // Highlight button based on category
  buttons.forEach(btn => {
    if (btn.textContent.toLowerCase().includes(category.replace('_', ' ')) || (category === 'all' && btn.textContent.toLowerCase() === 'all')) {
      btn.classList.add('active');
    }
  });

  cards.forEach(card => {
    card.classList.remove('show');
    if (category === 'all' || card.classList.contains(category)) {
      card.classList.add('show');
    }
  });
}

// Show all projects on first load
window.addEventListener('DOMContentLoaded', () => {
  filterProjects('all');
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".php-email-form");
  const loading = form.querySelector(".loading");
  const error = form.querySelector(".error-message");
  const success = form.querySelector(".sent-message");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    loading.style.display = "block";
    error.style.display = "none";
    success.style.display = "none";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      const result = await response.text();

      loading.style.display = "none";
      if (result.trim() === "OK") {
        success.style.display = "block";
        form.reset();
      } else {
        error.style.display = "block";
        error.textContent = result;
      }
    } catch (err) {
      loading.style.display = "none";
      error.style.display = "block";
      error.textContent = "Something went wrong. Please try again later.";
    }
  });
});
