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

// scroll top

const sctop = document.getElementById('sctop');

sctop.addEventListener('click', () => {
  window.location.href = '#home__page';
});

// redirection to blog

// const openblog = document.getElementById('blog__see');
//
// openblog.addEventListener('click', () => {
//   window.location.href = './blog/blog.html'
// });


// visible invisible navbar
let lastScrollTop = 0;
const sticka = document.querySelector('.sticka');
const homeSection = document.getElementById('home__page');
const specialtySection = document.getElementById('specialty');

function scrollHandler() {
  const st = window.pageYOffset || document.documentElement.scrollTop;

  // Получаем границы секций на странице
  const homeBounds = homeSection.getBoundingClientRect();
  const specialtyBounds = specialtySection.getBoundingClientRect();

  // Проверяем, находится ли пользователь на секции home__page
  const isHomeVisible = homeBounds.top <= 0 && homeBounds.bottom > 0;

  if (st > lastScrollTop && !isHomeVisible) {
    // Скрываем элемент при скроллинге вниз, если пользователь не на секции home__page
    sticka.style.opacity = '0';
    sticka.style.pointerEvents = 'none';
  } else {
    // Показываем элемент при скроллинге вверх или если пользователь на секции home__page
    sticka.style.opacity = '1';
    sticka.style.pointerEvents = 'all';
  }

  lastScrollTop = st;
}

window.addEventListener('scroll', scrollHandler);



// invisible logo

const inpuut = document.getElementById('nanas');
const dibor = document.getElementById('kakasa');
const meine = document.getElementById('pelaha');
const inhold = document.getElementById('kasj');

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

const menu = document.getElementById('menu');
const navmenu = document.getElementById('navmenu');
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

function updateLogoOpacity() {
  const log1 = document.getElementById('log1');
  const log2 = document.getElementById('log2');
  
  if (counter >= 2) {
    log2.style.opacity = '0';
  } else {
    log2.style.opacity = '1';
  }
}

// open language

// Получаем элемент с id "lgcont"
const absasElement = document.getElementById('lgcont');

// Добавляем обработчик события клика на элемент "lgcont"
absasElement.addEventListener('click', function() {
  // Добавляем или удаляем класс "openlg" в зависимости от его наличия
  this.classList.toggle('openlg');
});



// scroll to menu 

const getUpDiv = document.getElementById('get__up');

getUpDiv.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// form menu

const openButton = document.getElementById('openButton');
const bgBlured = document.getElementById('bgBlured');
const formOp = document.getElementById('formOp');
const leaveout = document.getElementById('leaveout');

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

// changebg form


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


// portfolio



// Получаем все элементы с классом "nummm"
const inputs = document.querySelectorAll('.nummm');

// Функция для перехода к следующему инпуту
function goToNextInput(currentInput) {
  const currentIndex = Array.from(inputs).indexOf(currentInput);
  if (currentIndex < inputs.length - 1) {
    const nextInput = inputs[currentIndex + 1];
    nextInput.focus();
  }
}

// Функция для очистки значений всех инпутов
function clearAllInputs() {
  inputs.forEach(input => {
    input.value = '';
  });
}

function borderAllInputs() {
  inputs.forEach(input => {
    input.style.border = '0.15vw solid rgba(255,255,255,0.3)';
  });
}

// Обновить состояние кнопки submit
function updateSubmitButtonAvailability() {
  const submitButton = document.getElementById('getport');
  const allInputsFilled = Array.from(inputs).every(input => input.value !== '');

  if (allInputsFilled) {
    submitButton.classList.remove('offed');
    submitButton.classList.add('allready');
    submitButton.removeAttribute('disabled');
    inputs.forEach(input => {
      input.classList.add('filled');
      input.blur(); // Убираем фокус с инпута
    });
  } else {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('offed');
    submitButton.classList.remove('allready');
    inputs.forEach(input => {
      input.classList.remove('filled');
    });
  }
}

