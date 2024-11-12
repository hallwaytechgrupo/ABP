const setupMobileMenu = () => {
  document.getElementById('menu-mobile').addEventListener('click', () => {
    const sidebar = document.getElementById('menu-mobile-sidebar');
    if (sidebar.classList.contains('hidden')) {
      sidebar.classList.remove('hidden');
      sidebar.classList.add('show');
      sidebar.style.animation = 'slideIn 0.3s forwards';
    } else {
      sidebar.style.animation = 'slideOut 0.3s forwards';
      setTimeout(() => {
        sidebar.classList.remove('show');
        sidebar.classList.add('hidden');
      }, 300);
    }
  });

  document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('menu-mobile-sidebar');
    const menuButton = document.getElementById('menu-mobile');
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      sidebar.style.animation = 'slideOut 0.3s forwards';
      setTimeout(() => {
        sidebar.classList.remove('show');
        sidebar.classList.add('hidden');
      }, 300);
    }
  });

  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes slideIn {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
  
    @keyframes slideOut {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
  
    #menu-mobile-sidebar.show {
      display: block;
    }
  
    #menu-mobile-sidebar.hidden {
      display: none;
    }
  `;
  document.head.appendChild(style);
};

export default setupMobileMenu;
