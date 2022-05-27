export const state = () => ({
  products: [],
  currPrice: 0
})

export const mutations = {
  add_cart (state, payload) {
    state.products.push(payload)
  }
}

export const getters = {
}

export const actions = {}
