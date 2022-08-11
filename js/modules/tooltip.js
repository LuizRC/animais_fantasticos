export default class Tooltip {
  constructor(toolTips) {
    this.toolTips = document.querySelectorAll(toolTips);

    //bind do objeto da classe aos callback
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMauseOver = this.onMauseOver.bind(this);
  }
  
  //move a toolltip de acordo com o mouse 
  onMouseMove(event) {
    this.toolTipBox.style.top = `${event.pageY + 20}px`;

    if (event.pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.toolTipBox.style.left = `${event.pageX + 20}px`;
    }
  }
  
  //remove a toolltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    this.toolTipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  //cria a tooltip box e coloca no body
  criarToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");

    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;

    document.body.appendChild(toolTipBox);
    this.toolTipBox = toolTipBox;
  }
  
  //cria a toolltip e adiciona os eventos de mousemove e mouseleave ao target
  onMauseOver({ currentTarget }) {
    //cria a tooltip box e coloca em uma propriedade
    this.criarToolTipBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }
  
  //adiciona os ventos de mouserover a cada tooltip
  addTooltipsEvent() {
    this.toolTips.forEach((item) => {
      item.addEventListener("mouseover", this.onMauseOver);
    });
  }

  init() {
    if (this.toolTips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
