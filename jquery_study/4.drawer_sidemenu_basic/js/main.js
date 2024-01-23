$(function () {
  let $aside = $('aside'),
    $button = $aside.find('button'),
    $duration = 300;

  // 자바스크립트 문법 -> 선택자.classList.add = 'open'
  // 선택자.addClass('클래스명1 클래스명2')
  // 선택자.removeClass('클래스명')
  // 선택자.toggleClass('클래스명')
  // A.hasClass('B') -> 조건문에서만 사용, A 요소에 B라는 클래스명이 있으면 true, 없으면 false

  // 속성변경하기, 속성의 값을 반환하기
  // let C = A.attr('b') => A라는 요소의 b라는 속성의 값을 변수명 C에 저장
  // A.attr('b','c') A라는 요소의 b라는 속성의 값을 c로 변경

  // 제이쿼리로 제어 -> cpu /모바일에서 더 느림
  // css transition으로 제어 -> gpu

  console.log($button.find('img').attr('src'));

  $button.click(function () {
    $aside.toggleClass('open');
    // $aside.stop().animate({ left: 0 }, $duration);

    if ($aside.hasClass('open')) {
      // $aside.stop().animate({ left: '-70px' }, $duration, 'easeOutBack');
      $button.find('img').attr('src', 'img/btn_close.png');
    } else {
      // $aside.stop().animate({ left: '-350px' }, $duration, 'easeInBack');
      $button.find('img').attr('src', 'img/btn_open.png');
    }
  });
});
