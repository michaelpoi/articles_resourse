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

// window.addEventListener('scroll', scrollHandler);

// document.getElementById('main__home').addEventListener('click', () => {
//     document.location.href = '../../landing.html#home__page';
//   });
  
//   document.getElementById('main__props').addEventListener('click', () => {
//     scrollToElementAndCloseMenu('specialty');
//   });
  
//   document.getElementById('main__adv').addEventListener('click', () => {
//     scrollToElementAndCloseMenu('portfolio__us');
//   });
  
//   document.getElementById('main__develop').addEventListener('click', () => {
//     scrollToElementAndCloseMenu('faq__qq');
//   });
  
//   document.getElementById('main__blog').addEventListener('click', () => {
//     scrollToElementAndCloseMenu('blog__us');
//   });
  
//   document.getElementById('openButtonMobile').addEventListener('click', () => {
//     scrollToElementAndCloseMenu('form__user__bot');
//   });


// to up 

// const getUpDiv = document.getElementById('get__up__port');

// getUpDiv.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// direct port

// const number1 = document.getElementById('num1');

// number1.addEventListener('click', () => {
//     window.location.href = './allportfolio/port__1.html';
// });

const play = document.getElementById('play');
const site = document.getElementById('overview');

play.addEventListener('click', () => {
    site.style.display = 'flex';
    site.style.opacity = '1';
    play.style.display = 'none';
    site.style.pointerEvents = 'all';
});


const ipadResBlock = document.getElementById('ipad__res');
const phoneResBlock = document.getElementById('phone__res');
const pcResBlock = document.getElementById('pc__res');
const overviewIframe = document.getElementById('overview');
const sitecont = document.getElementById('sitecont');

if (screenMob > 429) {
  pcResBlock.addEventListener('click', () => {
    sitecont.style.width = '100%';
    handleResBlockClick(pcResBlock);
  });

  ipadResBlock.addEventListener('click', () => {
    sitecont.style.width = '820px';
    sitecont.style.zoom = '1';
    handleResBlockClick(ipadResBlock);
  });

  phoneResBlock.addEventListener('click', () => {
    sitecont.style.width = '400px';
    sitecont.style.zoom = '1';
    handleResBlockClick(phoneResBlock);
  });
} else {
  pcResBlock.addEventListener('click', () => {
    overviewIframe.style.width = '1920px';
    overviewIframe.style.zoom = '2';
    overviewIframe.style.scale = '0.64';
    overviewIframe.style.height = '164%';
    handleResBlockClick(pcResBlock);
  });

  ipadResBlock.addEventListener('click', () => {
    overviewIframe.style.width = '820px';
    overviewIframe.style.zoom = '2.8';
    overviewIframe.style.scale = '0.5';
    overviewIframe.style.height = '210%';
    handleResBlockClick(ipadResBlock);
  });

  phoneResBlock.addEventListener('click', () => {
    overviewIframe.style.width = '420px';
    overviewIframe.style.zoom = '1';
    overviewIframe.style.scale = '1';
    overviewIframe.style.height = '100%';
    handleResBlockClick(phoneResBlock);
  });
}

// Общий обработчик события для изменения фонового цвета элементов
function handleResBlockClick(element) {
  const blocks = [ipadResBlock, phoneResBlock, pcResBlock];

  blocks.forEach(block => {
    if (block === element) {
      block.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    } else {
      block.style.backgroundColor = 'rgba(38, 38, 38, 0.6)';
    }
  });
}


// const ipadResBlock = document.getElementById('ipad__res');
// const phoneResBlock = document.getElementById('phone__res');
// const pcResBlock = document.getElementById('pc__res');
// const overviewIframe = document.getElementById('overview');
// const sitecont = document.getElementById('sitecont');


// if (screenMob > 429) {
//   // Обработчик события при нажатии на блок "phone__res"
// pcResBlock.addEventListener('click', () => {
//   sitecont.style.width = '100%';
// });

// // Обработчик события при нажатии на блок "ipad__res"
// ipadResBlock.addEventListener('click', () => {
//   sitecont.style.width = '820px';
//   sitecont.style.zoom = '1';
// });

// // Обработчик события при нажатии на блок "phone__res"
// phoneResBlock.addEventListener('click', () => {
//   sitecont.style.width = '400px';
//   sitecont.style.zoom = '1';
// });
// } else {
//   pcResBlock.addEventListener('click', () => {
//     overviewIframe.style.width = '1920px';
//     overviewIframe.style.zoom = '2';
//     overviewIframe.style.scale = '0.64';
//     overviewIframe.style.height = '164%';
//   });
//   ipadResBlock.addEventListener('click', () => {
//     overviewIframe.style.width = '820px';
//     overviewIframe.style.zoom = '2.8';
//     overviewIframe.style.scale = '0.5';
//     overviewIframe.style.height = '210%';
//   });
//   phoneResBlock.addEventListener('click', () => {
//     overviewIframe.style.width = '420px';
//     overviewIframe.style.zoom = '1';
//     overviewIframe.style.scale = '1';
//     overviewIframe.style.height = '100%';
//   });
// }

// Проверяем, что iframe успешно загружен
overviewIframe.addEventListener('load', () => {
  // Получаем доступ к содержимому iframe через его contentWindow
  const iframeDocument = overviewIframe.contentDocument || overviewIframe.contentWindow.document;

  // Modify the styles of the iframe's body or any other element inside the iframe
  if (iframeDocument.body) {
    iframeDocument.body.style.overflowY = 'scroll';

    const style = iframeDocument.createElement('style');
    style.innerHTML = 'body::-webkit-scrollbar { display: none; }';
    iframeDocument.head.appendChild(style);
  }
});

// nav mobile version

const openButtonMobile = document.getElementById('menu__mobile__port');
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
  window.location.href = '../../landing.html#home__page';
});

document.getElementById('main__props').addEventListener('click', () => {
  window.location.href = '../../landing.html#specialty';
});

document.getElementById('main__adv').addEventListener('click', () => {
  window.location.href = '../../landing.html#portfolio__us';
});

document.getElementById('main__develop').addEventListener('click', () => {
  window.location.href = '../../landing.html#faq__qq';
});

document.getElementById('main__blog').addEventListener('click', () => {
  window.location.href = '../../landing.html#blog__us';
});

document.getElementById('openButtonMobile__port').addEventListener('click', () => {
  scrollToElementAndCloseMenu('form__user__bot');
});


const showhide = document.getElementById('showhide');
const closesvg = document.getElementById('closeres');
const showsvg = document.getElementById('linklink');
const resthing = document.getElementById('changeres');

let isOpen = false;

showhide.addEventListener('click', () => {
  if (!isOpen) {
    showsvg.style.display = 'none';
    closesvg.style.display = 'flex';
    resthing.style.animation = 'resopen 0.6s forwards';
  } else {
    showsvg.style.display = 'flex';
    closesvg.style.display = 'none';
    resthing.style.animation = 'reshide 0.6s forwards';
  }

  isOpen = !isOpen;
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