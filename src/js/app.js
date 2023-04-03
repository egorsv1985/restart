/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();

/*
Модуль работы со спойлерами
Документация:
Сниппет (HTML): spollers
*/
flsFunctions.spollers();

/*
Модуль работы с табами
Документация:
Сниппет (HTML): tabs
*/
flsFunctions.tabs();

/*
Модуль "показать еще"
Документация по работе в шаблоне:
Сниппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Попапы
Документация по работе в шаблоне:
Сниппет (HTML): pl
*/
import './libs/popup.js'

/*
Модуль параллакса мышью
Документация по работе в шаблоне:
Сниппет (HTML): 
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы: добавление классов, работа с placeholder. */
// flsForms.formFieldsInit();

/* Oтправка формы со встроенной валидацией полей. false - отключит валидацию */
// flsForms.formSubmit(true);

/* Модуль формы "колличество" */
// flsForms.formQuantity();

/* Модуль формы "показать пароль" */
// flsForms.formViewpass();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Модуль работы с select. */
// import './libs/select.js'

/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне:
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: В HTML добавляем img, video, audio, iframe но вместо src пишем data-src
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
//import './files/scroll/lazyload.js';

// Наблюдатель за объектами c атрибутом data-watch
// Документация по работе в шаблоне: js/libs/watcher.js
// Сниппет(HTML):
// import './libs/watcher.js'

// Функции работы скроллом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
flsScroll.headerScroll();

// Функционал липкого блока
// flsScroll.stickyBlock();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
// import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================


const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove(scrollUp);
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
		// down
		body.classList.remove(scrollUp);
		body.classList.add(scrollDown);
		// lottiePlayer.play();
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains(scrollDown)
	) {
		// up
		body.classList.remove(scrollDown);
		body.classList.add(scrollUp);
		// lottiePlayer.stop();
	}
	lastScroll = currentScroll;
});


const TABLIST = document.querySelector("#tablist");
const TABS = [...TABLIST.querySelectorAll(".tab")];
const TABPANELS = [...document.querySelectorAll(".tabpanel")];

const showActivePanel = (element) => {
  const selectedId = element.id;
  TABPANELS.forEach((e) => {
    e.hidden = "true";
  });
  const activePanel = document.querySelector(
    `[aria-labelledby="${selectedId}"]`
  );
  activePanel.removeAttribute("hidden");
};

const setSelectedTab = (element) => {
  const selectedId = element.id;
  TABPANELS[0].classList.remove("visible");

  TABS.forEach((e) => {
    const id = e.getAttribute("id");
    if (id === selectedId) {
      e.removeAttribute("tabindex", "0");
      e.setAttribute("aria-selected", "true");
    } else {
      e.setAttribute("tabindex", "-1");
      e.setAttribute("aria-selected", "false");
    }
  });
};

const createArrowNavigation = () => {
  const firstTab = TABS[0];
  const lastTab = TABS[TABS.length - 1];

  TABS.forEach((element) => {
    element.addEventListener("keydown", function (e) {
      if ((e.keyCode || e.which) === 38 || (e.keyCode || e.which) === 37) {
        if (element == firstTab) {
          e.preventDefault();
          lastTab.focus();
        } else {
          e.preventDefault();
          const focusableElement = TABS.indexOf(element) - 1;
          TABS[focusableElement].focus();
        }
      } else if (
        (e.keyCode || e.which) === 40 ||
        (e.keyCode || e.which) === 39
      ) {
        if (element == lastTab) {
          e.preventDefault();
          firstTab.focus();
        } else {
          e.preventDefault();
          const focusableElement = TABS.indexOf(element) + 1;
          TABS[focusableElement].focus();
        }
      }
    });
  });
};

const determineTabindex = () => {
  TABPANELS.forEach((element) => {
    const focusableElements = element.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'
    ).length;

    focusableElements
      ? element.setAttribute("tabindex", "-1")
      : element.setAttribute("tabindex", "0");
  });
};

const handleClick = () => {
  TABS.forEach((element) => {
    element.addEventListener("click", function () {
      setSelectedTab(element);
      showActivePanel(element);
    });
  });

  TABS.forEach((element) => {
    element.addEventListener("keydown", function (e) {
      if ((e.keyCode || e.which) === 32) {
        setSelectedTab(element);
        showActivePanel(element);
        element.click();
      }
    });
  });
};

const activateFirstPanel = () => {
  TABS[0].setAttribute("tabindex", "0");
  TABS[0].setAttribute("aria-selected", "true");
  TABPANELS[0].classList.add("visible");
};

const checkInitialSelectedTab = () => {
  const targetedTabPanel = document
    .querySelector(".tabpanel:target")
    .getAttribute("aria-labelledby");
  const selectedTab = document.querySelector(`#${targetedTabPanel}`);
  selectedTab.setAttribute("aria-selected", "true");
  selectedTab.removeAttribute("tabindex");
};

const handleInitialState = () => {
  TABS.forEach((e) => {
    e.setAttribute("tabindex", "-1");
    e.setAttribute("aria-selected", "false");
  });

  window.location.href.indexOf("#panel") === -1
    ? activateFirstPanel()
    : checkInitialSelectedTab();

  determineTabindex();
};

handleClick();
createArrowNavigation();

window.onload = handleInitialState;
