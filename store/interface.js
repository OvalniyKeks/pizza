export const state = () => ({
  menuMobile: false
})

export const mutations = {
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
