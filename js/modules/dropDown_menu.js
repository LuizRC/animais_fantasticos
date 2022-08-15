import outSideClick from "./outsideclick.js";

export default class DropDownMenu {
  constructor(dropDownMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);
    
    //define touchstart e click como argumentos padrão de events, caso usuario não defina
    if (events === undefined) {
      this.eventos = ["touchstart", "click"];
    } else {
      this.eventos = events;
    }

    this.activeClasse = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }
  
  //ativa o dropdown menu e adiciona a função que observa o clique fora dele
  activeDropdownMenu(event) {
    const elemento = event.currentTarget;
    event.preventDefault();
    elemento.classList.add(this.activeClasse);

    outSideClick(elemento, this.eventos, () => {
      elemento.classList.remove(this.activeClasse);
    });
  }
  
  //adicona os eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropDownMenus.forEach((menu) => {
      this.eventos.forEach((useEvent) => {
        menu.addEventListener(useEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
