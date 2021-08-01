$(document).ready(() => {
  let pathname = window.location.pathname;
  console.log('.nav-bar__list-item >.nav-bar__item-link[href="'+pathname+'"]');
	$('.nav-bar__list-item > .nav-bar__item-link[href="'+pathname+'"]').parent().addClass('active');
});