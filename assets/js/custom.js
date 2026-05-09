$(function () {
  var $navBar = $('#navBar'),
      $headerSection = $('#js-header .u-header__section');

  $navBar
    .on('show.bs.collapse', function () {
      $headerSection.addClass('navbar-menu-open');
    })
    .on('hide.bs.collapse', function () {
      $headerSection.removeClass('navbar-menu-open');
    });
});
