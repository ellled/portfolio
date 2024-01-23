$(function () {
  const $countdown = $('.countdown');
  const $days = $('.days');
  const $hours = $('.hours');
  const $minutes = $('.minutes');
  const $seconds = $('.seconds');
  let countdownInterval;
  const format = true;

  function formatNumber(number) {
    if (format) {
      return number < 10 ? `0${number}` : number.toString();
    } else {
      return number.toString();
    }
  }

  function calculateCountdown() {
    const now = new Date();
    const target = new Date('2024-03-01T00:00:00');
    const diff = target - now;

    if (diff > 0) {
      const secDiff = Math.floor(diff / 1000);
      const minDiff = Math.floor(secDiff / 60);
      const hrDiff = Math.floor(minDiff / 60);
      const dayDiff = Math.floor(hrDiff / 24);

      const days = formatNumber(dayDiff);
      const hours = formatNumber(hrDiff % 24);
      const minutes = formatNumber(minDiff % 60);
      const seconds = formatNumber(secDiff % 60);

      $days.text(days);
      $hours.text(hours);
      $minutes.text(minutes);
      $seconds.text(seconds);
    } else {
      $countdown.html('종료되었습니다.');
      clearInterval(countdownInterval);
    }
  }

  calculateCountdown();
  countdownInterval = setInterval(calculateCountdown, 1000);

  // ----------------------------------------------------
  //스크롤 메뉴 슈링크 이벤트
  const wind = $(window);
  const timeSale = $('.countdown');
  const header = $('header');

  const logo = $('.logo');
  const smallLogo =
    '<svg class="shrink" viewBox="0 0 412.77 799.91" xmlns="http://www.w3.org/2000/svg" width="1290" height="2500"><path d="M412.74 238.2l-206.4-119.1L0 238.2V119.1L206.37 0l206.4 119.1v119.1z" fill="#a435f0"/><path d="M0 338.22h108.11v262.54c0 67.83 50.67 100.9 98.26 100.9 48 0 98.3-33.95 98.3-101.81V338.22h108.1v268.8c0 62.48-19.65 110.7-58.96 143.76-39.33 33.04-88.45 49.13-148.35 49.13-59.84 0-108.99-16.06-147.38-49.13C19.65 717.75 0 671.32 0 609.69z"/></svg>';
  const defaultLogo =
    '<svg class="default" viewBox="0 0 91 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.05 8.112L7.024 4.056 0 8.112V4.056L7.025 0l7.026 4.056v4.056h-.001z" fill="#A435F0"/><path d="M0 11.518h3.68v8.941c0 2.31 1.725 3.436 3.345 3.436 1.634 0 3.346-1.156 3.346-3.467v-8.91h3.68v9.154c0 2.128-.669 3.77-2.007 4.896-1.339 1.125-3.011 1.673-5.05 1.673-2.037 0-3.71-.547-5.017-1.673C.669 24.443 0 22.862 0 20.763v-9.245zM45.866 22.63c-1.114.992-2.383 1.478-3.83 1.478-2.64 0-4.41-1.504-4.61-3.833h11.89s.08-.752.08-1.458c0-2.19-.7-4.015-2.13-5.505-1.398-1.49-3.222-2.22-5.443-2.22-2.341 0-4.258.73-5.779 2.22-1.49 1.49-2.25 3.436-2.25 5.87v.12c0 2.403.76 4.319 2.25 5.749 1.49 1.429 3.467 2.159 5.87 2.159 2.794 0 5.017-1.102 6.685-3.002l-2.733-1.578zm-6.994-7.463c.82-.639 1.825-.973 2.95-.973 1.064 0 1.946.334 2.707 1.004.726.61 1.118 1.359 1.152 2.22H37.52c.118-.89.568-1.64 1.353-2.25zM82.91 29.276C81.417 32.801 79.855 34 77.46 34H75.8v-3.262h1.342c.824 0 1.59-.31 2.32-1.994l.73-1.686-6.296-15.54h3.741l4.471 11.192 4.593-11.192h3.74l-7.53 17.758zM28.377 5.649v7.257c-1.206-1.08-3.082-1.723-4.896-1.723-2.16 0-3.984.76-5.474 2.31-1.46 1.521-2.19 3.406-2.19 5.687 0 2.282.73 4.167 2.19 5.718 1.49 1.521 3.315 2.282 5.474 2.282 2.49 0 4.064-.979 4.896-1.746v1.411h3.65V5.65h-3.65zm-1.095 16.878c-.882.882-2.007 1.339-3.315 1.339-1.308 0-2.372-.457-3.254-1.339-.85-.882-1.277-2.007-1.277-3.345 0-1.339.426-2.464 1.277-3.346.882-.882 1.946-1.338 3.254-1.338s2.433.456 3.315 1.338c.912.882 1.37 2.007 1.37 3.346 0 1.338-.458 2.463-1.37 3.345zM68.222 11.214c-2.772 0-4.213 1.15-5.2 2.258-.395-.753-1.507-2.258-4.105-2.258-2.196 0-3.49 1.11-4.136 1.9V11.52h-3.618v15.327h3.618v-8.82c0-2.068 1.278-3.558 2.98-3.558 1.735 0 2.738 1.308 2.738 3.406v8.971h3.619v-8.82c0-2.098 1.246-3.558 3.04-3.558 1.734 0 2.737 1.308 2.737 3.405v8.972h3.65v-9.488c0-3.996-2.148-6.142-5.323-6.142z" fill="#000"/></svg>';

  wind.scroll(function () {
    if ($(this).scrollTop() > timeSale.outerHeight() + header.outerHeight()) {
      if (!header.hasClass('shrink')) {
        header.addClass('shrink');
        switchImage(smallLogo);
      }
    } else {
      if (header.hasClass('shrink')) {
        header.removeClass('shrink');
        switchImage(defaultLogo);
      }
    }

    function switchImage(newPath) {
      logo.html(newPath);
    }

    function logoAdjust() {
      if (header.hasClass('shrink')) {
        header
          .find('.header_left .logo')
          .css({ marginRight: 0, marginTop: '0.5em' });
      } else {
        header
          .find('.header_left .logo')
          .css({ marginRight: '3.5em', marginTop: '0em' });
      }
    }
    logoAdjust();
  });

  // -----------------------------------------------------------

  const menuButton = $('.category');
  const subMenu = $('.category > ul');
  const categoryText = menuButton.find('.category_title span');
  const menuList = subMenu.find('li > a');
  const menuListTwoDepth = menuList.find('~ ul');
  const ham = menuButton.find('.category_title i svg');

  menuButton
    .mouseover(function () {
      subMenu.css({ display: 'block' });
      ham.css({
        filter:
          'invert(31%) sepia(54%) saturate(6762%) hue-rotate(266deg) brightness(96%) contrast(96%)',
      });
      categoryText.css({ color: '#A435F0', fontWeight: '800' });
    })
    .mouseleave(function () {
      subMenu.css({ display: 'none' });
      ham.css({
        filter:
          'invert(0%) sepia(100%) saturate(0%) hue-rotate(101deg) brightness(101%) contrast(104%)',
      });
      categoryText.css({ color: 'black', fontWeight: '400' });
    });

  subMenu
    .mouseover(function () {
      subMenu.css({ display: 'block' });
    })
    .mouseleave(function () {
      subMenu.css({ display: 'none' });
    });

  menuList
    .mouseover(function () {
      $(this).css({ color: '#A435F0', fontWeight: '800' });
      $(this).find('~ ul').css({ display: 'block' });
      subMenu.css({ borderBottomRightRadius: 0 });
    })
    .mouseleave(function () {
      $(this).css({ color: 'black', fontWeight: '400' });
      $(this).find('~ ul').css({ display: 'none' });
      subMenu.css({ borderBottomRightRadius: '10px' });
    });

  menuListTwoDepth
    .find('a')
    .mouseover(function () {
      $(this).closest('ul').css({ display: 'block' });
    })
    .mouseleave(function () {
      $(this).closest('ul').css({ display: 'none' });
    });

  menuListTwoDepth
    .mouseover(function () {
      $(this).css({ display: 'block' });
    })
    .mouseleave(function () {
      $(this).css({ display: 'none' });
    });
  // --------------------------------------------------------

  const slideContainer = $('.slideshow');
  const slideGroup = slideContainer.find('.slideshow_slides'),
    slides = slideGroup.find('.slide'),
    indicator = slideContainer.find('.indicator'),
    slideCount = slides.length,
    duration = 500,
    easing = 'swing',
    interval = 3500;
  let indicatorHtml = '',
    currentIndex = 0,
    timer;

  slides.each(function (i) {
    let newLeft = i * 100 + '%';
    $(this).css({ left: newLeft });
    indicatorHtml += '<a href="">' + '</a>';
  });
  indicator.html(indicatorHtml);

  function goToSlide(index) {
    slideGroup.animate({ left: -100 * index + '%' }, duration, easing);
    currentIndex = index;
    updateIndicator();
  }
  updateIndicator();

  function updateIndicator() {
    indicator
      .find('a')
      .eq(currentIndex)
      .addClass('active')
      .siblings()
      .removeClass('active');
  }

  indicator.find('a').click(function (e) {
    e.preventDefault();
    let idx = $(this).index();
    goToSlide(idx);
  });

  function startTimer() {
    timer = setInterval(function () {
      let nextIndex = (currentIndex + 1) % slideCount;
      goToSlide(nextIndex);
    }, interval);
  }
  startTimer();

  function stopTimer() {
    clearInterval(timer);
  }

  slideContainer
    .mouseenter(function () {
      stopTimer();
    })
    .mouseleave(function () {
      startTimer();
    });

  //-------------------------------------------------------------

  setFlowBanner();

  function setFlowBanner() {
    const $wrap = $('.flow_banner');
    const $list = $wrap.find('.list');
    let wrapWidth = '';
    let listWidth = '';
    const speed = 100;

    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct();

    let oldWChk =
      window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
    $(window).on('resize', function () {
      let newWChk =
        window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
      if (newWChk != oldWChk) {
        oldWChk = newWChk;
        flowBannerAct();
      }
    });

    function flowBannerAct() {
      if (wrapWidth != '') {
        $wrap.find('.list').css({
          animation: 'none',
        });
        $wrap.find('.list').slice(2).remove();
      }
      wrapWidth = $wrap.width();
      listWidth = $list.width();

      if (listWidth < wrapWidth * 3) {
        const listCount = Math.ceil((wrapWidth * 3) / listWidth);
        for (let i = 3; i < listCount; i++) {
          $clone = $clone.clone();
          $wrap.append($clone);
        }
      }
      $wrap.find('.list').css({
        animation: `${listWidth / speed}s linear infinite flowRolling`,
      });
    }
  }

  //---------------------------------------------------------
  const blackIcon = $('.flow_banner li img:nth-child(2)');

  blackIcon
    .mouseenter(function () {
      $(this).stop().animate({ opacity: 0 }, 300);
      $(this).prev().stop().animate({ opacity: 1 }, 300);
    })
    .mouseleave(function () {
      $(this).stop().animate({ opacity: 1 }, 300);
      $(this).prev().stop().animate({ opacity: 0 }, 300);
    });

  // ------------------------------------------------------------
  var slide = new Swiper('.sale_swiper', {
    slidesPerView: '2',
    spaceBetween: 6,
    loop: false,
    navigation: {
      nextEl: '.sale_next',
      prevEl: '.sale_prev',
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  $('a').click(function (e) {
    e.preventDefault();
  });

  $('.category > li').each(function () {
    wid = $(this).width();
    $(this).css('width', wid + 'px');
  });

  //--------------------------------------------------------

  const mobileHam = $('.mobile_left button');
  const xicon = $('.sidebar_xicon button');
  const dimmed = $('.dimmed');
  const $aside = $('aside');
  const $body = $('body');
  const sidebarList = $('.aside_bottom > div > ul > li ');

  mobileHam.click(function () {
    $aside.addClass('active');
    dimmed.addClass('active');
    $body.css({ overflow: 'hidden' });
  });

  xicon.click(function () {
    $aside.removeClass('active');
    dimmed.removeClass('active');
    $body.css({ overflow: 'visible' });
  });

  dimmed.click(function () {
    $aside.removeClass('active');
    dimmed.removeClass('active');
    $body.css({ overflow: 'visible' });
  });

  sidebarList.click(function () {
    $(this).find('ul').addClass('active');
    $(this).find('span').css({ color: '#a435f0', fontWeight: '800' });
    sidebarList.find('ul').not($(this).find('ul')).removeClass('active');
    sidebarList
      .find('span')
      .not($(this).find('span'))
      .css({ color: 'black', fontWeight: '500' });
  });

  //-------------------------------------------------

  var slide = new Swiper('.business_swiper', {
    slidesPerView: '1',
    spaceBetween: 6,
    loop: false,
    navigation: {
      nextEl: '.business_next',
      prevEl: '.business_prev',
    },
  });
});
