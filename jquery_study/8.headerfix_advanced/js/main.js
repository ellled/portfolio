$(function () {
  let $window = $(window),
    $header = $('.page-header'),
    $headerClone = $header.contents().clone(),
    $headerCloneContainer = $('<div class="page-header-clone"></div>'),
    $threshold = $header.offset().top + $header.outerHeight();

  $headerCloneContainer.append($headerClone);

  $headerCloneContainer.appendTo($('body'));

  $window.scroll(
    $.throttle(1000 / 15, function () {
      if ($(this).scrollTop() >= $threshold) {
        $headerCloneContainer.addClass('visible');
      } else $headerCloneContainer.removeClass('visible');
    })
  );
});
