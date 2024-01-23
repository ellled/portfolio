$(function () {
  $('#typo .inner').click(function () {
    //선택자.animate({속성:'값', 속성:'값'},시간,이징, 다른할일);
    //이징 종류: linear, swing
    //function(){실제 할일}  임의함수(익명함수)
    //animate는 수치가 바뀌는 것만 가능!!(ui를 업로드한다면 가능)
    //animate 앞에 stop() 쓰는것 잊지 말기--> $(this).stop().animate({})

    $(this).animate(
      { opacity: 0, fontSize: '0px' },
      1500,
      'easeInOutElastic',
      function () {
        $(this).animate({ opacity: 1, fontSize: '110px' }, 500);
      }
    );
  });
});
