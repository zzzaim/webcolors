/* global FB */

var ogURL, fbShare;

ogURL = document.getElementsByTagName('head')[0].querySelector('[property="og:url"]');
ogURL = ogURL ? ogURL.getAttribute('content') : null;
ogURL = ogURL || window.location.href;
fbShare = document.getElementById('share-on-facebook');

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
