$(document).ready(function () {

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    infinite: true,
  });

    $(window).on('scroll', function () {
      currentTop = window.innerHeight + pageYOffset;
    // анимация для header
    if ($(this).scrollTop() > 100) {
      $('.header').addClass('sticky')
    } else {
      $('.header').removeClass('sticky')
    }
})
  // Прокрутка до якоря
  $("a.header__nav-link").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 76 + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });
  // аккордеон
  // $('.accordion__question').click(function () {
  //   $(this).parent().toggleClass('active');
  //   $(this).next().slideToggle();
  //   $('.accordion__question').not(this).parent().removeClass('active');
  //   $('.accordion__question').not(this).next().slideUp();
  // });


  // header navigation

  $('.header__nav-link__more').click(function () {
    $(this).toggleClass('link-hide__active');
    $('.link-hide').toggleClass('visible');
    $('.header__nav-link').toggleClass('header__nav-link-gray');
  });

  $('.header__nav-mobile').click(function () {
    $('.header').toggleClass('active');
    $('.header__nav-mobile__list').toggleClass('active');
    $('.svg-1').toggleClass('hide');
    $('.svg-2').toggleClass('hide');
  });

  // tabs around red
  const tabsHandler = (className) => {
    const tabs = $(className);
    
    tabs.on('click', function (e) {
      const tabAttr = $(this).data('tab');

      $(tabs).removeClass('active');
      $(this).addClass('active');
      $('[data-tab-content]').removeClass('active');

      if (tabAttr === 2) {
        $(`[data-tab-content=2]`).addClass('active');
      } else {
        $(`[data-tab-content=1]`).addClass('active');
      } 
    })
  }

  tabsHandler('.tabs__btn');
});
// scroll
window.addEventListener('click', (e) => {
  const dom = e.target;
  if (dom.hasAttribute('href')) {
    const node = document.querySelector(dom.getAttribute('href'))
    if (!node) {
      return false
    } else {
      setTimeout(() => {
        node.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 500)
    }
  };
});

$('.faq__question').each(function () {
  $(this).on('click', function () {
    $(this).toggleClass('active');
    $(this).children('.faq__answer').slideToggle();
  })
});

// табы 
changeTabContent('.faq__tabs-item', '.faq__tab-content');
changeTabContent('.faq__subtitle', '.faq__sub-tab');

function changeTabContent(tabClass, tabContentClass) {
  const tab = $(tabClass);
  const tabContent = $(tabContentClass);

  tab.each(function () {
    $(this).on('click', function () {
      const dataTab = $(this).data('id');
      if (dataTab) {
        tab.removeClass('active');
        tabContent.removeClass('active');
        for (let item of tabContent) {
          if ($(item).data('id') == dataTab) {
            $(item).addClass('active');
            $(this).addClass('active');
          }
        }
        return;
      }
      $(this).toggleClass('active');
      $(this).next(tabContent).slideToggle();
    })
  })
}

