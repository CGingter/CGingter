async function handleSubmit(event) {
    event.preventDefault();  // Verhindert die normale Formularübermittlung
    
    const formData = new FormData(document.getElementById('form'));

    try {
      const response = await fetch('https://formsubmit.co/ajax/1bf19d7f8beb4e91a493f79c27ba3838', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Ersetze das Formular mit der Erfolgsnachricht
        document.getElementById('contact-form').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
      } else {
        alert('Es gab ein Problem beim Absenden des Formulars. Bitte versuchen Sie es später.');
      }
    } catch (error) {
      alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später noch einmal.');
    }
  }

  // Funktion zum Zurücksetzen des Formulars
  function resetForm() {
    // Zeige das Formular wieder an
    document.getElementById('contact-form').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
    
    // Leere die Formularfelder
    document.getElementById('form').reset();
  }