let dropdown_icon = document.querySelector('.dropdown-icon');
let user_dropdown = document.querySelector('.user-dropdown');

dropdown_icon.addEventListener('click', function(e) {
    e.preventDefault();
    user_dropdown.classList.toggle("active")
});

