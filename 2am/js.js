//nav search
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

//nav menu
const menu = document.getElementById('menu');
const navmenu = document.getElementById('navmenu')

menu.onclick = function() {
    menu.classList.toggle("openmenu");
    navmenu.classList.toggle("visible");
}

//like icon
// const heartIcon = document.querySelector('.heart');
// const strokeChange = document.querySelector('.strokechange');
// const iconContainer = document.querySelector('.icon1');

// iconContainer.addEventListener('click', function () {
//     if (strokeChange.classList.contains('active')) {
//         strokeChange.classList.remove('active');
//         strokeChange.classList.add('strokechange');
//     } else {
//         strokeChange.classList.remove('strokechange');
//         strokeChange.classList.add('active');
//     }
// });

const opttxt = document.getElementById('opttxt');

opttxt.addEventListener('transitionend', () => {
    opttxt.style.display = 'none';
    console.log("Transition ended");
});

