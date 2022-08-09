export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animaNumeros() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;

      const timer = setInterval(() => {
        start = start + incremento;

        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  
  let observer;
  function handleMutattion(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  observer = new MutationObserver(handleMutattion);
  const observeTarget = document.querySelector(".numeros");
 
  observer.observe(observeTarget, { attributes: true });
}
