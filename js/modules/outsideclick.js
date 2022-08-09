export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outSide = "data-outside";

  function handleOutSideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outSide);

      events.forEach((useEvent) => {
        html.removeEventListener(useEvent, handleOutSideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outSide)) {
    events.forEach((useEvent) => {
      setTimeout(() => {
        html.addEventListener(useEvent, handleOutSideClick);
      });
    });
    element.setAttribute(outSide, "");
  }
}
