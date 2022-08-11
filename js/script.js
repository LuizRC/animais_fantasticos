import TabNav  from "./modules/tab_nav.js";
import Accordion from "./modules/animacao_accordion.js";
import ScrollSuave from "./modules/scroll_suave.js";
import initAnimacaoScroll from "./modules/animacao_scroll.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropDown_menu.js";
import initMobileMenu from "./modules/menu_mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch_animais.js";
import initBitcoinFetch from "./modules/bitcoin_fetch.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordionLista = new Accordion('[data-anime="accordion"] dt');
accordionLista.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initAnimacaoScroll();
initDropDownMenu();
initMobileMenu();
initFuncionamento();
initFetchAnimais();
initBitcoinFetch();
