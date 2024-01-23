$(function () {
  let container = $('.slideshow'),
    slideGroup = container.find('.slideshow_slides'),
    slides = slideGroup.find('a'),
    nav = container.find('.slideshow_nav'),
    indicator = container.find('.indicator'),
    slideCount = slides.length,
    indicatorHtml = '',
    currentIndex = 0,
    duration = 500,
    easing = 'swing',
    interval = 3500,
    timer;

  slides.each(function (i) {
    let newLeft = i * 100 + '%';
    $(this).css({ left: newLeft });
    indicatorHtml += '<a href="">' + /*(i + 1) +*/ '</a>';
    console.log(indicatorHtml);
  }); //slides.each
  indicator.html(indicatorHtml);
  //A.text(B); A요소의 B의 내용을 글씨 형태로 추가(교체)
  //A.html(B); A요소의 B의 내용을 html 형태로 추가(교체)

  //슬라이드 이동 함수
  function goToSlide(index) {
    slideGroup.animate({ left: -100 * index + '%' }, duration, easing);
    currentIndex = index;
    console.log(currentIndex);
    updateNav();
  }

  function updateNav() {
    let navPrev = nav.find('.prev');
    let navNext = nav.find('.next');
    if (currentIndex == 0) {
      navPrev.addClass('disabled');
    } else {
      navPrev.removeClass('disabled');
    }
    if (currentIndex == slideCount - 1) {
      navNext.addClass('disabled');
    } else {
      navNext.removeClass('disabled');
    }

    //모든요소에서 active 빼고, 원하는 요소에만 active 추가
    //indicator.find('a').removeClass('active');
    //indicator.find('a').eq(currentIndex).addClass('active');

    // 원하는 요소에만 active 추가하고, 나머지들에서 active 빼기
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

  //좌우버튼으로 이동하기
  nav.find('a').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('prev')) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(currentIndex + 1);
    }
  });
  updateNav(); //슬라이드의 처음인지 마지막인지 검사해주는 함수

  function startTimer() {
    //일정시간마다 할일
    //setInterval(할일,시간), cleatInterval(이름)
    //할일(함수) function(){실제로 할일}
    timer = setInterval(function () {
      // (0+1)%4 = 1 ...
      let nextIndex = (currentIndex + 1) % slideCount;
      goToSlide(nextIndex);
    }, interval);
  }
  startTimer();

  function stopTimer() {
    clearInterval(timer);
  }

  container
    //mouseover는 마우스가 들어와서 아주 조금만 다시 움직여도 다시 실행됨-->브라우저가 힘들어함, mouseenter와의 다른점
    .mouseenter(function () {
      stopTimer();
    })
    .mouseleave(function () {
      startTimer();
    });
});
