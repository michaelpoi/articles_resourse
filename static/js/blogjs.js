//update on change size window
let isMobile = window.innerWidth <= 428;

function checkAndReload() {
  const screenWidth = window.innerWidth;
  const isMobileNow = screenWidth <= 428;

  if (isMobileNow !== isMobile) {
    location.reload();
  }
}

window.addEventListener('load', checkAndReload);
window.addEventListener('resize', checkAndReload);

// open language

// Получаем элемент с id "lgcont"
const absasElement = document.getElementById('lgcont__port');

// Добавляем обработчик события клика на элемент "lgcont"
absasElement.addEventListener('click', function() {
  // Добавляем или удаляем класс "openlg" в зависимости от его наличия
  this.classList.toggle('openlg');
});

// counter logo

function updateLogoOpacity() {
    const log2 = document.getElementById('log2');
    
    if (counter >= 2) {
      log2.style.opacity = '0';
    } else {
      log2.style.opacity = '1';
    }
  }

// open search

const inpuut = document.getElementById('nanas__port');
const dibor = document.getElementById('kakasa__port');
const meine = document.getElementById('pelaha__port');
const inhold = document.getElementById('kasj__port');

let isOn = false;
let counter = 0;

dibor.onclick = function() {
  if (!isOn) {
    meine.style.width = '15vw';
    inhold.style.width = '12vw';
    inhold.style.marginRight = '3.5vw';
    dibor.style.borderColor = 'rgba(255,255,255,0.7)';
    isOn = true;
    counter++;
  } else {
    meine.style.width = '3.5vw';
    inhold.style.width = '0px';
    dibor.style.borderColor = 'rgba(255,255,255,0)';
    isOn = false;
    counter--;
  }
  updateLogoOpacity();
};

// open menu

const menu = document.getElementById('menu__port');
const navmenu = document.getElementById('navmenu__port');
const navtexts = navmenu.getElementsByClassName('navtext');

menu.onclick = function() {
  menu.classList.toggle("openmenu");
  
  if (navmenu.style.width === '37vw') {
    navmenu.style.width = '0px';
    
    for (let i = 0; i < navtexts.length; i++) {
      navtexts[i].classList.remove("paddingrights__20");
      navtexts[i].classList.remove("paddingrights__30");
    }
    counter--;
  } else {
    navmenu.style.width = '37vw';
    
    for (let i = 0; i < navtexts.length; i++) {
      if (i === navtexts.length - 1) {
        navtexts[i].classList.add("paddingrights__30");
      } else {
        navtexts[i].classList.add("paddingrights__20");
      }
    }
    counter++;
  }
  updateLogoOpacity();
};

// form menu

const openButton = document.getElementById('openButton__port');
const bgBlured = document.getElementById('bgBlured__port');
const formOp = document.getElementById('formOp__port');
const leaveout = document.getElementById('leaveout__port');

openButton.addEventListener('click', function() {
    bgBlured.style.right = '0';
    bgBlured.style.opacity = '1';
    formOp.style.animation = 'slideLeft 0.5s forwards';
});

function hideForm() {
    bgBlured.style.opacity = '0';
    formOp.style.animation = 'slideBack 0.5s forwards';
    setTimeout(function() {
      bgBlured.style.right = '-100%';
    }, 500);
}

bgBlured.addEventListener('click', hideForm);
leaveout.addEventListener('click', hideForm);


// gradient border

const svgInside = document.querySelector('.svg__inside');
svgInside.querySelector('rect').style.stroke="rgba(255,255,255,0.3)";
svgInside.addEventListener('mouseenter', function() {
  svgInside.querySelector('rect').style.strokeDasharray ='350%';
  svgInside.querySelector('rect').style.strokeDashoffset ='350%';
  svgInside.querySelector('rect').style.stroke = 'url(#gradientede__pc)';
  svgInside.querySelector('rect').style.animation = 'anigrad 1s linear forwards';
});
svgInside.addEventListener('mouseleave', function() {
  svgInside.querySelector('rect').style.strokeDasharray ='350%';
  svgInside.querySelector('rect').style.strokeDashoffset ='350%';
  svgInside.querySelector('rect').style.stroke = 'rgba(255,255,255,0.3)';
  svgInside.querySelector('rect').style.animation = 'anigradback 1s linear forwards';
});

