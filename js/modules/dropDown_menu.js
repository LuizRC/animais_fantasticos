import outSideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]')
  
  function handleClick(event) {
    event.preventDefault()
    this.classList.add('active')

    outSideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    })
  }

  dropDownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((useEvent) => {
      menu.addEventListener(useEvent, handleClick)
    })
  });

}
