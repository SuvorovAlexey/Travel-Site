
let burger = document.querySelector('.header-btn')
let close = document.querySelector('.header-btn--menu')
let menu = document.querySelector('.menu')

let body = document.querySelector('body')

//кнопка бургер-включить меню
burger.addEventListener('click', ()=>{
  menu.classList.toggle('toggle-menu')
  body.style.overflowY = 'hidden' 
})

//кнопка бургер-отключить меню
close.addEventListener('click', ()=>{
  menu.classList.toggle('toggle-menu')
  body.style.overflowY = 'auto' 
})


//кнопка отправки формы
let btnSend = document.querySelector('.btn-send')

let nameInput = document.querySelector('.input-name')
let countryInput = document.querySelector('.input-country')
let chAgree = document.querySelector('.ch-agree')



  //проверка имени
  btnSend.addEventListener('click', (ev)=> {
    ev.preventDefault()

    if (countryInput.value && nameInput.value && chAgree.checked) {
      alert('Благодарим за заявку! Скоро мы с Вами свяжемся!')
    }
    
    if (!nameInput.value) {
      nameInput.style.border = '2px solid #cb0037'
      let wrongTextName = document.querySelector('.wrong-imput--name')
      wrongTextName.style.display = 'block'
    }
    else {
      nameInput.style.border = '1px solid gray'
      let wrongTextName = document.querySelector('.wrong-imput--name')
      wrongTextName.style.display = 'none'
      nameInput.value = ''
    }

  //проверка континента/страны

    if (!countryInput.value) {
      countryInput.style.border = '2px solid #cb0037'
      let wrongTextCountry = document.querySelector('.wrong-imput--country')
      wrongTextCountry.style.display = 'block'
    }
    else {
      countryInput.style.border = '1px solid gray'
      let wrongTextCountry = document.querySelector('.wrong-imput--country')
      wrongTextCountry.style.display = 'none'
      countryInput.value = ''
    }

   //проверка чекбокса
    if (!chAgree.checked) {
      let chAgreeWrong = document.querySelector('.ch-agree--wrong')
      chAgreeWrong.style.color = '#cb0037'
    }
    else {
      let chAgreeWrong = document.querySelector('.ch-agree--wrong')
      chAgreeWrong.style.color = 'black'
    }


    chAgree.checked = false

  })




