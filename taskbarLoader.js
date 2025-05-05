window.addEventListener('DOMContentLoaded', function () {
    fetch('taskbar.html')
      .then(response => response.text())
      .then(html => {
        document.body.insertAdjacentHTML('beforeend', html);
  
        const taskbar = document.querySelector('.taskbar');
        const details = taskbar.querySelector('.taskbar-details');
  
        // === SCROLLVERHALTEN (nur Desktop) ===
        if (window.innerWidth > 768) {
          let lastScrollTop = 0;
          window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
              // Runter scrollen → Details ausblenden
              taskbar.classList.remove('taskbar-expanded');
            } else {
              // Hoch scrollen → Details einblenden
              taskbar.classList.add('taskbar-expanded');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
          });
        }
      })
      .catch(error => {
        console.error('Error loading taskbar:', error);
      });
  });
  
  // === TOGGLE FÜR MOBILEN BUTTON ===
  function toggleTaskbar() {
    const taskbar = document.querySelector('.taskbar');
    if (taskbar) {
      taskbar.classList.toggle('taskbar-expanded');
    }
  }