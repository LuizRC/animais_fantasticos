export default function initTooltip() {
  const toolTips = document.querySelectorAll("[data-tooltip]");

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = `${event.pageY + 20}px`;
      this.toolTipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function criarToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");

    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;

    document.body.appendChild(toolTipBox);

    return toolTipBox;
  };

  function onMauseOver() {
    const toolTipBox = criarToolTipBox(this);

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  };

  toolTips.forEach((item) => {
    item.addEventListener("mouseover", onMauseOver);
  });
}