// Обходим каждый элемент и добавляем обработчик события при фокусе на input
inputs.forEach(input => {
  const span = input.nextElementSibling; // Получаем следующий элемент, который является span

  function updateSpanVisibility() {
    if (input.value.length === 0 && input.matches(':focus')) {
      span.style.visibility = 'visible'; // Показываем span, если input пустой и в фокусе
    } else {
      span.style.visibility = 'hidden'; // Скрываем span в остальных случаях
    }
  }

  input.addEventListener('focus', () => {
    updateSpanVisibility();
  });

  input.addEventListener('blur', () => {
    updateSpanVisibility();
  });

  // Обработчик события input для ограничения ввода одной цифры и перехода к следующему инпуту
  input.addEventListener('input', () => {
    if (input.value.length > 1) {
      input.value = input.value.slice(0, 1);
    }
    updateSpanVisibility();
    goToNextInput(input);
    updateSubmitButtonAvailability(); // Обновляем состояние кнопки submit
  });

  // Обработчик события keydown для удаления значений всех инпутов и перехода на первый инпут
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
      clearAllInputs();
      inputs[0].focus(); // Перекидываем фокус на первый инпут
      updateSubmitButtonAvailability(); // Обновляем состояние кнопки submit
    }
  });
});


const form = document.getElementById('port__view');
const failedBlock = document.getElementById('failed');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  inputs.forEach(input => input.blur());

  const hasNumberOne = Array.from(inputs).some(input => input.value.includes('1'));

  // Проверяем ширину экрана устройства
  const screenWidth = window.innerWidth;

  if (hasNumberOne) {
    if (screenWidth <= 428) {
      failedBlock.style.display = 'flex';
      failedBlock.style.animation = 'slideDownPhone 0.5s forwards';

      setTimeout(() => {
        failedBlock.style.animation = 'slideUpPhone 0.5s';
      }, 3000);
    } else {
      failedBlock.style.display = 'flex';
      failedBlock.style.animation = 'slideDown 0.5s forwards';

      setTimeout(() => {
        failedBlock.style.animation = 'slideUp 0.5s';
      }, 3000);
    }
  } else {
    failedBlock.style.display = 'none';
  }

  inputs.forEach(input => {
    if (input.value.includes('1')) {
      input.style.border = '0.25vw solid red';
      if (screenWidth <= 428) {
        input.style.border = '0.6vw solid red';
      }
      setTimeout(() => {
        input.style.border = ''; // Сбрасываем border обратно на исходное значение (может быть другое значение border)
      }, 3000); // Задаем задержку в 3 секунды (3000 миллисекунд)
    }
  });

  clearAllInputs();
  updateSubmitButtonAvailability();
});


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

// Секція "Спектр робіт"

var coveringElements = document.querySelectorAll('[id^="covering"]');
var bgElements = document.querySelectorAll('#fouropt [id^="bg"]');

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

// секція "Компанія"
const optios = document.querySelectorAll('#optio1, #optio2, #optio3, #optio4');

optios.forEach(optio => {
  optio.addEventListener('click', function() {
    if (!optio.classList.contains('isactive')) {
      optios.forEach(otherOptio => {
        otherOptio.classList.remove('isactive');
        otherOptio.classList.add('notactive', 'brdr');
      });

      optio.classList.remove('notactive', 'brdr');
      optio.classList.add('isactive');
    }
  });
});

// форма

const radioOptions = document.querySelectorAll('.radioopt input[type="radio"]');

function changeStyles(radio) {
  const raddiv = radio.closest('.raddiv');
  const raddivs = document.querySelectorAll('.raddiv');

  raddivs.forEach((div) => {
    div.classList.remove('choosen__o');
  });

  raddiv.classList.add('choosen__o');
}

radioOptions.forEach((radio) => {
  radio.addEventListener('change', function() {
    changeStyles(this);
  });
});

// send form

const formPass = document.getElementById('port__view');
const submitButton = document.getElementById('getport');

document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    formPass.submit(); // Отправляем форму
  }
});

// Добавляем обработчик события на кнопку для отправки формы при клике на неё
submitButton.addEventListener('click', () => {
  formPass.submit(); // Отправляем форму
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
  scrollToElementAndCloseMenu('home__page');
});

document.getElementById('main__props').addEventListener('click', () => {
  scrollToElementAndCloseMenu('specialty');
});

document.getElementById('main__adv').addEventListener('click', () => {
  scrollToElementAndCloseMenu('portfolio__us');
});

document.getElementById('main__develop').addEventListener('click', () => {
  scrollToElementAndCloseMenu('faq__qq');
});

document.getElementById('main__blog').addEventListener('click', () => {
  scrollToElementAndCloseMenu('blog__us');
});

document.getElementById('openButtonMobile').addEventListener('click', () => {
  scrollToElementAndCloseMenu('form__user__bot');
});


// span change

// JS код для установки фокуса на элементах и добавления классов при фокусе/разфокусе

//span fastorder

