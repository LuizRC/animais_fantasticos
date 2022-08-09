export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  //adicona os eventos ao accordion
  addAcordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  //inicia a funçãoi
  init() {
    if (this.accordionList.length) {
      //ativa o primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAcordionEvent();
    }
    return this;
  }
}
