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
const navmenu = document.getElementById('navmenu');

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

// const opttxt = document.getElementById('opttxt');

// opttxt.addEventListener('transitionend', () => {
//     opttxt.style.display = 'none';
//     console.log("Transition ended");
// });


// const targetElement = document.getElementById("intext");
// const opttxtElement = document.getElementById("opttxt");

// const observer = new MutationObserver((mutationsList) => {
//   for (let mutation of mutationsList) {
//     if (mutation.type === "attributes" && mutation.attributeName === "style") {
//       const targetHeight = targetElement.offsetHeight;
//       const opttxtHeight = opttxtElement.offsetHeight;

//       if (targetHeight >= opttxtHeight) {
//         opttxtElement.style.display = "flex";
//       } else {
//         opttxtElement.style.display = "none";
//       }
//     }
//   }
// });

// const config = {
//   attributes: true,
//   attributeFilter: ["style"],
// };

// observer.observe(targetElement, config);

// const opttxt = document.getElementById("opttxt3");
// const intext = document.getElementById("intext3");
// const opttxtsm = document.getElementById("opttxtsm3");

// function expandText() {
//     opttxtsm.style.fontSize = '48px';
//     opttxt.style.opacity = '0';
//     opttxt.style.display = 'none';
//     intext.style.maxHeight = '350px';
//     intext.style.opacity = '1';
// }

// function resetText() {
//     opttxtsm.style.fontSize = '36px';
//     intext.style.maxHeight = '0px';
//     intext.style.opacity = '0';
//     setTimeout(function() {
//         opttxt.style.display = 'flex';
//         opttxt.style.opacity = '1';
//     }, 350);
// }

function expandText(opttxtId, intextId, opttxtsmId) {
    const opttxt = document.getElementById(opttxtId);
    const intext = document.getElementById(intextId);
    const opttxtsm = document.getElementById(opttxtsmId);

    opttxtsm.style.fontSize = '48px';
    opttxt.style.opacity = '0';
    opttxt.style.display = 'none';
    intext.style.maxHeight = '350px';
    intext.style.opacity = '1';
}

function resetText(opttxtId, intextId, opttxtsmId) {
    const opttxt = document.getElementById(opttxtId);
    const intext = document.getElementById(intextId);
    const opttxtsm = document.getElementById(opttxtsmId);

    opttxtsm.style.fontSize = '36px';
    intext.style.maxHeight = '0px';
    intext.style.opacity = '0';
    setTimeout(function() {
        opttxt.style.display = 'flex';
        opttxt.style.opacity = '1';
    }, 350);
}

// function addAfterElement() {
//     var covering = document.getElementById('covering3');
//     var afterElement = document.createElement('div');
//     afterElement.classList.add('after-element');
//     covering.appendChild(afterElement);
// }

// function removeAfterElement() {
//     var covering = document.getElementById('covering3');
//     var afterElement = covering.querySelector('.after-element');
//     afterElement.style.opacity = '0';
//     afterElement.addEventListener('transitionend', function() {
//       afterElement.remove();
//     });
//   }

// var bg3 = document.querySelector('.bg3');
// var covering = document.querySelector('.covering');

// bg3.addEventListener('mouseenter', function() {
//     covering.classList.add('show');
// });

// bg3.addEventListener('mouseleave', function() {
//     covering.classList.remove('show');
// });

var coveringElements = document.querySelectorAll('[id^="covering"]');
var bgElements = document.querySelectorAll('[id^="bg"]');

// Додаємо обробник події для кожного елемента .bg
bgElements.forEach(function(bgElement, index) {
  var coveringElement = coveringElements[index];
  
  bgElement.addEventListener('mouseenter', function() {
    coveringElement.classList.add('show');
  });
  
  bgElement.addEventListener('mouseleave', function() {
    coveringElement.classList.remove('show');
  });
});
