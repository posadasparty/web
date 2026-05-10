$(function () {
  var $navBar = $('#navBar'),
      $headerSection = $('#js-header .u-header__section'),
      originalSpanishUrl = 'https://posadasparty.com/';

  $navBar
    .on('show.bs.collapse', function () {
      $headerSection.addClass('navbar-menu-open');
    })
    .on('hide.bs.collapse', function () {
      $headerSection.removeClass('navbar-menu-open');
    });

  $('#languageLinkEs')
    .attr('href', originalSpanishUrl)
    .on('click', function (event) {
      event.preventDefault();
      window.location.href = originalSpanishUrl;
    });
});
