const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      moonIcon = document.querySelector(".bx-moon"),
      sunIcon = document.querySelector(".bx-sun"),
      searchToggle = document.querySelector(".searchToggle"),
      searchField = document.querySelector(".search-field"),
      sidebarOpen = document.querySelector(".sidebar-open"),
      sidebarClose = document.querySelector(".sidebar-close"),
      dropbtn = document.querySelector('.dropbtn'),
      dropdownContent = document.querySelector('.dropdown-content');

let getMode = localStorage.getItem("mode");

if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
  toggleDarkMode(true);
  moonIcon.style.display = "none";
  sunIcon.style.display = "block";
} else {
  moonIcon.style.display = "block";
  sunIcon.style.display = "none";
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");
  toggleDarkMode(isDarkMode);

  if (isDarkMode) {
    localStorage.setItem("mode", "dark-mode");
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  } else {
    localStorage.setItem("mode", "light-mode");
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }
});

function toggleDarkMode(isDark) {
  const elementsToToggle = document.querySelectorAll('#hero, #products, .product, #faq, #contact, #contact form input, #contact form textarea, #contact form button');
  
  elementsToToggle.forEach(el => {
    el.classList.toggle('dark', isDark);
  });
}

searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
  searchField.classList.toggle("active");
});

sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

sidebarClose.addEventListener("click", () => {
  nav.classList.remove("active");
});

body.addEventListener("click", (e) => {
  let clickElement = e.target;

  if (!clickElement.closest(".sidebar-open") && !clickElement.closest(".menu")) {
    nav.classList.remove("active");
  }
});