// nav options

const navTexts = document.getElementById('navmenu__port').querySelectorAll('.navtext');

navTexts.forEach((text) => {
  text.addEventListener('mouseover', () => {
    navTexts.forEach((otherText) => {
      if (otherText !== text) {
        otherText.style.color = 'rgba(255, 255, 255, 0.3)';
      }
    });
  });

  text.addEventListener('mouseout', () => {
    navTexts.forEach((otherText) => {
      if (otherText !== text) {
        otherText.style.color = 'rgba(255, 255, 255, 1)';
      }
    });
  });
});

const toback = document.getElementById('to__back');

toback.addEventListener('click', () => {
    window.location.href = '../../../../CrownStudio/landing.html';
});

// span transform

// span bottom
const inputElementName = document.getElementById('name__change');
const spanElementName = document.getElementById('span__bot1');

const inputElementGmail = document.getElementById('gmail__change');
const spanElementGmail = document.getElementById('span__bot2');

const phone__change = document.getElementById('phone__change');

// span top
const inputElementForm = document.getElementById('input__forme');
const spanElementForm = document.getElementById('span__top1');

const inputElementGmailForm = document.getElementById('gmail__forme');
const spanElementGmailForm = document.getElementById('span__top2');

const phone__change__top = document.getElementById('phone__change__top');
const span__form__tp__top = document.getElementById('span__form__tp__top');

// form pc
const fiSpan = document.getElementById('your__me__form');
const fiArea = document.getElementById('text__send');
const spanForm = document.getElementById('span__topform');


//form pc bottom
const fiSpanBot = document.getElementById('your__me__form__bot');
const fiAreaBot = document.getElementById('text__send__bot');
const spanFormBot = document.getElementById('span__form__bot');
const span__form__tp = document.getElementById('span__form__tp');

function handleElementBlur(element) {
  const value = element.value.trim();
  if (value.length > 0) {
    element.style.backgroundColor = '#1f1f1f';
  } else {
    element.style.backgroundColor = '';
  }
}

phone__change__top.addEventListener('focus', () => {
  span__form__tp__top.style.top = '-1%';
  span__form__tp__top.style.paddingLeft = '0.3vw';
  span__form__tp__top.style.paddingRight = '0.3vw';
  span__form__tp__top.style.backgroundColor = '#1f1f1f';
  span__form__tp__top.style.fontSize = '0.8vw';
  span__form__tp__top.style.lineHeight = '0.5vw';
  span__form__tp__top.style.color = 'rgba(255,255,255,1)';
});

phone__change__top.addEventListener('blur', () => {
  if (phone__change__top.value.trim().length === 0) {
    span__form__tp__top.style.top = '0.6vw';
    span__form__tp__top.style.paddingLeft = '0';
    span__form__tp__top.style.paddingRight = '0';
    span__form__tp__top.style.backgroundColor = '#262626';
    span__form__tp__top.style.fontSize = '1.2vw';
    span__form__tp__top.style.lineHeight = '1.5';
    span__form__tp__top.style.color = 'rgba(255,255,255,0.3)';
  }
});

phone__change__top.addEventListener('blur', () => {
  handleElementBlur(phone__change__top);
})

span__form__tp__top.addEventListener('click', () => {
  phone__change__top.focus();
});


phone__change.addEventListener('focus', () => {
  span__form__tp.style.top = '-1%';
  span__form__tp.style.paddingLeft = '0.3vw';
  span__form__tp.style.paddingRight = '0.3vw';
  span__form__tp.style.backgroundColor = '#1f1f1f';
  span__form__tp.style.fontSize = '0.8vw';
  span__form__tp.style.lineHeight = '0.5vw';
  span__form__tp.style.color = 'rgba(255,255,255,1)';
});

phone__change.addEventListener('blur', () => {
  if (phone__change.value.trim().length === 0) {
    span__form__tp.style.top = '0.6vw';
    span__form__tp.style.paddingLeft = '0';
    span__form__tp.style.paddingRight = '0';
    span__form__tp.style.backgroundColor = '#262626';
    span__form__tp.style.fontSize = '1.2vw';
    span__form__tp.style.lineHeight = '1.5';
    span__form__tp.style.color = 'rgba(255,255,255,0.3)';
  }
});

