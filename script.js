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