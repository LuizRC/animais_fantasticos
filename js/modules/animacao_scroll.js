import debonce from "./debounce.js";

export default class AnimacaoScroll {
  constructor(sections) {
    this.secoes = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = debonce(this.checkDistance.bind(this), 200);
  }
  
  //pega a distancia de cada objeto em relação ao topo do site
  getDistance() {
    this.distance = [...this.section].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }
  
  //verifica a distancia em cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageXOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
  
  //remove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
