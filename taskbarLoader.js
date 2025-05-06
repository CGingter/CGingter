window.addEventListener('DOMContentLoaded', function () {
    fetch('taskbar.html')
      .then(response => response.text())
      .then(html => {
        document.body.insertAdjacentHTML('beforeend', html);
  
        const taskbar = document.querySelector('.taskbar');
        const details = taskbar.querySelector('.taskbar-details');
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