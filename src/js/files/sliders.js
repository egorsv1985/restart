/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll(
    '[class*="__swiper"]:not(.swiper-wrapper)'
  );
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add("swiper");
      slider.classList.add("swiper-wrapper");
      for (const slide of slider.children) {
        slide.classList.add("swiper-slide");
      }
    });
  }
}
// Инициализация слайдеров
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  // Перечень слайдеров
  if (document.querySelector(".trustSwiper")) {
    new Swiper(".swiper", {
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      slidesPerView: "auto",
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 1279 px
        1279: {
          // 		// slidesPerView: 2,
          spaceBetween: 40,
        },

        // 	// when window width is >= 1024px
        // 	768: {
        // 		// slidesPerView: 3,
        // 		spaceBetween: 30
        // 	},
        // 	// when window width is >= 1280px
        // 	1280: {
        // 		// slidesPerView: 4,
        // 		spaceBetween: 40
        // 	}
      },
    });
  }
  if (document.querySelector(".gallerySwiper")) {
    new Swiper(".swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      slidesPerView: "auto",
    });
  }
  if (document.querySelector(".opportunitiesSwiper")) {
    new Swiper(".swiper", {
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      slidesPerView: "auto",
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 1279 px
        1279: {
          // 		// slidesPerView: 2,
          spaceBetween: 40,
        },

        // 	// when window width is >= 1024px
        // 	768: {
        // 		// slidesPerView: 3,
        // 		spaceBetween: 30
        // 	},
        // 	// when window width is >= 1280px
        // 	1280: {
        // 		// slidesPerView: 4,
        // 		spaceBetween: 40
        // 	}
      },
    });
  }
  if (document.querySelector(".cardsSwiper")) {
    new Swiper(".swiper", {
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      slidesPerView: "auto",
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 1279 px
        1279: {
          // 		// slidesPerView: 2,
          spaceBetween: 40,
        },

        // 	// when window width is >= 1024px
        // 	768: {
        // 		// slidesPerView: 3,
        // 		spaceBetween: 30
        // 	},
        // 	// when window width is >= 1280px
        // 	1280: {
        // 		// slidesPerView: 4,
        // 		spaceBetween: 40
        // 	}
      },
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
