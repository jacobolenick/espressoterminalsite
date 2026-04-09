(function () {
  function apply() {
    var url = String(window.ESPRESSO_STRIPE_CHECKOUT_URL || '').trim();
    document.querySelectorAll('a[data-stripe-checkout]').forEach(function (el) {
      if (url) {
        el.setAttribute('href', url);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      } else {
        el.setAttribute('href', '#download');
        el.setAttribute(
          'title',
          'Add your Payment Link URL in stripe-config.js'
        );
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
