let dropdown_icon = document.querySelector('.dropdown-icon');
let user_dropdown = document.querySelector('.user-dropdown');

dropdown_icon.addEventListener('click', function(e) {
    e.preventDefault();
    user_dropdown.classList.toggle("active");
});

/* Dark Mode */

let dark_mode_btn = document.querySelector('.dark-mode-btn');
let universal = document.querySelector('*');
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
        universal.classList.toggle('dark-mode-event');
        localStorage.setItem('darkMode', 'enabled');   
}

const disableDarkMode = () => {
        universal.classList.remove('dark-mode-event');
        localStorage.setItem('darkMode', null);
}

if(darkMode === 'enabled'){
    enableDarkMode();
}

dark_mode_btn.addEventListener('click', function(){
    let darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})
