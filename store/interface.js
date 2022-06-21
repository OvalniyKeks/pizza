export const state = () => ({
  menuMobile: false,
  modalProductData: null,
  currScroll: 0
})

export const mutations = {
  set_menu_mobile (state, payload) {
    // Сделать меню в Modal
    if (!state.menuMobile) {
      document.body.style.overflow = "hidden"
      document.querySelector('.layout').style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      document.querySelector('.layout').style.overflow = ""
    }

    state.menuMobile = payload ?? !state.menuMobile
  },
  set_modal_product_data (state, payload) {
    state.modalProductData = payload
  },
  set_curr_scroll (state, payload) {
    state.currScroll = payload
  },
}

export const getters = {
}

export const actions = {}