const fname = document.getElementById('fastname');
const fmail = document.getElementById('fastmail');
const fphone = document.getElementById('fastphone');
const fspanname = document.getElementById('fname');
const fspanmail = document.getElementById('fgmail');
const fspanphone = document.getElementById('fphone');

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

fname.addEventListener('focus', () => {
  fspanname.style.top = '1%';
  fspanname.style.paddingLeft = '0.3vw';
  fspanname.style.paddingRight = '0.3vw';
  fspanname.style.backgroundColor = '#1f1f1f';
  fspanname.style.fontSize = '0.8vw';
  fspanname.style.lineHeight = '0.5vw';
  fspanname.style.color = 'rgba(255,255,255,1)';
});

fname.addEventListener('blur', () => {
  if (fname.value.trim().length === 0) {
    fspanname.style.top = '1.1vw';
    fspanname.style.paddingLeft = '0';
    fspanname.style.paddingRight = '0';
    fspanname.style.backgroundColor = '#262626';
    fspanname.style.fontSize = '1.2vw';
    fspanname.style.lineHeight = '1.5';
    fspanname.style.color = 'rgba(255,255,255,0.3)';
  }
});

fname.addEventListener('blur', () => {
  handleElementBlur(fname);
})

fspanname.addEventListener('click', () => {
  fname.focus();
});

fmail.addEventListener('focus', () => {
  fspanmail.style.top = '16%';
  fspanmail.style.paddingLeft = '0.3vw';
  fspanmail.style.paddingRight = '0.3vw';
  fspanmail.style.backgroundColor = '#1f1f1f';
  fspanmail.style.fontSize = '0.8vw';
  fspanmail.style.lineHeight = '0.5vw';
  fspanmail.style.color = 'rgba(255,255,255,1)';
});

fmail.addEventListener('blur', () => {
  if (fmail.value.trim().length === 0) {
    fspanmail.style.top = '4.6vw';
    fspanmail.style.paddingLeft = '0';
    fspanmail.style.paddingRight = '0';
    fspanmail.style.backgroundColor = '#262626';
    fspanmail.style.fontSize = '1.2vw';
    fspanmail.style.lineHeight = '1.5';
    fspanmail.style.color = 'rgba(255,255,255,0.3)';
  }
});

fmail.addEventListener('blur', () => {
  handleElementBlur(fmail);
})

fspanmail.addEventListener('click', () => {
  fmail.focus();
});

fphone.addEventListener('focus', () => {
  fspanphone.style.top = '31%';
  fspanphone.style.paddingLeft = '0.3vw';
  fspanphone.style.paddingRight = '0.3vw';
  fspanphone.style.backgroundColor = '#1f1f1f';
  fspanphone.style.fontSize = '0.8vw';
  fspanphone.style.lineHeight = '0.5vw';
  fspanphone.style.color = 'rgba(255,255,255,1)';
});

fphone.addEventListener('blur', () => {
  if (fphone.value.trim().length === 0) {
    fspanphone.style.top = '8.1vw';
    fspanphone.style.paddingLeft = '0';
    fspanphone.style.paddingRight = '0';
    fspanphone.style.backgroundColor = '#262626';
    fspanphone.style.fontSize = '1.2vw';
    fspanphone.style.lineHeight = '1.5';
    fspanphone.style.color = 'rgba(255,255,255,0.3)';
  }
});

fphone.addEventListener('blur', () => {
  handleElementBlur(fphone);
})

