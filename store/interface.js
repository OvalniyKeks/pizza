export const state = () => ({
  currScroll: 0,
  currHeightHeader: 0,
  focusCheckAddress: false
})

export const mutations = {
  set_curr_scroll (state, payload) {
    state.currScroll = payload
  },
  focus_to_check_address (state, payload) {
    state.focusCheckAddress = payload
  },
  set_curr_height_header (state, payload) {
    state.currHeightHeader = payload
  }
}

export const getters = {
}

export const actions = {}