phone__change.addEventListener('blur', () => {
  handleElementBlur(phone__change);
})

span__form__tp.addEventListener('click', () => {
  phone__change.focus();
});
fiArea.addEventListener('focus', () => {
  spanForm.style.top = '10%';
  spanForm.style.paddingLeft = '0.3vw';
  spanForm.style.paddingRight = '0.3vw';
  spanForm.style.backgroundColor = '#1f1f1f';
  spanForm.style.fontSize = '0.8vw';
  spanForm.style.lineHeight = '0.5vw';
  spanForm.style.color = 'rgba(255,255,255,1)';
});

fiArea.addEventListener('blur', () => {
  if (fiArea.value.trim().length === 0) {
    spanForm.style.top = '4vw';
    spanForm.style.paddingLeft = '0';
    spanForm.style.paddingRight = '0';
    spanForm.style.backgroundColor = '#262626';
    spanForm.style.fontSize = '1.2vw';
    spanForm.style.lineHeight = '1.5';
    spanForm.style.color = 'rgba(255,255,255,0.3)';
  }
});

fiArea.addEventListener('blur', () => {
  handleElementBlur(fiArea);
})

spanForm.addEventListener('click', () => {
  fiArea.focus();
});

fiAreaBot.addEventListener('focus', () => {
  spanFormBot.style.top = '13%';
  spanFormBot.style.paddingLeft = '0.3vw';
  spanFormBot.style.paddingRight = '0.3vw';
  spanFormBot.style.backgroundColor = '#1f1f1f';
  spanFormBot.style.fontSize = '0.8vw';
  spanFormBot.style.lineHeight = '1vw';
  spanFormBot.style.color = 'rgba(255,255,255,1)';
});

fiAreaBot.addEventListener('blur', () => {
  if (fiAreaBot.value.trim().length === 0) {
    spanFormBot.style.top = '4vw';
    spanFormBot.style.paddingLeft = '0';
    spanFormBot.style.paddingRight = '0';
    spanFormBot.style.backgroundColor = '#262626';
    spanFormBot.style.fontSize = '1.2vw';
    spanFormBot.style.lineHeight = '1.5';
    spanFormBot.style.color = 'rgba(255,255,255,0.3)';
  }
});

fiAreaBot.addEventListener('blur', () => {
  handleElementBlur(fiAreaBot);
});

spanFormBot.addEventListener('click', () => {
  fiAreaBot.focus();
});

inputElementForm.addEventListener('focus', () => {
  spanElementForm.style.top = '1.8vw';
  spanElementForm.style.paddingLeft = '0.3vw';
  spanElementForm.style.paddingRight = '0.3vw';
  spanElementForm.style.backgroundColor = '#1f1f1f';
  spanElementForm.style.fontSize = '0.8vw';
  spanElementForm.style.lineHeight = '1vw';
  spanElementForm.style.color = 'rgba(255,255,255,1)';
});

inputElementForm.addEventListener('blur', () => {
  if (inputElementForm.value.trim().length === 0) {
    spanElementForm.style.top = '2.9vw';
    spanElementForm.style.paddingLeft = '0';
    spanElementForm.style.paddingRight = '0';
    spanElementForm.style.backgroundColor = '#262626';
    spanElementForm.style.fontSize = '1.2vw';
    spanElementForm.style.lineHeight = '1.5';
    spanElementForm.style.color = 'rgba(255,255,255,0.3)';
  }
});

inputElementForm.addEventListener('blur', () => {
  handleElementBlur(inputElementForm);
});

spanElementForm.addEventListener('click', () => {
  inputElementForm.focus();
});

inputElementGmailForm.addEventListener('focus', () => {
  spanElementGmailForm.style.top = '5.3vw';
  spanElementGmailForm.style.paddingLeft = '0.3vw';
  spanElementGmailForm.style.paddingRight = '0.3vw';
  spanElementGmailForm.style.backgroundColor = '#1f1f1f';
  spanElementGmailForm.style.fontSize = '0.8vw';
  spanElementGmailForm.style.lineHeight = '1vw';
  spanElementGmailForm.style.color = 'rgba(255,255,255,1)';
});

