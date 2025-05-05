window.addEventListener('DOMContentLoaded', function() {
    // Taskbar HTML via Fetch laden
    fetch('taskbar.html')
      .then(response => response.text())
      .then(html => {
        // Hier fügen wir die geladene HTML in das Body ein
        document.body.insertAdjacentHTML('beforeend', html);
      })
      .catch(error => {
        console.error('Error loading taskbar:', error);
      });
  });

  window.addEventListener('scroll', () => {
    const taskbar = document.querySelector('.taskbar')
    const scrollBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight
  
    if (scrollBottom) {
      taskbar.classList.add('taskbar-expanded')
    } else {
      taskbar.classList.remove('taskbar-expanded')
    }
  })