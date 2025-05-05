document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.entry-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const article = btn.closest('.blog-entry-vertical');
        const isExpanded = article.classList.toggle('entry-expanded');
        // hidden-Attribut für Accessibility
        article.querySelector('.entry-fulltext').hidden = !isExpanded;
        // Button-Text tauschen
        btn.textContent = isExpanded ? 'Weniger ←' : 'Weiterlesen →';
      });
    });
  });