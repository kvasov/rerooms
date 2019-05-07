import 'babel-polyfill';

require('./placeholder.js');
require('./reviews.js');

$(document).ready(() => {
  const phoneInput = $('.js-phone');
  phoneInput.on('keydown', function (event) {
    if (
      !(
        event.key == 'ArrowLeft' ||
        event.key == 'ArrowRight' ||
        event.key == 'Backspace' ||
        event.key == 'Tab'
      )
    ) {
      event.preventDefault();
    }
    const mask = '+7 (111) 111-11-11';

    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
      let currentString = this.value;
      const currentLength = currentString.length;
      if (/[0-9]/.test(event.key)) {
        if (mask[currentLength] == '1') {
          this.value = currentString + event.key;
        } else {
          for (let i = currentLength; i < mask.length; i++) {
            if (mask[i] == '1') {
              this.value = currentString + event.key;
              break;
            }
            currentString += mask[i];
          }
        }
      }
    }
  });

  if ($(`[name=${location.hash.split('#')[1]}]`).length) {
    $('html, body').animate(
      {
        scrollTop: $(`[name=${location.hash.split('#')[1]}]`).offset().top
      },
      1000
    );
  }

  $('a[href^="#"]').click(function () {
    const elementName = $(this)
      .attr('href')
      .split('#')[1];

    if ($(`[name=${elementName}]`).length) {
      $('html, body').animate(
        {
          scrollTop: $(`[name=${elementName}]`).offset().top
        },
        1000
      );
    }
  });

  $('.js-form-submit').on('click', function () {
    let error = false;

    const $form = $(this).parents('.form');
    const $name = $form.find('.js-name');
    const $phone = $form.find('.js-phone');
    const $email = $form.find('.js-email');
    const $formSuccess = $form.find('.form-success');

    $('.js-error-phone, .js-error-email').hide();
    $form.find('.form-row').removeClass('form-row_error');

    if (!/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test($phone.val())) {
      error = true;
      $form.find('.js-error-phone').show();
      $form
        .find('.js-error-phone')
        .parent()
        .addClass('form-row_error');
    }

    if ($email.val() != '' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($email.val())) {
      error = true;
      $form.find('.js-error-email').show();
      $form
        .find('.js-error-email')
        .parent()
        .addClass('form-row_error');
    }

    if (!error) {
      $formSuccess.show();
    }
  });

  $('.js-form-close').on('click', function () {
    const $form = $(this).parents('.form');
    const $name = $form.find('.js-name');
    const $phone = $form.find('.js-phone');
    const $email = $form.find('.js-email');
    const $formSuccess = $form.find('.form-success');

    $name.val('');
    $phone.val('');
    $email.val('');

    $formSuccess.hide();

    $form.find('input').trigger('focusout');
  });
});
