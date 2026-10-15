// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

// Set the footer year automatically.
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Preview a custom product image in the browser.
// To make it permanent for all visitors, replace the corresponding file in /images.
document.querySelectorAll(".change-image").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.target);
    if (input) input.click();
  });
});

document.querySelectorAll(".image-input").forEach((input) => {
  input.addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please choose an image file.");
      return;
    }
    const image = input.closest(".product-image").querySelector("img");
    if (image) {
      if (image.dataset.previewUrl) URL.revokeObjectURL(image.dataset.previewUrl);
      const previewUrl = URL.createObjectURL(file);
      image.src = previewUrl;
      image.dataset.previewUrl = previewUrl;
    }
  });
});
