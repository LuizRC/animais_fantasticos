export default function initScrollSuave() {
  const linksIternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();

    const referencia = event.currentTarget.getAttribute("href");
    const secao = document.querySelector(referencia);

    secao.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksIternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