fspanphone.addEventListener('click', () => {
  fphone.focus();
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

  fname.addEventListener('focus', () => {
    fspanname.style.top = '2.4%';
    fspanname.style.paddingLeft = '1vw';
    fspanname.style.paddingRight = '1vw';
    fspanname.style.backgroundColor = '#1f1f1f';
    fspanname.style.fontSize = '2.6vw';
    fspanname.style.lineHeight = '1vw';
    fspanname.style.color = 'rgba(255,255,255,1)';
  });
  
  fname.addEventListener('blur', () => {
    if (fname.value.trim().length === 0) {
      fspanname.style.top = '4.6vw';
      fspanname.style.paddingLeft = '0';
      fspanname.style.paddingRight = '0';
      fspanname.style.backgroundColor = '#262626';
      fspanname.style.fontSize = '4vw';
      fspanname.style.lineHeight = '1.5';
      fspanname.style.color = 'rgba(255,255,255,0.3)';
    }
  });
  
  fname.addEventListener('blur', () => {
    handleElementBlur(fname);
  })
  
  fspanname.addEventListener('click', () => {
    fname.focus();
  });
  
  fmail.addEventListener('focus', () => {
    fspanmail.style.top = '19.4%';
    fspanmail.style.paddingLeft = '1vw';
    fspanmail.style.paddingRight = '1vw';
    fspanmail.style.backgroundColor = '#1f1f1f';
    fspanmail.style.fontSize = '2.6vw';
    fspanmail.style.lineHeight = '1vw';
    fspanmail.style.color = 'rgba(255,255,255,1)';
  });
  
  fmail.addEventListener('blur', () => {
    if (fmail.value.trim().length === 0) {
      fspanmail.style.top = '17.6vw';
      fspanmail.style.paddingLeft = '0';
      fspanmail.style.paddingRight = '0';
      fspanmail.style.backgroundColor = '#262626';
      fspanmail.style.fontSize = '4vw';
      fspanmail.style.lineHeight = '1.5';
      fspanmail.style.color = 'rgba(255,255,255,0.3)';
    }
  });
  
  fmail.addEventListener('blur', () => {
    handleElementBlur(fmail);
  })
  
  fspanmail.addEventListener('click', () => {
    fmail.focus();
  });
  
  fphone.addEventListener('focus', () => {
    fspanphone.style.top = '37%';
    fspanphone.style.paddingLeft = '1vw';
    fspanphone.style.paddingRight = '1vw';
    fspanphone.style.backgroundColor = '#1f1f1f';
    fspanphone.style.fontSize = '2.6vw';
    fspanphone.style.lineHeight = '1vw';
    fspanphone.style.color = 'rgba(255,255,255,1)';
  });
  
  fphone.addEventListener('blur', () => {
    if (fphone.value.trim().length === 0) {
      fspanphone.style.top = '30.6vw';
      fspanphone.style.paddingLeft = '0';
      fspanphone.style.paddingRight = '0';
      fspanphone.style.backgroundColor = '#262626';
      fspanphone.style.fontSize = '4vw';
      fspanphone.style.lineHeight = '1.5';
      fspanphone.style.color = 'rgba(255,255,255,0.3)';
    }
  });
  
  fphone.addEventListener('blur', () => {
    handleElementBlur(fphone);
  })
  
  fspanphone.addEventListener('click', () => {
    fphone.focus();
  });

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

// nav

const navTexts = document.getElementById('navmenu').querySelectorAll('.navtext');

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

// failed acces to portfolio

function failedacces() {
  const customAlert = document.getElementById('customAlert');
  customAlert.style.display = 'block';

  // Скрыть сообщение через 3 секунды (можно настроить время)
  setTimeout(() => {
    customAlert.style.display = 'none';
  }, 3000);
}

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

// анимация для faq


const openUp = document.querySelectorAll('.open__up');
const hideDown = document.querySelectorAll('.hide__down');
const crossLeaves = document.querySelectorAll('.cross__leave');

// Добавляем обработчик событий к каждому элементу с классом .open__up
openUp.forEach((element, index) => {
  element.addEventListener('click', () => {
    // Находим ближайший родительский .faq__questions элемент
    const faqQuest = element.closest('.faq__questions');

    // Изменяем высоту элемента .faq__questions на 385px
    faqQuest.style.height = '90vw';

    // Скрываем текущий .open__up элемент и показываем соответствующий .hide__down элемент
    element.style.display = 'none';
    hideDown[index].style.display = 'flex';

    // Показываем cross__leave при нажатии на .open__up
    crossLeaves[index].style.display = 'flex';
  });
});

// Добавляем обработчик событий к каждому элементу с классом .hide__down
hideDown.forEach((element, index) => {
  element.addEventListener('click', () => {
    // Находим ближайший родительский .faq__questions элемент
    const faqQuest = element.closest('.faq__questions');

    // Изменяем высоту элемента .faq__questions на 119px
    faqQuest.style.height = '28vw';

    // Скрываем текущий .hide__down элемент и показываем соответствующий .open__up элемент
    element.style.display = 'none';
    const openUpElement = openUp[index];
    openUpElement.style.display = 'block';

    // Проверяем, есть ли у соответствующего элемента .open__up класс .quest__active
    const questItems = faqQuest.querySelectorAll('.quest__qq');
    if (!openUpElement.classList.contains('quest__active')) {
      // Если у него нет класса .quest__active, то удаляем класс .cross__leave__act
      const crossLeave = crossLeaves[index];
      crossLeave.classList.remove('cross__leave__act');
    }
  });
});

const questionBlocks = document.querySelectorAll('.questions__all');

questionBlocks.forEach((block, index) => {
  const questItems = block.querySelectorAll('.quest__qq');
  const crossLeave = document.getElementById(`cross__leave${index + 1}`);
  
  questItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      item.classList.toggle('quest__active');
      item.classList.toggle('ifoffed');

      // Очищаем все классы у всех элементов внутри текущего блока
      questItems.forEach(element => {
        element.classList.remove('up__slide__one');
        element.classList.remove('up__slide__two');
        element.classList.remove('choos__elem__three');
        element.classList.remove('choos__elem__sec');
        element.classList.remove('up__slide__three');
        element.classList.remove('choos__elem__four');
        element.classList.remove('down__slide__one');
        element.classList.remove('down__slide__two');
        element.classList.remove('down__slide__three');
      });

      // Добавляем классы только активированным элементам внутри текущего блока
      if (i === 0 && item.classList.contains('quest__active')) {
        questItems[1].classList.add('down__slide__three');
        questItems[2].classList.add('down__slide__three');
        questItems[3].classList.add('down__slide__three');
      }
      if (i === 1 && item.classList.contains('quest__active')) {
        questItems[1].classList.add('choos__elem__sec');
        questItems[0].classList.add('up__slide__three');
        questItems[2].classList.add('down__slide__three');
        questItems[3].classList.add('down__slide__three');
      }
      if (i === 2 && item.classList.contains('quest__active')) {
        questItems[0].classList.add('up__slide__three');
        questItems[1].classList.add('up__slide__three');
        questItems[2].classList.add('choos__elem__three');
        questItems[3].classList.add('down__slide__three');
      }
      if (i === 3 && item.classList.contains('quest__active')) {
        questItems[0].classList.add('up__slide__three');
        questItems[1].classList.add('up__slide__three');
        questItems[2].classList.add('up__slide__three');
        questItems[3].classList.add('choos__elem__four');
      }

      // Добавляем класс .cross__leave__act к crossLeave при нажатии на любой из блоков .quest__qq
      if (item.classList.contains('quest__active')) {
        crossLeave.classList.add('cross__leave__act');
      } else {
        crossLeave.classList.remove('cross__leave__act');
      }
    });
  });

  crossLeave.addEventListener('click', () => {
    // Очищаем все классы у всех элементов внутри текущего блока при нажатии на соответствующий cross__leave
    questItems.forEach(element => {
      element.classList.remove('up__slide__one');
      element.classList.remove('up__slide__two');
      element.classList.remove('choos__elem__three');
      element.classList.remove('choos__elem__sec');
      element.classList.remove('up__slide__three');
      element.classList.remove('choos__elem__four');
      element.classList.remove('quest__active');
      element.classList.remove('down__slide__one');
      element.classList.remove('down__slide__two');
      element.classList.remove('down__slide__three');
      element.classList.add('ifoffed');
    });

    // Удаляем класс .cross__leave__act у crossLeave при нажатии на него
    crossLeave.classList.remove('cross__leave__act');
  });
});

