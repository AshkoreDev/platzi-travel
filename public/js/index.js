const element = document.querySelector('html');
const darkBtnDesktop = document.getElementById('toggleDesktop');
const darkBtnMobile = document.getElementById('toggleMobile');

function darkMode() {
    element.classList.toggle('dark');
}

darkBtnDesktop.addEventListener('click', darkMode);
darkBtnMobile.addEventListener('click', darkMode);