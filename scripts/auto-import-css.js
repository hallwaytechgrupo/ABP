const incluirLinksCss = (links) => {
  const head = document.getElementsByTagName('head')[0];

  for (const link of links) {
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = link;
    head.appendChild(cssLink);
  }
};

const linksCss = [
  './css/reset.css',
  './css/global.css',
  './css/components.css',
  './css/login.css',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
];

incluirLinksCss(linksCss);
