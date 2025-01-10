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