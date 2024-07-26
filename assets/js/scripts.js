function donate() {
    alert('Thank you for your donation!');
    document.querySelector('.donate-button').style.display = 'none';
}

function showAlert() {
    const selectElement = document.getElementById('pet-type');
    const selectedValue = selectElement.options[selectElement.selectedIndex].text;
    alert(`You are looking for a ${selectedValue}`);
}

function likeDefinition(button, title) {
    // Obtener el elemento <p> que está en el mismo contenedor que el botón
    const p = button.previousElementSibling;
    
    // Obtener el número actual de likes del texto del <p>
    const currentLikes = parseInt(p.innerText.split(' ')[0]);
    
    // Incrementar el número de likes
    p.innerText = `${currentLikes + 1} petting(s)`;
    
    // Mostrar un mensaje de alerta
    alert(`${title} was liked`);
}