const linkport = document.getElementById('to__port');

linkport.addEventListener('click', () =>{
  window.location.href = './portfolio/portfolio.html'
});

// coockie section

const allow = document.getElementById('allowcoockie');
const decline = document.getElementById('declinecoockie');
const closeco = document.getElementById('closecoockie');
const coockie = document.getElementById('coockie');
const bgBlur = document.getElementById('bluraction');

if (screenMob < 429) {
  bgBlur.style.display = 'flex';
  bgBlur.style.right = '0';
  bgBlur.style.opacity = '1';
}

allow.addEventListener('click', () => {
  bgBlur.style.opacity = '0';
  setTimeout(() => {
    bgBlur.style.right = '-100%';
  }, 300);
  coockie.style.animation = 'popDown 0.6s forwards';
});

decline.addEventListener('click', () => {
  bgBlur.style.opacity = '0';
  setTimeout(() => {
    bgBlur.style.right = '-100%';
  }, 300);
  coockie.style.animation = 'popDown 0.6s forwards';
});

closeco.addEventListener('click', () => {
  bgBlur.style.opacity = '0';
  setTimeout(() => {
    bgBlur.style.right = '-100%';
  }, 300);
  coockie.style.animation = 'popDown 0.6s forwards';
});

const fastorder = document.getElementById('fastorder__me');
const divorder = document.getElementById('orderfast');
const ordernow = document.getElementById('request__fast');
const closeorder = document.getElementById('closefast');
const formorder = document.getElementById('formorder');
const fastordertop = document.getElementById('fastordertop');
const fastorder__onlypc = document.getElementById('fastorder__onlypc');
const fastorder__onlymobile = document.getElementById('fastorder__onlymobile');

