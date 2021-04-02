import outsideClick from './outsideclick.js'

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)

    // Define touchstart e click como argumentos
    // padrão de events caso o usuário não defina
    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events

    this.activeClass = 'active'
    this.activeDopdownMenu = this.activeDopdownMenu.bind(this)
  }
  
  // Ativa o dropdwnmenu e adiciona
  // a função que observa o clique fora dele
  activeDopdownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => {
      element.classList.remove('active')
    })
  }

  // Adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
      menu.addEventListener(userEvent, this.activeDopdownMenu)
    })
  })
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent()
    }
    return this
  }
};
