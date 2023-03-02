window.addEventListener('load', function() {
    var currentUrl = window.location.href;
    if (currentUrl.includes('t.me')) {
      var newUrl = currentUrl.replace('t.me', 'telegram.me');
      window.location.replace(newUrl);
    }
  });
  