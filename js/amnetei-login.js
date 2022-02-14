document.getElementById('submit-button').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    const emailValue = emailInput.value;
    const passwordInput = document.getElementById('password-input');
    const passwordValue = passwordInput.value;

    if (emailValue == 'sontan@baap.com' && passwordValue == 'secret') {
        window.location.href = 'amnetei-bank.html'
    }
})