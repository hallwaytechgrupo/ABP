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
  './css/profile.css',
  './css/toast.css',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
];

const scriptElement = document.currentScript;
const isQuiz = scriptElement.getAttribute('data-quiz') === 'true';

if (isQuiz) {
  linksCss.push('./css/cta-quiz.css', './css/quizz.css');
}

const confettiScript = document.createElement('script');
confettiScript.src =
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
confettiScript.defer = true;
document.head.appendChild(confettiScript);

const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = './assets/favicon.ico';
document.head.appendChild(faviconLink);

incluirLinksCss(linksCss);