inputElementGmailForm.addEventListener('blur', () => {
  if (inputElementGmailForm.value.trim().length === 0) {
    spanElementGmailForm.style.top = '6.4vw';
    spanElementGmailForm.style.paddingLeft = '0';
    spanElementGmailForm.style.paddingRight = '0';
    spanElementGmailForm.style.backgroundColor = '#262626';
    spanElementGmailForm.style.fontSize = '1.2vw';
    spanElementGmailForm.style.lineHeight = '1.5';
    spanElementGmailForm.style.color = 'rgba(255,255,255,0.3)';
  }
});

inputElementGmailForm.addEventListener('blur', () => {
  handleElementBlur(inputElementGmailForm);
});

spanElementGmailForm.addEventListener('click', () => {
  inputElementGmailForm.focus();
});

inputElementGmail.addEventListener('focus', () => {
  spanElementGmail.style.top = '5.3vw';
  spanElementGmail.style.paddingLeft = '0.3vw';
  spanElementGmail.style.paddingRight = '0.3vw';
  spanElementGmail.style.backgroundColor = '#1f1f1f';
  spanElementGmail.style.fontSize = '0.8vw';
  spanElementGmail.style.lineHeight = '1vw';
  spanElementGmail.style.color = 'rgba(255,255,255,1)';
});

inputElementGmail.addEventListener('blur', () => {
  if (inputElementGmail.value.trim().length === 0) {
    spanElementGmail.style.top = '6.4vw';
    spanElementGmail.style.paddingLeft = '0';
    spanElementGmail.style.paddingRight = '0';
    spanElementGmail.style.backgroundColor = '#262626';
    spanElementGmail.style.fontSize = '1.2vw';
    spanElementGmail.style.lineHeight = '1.5';
    spanElementGmail.style.color = 'rgba(255,255,255,0.3)';
  }
});

inputElementGmail.addEventListener('blur', () => {
  handleElementBlur(inputElementGmail);
});

spanElementGmail.addEventListener('click', () => {
  inputElementGmail.focus();
});

inputElementName.addEventListener('focus', () => {
  spanElementName.style.top = '1.8vw';
  spanElementName.style.paddingLeft = '0.3vw';
  spanElementName.style.paddingRight = '0.3vw';
  spanElementName.style.backgroundColor = '#1f1f1f';
  spanElementName.style.fontSize = '0.8vw';
  spanElementName.style.lineHeight = '1vw';
  spanElementName.style.color = 'rgba(255,255,255,1)';
});

inputElementName.addEventListener('blur', () => {
  if (inputElementName.value.trim().length === 0) {
    spanElementName.style.top = '2.9vw';
    spanElementName.style.paddingLeft = '0';
    spanElementName.style.paddingRight = '0';
    spanElementName.style.backgroundColor = '#262626';
    spanElementName.style.fontSize = '1.2vw';
    spanElementName.style.lineHeight = '1.5';
    spanElementName.style.color = 'rgba(255,255,255,0.3)';
  }
});

inputElementName.addEventListener('blur', () => {
  handleElementBlur(inputElementName);
});

spanElementName.addEventListener('click', () => {
  inputElementName.focus();
});

const screenMob = window.innerWidth;

