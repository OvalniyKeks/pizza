export const state = () => ({
  categories: [
    {
      label: 'Акции',
      icon: 'sale'
    },
    {
      label: 'Пицца',
      icon: 'pizza'
    },
    {
      label: 'Суши',
      icon: 'sushi'
    },
    {
      label: 'Напитки',
      icon: 'drink'
    },
    {
      label: 'Закуски',
      icon: 'snacks'
    },
    {
      label: 'Комбо',
      icon: 'combo'
    },
    {
      label: 'Десерты',
      icon: 'dessert'
    },
    {
      label: 'Соусы',
      icon: 'sauce'
    },
  ]
})

export const mutations = {
  set_categories (state, payload) {
    state.categories = payload
  }
}

export const getters = {
}

export const actions = {}
