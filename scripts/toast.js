// Toast function
function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
  const main = document.getElementById('toast');
  if (main) {
    const toastsRemove = main.querySelectorAll('div');
    for (const toast of toastsRemove) {
      toast.remove();
    }

    const toast = document.createElement('div');

    // Auto remove toast
    const autoRemoveId = setTimeout(() => {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = (e) => {
      if (e.target.closest('.toast__close')) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: 'check',
      info: 'info',
      warning: 'warning',
      error: 'error',
    };
    const iconContent = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                      <div class="toast__icon">
                        <span class="material-symbols-outlined">${iconContent}</span>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                        <span class="material-symbols-outlined">close</span>
                      </div>
                  `;
    main.appendChild(toast);
  }
}

export default toast;