if (screenMob <= 428) {

  inputElementGmail.addEventListener('focus', () => {
    spanElementGmail.style.top = '22.5vw';
    spanElementGmail.style.paddingLeft = '1vw';
    spanElementGmail.style.paddingRight = '1vw';
    spanElementGmail.style.backgroundColor = '#1f1f1f';
    spanElementGmail.style.fontSize = '2.4vw';
    spanElementGmail.style.lineHeight = '1.92vw';
    spanElementGmail.style.color = 'rgba(255,255,255,1)';
  });
  
  inputElementGmail.addEventListener('blur', () => {
    if (inputElementGmail.value.trim().length === 0) {
      spanElementGmail.style.top = '26vw';
      spanElementGmail.style.paddingLeft = '0';
      spanElementGmail.style.paddingRight = '0';
      spanElementGmail.style.backgroundColor = '#262626';
      spanElementGmail.style.fontSize = '4vw';
      spanElementGmail.style.lineHeight = '1.5';
      spanElementGmail.style.color = 'rgba(255,255,255,0.3)';
    }
  });
  
  spanElementGmail.addEventListener('click', () => {
    inputElementGmail.focus();
  });
  
  inputElementName.addEventListener('focus', () => {
    spanElementName.style.top = '8.5vw';
    spanElementName.style.paddingLeft = '1vw';
    spanElementName.style.paddingRight = '1vw';
    spanElementName.style.backgroundColor = '#1f1f1f';
    spanElementName.style.fontSize = '2.4vw';
    spanElementName.style.lineHeight = '1.92vw';
    spanElementName.style.color = 'rgba(255,255,255,1)';
  });
  
  inputElementName.addEventListener('blur', () => {
    if (inputElementName.value.trim().length === 0) {
      spanElementName.style.top = '12vw';
      spanElementName.style.paddingLeft = '0';
      spanElementName.style.paddingRight = '0';
      spanElementName.style.backgroundColor = '#262626';
      spanElementName.style.fontSize = '4vw';
      spanElementName.style.lineHeight = '1.5';
      spanElementName.style.color = 'rgba(255,255,255,0.3)';
    }
  });
  
  spanElementName.addEventListener('click', () => {
    inputElementName.focus();
  });

  fiAreaBot.addEventListener('focus', () => {
    spanFormBot.style.top = '13vw';
    spanFormBot.style.paddingLeft = '1vw';
    spanFormBot.style.paddingRight = '1vw';
    spanFormBot.style.backgroundColor = '#1f1f1f';
    spanFormBot.style.fontSize = '2.4vw';
    spanFormBot.style.lineHeight = '1.92vw';
    spanFormBot.style.color = 'rgba(255,255,255,1)';
  });
  
  fiAreaBot.addEventListener('blur', () => {
    if (fiAreaBot.value.trim().length === 0) {
      spanFormBot.style.top = '16vw';
      spanFormBot.style.paddingLeft = '0';
      spanFormBot.style.paddingRight = '0';
      spanFormBot.style.backgroundColor = '#262626';
      spanFormBot.style.fontSize = '4vw';
      spanFormBot.style.lineHeight = '1.5';
      spanFormBot.style.color = 'rgba(255,255,255,0.3)';
    }
  });
  
  spanFormBot.addEventListener('click', () => {
    fiAreaBot.focus();
  });

  phone__change.addEventListener('focus', () => {
    span__form__tp.style.top = '-1%';
    span__form__tp.style.paddingLeft = '1vw';
    span__form__tp.style.paddingRight = '1vw';
    span__form__tp.style.backgroundColor = '#1f1f1f';
    span__form__tp.style.fontSize = '2.4vw';
    span__form__tp.style.lineHeight = '1.92vw';
    span__form__tp.style.color = 'rgba(255,255,255,1)';
  });
  
  phone__change.addEventListener('blur', () => {
    if (phone__change.value.trim().length === 0) {
      span__form__tp.style.top = '2.6vw';
      span__form__tp.style.paddingLeft = '0';
      span__form__tp.style.paddingRight = '0';
      span__form__tp.style.backgroundColor = '#262626';
      span__form__tp.style.fontSize = '4vw';
      span__form__tp.style.lineHeight = '1.5';
      span__form__tp.style.color = 'rgba(255,255,255,0.3)';
    }
  });
  
  phone__change.addEventListener('blur', () => {
    handleElementBlur(phone__change);
  })
  
  span__form__tp.addEventListener('click', () => {
    phone__change.focus();
  });

};

// Получаем все элементы с классом "raddiv"
const radDivs = document.querySelectorAll('.raddiv');

// Обходим каждый элемент и добавляем обработчик события при клике
radDivs.forEach(radDiv => {
  radDiv.addEventListener('click', () => {
    radDiv.classList.toggle('radchoosen');

    // Получаем дочерние элементы с классом "chooseot" внутри текущего radDiv
    const chooseotDivs = radDiv.querySelectorAll('.chooseot');

    // Изменяем свойства каждого дочернего элемента chooseotDiv
    chooseotDivs.forEach(chooseotDiv => {
      if (radDiv.classList.contains('radchoosen')) {
        chooseotDiv.style.background = 'linear-gradient(to right, rgba(240, 123, 44, 1), rgba(132, 6, 227, 1))';
        chooseotDiv.style.backgroundClip = 'content-box';
      } else {
        chooseotDiv.style.background = 'transparent';
      }
    });
  });
});

