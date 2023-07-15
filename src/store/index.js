import { createStore } from "vuex";

export default createStore({
  state: {
    uploadWebtoonList : null
  },
  getters: {
    getUploadWebtoonList(state) {
      return state.uploadWebtoonList
    }
  },
  mutations: {
    setUploadWebtoonList(state, value) {
      state.uploadWebtoonList = value
    }
  },
  actions: {},
  modules: {},
});
