const snbBtn = document.querySelector(".btn-menu");
const subMenu = document.querySelector(".sub-menu");

snbBtn.addEventListener("click", () => {
  if (subMenu.classList.contains("hide")) {
    subMenu.classList.remove("hide");
  } else {
    subMenu.classList.add("hide");
  }
});
