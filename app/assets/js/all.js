$(document).ready(() => {
  let pathname = document.location.pathname.match(/[^\/]+$/)[0];
  $('.nav-bar__list-item > .nav-bar__item-link[href="./' + pathname + '"]')
    .parent()
    .addClass('active');
  console.log(pathname, 'pathname');

  $('.slide-content').hide();
  $('.slide-button').click(function () {
    $('.slide-button__icon').toggleClass('active');
    $('.slide-content').slideToggle();
  });
  $('.open-reply-btn').click(function () {
    $('.assignmant-comment__reply').addClass('active');
    $('.reply-answer-js').addClass('hide');
    $('.reply-btns').addClass('hide');
    $('.ask-content').removeClass('has-border');
  });
  $('.close-reply-btn').click(function () {
    $('.assignmant-comment__reply').removeClass('active');
    $('.reply-answer-js').removeClass('hide');
    $('.reply-btns').removeClass('hide');
    $('.ask-content').addClass('has-border');
  });
});
