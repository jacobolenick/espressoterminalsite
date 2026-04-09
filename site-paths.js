/* Resolves asset URLs when the site lives in a subpath (e.g. GitHub Pages project pages). */
(function () {
  function siteBasePath() {
    var path = window.location.pathname;
    if (!path || path === '/') return '/';
    if (path.endsWith('/')) return path;
    if (/\.html$/i.test(path)) return path.replace(/[^/]+$/, '');
    return path + '/';
  }

  window.siteResolveUrl = function (relativeFile) {
    var base = siteBasePath();
    var suffix = String(relativeFile).replace(/^\//, '');
    var fullPath = base === '/' ? '/' + suffix : base + suffix;
    return window.location.origin + fullPath;
  };
})();
