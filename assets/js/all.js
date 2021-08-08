"use strict";

$(document).ready(function () {
  var pathname = window.location.pathname;
  $('.nav-bar__list-item > .nav-bar__item-link[href="' + pathname + '"]').parent().addClass('active');
  $('.slide-content').hide();
  $('.slide-button').click(function () {
    $('.slide-button__icon').toggleClass('active');
    $('.slide-content').slideToggle();
  });
});
//# sourceMappingURL=all.js.map
