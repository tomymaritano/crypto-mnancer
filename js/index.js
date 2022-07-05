//Get started email
const emailStarted = (email) => {
    email = document.getElementById('emailStarted').value;
    alert('tu email es' + ' ' + email)
};

const buttonEmail = () => {
        document.getElementById('emailStartedButton').addEventListener('click', () => {emailStarted()});
}

buttonEmail();