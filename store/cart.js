export const state = () => ({
  carts: []
})

export const mutations = {
  add_product_to_cart (state, product) {
    const idx = state.carts.findIndex(cart => cart.id === product.id)
    if (idx !== -1) {
      state.carts[idx].quantity++
    } else {
      state.carts.push({ ...product, quantity: 1 })
    }
  },
  remove_product (state, product) {
    const idx = state.carts.findIndex(cart => cart.id === product.id)
    if (idx !== -1) {
      const item = state.carts[idx]
      if (item.quantity == 1) {
        state.carts.splice(idx, 1)
      } else {
        state.carts[idx].quantity--
      }
    }
  },
  update_product (state, product) {
    const idx = state.carts.findIndex(cart => cart.id === product.id)
    if (idx !== -1) {
      state.carts.splice(idx, 1, JSON.parse(JSON.stringify(product)))
    }
  }
}

export const getters = {
  currPrice: (state) => {
    let price = 0
    for (const product of state.carts) {
      let priceModificators = 0
      product.modificators.forEach(modificator => {
        if (!modificator.disable) {
          priceModificators += modificator.price
        }
      });
      price += product.selectSize.price * product.quantity + priceModificators
    }
    return price
  }
}

export const actions = {
  addToCart ({ commit }, product) {
    commit('add_product_to_cart', product)
  },
  removeFromCart ({ commit }, product) {
    commit('remove_product', product)
  }
}
