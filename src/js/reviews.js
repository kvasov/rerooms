$(document).ready(() => {
  $('.js-reviews-more').click(function () {
    $('.reviews__list .reviews-item:hidden:lt(2)').css({
      display: 'block'
    });

    if (
      $('.reviews__list .reviews-item').length == $('.reviews__list .reviews-item:visible').length
    ) {
      $(this).remove();
    }
  });
});
