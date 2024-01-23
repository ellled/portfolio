//   document.getElementsByTagName('h1')[0].style.color = 'red';

//   document.addEventListener('DOMContentLoaded', function () {
//     document.getElementsByTagName('h1')[0].style.color = 'red';
//   });

//   $(document).ready(function () {
//     $('h1').css({ color: 'red' });
//   });

$(function () {
  $('h1').css('color', 'red'); // css 속성 하나를 변경
  // $('#typo .inner').css('text-decoration', 'underline');
  // $('#typo .inner').css('border-bottom', '5px solid red');
  // $('#typo .inner').css('transform', 'rotate(45deg)');
  // $('#typo .inner').css('opacity', 0.5);
  // $('#typo .inner').css({
  //   'text-decoration': 'underline',
  //   'border-bottom': '5px solid red',
  //   transform: 'rotate(45deg)',
  //   opacity: 0.5,
  // });
  // $('#typo .inner').css({
  //   textDecoration: 'underline',
  //   borderBottom: '5px solid red',
  //   transform: 'rotate(45deg)',
  //   opacity: 0.5,
  // });

  //실행 지점 제어 - event종류 - mouseover 마우스가 올라왔을 때
  // on 메서드, bind('click'... --> .on .off)

  // $('선택자').on('이벤트 종류', 할일);
  // 할일 = 임의 함수 = function(){}

  //   $('#typo').on('mouseover', function () {
  //     $('#typo').css('background-color', 'green');
  //   });
  //   $('#typo').on('mouseout', function () {
  //     $('#typo').css('background-color', '#3498db');
  //   });

  // $('#typo')
  //   .on('mouseover', function () {
  //     $('#typo').css('background-color', 'green');
  //   })
  //   .on('mouseout', function () {
  //     $('#typo').css('background-color', '#3498db');
  //   });

  // $('#typo,h1')
  //   .mouseover(function () {
  //     $('#typo,h1').css('background-color', 'green');
  //   })
  //   .mouseout(function () {
  //     $('#typo,h1').css('background-color', '#3498db');
  //   });

  $('#typo,h1')
    .mouseover(function () {
      $(this).css('background-color', 'green');
    })
    .mouseout(function () {
      $(this).css('background-color', '#3498db');
    }); //this = 이벤트가 일어난 그것
});

//   $('h1').css({ color: 'red' });
