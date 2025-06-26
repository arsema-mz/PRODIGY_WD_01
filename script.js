// Change background color on scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor = "rgba(220, 224, 222, 0.9)"; // Slightly transparent
    } else {
        header.style.backgroundColor = "#f8f9fa"; // Original color
    }
};

// Optional: Change color of active menu item
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.color = "Purple"; // Change color on hover
    });
    item.addEventListener('mouseout', function() {
        this.style.color = "black"; // Revert color
    });
});


  // Show popup on button click
  document.querySelector(".refer1").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("referral-popup").style.display = "flex";
  });

  // Close popup
  document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("referral-popup").style.display = "none";
  });

  // Copy link
  document.getElementById("copy-link").addEventListener("click", function () {
    const link = document.getElementById("referral-link");
    link.select();
    link.setSelectionRange(0, 99999); // For mobile
    document.execCommand("copy");
    alert("🔗 Referral link copied!");
  });

  // Optional: Close popup when clicking outside content
  window.addEventListener("click", function (e) {
    const popup = document.getElementById("referral-popup");
    if (e.target === popup) popup.style.display = "none";
  });

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });