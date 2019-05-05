$(document).ready(() => {
  const $inputItem = $('.js-inputWrapper');
  if ($inputItem.length) {
    $inputItem.each(function () {
      let $this = $(this),
        $input = $this.find('.form-row__input'),
        placeholderTxt = $input.attr('placeholder'),
        $placeholder;

      $input.after(`<span class="placeholder">${placeholderTxt}</span>`),
      $input.attr('placeholder', ''),
      ($placeholder = $this.find('.placeholder')),
      $input.val().length ? $this.addClass('active') : $this.removeClass('active'),
      $input
        .on('focusout', () => {
          $input.val().length ? $this.addClass('active') : $this.removeClass('active');
        })
        .on('focus', () => {
          $this.addClass('active');
        });
    });
  }
});
