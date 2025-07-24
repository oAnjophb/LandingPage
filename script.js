const menuIcon = document.getElementById("menu-icon");
const navlist = document.querySelector(".navlist");
const overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", () => {
  navlist.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
  overlay.classList.toggle("active");
});

document.querySelectorAll(".navlist a").forEach(link => {
  link.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("bx-x");
    overlay.classList.remove("active");
  });
});

overlay.addEventListener("click", () => {
  navlist.classList.remove("active");
  menuIcon.classList.remove("bx-x");
  overlay.classList.remove("active");
});