// visible invisible navbar

let lastScrollTop = 0;
const sticka = document.querySelector('.sticka');

function scrollHandler() {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  const vw10 = window.innerHeight * 0.1; // 10vw in pixels

  if (st <= vw10) {
    // При скролле в пределах первых 10vw от верха страницы, элемент всегда виден (opacity 1)
    sticka.style.opacity = '1';
    sticka.style.pointerEvents = 'all';
  } else {
    // При скролле ниже 10vw, применяем стандартное поведение
    if (st > lastScrollTop) {
      // Скрываем элемент при скроллинге вниз
      sticka.style.opacity = '0';
      sticka.style.pointerEvents = 'none';
    } else {
      // Показываем элемент при скроллинге вверх
      sticka.style.opacity = '1';
      sticka.style.pointerEvents = 'all';
    }
  }

  lastScrollTop = st;
}

window.addEventListener('scroll', scrollHandler);

// to up 

const getUpDiv = document.getElementById('get__up__port');

getUpDiv.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// nav mobile version

const openButtonMobile = document.getElementById('menu__mobile');
const mobileMenu = document.querySelector('.mobile__menu');
let isMenuOpen = false;

// Функция для добавления или удаления класса openmenu
function toggleOpenMenuClass() {
  if (isMenuOpen) {
    openButtonMobile.classList.add('openmenu');
    window.removeEventListener('scroll', scrollHandler);
  } else {
    openButtonMobile.classList.remove('openmenu');
    window.addEventListener('scroll', scrollHandler);
  }
}

openButtonMobile.addEventListener('click', () => {
  if (!isMenuOpen) {
    mobileMenu.style.animation = 'menuMobileDown 0.4s forwards';
    mobileMenu.style.position = 'fixed';
    sticka.style.opacity = '1';
    sticka.style.position = 'fixed';
  } else {
    mobileMenu.style.animation = 'menuMobileUp 0.4s forwards';
    sticka.style.opacity = '';
  }

  isMenuOpen = !isMenuOpen;
  toggleOpenMenuClass(); // Вызываем функцию для добавления или удаления класса
});

