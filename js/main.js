const NavToggle = document.querySelector(".navToggle");
const lists = document.querySelector(".lists");

NavToggle.addEventListener("click", function () {
  lists.classList.toggle("showlists");
});
