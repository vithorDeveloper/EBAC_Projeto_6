document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll("[data-tab-button]")
  const items  = document.querySelectorAll("[data-faq-question]")
  const hero = document.querySelector(".hero")

  const alturaHero = hero.clientHeight

  window.addEventListener("scroll", function() {
    const alturaAtual = window.scrollY

    if(alturaAtual < alturaHero) {
      ocultarElementos()
    }
    else(
      exibeElementos()
    )
  })

  for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(botao){
      const abaAlvo = botao.target.dataset.tabButton
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
      escondeTodasAbas()
      aba.classList.add("shows__list--is-active")
      removeBotaoAtivo()
      botao.target.classList.add("shows__tabs__button--is-active")
    })
  }

  for(let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", abrirFecharPerguntas)
  }

})

function ocultarElementos () {
  const header = document.querySelector("header")
  header.classList.add("header--is-hidden")
}

function exibeElementos () {
  const header = document.querySelector("header")
  header.classList.remove("header--is-hidden")
}

function abrirFecharPerguntas(elemento) {
  elementoPai = elemento.target.parentNode
  elementoPai.classList.toggle("faq__questions__item--is-open")
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]")

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active")
  }
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]")

  for(let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active")
  }
}