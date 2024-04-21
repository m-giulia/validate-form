function controllaForm() { 
    let nome = document.getElementById('nome');
    let telefono = document.getElementById('telefono');
    let email = document.getElementById('email');
    let checkbox = document.getElementById('checkbox_id');
    const classRequired = 'obbligatorio';

    if (nome.value === '' && nome.className != classRequired ) {
        nome.className = classRequired;
        nome.placeholder = 'Obbligatorio';
    }
    
    if (telefono.value === '' && telefono.className != classRequired ) {
        telefono.className = classRequired;
        telefono.placeholder = 'Obbligatorio';
    }
    if (email.value === '' && email.className != classRequired ) {
        email.className = classRequired;
        email.placeholder = 'Obbligatorio';
    }
    if (checkbox.checked == false) { 
        checkbox.className = classRequired;
    }
  
  /* ----- CONTROLLO STRINGHE ----- */
  let campiValidi = false;
   
  if (nome.value || telefono.value || email.value) {
      if (nome.value && !nome.value.match(/^[a-z ,.'-]+$/i)) {
          alert('Nel campo nome possono essere inserite solo lettere');
      }
      else if (telefono.value && !telefono.value.match(/\d+/)) {
          alert('Nel campo telefono possono essere inseriti solo numeri');
      }
      else if (email.value && !email.value.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g)) {
          alert('Inserisci un indirizzo email valido');
      }
      else {
          campiValidi = true;
      }
  }
  if (!nome.value || !telefono.value || !email.value) {
    alert('Compila tutti i campi prima!');
  }
  console.log(campiValidi);
    if (campiValidi && checkbox.checked) {
      alert('Nome: ' + nome.value + '\nTelefono: ' + telefono.value + '\nEmail: ' + email.value + '');
    }
  
}