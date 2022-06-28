export const state = () => ({
  categories: [
    {
      id: 0,
      label: 'Акции',
      icon: 'sale',
      products: []
    },
    {
      id: 1,
      label: 'Пицца',
      icon: 'pizza',
      products: []
    },
    {
      id: 2,
      label: 'Суши',
      icon: 'sushi',
      products: []
    },
    {
      id: 3,
      label: 'Напитки',
      icon: 'drink',
      products: []
    },
    {
      id: 4,
      label: 'Закуски',
      icon: 'snacks',
      products: []
    },
    {
      id: 5,
      label: 'Комбо',
      icon: 'combo',
      products: []
    },
    {
      id: 6,
      label: 'Десерты',
      icon: 'dessert',
      products: []
    },
    {
      id: 7,
      label: 'Соусы',
      icon: 'sauce',
      products: []
    },
  ],
})

export const mutations = {
  set_categories (state, payload) {
    state.categories = payload
  },
  set_products (state, payload) {
    state.categories.map(cat => {
      let product = JSON.parse(JSON.stringify(payload)) //Убрать
      product.cat_id = cat.id //Убрать
      cat.products.push(product) // Заменить на payload
      return cat
    })
  },
  set_product_change_key (state, payload) {
    console.log(payload)
    const category = state.categories.find(cat => cat.id === payload.cat_id)
    const product = category.products.find(item => item.id === payload.id)
    product[payload.key] = payload.value
  }
}

export const getters = {
}

export const actions = {}
