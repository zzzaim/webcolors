/* global FB */

(function(){

  var ogURL = document
    .getElementsByTagName('head')[0]
    .querySelector('[property="og:url"]');

  ogURL = ogURL ? ogURL.getAttribute('content') : null;
  ogURL = ogURL || window.location.href;

  var fbShare = document.getElementById('share-on-facebook');

  if (fbShare) {
    fbShare.addEventListener('click', function (e) {
      if (FB && !e.button) {
        FB.ui({
          method: 'share',
          href: ogURL
        });
        e.preventDefault();
      }
    });
  }

}());
