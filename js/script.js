import initTabNav  from "./modules/tab_nav.js";
import Accordion from "./modules/animacao_accordion.js";
import ScrollSuave from "./modules/scroll_suave.js";
import initAnimacaoScroll from "./modules/animacao_scroll.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropDown_menu.js";
import initMobileMenu from "./modules/menu_mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch_animais.js";
import initBitcoinFetch from "./modules/bitcoin_fetch.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordionLista = new Accordion('[data-anime="accordion"] dt');
accordionLista.init();

initTabNav();
initAnimacaoScroll();
initModal();
initTooltip();
initDropDownMenu();
initMobileMenu();
initFuncionamento();
initFetchAnimais();
initBitcoinFetch();
