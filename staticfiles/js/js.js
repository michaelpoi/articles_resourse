const searchIcon = document.getElementById('searchIcon');
const searchField = document.getElementById('searchField');
searchIcon.addEventListener('click', function() {
    const sfwidth = window.getComputedStyle(searchField).width;

    if (sfwidth === '0px') {
        searchField.style.width = '200px';
        searchField.style.marginleft = '10px';
    } else {
        searchField.style.width = '0px';
    }
});

const menu = document.getElementById('menu');
const navmenu = document.getElementById('navmenu')
menu.onclick = function() {
    menu.classList.toggle("openmenu");
    navmenu.classList.toggle("visible");
}
