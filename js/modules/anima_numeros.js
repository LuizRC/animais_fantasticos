export default class AnimaNumeros {
  constructor(animaNumeros, observeTarget, observerClass) {
    this.numeros = document.querySelectorAll(animaNumeros);
    this.observeTarget = document.querySelector(observeTarget);
    this.observerClass = observerClass;
  };
  
  //recebe um elemnto do dom, com número em seu texto
  //incrementa a partir do 0 até o número final
  static incrementarNumeros(numero) {
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

  }
  
  //ativar incrementar número pra cada número selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumeros(numero)
    });
  }
  
  handleMutattion(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutattion); 
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init() {
    this.addMutationObserver();
    return this;
  }
}
