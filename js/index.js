//Get started email

const emailStarted = () => {
    email = document.getElementById('emailStarted').value;
    alert('tu email es' + ' ' + email)
};

const buttonEmail = () => {
    document.getElementById('emailStartedButton').addEventListener('click', () => {emailStarted()});
}

buttonEmail();