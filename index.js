const number = document.querySelector('#phone-number');
const passwd = document.querySelector('#passwd');
const confirm_passwd = document.querySelector('#confirm-passwd');
const onsubmit = document.querySelector('.onsubmit');

// function
function handleSubmit(e) {
    if(passwd.value == confirm_passwd.value) {
        return true;
    }else {
        const invalid = document.querySelector('.invalid');
        if(!invalid) {
            const pass = document.querySelector('#pass');
            const elem = document.createElement('invalid')
            elem.classList.add('invalid');
            elem.textContent = "*Passwords do not match";
            pass.appendChild(elem);
            return false;
        }
        return false;
    }
}