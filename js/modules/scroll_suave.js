export default class ScrollSuave {
  constructor(links, options) {
    this.linksIternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();

    const referencia = event.currentTarget.getAttribute("href");
    const secao = document.querySelector(referencia);
    secao.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksIternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksIternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
