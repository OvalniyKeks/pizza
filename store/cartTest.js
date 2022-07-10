export const state = () => ({
  products: []
})

export const mutations = {
  add_cart (state, payload) {
    state.products.push(payload)
  },
  change_product (state, payload) {
    const idx = state.products.indexOf(state.products.find(item => item.id === payload.id))
    state.products.splice(idx, 1, payload)
  },
  change_quantity_product (state, payload) {
    const product = state.products.find(item => item.id === payload.id)
    const idx = state.products.indexOf(product)
    product.quantity = payload.quantity
    state.products.splice(idx, 1, product)
  },
  remove_product (state, payload) {
    const idx = state.products.indexOf(state.products.find(item => item.id === payload.id))
    state.products.splice(idx, 1)
  }
}

export const getters = {
  currPrice: (state) => {
    let price = 0
    for (const product of state.products) {
      price += product.selectPrice.price * product.quantity
    }
    return price
  }
}

export const actions = {}
