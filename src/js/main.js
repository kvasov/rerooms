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
});
