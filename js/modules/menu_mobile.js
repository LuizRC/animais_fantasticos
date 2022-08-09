import outSideClick from "./outsideclick.js";

export default function initMobileMenu() {
  const menuButton = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"');
  const eventosClick = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.add("active");
    menuButton.classList.add("active");

    outSideClick(menuList, eventosClick, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton) {

    eventosClick.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
