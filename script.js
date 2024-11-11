let navToggler = document.querySelector(".navbar-toggler");
let navCollapse = document.querySelector(".navbar-collapse");
let sidebarToggler = document.querySelector(".hamburgerbtn");
let sidebar = document.querySelector(".sidebar");
let dropdownToggle = document.querySelector(".dropdown-toggle");
let dropdownMenu = document.querySelector(".dropdown-menu");

if (navToggler && navCollapse) {
  navToggler.addEventListener("click", () => {
    navCollapse.classList.toggle("show");
  });
}


if (sidebarToggler && sidebar) {
  sidebarToggler.addEventListener("click", () => {
    sidebarToggler.classList.toggle("toggled");
    sidebar.classList.toggle("opened");
  });
}

const handleResize = () => {
  if (sidebar) {
    if (window.innerWidth > 991) {
      sidebar.classList.add("opened");
    } else {
      sidebar.classList.remove("opened");
    }
  }
};

window.addEventListener("resize", handleResize);
handleResize();


if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });
}