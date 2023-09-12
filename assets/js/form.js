var enviar = document.querySelector('#submit');
var validDomainList = ['gmail.com', 'hotmail.com', 'hotmail.com.br', 'outlook.com.br']

function atualizarEmail() {    
    var newEmail = document.querySelector('#email').value;
    return newEmail
}

function isValidDomain(email) {
    var userDomain = email.split('@')[1];
    if (validDomainList.includes(userDomain)){
        return true;
    } else {
        return false;
    }
}

enviar.onclick = function (event) {
    var email = atualizarEmail();
    if(!isValidDomain(email)) {
        alert('Please, enter a valid email: Gmail, Hotmail or Outlook with ".com" or ".com.br"');
        event.preventDefault();
    }
}