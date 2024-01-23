$(function () {
  let slides = $('.slideshow img'),
    slideCount = slides.length,
    currentIndex = 0;

  //해당시간이 지나면 한번만 할 일
  //let 변수명 = setTimeout(할일,시간); ex. let timer = setTimeout(할일,1000)
  //clearTimeout(대상의 이름(=변수명)); ex. clearTimeout(timer);
  //일정시간마다 할일
  //setInterval(할일,시간); ex. let timer = setInterval(할일,시간);
  //clearInterval(대상의 이름(=변수명)) ex.clearInterval(timer);
  //jquery 집합개체(object)중 특정번째 요소를 선택 = .eq(숫자)
  //eq = equivalent 동등한
  // 요소를 서서히 나타나도록 = .fadeIn()
  // 요소를 서서히 사라지도록 = .fadeOut()

  slides.eq(currentIndex).fadeIn();

  let timer = setInterval(showNextSlide, 3500); //함수가 매개변수로 들어올 때에는 ()안써줘도 됨

  function showNextSlide() {
    // A % B /B로 나눈 나머지
    let nextIndex = (currentIndex + 1) % slideCount;
    slides.eq(currentIndex).fadeOut();
    slides.eq(nextIndex).fadeIn();
    currentIndex = nextIndex;
  }

  function timeron() {
    setInterval(showNextSlide, 3500);
  }
  function timeroff() {
    clearInterval(timer);
  }

  slides
    .mouseover(function () {
      timeroff();
    })
    .mouseout(function () {
      timeron();
    });
});
