$(function () {
  let $duration = 300,
    $button = $('#buttons2 button');

  // let $buttons = document.getElementsByTagName('button');
  // console.log($buttons);

  // for (let i = 0; i < $buttons.length; i++) {
  //   $buttons[i].style.top = i * 40 - 40 + 'px';
  // }

  $button
    .each(function (idx) {
      let newTop = idx * 40 - 40 + 'px';
      $(this).css({ top: newTop });
    })
    .mouseover(function () {
      $(this)
        .find('span img:nth-child(1)')
        .stop()
        .animate({ opacity: 0 }, $duration);
      $(this)
        .find('span img:nth-child(2)')
        .stop()
        .animate({ opacity: 1 }, $duration);
      $(this)
        .stop()
        .animate({ backgroundColor: 'yellow', color: 'black' }, $duration);
    })
    .mouseout(function () {
      $(this)
        .find('span img:nth-child(1)')
        .stop()
        .animate({ opacity: 1 }, $duration);
      $(this)
        .find('span img:nth-child(2)')
        .stop()
        .animate({ opacity: 0 }, $duration);
      $(this)
        .stop()
        .animate({ backgroundColor: 'white', color: '#01b169' }, $duration);
    });
});
