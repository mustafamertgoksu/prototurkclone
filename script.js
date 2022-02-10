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
let svg = document.querySelectorAll('svg');
let span = document.querySelectorAll('span');
let p = document.querySelector('p');
let a = document.querySelectorAll('a');
let last_place = document.querySelector('.last-place');
let h1 = document.querySelectorAll('h1');

const enableDarkMode = () => {
        universal.classList.toggle('dark-mode-event');
        dark_mode_btn.innerHTML = 'Açık Mod'
        localStorage.setItem('darkMode', 'enabled'); 
        span.forEach(span_el => {
            span_el.classList.toggle('not')
        })
        last_place.classList.toggle('not');
        a.forEach(a_el => {
            a_el.classList.toggle('dark-mod-a')
        })
        h1.forEach(h1_el => {
            h1_el.classList.toggle('dark-mode-h1')
        })
}

const disableDarkMode = () => {
        universal.classList.remove('dark-mode-event');
        universal.classList.add('light-mode-event')
        dark_mode_btn.innerHTML = 'Koyu Mod'
        localStorage.setItem('darkMode', null);
        span.forEach(span_el => {
            span_el.classList.remove('not')
        })
        last_place.classList.remove('not')
        a.forEach(a_el => {
            a_el.classList.remove('dark-mod-a')
        })
        h1.forEach(h1_el => {
            h1_el.classList.remove('dark-mode-h1')
        })
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
