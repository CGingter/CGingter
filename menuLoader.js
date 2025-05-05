document.addEventListener('DOMContentLoaded', () => {
  fetch('menu.html')
    .then(response => response.text())
    .then(data => {
      const menuContainer = document.createElement('div')
      menuContainer.innerHTML = data
      document.body.prepend(menuContainer)

      // Aktuellen Pfad holen
      const currentPath = window.location.pathname.split('/').pop()

      // Alle Menülinks durchgehen
      const links = menuContainer.querySelectorAll(
        '.top-menu-center a:not(.disabled)'
      )
      
      // Funktion zum Anpassen des Menüs für mobile Ansicht
      const adjustMenuForMobile = () => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches
        
        if (isMobile) {
          // In der mobilen Ansicht: Aktiven Link entfernen
          links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
              link.remove() // Entfernt den aktiven Link im mobilen Menü
            }
          })
        } else {
          // In der Desktop-Ansicht: Alle Links wieder anzeigen
          if (!menuContainer.querySelector(`a[href="${currentPath}"]`)) {
            // Wenn der aktive Link nicht vorhanden ist (wegen Entfernen in der mobilen Ansicht), fügen wir ihn wieder hinzu
            const activeLink = document.createElement('a')
            activeLink.href = currentPath
            activeLink.classList.add('active')
            activeLink.textContent = currentPath.charAt(0).toUpperCase() + currentPath.slice(1)
            menuContainer.querySelector('.top-menu-center').appendChild(activeLink)
          }
        }
      }

      // Menü beim Laden und bei Resize anpassen
      adjustMenuForMobile()
      
      // Resize-Event überwachen, um das Menü anzupassen
      window.addEventListener('resize', adjustMenuForMobile)

      // Menülinks aktivieren
      links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('active')
        }
      })

      const disabledLinks = menuContainer.querySelectorAll(
        '.top-menu-center a.disabled'
      )
      disabledLinks.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault()
          link.focus()
          setTimeout(() => {
            link.blur()
          }, 1000)
        })
      })

      const burger = menuContainer.querySelector('.burger')
      const menu = menuContainer.querySelector('.top-menu-center')

      if (burger && menu) {
        burger.addEventListener('click', () => {
          menu.classList.toggle('active')
          const expanded = burger.getAttribute('aria-expanded') === 'true'
          burger.setAttribute('aria-expanded', String(!expanded))
        })
      }
    })
    .catch(error => {
      console.error('Fehler beim Laden des Menüs:', error)
    })
})

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