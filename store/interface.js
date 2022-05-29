export const state = () => ({
  categories: [
    {
      id: 0,
      label: 'Акции',
      icon: 'sale'
    },
    {
      id: 1,
      label: 'Пицца',
      icon: 'pizza'
    },
    {
      id: 2,
      label: 'Суши',
      icon: 'sushi'
    },
    {
      id: 3,
      label: 'Напитки',
      icon: 'drink'
    },
    {
      id: 4,
      label: 'Закуски',
      icon: 'snacks'
    },
    {
      id: 5,
      label: 'Комбо',
      icon: 'combo'
    },
    {
      id: 6,
      label: 'Десерты',
      icon: 'dessert'
    },
    {
      id: 7,
      label: 'Соусы',
      icon: 'sauce'
    },
  ],
  menuMobile: false
})

export const mutations = {
  set_categories (state, payload) {
    state.categories = payload
  },
  set_menu_mobile (state, payload) {
    if (!state.menuMobile) {
      document.body.style.overflow = "hidden"
      document.querySelector('.layout').style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      document.querySelector('.layout').style.overflow = ""
    }
    
    state.menuMobile = payload ?? !state.menuMobile
  }
}

export const getters = {
}

export const actions = {}