if (screenMob > 428) {
  fastorder__onlypc.addEventListener('click', () => {
    bgBlur.style.right = '0';
    bgBlur.style.opacity = '1';
    divorder.style.left = '38%';
  });

  fastordertop.addEventListener('click', () => {
    bgBlur.style.right = '0';
    bgBlur.style.opacity = '1';
    divorder.style.left = '38%';
  });

  fastorder.addEventListener('click', () => {
    bgBlur.style.right = '0';
    bgBlur.style.opacity = '1';
    divorder.style.left = '38%';
  });
  
  ordernow.addEventListener('click', () => {
    bgBlur.style.opacity = '0';
  setTimeout(() => {
    bgBlur.style.right = '-100%';
  }, 300);
    divorder.style.left = '-100%';
  });
  
  closeorder.addEventListener('click', () => {
    bgBlur.style.opacity = '0';
  setTimeout(() => {
    bgBlur.style.right = '-100%';
  }, 300);
    divorder.style.left = '-100%';
  });
} else {
  fastorder__onlymobile.addEventListener('click', () => {
    bgBlur.style.right = '0';
    bgBlur.style.opacity = '1';
    divorder.style.left = '5vw';
  });

  fastordertop.addEventListener('click', () => {
    bgBlur.style.right = '0';
    bgBlur.style.opacity = '1';
    divorder.style.left = '5vw';
  });

  fastorder.addEventListener('click', () => {
    bgBlur.style.right = '0';
    bgBlur.style.opacity = '1';
    divorder.style.left = '5vw';
  });
  
  ordernow.addEventListener('click', () => {
    bgBlur.style.opacity = '0';
  setTimeout(() => {
    bgBlur.style.right = '-100%';
  }, 300);
    divorder.style.left = '-100%';
  });
  
  closeorder.addEventListener('click', () => {
    bgBlur.style.opacity = '0';
  setTimeout(() => {
    bgBlur.style.right = '-100%';
  }, 300);
    divorder.style.left = '-100%';
  });
}

// get coockie
const send__form = document.getElementById('send__form');

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  const cookieValue = encodeURIComponent(value) + (days == null ? "" : "; expires=" + expires.toUTCString());
  document.cookie = name + "=" + cookieValue + "; path=/";
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const userId = encodeURIComponent(navigator.userAgent);

const previousAllowCookiesValue = getCookie(`allowCookies_${userId}`);
if (previousAllowCookiesValue === 'true') {
  coockie.style.display = 'none';
  bgBlur.style.display = 'none';
} else {
  ordernow.addEventListener('click', (event) => {
    event.preventDefault();
    if (coockie.style.animation = '0.6s ease 0s 1 normal forwards running popDown') {
      coockie.style.animation = 'popUp 0.6s forwards';
    }
  });

  formOp.addEventListener('submit', (event) => {
    event.preventDefault();
    hideForm();
    if (coockie.style.animation = '0.6s ease 0s 1 normal forwards running popDown') {
      coockie.style.animation = 'popUp 0.6s forwards';
    }
  });

  form__user__bot.addEventListener('submit', (event) => {
    event.preventDefault();
    if (coockie.style.animation = '0.6s ease 0s 1 normal forwards running popDown') {
      coockie.style.animation = 'popUp 0.6s forwards';
    }
  });
}

allow.addEventListener('click', () => {
  setCookie(`allowCookies_${userId}`, true, 365);
  console.log('Cookies allowed');
});

decline.addEventListener('click', () => {
  setCookie(`allowCookies_${userId}`, false, 365);
  console.log('Cookies declined');
});

//forms contact 

//bot form
const choose__bot = document.getElementById('choose__bot');
const behind1 = document.getElementById('behind1');
const opened__ch = document.getElementById('opened__ch');
const closed__ch = document.getElementById('closed__ch');

//topform
const choose__top = document.getElementById('choose__top');
const opened__ch__top = document.getElementById('opened__ch__top');
const closed__ch__top = document.getElementById('closed__ch__top');
const behind1__top = document.getElementById('behind1__top');


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