function scrollToElementAndCloseMenu(elementId) {
  const targetElement = document.getElementById(elementId);
  
  if (isMenuOpen) {
    mobileMenu.style.animation = 'menuMobileUp 0.4s forwards';
    isMenuOpen = false;
    toggleOpenMenuClass(); // Вызываем функцию для добавления или удаления класса
  }
  
  // Прокручиваем до указанного элемента
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('main__home').addEventListener('click', () => {
    window.location.href = '../landing.html#home__page';
  });
  
  document.getElementById('main__props').addEventListener('click', () => {
    window.location.href = '../landing.html#specialty';
  });
  
  document.getElementById('main__adv').addEventListener('click', () => {
    window.location.href = '../landing.html#portfolio__us';
  });
  
  document.getElementById('main__develop').addEventListener('click', () => {
    window.location.href = '../landing.html#faq__qq';
  });
  
  document.getElementById('main__blog').addEventListener('click', () => {
    window.location.href = '../landing.html#blog__us';
  });

document.getElementById('openButtonMobile').addEventListener('click', () => {
  scrollToElementAndCloseMenu('form__user__bot');
});

// const seeAllButton = document.getElementById('see__all');
// const hide__four = document.getElementById('hide__four');
// const defportItems = document.querySelectorAll('.allholder .defport');

// seeAllButton.addEventListener('click', () => {
//   defportItems.forEach((item, index) => {
//     if (index >= 4) {
//       item.style.display = 'flex';
//     }
//   });
//   window.scrollTo(0, 210 * window.innerWidth / 100);

//   seeAllButton.style.opacity = '0';
//   seeAllButton.style.pointerEvents = 'none';

//   hide__four.style.opacity = '1';
//   hide__four.style.pointerEvents = 'all';
//   hide__four.addEventListener('transitionend', () => {
//     seeAllButton.style.pointerEvents = 'none';
//   }, { once: true });
// });

// hide__four.addEventListener('click', () => {
//   defportItems.forEach((item, index) => {
//     if (index >= 4) {
//       item.style.display = 'none';
//     }
//   });
//   window.scrollTo(0, 210 * window.innerWidth / 100);

//   hide__four.style.opacity = '0';
//   hide__four.style.pointerEvents = 'none';
//   hide__four.addEventListener('transitionend', () => {
//     seeAllButton.style.opacity = '1';
//     seeAllButton.style.pointerEvents = 'all';
//   }, { once: true });
// });

// work clickable section

const likes = document.querySelectorAll('.icon__like');

likes.forEach(like => {
  like.addEventListener('click', () => {
    const path = like.querySelector('.forheart');

    if (path.classList.contains('active')) {
      path.classList.remove('active');
      path.classList.add('strokechange');
    } else {
      path.classList.remove('strokechange');
      path.classList.add('active');
    }
  });
});

// check stats

const stats1 = document.getElementById('stats1');
const stats2 = document.getElementById('stats2');
const stats3 = document.getElementById('stats3');
const stat1 = document.getElementById('stat1');
const stat2 = document.getElementById('stat2');
const stat3 = document.getElementById('stat3');
const toClose1 = stat1.querySelector('.toclose');
const toClose2 = stat2.querySelector('.toclose');
const toClose3 = stat3.querySelector('.toclose');
const bgblurstat = document.getElementById('statcheck');

// Добавьте обработчики события клика для каждого элемента stats
stats1.addEventListener('click', () => {
  stat1.style.left = '8.6vw';
  stat1.style.opacity = '1';
  bgblurstat.style.right = '0';
  bgblurstat.style.opacity = '1';
});

stats2.addEventListener('click', () => {
  stat2.style.left = '8.6vw';
  stat2.style.opacity = '1';
  bgblurstat.style.right = '0';
  bgblurstat.style.opacity = '1';
});

stats3.addEventListener('click', () => {
  stat3.style.left = '8.6vw';
  stat3.style.opacity = '1';
  bgblurstat.style.right = '0';
  bgblurstat.style.opacity = '1';
});

toClose1.addEventListener('click', () => {
    stat1.style.opacity = '0';
    bgblurstat.style.opacity = '0';
    setTimeout(function() {
        stat1.style.left = '-100%';
    }, 300);
    setTimeout(function() {
        bgblurstat.style.right = '-100%';
      }, 300);
});

toClose2.addEventListener('click', () => {
    stat2.style.opacity = '0';
    bgblurstat.style.opacity = '0';
    setTimeout(function() {
        stat2.style.left = '-100%';
    }, 300);
    setTimeout(function() {
        bgblurstat.style.right = '-100%';
      }, 300);
});

toClose3.addEventListener('click', () => {
    stat3.style.opacity = '0';
    bgblurstat.style.opacity = '0';
    setTimeout(function() {
        stat3.style.left = '-100%';
    }, 300);
    setTimeout(function() {
        bgblurstat.style.right = '-100%';
      }, 300);
});


  const linktoblog = document.getElementById('blog1');
  
  linktoblog.addEventListener('click', (event) => {
      window.location.href = '../../../../CrownStudio/blog/blogs/blog1.html';
  });


  choose__bot.addEventListener('click', () => {
    behind1.classList.toggle('longchoose');
    if (behind1.classList.contains('longchoose')) {
      opened__ch.style.display = 'none';
      closed__ch.style.display = 'flex';
      choose__bot.style.borderColor = 'rgba(255,255,255,1)';
      phone__change.setAttribute('readonly', 'readonly');
    } else {
      opened__ch.style.display = 'flex';
      closed__ch.style.display = 'none';
      choose__bot.style.borderColor = '';
      phone__change.removeAttribute('readonly');
    }
  });
  
  choose__top.addEventListener('click', () => {
    behind1__top.classList.toggle('longchoose');
    if (behind1__top.classList.contains('longchoose')) {
      opened__ch__top.style.display = 'none';
      closed__ch__top.style.display = 'flex';
      choose__top.style.borderColor = 'rgba(255,255,255,1)';
      phone__change__top.setAttribute('readonly', 'readonly');
    } else {
      opened__ch__top.style.display = 'flex';
      closed__ch__top.style.display = 'none';
      choose__top.style.borderColor = '';
      phone__change__top.removeAttribute('readonly');
    }
  });