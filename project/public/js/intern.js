document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(4);

    let username = document.getElementById('name_form').value;
    let password = document.getElementById('password_form').value;
    let errorMessage = document.getElementById('error-message');

    let validUsername = 'carla';
    let validPassword = 'carla';

    if (username == validUsername && password == validPassword) {
        alert('Erfolgreich angemeldet!');
        window.location.href = "./internfollow.html";
        // Hier kannst du weiterleiten oder andere Aktionen ausführen
    }else {
        console.log()
        errorMessage.textContent = 'Ungültiger Benutzername oder Passwort.';
        console.log(errorMessage);
    }
});