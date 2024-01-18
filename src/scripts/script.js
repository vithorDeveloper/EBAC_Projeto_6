document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll("[data-tab-button]")
  const items  = document.querySelectorAll("[data-faq-question]")

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