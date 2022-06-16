export const state = () => ({
  products: []
})

export const mutations = {
  add_cart (state, payload) {
    state.products.push(payload)
  }
}

export const getters = {
  currPrice: (state) => {
    let price = 0
    // Доделать
    for (const product of state.products) {
      price += product.price[0].price
    }
    return price
  }
}

export const actions = {}
