import outSideClick from "./outsideclick.js";

export default class MobileMenu {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";

    //define touchstart e click como argumentos padrão de events, caso usuario não defina
    if (events === undefined) {
      this.eventos = ["touchstart", "click"];
    } else {
      this.eventos = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);

    outSideClick(menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    if (menuButton) {
      this.eventos.forEach((evento) => {
        this.menuButton.addEventListener(evento, this.openMenu);
      });
    }
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
