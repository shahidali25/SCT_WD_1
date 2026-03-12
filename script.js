window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});